<template>
    <button type="button" :style="cssWidth" :class="buttonClass" @click="buttonClick()"> {{ buttonTitle }} </button>
</template>

<script>

    export default {
        props: ['buttonTitle', 'buttonClass', 'buttonWidth'],
        methods : {
            buttonClick() {
                this.$emit('buttonClickAction');
            }
        },

        data() {
            return {
                "cssWidth": "width: " + this.buttonWidth
            }
        }
    }

</script>

<style scoped>
    .btn_search {
        width: this.buttonWidth;
    }

    .btn_remove {
        width: this.buttonWidth;
        background: red;
        color: white;
    }

    .btn_add {
        width: this.buttonWidth;
        background: green;
        color: white;
    }

    .btn_confirm {
        width: this.buttonWidth;
        background: #007bff;
        color: white;
    }

</style>