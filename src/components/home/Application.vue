<template>
    <div>
        <div class="panel-group" >
            <div class="panel panel-default panel-filter">
                <div class="alert alert-primary" role="alert">
                    <h3 class="alert-heading title">Application</h3>
                </div>
            </div>
        </div>
        <div class="panel-colapse">
            <div class="panel-body">
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-12 app-description">
                            <h5> {{ application.id }} - {{ application.name }} </h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <table class="table">
                                <thead class="alert alert-secondary">
                                    <tr>
                                        <th scoped="col">ID</th>
                                        <th scoped="col">Keyword</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="keyword in keywords">
                                        <td>{{ keyword.id }}</td>
                                        <td>{{ keyword.description }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

  .table {
    margin-top: 15px;
  }

  .table th, .table td {
    padding: 7px; 
  }


  .title {
    text-align: center;
  }

</style>