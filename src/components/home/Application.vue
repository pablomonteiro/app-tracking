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
                            <h5> {{ application.name }} </h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-10">
                            <input type="input" id="keyword_add_input" :value="keyword_add" @input="keyword_add = $event.target.value" placeholder="Digit a keyword to add" />
                        </div>
                        <div class="col-2">
                            <button-custom buttonClass="btn_add" buttonTitle="Add Keyword" @buttonClickAction="addKeyword()"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <table class="table">
                                <thead class="alert alert-secondary">
                                    <tr>
                                        <th scoped="col">Keyword</th>
                                        <th scoped="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="keyword in application.keywords">
                                        <td>{{ keyword }}</td>
                                        <td>
                                            <div align="right">
                                                <button-custom buttonClass="btn_remove" buttonTitle="Remove" @buttonClickAction="removeKeyword(keyword)"/>
                                            </div>
                                        </td>
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

    import Button from '../shared/Button.vue';

    let _SERVER = 'http://localhost:3000';

    export default {

        components: {
          'button-custom': Button
        },

        created() {
            var url = _SERVER + '/application/v1/findApplicationById/'+ this.$route.params.id;
            this.$http.get(url)
                .then(response => response.json())
                .then(application => {console.log(application);this.application = application})
        },

        methods: {
            removeKeyword(keyword) {

                var url = _SERVER + "/application/v1/removeKeyword/" + this.application._id + "/" + keyword.toUpperCase() ;
                this.$http.put(url)
                    .then(response => response.json())
                    .then(application => this.application = application);
            },

            addKeyword() {
                var url = _SERVER + "/application/v1/addKeyword/" + this.application._id + "/" + this.keyword_add.toUpperCase();
                this.$http.put(url)
                    .then(response => response.json())
                    .then(application => {
                        this.application = application;
                        this.keyword_add = '';
                    });
            }
        },

        data() {
            return {
                'application': '',
                'keyword_add': ''
            }
        }
    }
</script>

<style scoped>

  .table {
    margin-top: 15px;
  }

  .table th, .table td {
    padding: 7px; 
  }

  .title {
    text-align: center;
  }

  #keyword_add_input {
      width: 100%
  }

</style>