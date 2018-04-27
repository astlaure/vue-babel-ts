<template>
  <h1>{{ toto }}</h1>
</template>

<script lang="ts">

interface DataProp {
    toto: string;
}

export default {
    name: 'App',
    data(): DataProp {
        return {
            toto: 'hello world'
        }
    }
}
</script>

<style>

</style>
