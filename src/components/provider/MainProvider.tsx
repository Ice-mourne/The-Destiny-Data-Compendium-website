import React, { useEffect, useState } from "react"

import { Provider } from "@interfaces/provider/provider"
import { getDescriptions } from "@ts/fetchData/getDescriptions"
import { getManifest } from "@ts/fetchData/getManifest"

export const ProviderContext = React.createContext({} as Provider)
export const SetProviderContext = React.createContext({} as React.Dispatch<React.SetStateAction<Provider>>)

export function DataProvider({ children }: { children: JSX.Element }) {
   const [providerData, setProviderData] = useState({} as Provider)

   // get manifest
   useEffect(() => {
      getManifest().then((manifest) => {
         setProviderData((data) => ({
            ...data,
            manifest
         }))
      })

      getDescriptions().then((descriptions) => {
         setProviderData((data) => ({
            ...data,
            descriptions
         }))
      })
   }, [])

   if (!providerData.manifest || !providerData.descriptions) return (
      <div>Loading...</div>
   )

   return (
      <ProviderContext.Provider value={providerData}>
         <SetProviderContext.Provider value={setProviderData}>{children}</SetProviderContext.Provider>
      </ProviderContext.Provider>
   )
}