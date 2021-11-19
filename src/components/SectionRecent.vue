<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
	<div
		class="
			bg-gray-200
			flex flex-col
			mx-8
			p-5
			md:right-0 md:left-0 md:mx-auto
			rounded-2xl
			md:max-w-2xl
		"
	>
		<h1 class="my-8">近期活動</h1>

		<div
			class="
				flex flex-col
				gap-2
				bg-gray-300
				rounded-lg
				bg-demo-recent
				h-60
				px-7
				pt-16
				text-white
			"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
					clip-rule="evenodd"
				/>
			</svg>
			<h2>哈巴狗與睡美人岩的美麗海灣</h2>
			<div class="flex gap-72">
				<p class="p1">全天候開放</p>
				<button
					class="
						border border-white
						bg-white
						text-white
						bg-opacity-20
						rounded-lg
						p-2
						hover:bg-opacity-50
						hidden
						md:inline-block
					"
				>
					活動詳情
				</button>
			</div>
		</div>
	</div>
</template>
