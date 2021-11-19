<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";
import SectionSearch from "./components/SectionSearch.vue";
import SectionRecent from "./components/SectionRecent.vue";

export default defineComponent({
	name: "App",
	components: { Nav, SectionSearch, SectionRecent },
});
</script>

<template>
	<Nav class="z-50" />
	<SectionSearch class="z-10" />
	<SectionRecent class="z-40 transform -translate-y-8" />
</template>

<style></style>
