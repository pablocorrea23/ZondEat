<!-- este seria el incio de products: /products -->


<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
 
    definePageMeta({
        layout: 'products'
    })

    //fech the products
    const {data: products } =await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Otro titulo',
        meta: [
        { name: 'description', content: 'Nuxt 3' }
      ]
    })
</script>

<style scoped>

</style>