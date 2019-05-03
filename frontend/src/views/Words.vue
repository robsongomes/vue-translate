<template>
    <div>
        <table>
            <thead>                
                <th>
                    <td>English</td>
                </th>
                <th>
                    <td>German</td>
                </th>
                <th>
                    <td colspan="2">Actions</td>
                </th>
            </thead>
            <tbody>
                <tr :key="word._id" v-for="word in words">
                    <td>{{ word.english }}</td>
                    <td>{{ word.german }}</td>
                    <td>
                        <router-link :to="{name: 'show', params: {id: word._id}}">Show</router-link>
                    </td>
                    <td @click.prevent="remove(word._id)">
                        <a :href="`/words/${word._id}`">Destroy</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { api } from '@/helpers'
export default {
    data() {
        return {
            words: []
        }
    },

    methods: {
        async remove(id) {
            await api.deleteWord(id)            
        }
    },

    async mounted() {
        this.words = await api.getWords()
    }
}
</script>

<style>

</style>

