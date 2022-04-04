import { B_Manifest, B_ManifestInfo } from '@interfaces/manifest/bungieManifest'
import { getSettings, updateSettings } from '@tools/localStorage'

import indexStorage from '@tools/indexedDB'

export async function getManifest(): Promise<B_Manifest> {
   async function getVersionLocation() {
      const resp = await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/')
      const data = (await resp.json()) as B_ManifestInfo
      const version = data.Response.version
      const locations = data.Response.jsonWorldComponentContentPaths.en
      return { version, location: locations }
   }

   async function getBungieManifest(location: { [key: string]: string }): Promise<B_Manifest> {
      const locationList = [
         'DestinyBreakerTypeDefinition',
         'DestinyCollectibleDefinition',
         'DestinyDamageTypeDefinition',
         'DestinyInventoryBucketDefinition',
         'DestinyInventoryItemDefinition',
         'DestinyMaterialRequirementSetDefinition',
         'DestinyObjectiveDefinition',
         'DestinyPlugSetDefinition',
         'DestinyPowerCapDefinition',
         'DestinySocketCategoryDefinition',
         'DestinySocketTypeDefinition',
         'DestinyStatDefinition',
         'DestinyStatGroupDefinition',
      ]
      return locationList.reduce(async (acc, item) => {
         const data = await acc
         const resp = await fetch(`https://www.bungie.net${location[item]}`)
         const json = await resp.json()
         return { ...data, [item]: json }
      }, Promise.resolve({} as B_Manifest))
   }

   // compare saved manifest version with current version
   // if they are different get new manifest
   const { version, location } = await getVersionLocation()
   // check if DB has manifest
   const key = await indexStorage('bungieManifest', 'check')
   if (version != getSettings().manifestVersion || !key) {
      const bungieManifest = await getBungieManifest(location)

      indexStorage('bungieManifest', 'put', bungieManifest)
      updateSettings('manifestVersion', version)

      console.log(bungieManifest)

      console.log(`🍕 Manifest updated 🍕`)
      return bungieManifest
   }

   // if version is same get old manifest and return
   const manifest = (await indexStorage('bungieManifest', 'get')) as B_Manifest
   console.log(`🍕 Manifest loaded 🍕`)

   return manifest
}