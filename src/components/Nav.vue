<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Nav",
	components: {},
});
</script>

<template>
	<div class="flex justify-center">
		<div
			class="
				flex
				w-full
				items-center
				justify-between
				h-24
				px-3
				md:px-6
				xl:max-w-4xl
			"
		>
			<div class="flex items-center">
				<img
					src="../assets/svgs/taiwan-logo.svg"
					alt="taiwan-logo"
					class="mr-2"
				/>
				<h1 class="text-lg font-normal">Taiwan Travel</h1>
			</div>
			<button
				class="
					w-11
					h-11
					bg-primary
					rounded-lg
					flex
					justify-center
					items-center
				"
			>
				<img
					src="../assets/svgs/like-unchecked.svg"
					alt="like-unchecked"
				/>
			</button>
		</div>
	</div>
</template>

<style></style>
