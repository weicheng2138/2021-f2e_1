<script setup lang="ts">
import DropDownList from "./DropDownList.vue";
</script>
<template>
	<div
		class="
			flex flex-col
			justify-center
			items-center
			p-2
			w-full
			mx-12
			bg-gray-300
			rounded-lg
			md:flex-row md:max-w-2xl
		"
	>
		<DropDownList
			class="w-full rounded-lg h-14 mb-3 md:mb-0 md:mr-3 md:w-80"
		/>
		<input
			class="w-full rounded-lg h-14 pl-5 mb-3 md:mb-0 md:mr-3"
			type="text"
			placeholder="搜尋景點 例如：日月潭..."
		/>
		<button class="bg-primary w-full text-white rounded-lg h-14 md:w-48">
			搜尋*
		</button>
	</div>
</template>
