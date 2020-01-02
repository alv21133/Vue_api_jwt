<template>
  <div class="home">
    <atas logo="GoodJob" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Footer class="bawah"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
import atas from "@/components/atas.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Footer,
    atas
  }   
}; 
</script>   