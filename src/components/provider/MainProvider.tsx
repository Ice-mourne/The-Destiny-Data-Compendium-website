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
      <div>
         <h1>Loading...</h1>
         <h3>Adblock can cause problems if its not loaded in 10-15s turn off adblock</h3>
      </div>
   )

   return (
      <ProviderContext.Provider value={providerData}>
         <SetProviderContext.Provider value={setProviderData}>{children}</SetProviderContext.Provider>
      </ProviderContext.Provider>
   )
}