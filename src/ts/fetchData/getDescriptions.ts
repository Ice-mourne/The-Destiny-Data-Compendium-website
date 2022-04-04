export async function getDescriptions() {
   const data = await fetch('https://raw.githubusercontent.com/Clovis-Breh/clarity-database/main/descriptions.json')
   return await data.json()
}