import { useContext, useEffect, useState } from 'react'

import { ItemContainer } from './ItemContainer'
import { ProviderContext } from '@components/provider/MainProvider'
import styles from '@styles/exoticArmor/MainExoticArmorPage.module.scss'

export function MainExoticArmorPage() {
   const context = useContext(ProviderContext)
   const [filteredData, setFilteredData] = useState([])

   const itemData = Object.entries(context.descriptions || {}).reduce((acc, [key, perkData]) => {
      if (perkData.type != 'armorExotic') return acc
      const classTypeId = context.manifest.DestinyInventoryItemDefinition[perkData.itemId || 0]?.classType

      const classNames: { [key: string]: string } = {
         0: 'titan',
         2: 'warlock',
         1: 'hunter'
      }

      acc.push({
         className: classNames[classTypeId],
         perk: {
            name: perkData.name,
            img: context.manifest.DestinyInventoryItemDefinition[perkData.id].displayProperties.icon
         },
         item: {
            name: perkData.itemName,
            img: context.manifest.DestinyInventoryItemDefinition[perkData.itemId || 0]?.displayProperties.icon
         },
         description: perkData.description
      })

      return acc
   }, [] as any)

   const sortedItemData = itemData.sort((a: any, b: any) => a.perk.name.localeCompare(b.perk.name))

   useEffect(() => {
      setFilteredData(sortedItemData)
   }, [0])

   const searchFilter = (e: any) => {
      const search = e.target.value.toLowerCase()
      const filteredData = sortedItemData.filter((item: any) => item.perk.name.toLowerCase().includes(search))
      setFilteredData(filteredData)
   }

   return (
      <>
         <input onChange={searchFilter}></input>
         <div className={styles.container}>
            {filteredData.map((itemData: any, index: number) => (
               <ItemContainer itemData={itemData} index={index} />
            ))}
         </div>
      </>
   )
}
