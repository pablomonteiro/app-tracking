<template>
  <div id="home">
    <div class="panel-group" >
        <div class="panel panel-default panel-filter">
            <div class="alert alert-primary" role="alert">
            <h3 class="alert-heading title">App Traking</h3>
            </div>
            <div class="panel-colapse">
                <div class="panel-body">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-md-1">
                                <label>Keyword</label>
                            </div>
                            <div class="col-md-9">
                                <input type="search" id="keyword_id" @input="keyword_search = $event.target.value" placeholder="Digit a keyword to search" />
                            </div>
                            <div class="col-md-2">
                                <button-custom @buttonClickAction="searchProductsByKeyword()" buttonTitle="Search"/>
                            </div>
                        </div>
                        <input v-show="false" type="search" id="keyword_id" @input="keyword_search = $event.target.value; testInput()" placeholder="Teste" />
                        <div class="row">
                            <div class="col-12">
                                <table class="table">
                                    <thead class="alert alert-secondary">
                                    <tr>
                                        <th scoped="col">ID</th>
                                        <th scoped="col">Application</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="product in products">
                                        <td><router-link :to="'/application/'+product._id"> {{ product._id }} </router-link></td>
                                        <td><router-link :to="'/application/'+product._id"> {{ product.name }} </router-link></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script scoped>

  import Button from '../shared/Button.vue';

  let _SERVER = 'http://localhost:3000';

  export default {
    components: {
      'button-custom': Button
    },
    
    data() {
      return {
        products: [],
        keyword_search: ''
      }
    },

    methods: {
      searchProductsByKeyword() {
        if(this.keyword_search) {
          this.findByKeyword();
        } else {
          this.findAll();
        }
        
      },

      findByKeyword() {
          var url = _SERVER + '/application/v1/findByKeyword/' + this.keyword_search;
          this.$http.get(url)
            .then(response => response.json())
            .then(products => this.products = products,
                  error  => console.log(error));
      },

      findAll() {
          var url = _SERVER + '/application/v1/all';
          this.$http.get(url)
            .then(response => response.json())
            .then(products => this.products = products,
                  error  => console.log(error));
      },

      testInput() {
        this.searchProductsByKeyword();
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

  input {
    width: 100%;
  }

  .label {
    text-align: bold;
  }

  .title {
    text-align: center;
  }

</style>
