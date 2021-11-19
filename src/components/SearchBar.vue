<script setup lang="ts">
import DropDownList from "./DropDownList.vue";
import { ref } from "vue";

const searching = ref(false);

const search = () => {
	searching.value = true;
	setTimeout(() => {
		searching.value = false;
	}, 2000);
};
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
			class="z-50 w-full rounded-lg h-14 mb-3 md:mb-0 md:mr-3 md:w-80"
		/>
		<input
			class="
				z-10
				w-full
				rounded-lg
				text-gray-400
				hover:bg-gray-100
				focus:outline-none
				focus:ring-2
				focus:ring-offset-2
				focus:ring-offset-gray-100
				focus:ring-indigo-500
				transition
				duration-500
				ease-in-out
				h-14
				pl-5
				mb-3
				md:mb-0 md:mr-3
			"
			type="text"
			placeholder="搜尋景點 例如：日月潭..."
		/>
		<button
			class="
				z-10
				bg-primary
				w-full
				flex
				justify-center
				items-center
				text-white
				hover:opacity-70
				focus:outline-none
				focus:ring-2
				focus:ring-offset-2
				focus:ring-offset-gray-100
				focus:ring-indigo-500
				transition
				duration-500
				ease-in-out
				rounded-lg
				h-14
				md:w-48
			"
			@click="search()"
		>
			<svg
				v-if="!searching"
				class="fill-current text-gray-50 stroke-current stroke-1"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.6801 14.929C17.8906 13.2772 18.4328 11.2292 18.1982 9.19486C17.9636 7.16048 16.9694 5.2897 15.4147 3.9568C13.86 2.6239 11.8593 1.92718 9.81297 2.00603C7.76662 2.08488 5.8255 2.93348 4.37795 4.38206C2.93041 5.83065 2.08319 7.77238 2.00581 9.81878C1.92842 11.8652 2.62657 13.8654 3.96058 15.4191C5.2946 16.9729 7.16609 17.9657 9.20064 18.1988C11.2352 18.432 13.2828 17.8884 14.9337 16.6767H14.9325C14.97 16.7267 15.01 16.7742 15.055 16.8205L19.868 21.6335C20.1024 21.868 20.4204 21.9999 20.752 22C21.0836 22.0001 21.4017 21.8685 21.6363 21.6341C21.8709 21.3997 22.0027 21.0817 22.0028 20.7501C22.0029 20.4184 21.8713 20.1004 21.6369 19.8658L16.8239 15.0528C16.7792 15.0075 16.7312 14.9657 16.6801 14.9278V14.929ZM17.0027 10.1235C17.0027 11.0265 16.8248 11.9205 16.4793 12.7547C16.1338 13.5889 15.6273 14.3469 14.9888 14.9854C14.3504 15.6239 13.5924 16.1303 12.7582 16.4759C11.924 16.8214 11.0299 16.9992 10.127 16.9992C9.22403 16.9992 8.32994 16.8214 7.49574 16.4759C6.66154 16.1303 5.90357 15.6239 5.2651 14.9854C4.62663 14.3469 4.12017 13.5889 3.77463 12.7547C3.4291 11.9205 3.25125 11.0265 3.25125 10.1235C3.25125 8.29997 3.97566 6.55111 5.2651 5.26166C6.55455 3.97222 8.30341 3.24781 10.127 3.24781C11.9505 3.24781 13.6994 3.97222 14.9888 5.26166C16.2783 6.55111 17.0027 8.29997 17.0027 10.1235Z"
				/>
			</svg>
			<svg
				v-if="searching"
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 animate-spin"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
				/>
			</svg>
		</button>
	</div>
</template>
