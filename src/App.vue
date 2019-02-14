<template>
  <div id="app">
    <nav id="menu">
      <ul>
        <li>
          <router-link :to="'/'"> Home </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

  import {routes} from './routes';

  export default {
    name: 'app',

    data() {
      return {
        routes: routes
      }
    }

  }

</script>

<style scoped>
  nav ul {
    padding:0px;
    margin:0px;
    background-color:#EDEDED;
    list-style:none;
  }

  nav ul li { 
    padding: 2px 10px;
    display: inline-block;

    /* visual do link */
    background-color:#EDEDED;
    color: #333;
    text-decoration: none;
    border-bottom:3px solid #EDEDED;
  }
</style>
