import { ItemContainer } from './ItemContainer'
import { ProviderContext } from '@components/provider/MainProvider'
import styles from '@styles/exoticArmor/MainExoticArmorPage.module.scss'
import { useContext } from 'react'

export function MainExoticArmorPage() {
   const context = useContext(ProviderContext)

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

   return (
      <div className={styles.container}>
         {itemData.map((itemData: any, index: number) => (
            <ItemContainer itemData={itemData} />
         ))}
      </div>
   )
}
