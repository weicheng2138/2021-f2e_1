<script setup lang="ts">
import { ref, defineProps } from "vue";

const props = defineProps<{
	title: string;
	imgUrl?: number;
	position: string;
}>();
</script>

<template>
	<h3>
		{{ props.title }}
	</h3>
	<h4>
		{{ props.position }}
	</h4>
</template>
