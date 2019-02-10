<template>
    <button type="button" @click="buttonClick()"> {{ buttonTitle }} </button>
</template>

<script>

    export default {
        props: ['buttonTitle'],
        methods: {
            buttonClick() {
                this.$emit('buttonClickAction');
            }
        }
    }

</script>

<style>

</style>