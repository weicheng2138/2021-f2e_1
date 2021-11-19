<script setup lang="ts">
import { reactive, ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const dropdown = reactive({
	selectedItem: "",
	opened: false,
	cities: [
		"不限區域",
		"臺北市",
		"新北市",
		"桃園市",
		"臺中市",
		"臺南市",
		"高雄市",
		"新竹縣",
		"苗栗縣",
		"彰化縣",
		"南投縣",
		"雲林縣",
		"嘉義縣",
		"基隆市",
		"新竹市",
		"嘉義市",
		"屏東縣",
		"宜蘭縣",
		"花蓮縣",
		"臺東縣",
		"澎湖縣",
		"金門縣",
		"連江縣",
	],
});

const target = ref(null);
onClickOutside(target, () => (dropdown.opened = false));

const setDropdownSelected = (city: string) => {
	dropdown.selectedItem = city;
	dropdown.opened = false;
};
</script>

<template>
	<div class="transition duration-500 ease-in-out">
		<!-- This example requires Tailwind CSS v2.0+ -->
		<button
			type="button"
			class="
				inline-flex
				justify-between
				items-center
				px-5
				rounded-md
				w-full
				h-14
				border border-gray-300
				shadow-sm
				bg-white
				text-base
				font-medium
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
			"
			id="menu-button"
			aria-expanded="true"
			aria-haspopup="true"
			@click="dropdown.opened = !dropdown.opened"
		>
			{{ dropdown.selectedItem ? dropdown.selectedItem : "不限區域" }}
			<!-- Heroicon name: solid/chevron-down -->
			<svg
				class="
					-mr-1
					ml-2
					h-5
					w-5
					transform
					transition
					duration-1000
					ease-out
				"
				:class="{ 'rotate-180': dropdown.opened }"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>

		<div
			v-if="dropdown.opened"
			ref="target"
			class="
				mt-2
				p-2
				rounded-md
				shadow-lg
				bg-white
				ring-1 ring-black ring-opacity-5
				divide-y divide-gray-100
				focus:outline-none
				flex flex-col
				overflow-auto
				h-72
				ssm:h-auto ssm:flex-row ssm:flex-wrap ssm:justify-center
				md:overflow-hidden md:absolute md:w-96
			"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<button
				v-for="city in dropdown.cities"
				@click="setDropdownSelected(city)"
				class="
					ssm:px-2 ssm:m-1 ssm:border
					py-1
					rounded-md
					text-primary
					hover:bg-primary hover:text-white
				"
			>
				{{ city }}
			</button>
		</div>
	</div>
</template>
