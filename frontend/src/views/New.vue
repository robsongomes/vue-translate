<template>
    <div>
        <h1>New Word</h1>
        <word-form @createOrUpdate="save" :word="word" />
    </div>
</template>

<script>
import WordForm from '@/components/WordForm'
import { api } from '@/helpers'

export default {
    components: {
        'word-form': WordForm
    },
    data() {
        return {
            word: {}
        }
    },
    methods: {
        async save(word) {
            const res = await api.createWord(word)
            this.$router.push(`/words/${res._id}`)
        }
    }
}
</script>

<style>

</style>
