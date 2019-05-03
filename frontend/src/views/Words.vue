<template>
    <div>
        <table class="ui celled compact table">
            <thead>
                <tr>
                    <th>English</th>
                    <th>German</th>
                    <th colspan="3">Actions</th>                
                </tr>                
            </thead>
            <tbody>
                <tr :key="word._id" v-for="word in words">
                    <td>{{ word.english }}</td>
                    <td>{{ word.german }}</td>
                    <td width="75" class="center aligned">
                        <router-link :to="{name: 'show', params: {id: word._id}}">
                            <i class="eye icon"></i>
                        </router-link>
                    </td>
                    <td width="75" class="center aligned">
                        <router-link :to="{name: 'edit', params: {id: word._id}}">
                            <i class="pencil alternate icon"></i>
                        </router-link>
                    </td>
                    <td width="75" class="center aligned" @click.prevent="remove(word._id)">
                        <a :href="`/words/${word._id}`">
                            <i class="trash alternate icon"></i>
                        </a>
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

