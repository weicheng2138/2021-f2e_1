<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    title: string;
    imgUrl?: number;
    position: string;
}>();

const liked = ref(false);
const onLike = () => {
    liked.value = !liked.value;
}
</script>

<template>
    <div
        class="flex flex-col w-40 h-56 p-2 bg-white rounded-2xl bg-demo-recent bg-coverHalfHeight bg-no-repeat lg:w-48"
    >
        <div class="flex justify-end h-32">
            <button
                class="w-11 h-11 bg-primary rounded-lg flex justify-center items-center"
                @click="onLike()"
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
        <h6 class="mb-2">{{ props.title }}</h6>
        <div class="flex gap-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                />
            </svg>
            <p class="p2">{{ props.position }}</p>
        </div>
    </div>
</template>
v