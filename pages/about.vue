<template>
    <div>
        <p>Ceci est la page A propos</p>
    </div>
    <div>{{ data }}</div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/TND')
</script>

<style scoped>

</style>