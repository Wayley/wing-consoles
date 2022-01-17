<template>
  <div id="app">
    <img alt="Vue logo" :src="verification" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
const API_PATH = process.env.VUE_APP_CONSOLE_SERVICE_PATH;

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      verification: `${API_PATH}/verification`,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
