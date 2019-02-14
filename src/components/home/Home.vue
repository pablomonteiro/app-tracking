<template>
  <div id="home">
    <label> Keyword </label>
    <input type="search" id="keyword_id" @input="keyword_search = $event.target.value" placeholder="Digit a keyword to search" />
    <button-custom @buttonClickAction="searchProductsByKeyword()" buttonTitle="Search"/>
    <input v-show="false" type="search" id="keyword_id" @input="keyword_search = $event.target.value; testInput()" placeholder="Teste" />
   
    <table>
      
      <tr>
        <th>Applications</th>
      </tr>
      <tr v-for="product in products">
        <td><router-link :to="'/application/'+product.id"> {{ product.name }} </router-link></td>
      </tr>

    </table>
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
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

</style>
