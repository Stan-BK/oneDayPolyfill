<script setup lang="ts">
import { RouterLink, RouterView, routerKey } from "vue-router";
import { routes } from './router/index'
</script>

<template>
  <div class="wrap">
    <nav>
      <ul class="router">
        <li v-for="route of routes.filter(item => item.name != 'home')">
          <a :href="route.path">{{ route.name }}</a>
        </li>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
body, ul, li {
  margin: 0;
  padding: 0;
  color: rgb(225, 225, 225)
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
* {
  box-sizing: border-box;
}
ul {
  list-style: none;
}
li {
  margin: 10px auto;
}
a {
  text-decoration: none;
  color: rgb(225, 225, 225);
  transition: all .4s;
}
a:hover {
  color: rgb(160, 160, 160);
}
nav, main {
  width: 100%;
  height: 100%;
}
.wrap {
  height: 100vh;
  background-color: rgb(25, 25, 25);
}
nav {
  float: left;
  width: 20%;
}
.router {
  float: left;
  padding: 30px;
  width: 100%;
  height: 100%;
  border-right: 1px solid rgb(48, 48, 48);
}
main {
  width: 80%;
  height: 100%;
  margin-left: 20%;
}
</style>
