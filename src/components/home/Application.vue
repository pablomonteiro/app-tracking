<template>
    <div>
        <h2>Cadastro</h2>
        <b>ID:</b> {{ application.id }} <b>Name:</b> {{ application.name }}
        <table>
            <tr>
                <th>Keywords</th>
            </tr>
            <tr v-for="keyword in keywords">
                <td>{{ keyword.id }}</td>
                <td>{{ keyword.description }}</td>
            </tr>
        </table>
    </div>
</template>

<script>

    let _SERVER = 'http://localhost:3000';

    export default {

        created() {
            var urlApplication = _SERVER + '/getApplicationData/'+ this.$route.params.id;
            this.$http.get(urlApplication)
                .then(response => response.json())
                .then(application => this.application = application);

            var urlKeywordsByApplication = _SERVER + '/getKeywordsByApplication/'+ this.$route.params.id;
            this.$http.get(urlKeywordsByApplication)
                .then(response => response.json())
                .then(keywords => this.keywords = keywords)
        },

        data() {
            return {
                'application': '',
                'keywords':[]
            }
        }
    }
</script>

<style>

</style>