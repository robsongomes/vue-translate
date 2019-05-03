<template>
    <div>
        <h1>English: {{word.english}}</h1>
        <h1>German: {{word.german}}</h1>
        <router-link :to="{name: 'edit', params: {id: word._id}}">Edit Word</router-link>
    </div>
</template>

<script>
import { api } from '@/helpers'
export default {
    props: ['id'],
    data() {
        return {
            word: {}
        }
    },    
    async mounted() {
        this.word = await api.getWord(this.id)
    }
}
</script>

<style>

</style>
