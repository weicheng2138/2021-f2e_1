<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Nav",
	components: {},
	data() {
		return { liked: true };
	},
	methods: {
		onlike() {
			this.liked = !this.liked;
		},
	},
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
			<a href="/" class="flex items-center">
				<img
					src="../assets/svgs/taiwan-logo.svg"
					alt="taiwan-logo"
					class="mr-2"
				/>
				<h1 class="text-lg font-normal">Taiwan Travel</h1>
			</a>
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
				@click="onlike()"
			>
				<svg
					v-if="liked"
					class="fill-current text-gray-50 stroke-current stroke-0"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z"
					/>
				</svg>
				<svg
					v-if="!liked"
					class="fill-current text-gray-50 stroke-current stroke-0"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<style></style>
