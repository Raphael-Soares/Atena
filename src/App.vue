<template class="bg-[#fffff]">
    <Navbar class="drop-shadow shadow-md"/>
    <About  />
    <Deposition/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import About from "./components/About.vue";
import Deposition from "./components/Deposition.vue";
export default {
    components: {Navbar, About,Deposition},
};
</script>

<style>

body{
    height: 200vh;
}</style>
