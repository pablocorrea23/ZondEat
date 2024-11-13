
export default defineEventHandler(async (event) => {
    // Llamada a la API
    const data = await $fetch('https://rickandmortyapi.com/api/character');

    
    
    // Devuelve los datos al cliente
    return data
  })
  