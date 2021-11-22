<script setup lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Nav.vue";
import SectionSearch from "./components/SectionSearch.vue";
import SectionRecent from "./components/SectionRecent.vue";
import Card from "./components/Card.vue";
</script>

<template>
	<Nav class="z-50" />
	<SectionSearch class="z-10" />
	<SectionRecent class="z-40 transform -translate-y-8" />
	<div
		class="
			absolute
			w-screen
			h-60
			overflow-x-scroll
			pl-14
			transform
			-translate-y-96
			lg:hidden
		"
	>
		<div class="absolute flex gap-6">
			<Card :title="'天涯海角'" :position="'新北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
			<Card :title="'天涯海角'" :position="'台北市'" />
		</div>
	</div>
</template>

<style></style>
