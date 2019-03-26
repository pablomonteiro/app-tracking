<template>
    <button type="button" :class="buttonClass" @click="buttonClick()"> {{ buttonTitle }} </button>
</template>

<script>

    export default {
        props: ['buttonTitle', 'buttonClass'],
        methods : {
            buttonClick() {
                this.$emit('buttonClickAction');
            }
        }
    }

</script>

<style scoped>
    .btn_search {
        width: 100%;
    }

    .btn_remove {
        width: 100px;
        background: red;
        color: white;
    }

    .btn_add {
        width: 100%;
        background: green;
        color: white;
    }

</style>