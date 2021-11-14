<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";
import SectionSearch from "./components/SectionSearch.vue";

export default defineComponent({
    name: "App",
    components: { Nav, SectionSearch },
});
</script>

<template>
    <Nav />
    <SectionSearch />
</template>

<style>
</style>
