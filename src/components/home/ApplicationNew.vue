<template>
    <div>
        <b-alert variant="success" fade dismissible v-model="showAlertMsgSuccess">
            {{ msgSuccess }}
        </b-alert>
        <b-alert variant="danger" fade dismissible v-model="showAlertMsgError">
            {{ msgError }}
        </b-alert>
        
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
                        <div class="col-12">
                            <input type="input" id="application_name" :value="application_name" @input="application_name = $event.target.value.toUpperCase()" placeholder="Application Name" />
                        </div>
                    </div>
                    <br />
                    <hr class="style13">
                    <div class="row">
                        <div class="col-10">
                            <input type="input" id="keyword_add_input" :value="keyword_add" @input="keyword_add = $event.target.value.toUpperCase()" placeholder="Digit a keyword to add" />
                        </div>
                        <div class="col-2">
                            <button-custom buttonWidth="100%" buttonClass="btn_add" buttonTitle="Add Keyword" @buttonClickAction="addKeyword()"/>
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
                                    <tr v-for="keyword in keywords">
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
                <div id="footer" class="alert alert-primary" role="alert">
                    <div class="col-3" style="float:right">
                        <router-link :to="'/'"> Cancel </router-link>
                        <button-custom buttonWidth="150px" buttonClass="btn_confirm" buttonTitle="Save" @buttonClickAction="save()"/>
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

        data() {
            return {
                "showAlertMsgSuccess": false,
                "showAlertMsgError": false,
                "msgSuccess": '',
                "msgError": '',
                'application_name': '',
                'keywords': [],
                'keyword_add': ''
            }
        },

        methods: {
            removeKeyword(keyword) {
                var indexToRemove;
                this.keywords.forEach(function(value, index) {
                    if(value == keyword) {
                        indexToRemove = index;
                        return;
                    }
                });
                this.keywords.splice(indexToRemove, 1); 
            },

            addKeyword() {
                this.keywords.push(this.keyword_add);
                this.keyword_add = '';
            },

            save() {
                var url = _SERVER + '/application/v1/newApplication';
                this.$http.post(url, {
                    "name": this.application_name,
                    "keywords": this.keywords
                })
                .then(response => {
                    this.showSuccessMsg("Application added with success!!!");
                    // function() {
                    //     console.log('eee');
                    //     this.$router.push('/');
                    // })
                })
                .catch((e) => {
                    this.showErrorMsg(e.statusText);
                });
            },

            showSuccessMsg(msgSuccess) {
                this.msgError = '';
                this.showAlertMsgError = false;

                this.showAlertMsgSuccess = true;
                this.msgSuccess = msgSuccess;
            },

            showErrorMsg(msgError) {
                this.msgError = msgError;
                this.showAlertMsgError = true;

                this.showAlertMsgSuccess = false;
                this.msgSuccess = '';
            }
        },

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

  #application_name {
      width: 100%
  }

  hr.style13 {
	height: 10px;
	border: 0;
	box-shadow: 0 10px 10px -10px #8c8b8b inset;
  }

  #footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: grey
  }

</style>
