<template>
    <div>
        <h1>Edit Word</h1>
        <word-form @createOrUpdate="save" :word="word" />
    </div>
</template>

<script>
import WordForm from '@/components/WordForm'
import { api } from '@/helpers'

export default {
    props: ['id'],
    components: {
        'word-form': WordForm
    },
    data() {
        return {
            word: {}
        }
    },

    async mounted() {
        this.word = await api.getWord(this.id)
    },

    methods: {
        async save(word) {
            const res = await api.updateWord(word)
            this.$router.push(`/words/${res._id}`)
        }
    }
}
</script>

<style>

</style>
