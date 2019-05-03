<template>
    <div>
        <form action="#" @submit.prevent="submit">
            <div>
                <label for="english">English</label>
                <input type="text" id="english" v-model="word.english">
            </div>
            <div>
                <label for="german">German</label>
                <input type="text" id="german" v-model="word.german">
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        word: {
            type: Object,
            required: false
        }
    },
    methods: {
        submit() {
            this.$emit('createOrUpdate', this.word)
        }
    }
}
</script>

<style>

</style>
