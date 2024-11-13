<!-- este seria: /about -->

<template>
    <div>
      <h2>About</h2>
  
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere adipisci ipsam doloribus quas odit
          dicta repellendus nulla suscipit aliquam dignissimos quae exercitationem eius sint ipsa, consequuntur fugit,
          beatae aperiam!</p>
  
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores facere deleniti expedita necessitatibus
          quibusdam, fugit maxime aut nulla enim error sequi? Officia eveniet voluptas quas et eius provident odit.
      </p>
  
      <!-- Mostrar solo las imágenes de los personajes -->
      <div>
        <div v-if="data" class="grid grid-cols-4 gap-5">
          <div v-for="character in data.results" :key="character.id">
            <img :src="character.image" :alt="character.name" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useFetch } from 'nuxt/app'
  
  const { data } = await useFetch('/api/ninja')
  </script>
  
  <style scoped>
    h2 {
      margin-bottom: 20px;
      font-size: 36px;
    }
  
    p {
      margin: 20px 0;
    }
  
    img {
      width: 150px;
      height: auto;
      margin-bottom: 20px;
    }
  </style>
  