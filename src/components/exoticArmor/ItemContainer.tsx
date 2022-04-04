import { Description } from '@components/descriptions/Descriptions'
import styles from '@styles/exoticArmor/MainExoticArmorPage.module.scss'

export function ItemContainer({ itemData, index }: any) {
   return (
      <div className={`${styles.itemContainer} ${styles[itemData.className]}`} key={index}>
         <div className={styles.nameImg}>
            <div>{itemData.perk.name}</div>
            <img src={`https://www.bungie.net${itemData.perk.img}`} loading="lazy"></img>
            <div>{itemData.item.name}</div>
         </div>
         <div className={styles.itemImg}>
            <img src={`https://www.bungie.net${itemData.item.img}`} loading="lazy"></img>
         </div>

         <div className={styles.description}>
            <Description description={itemData.description} />
         </div>
      </div>
   )
}
