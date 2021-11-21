<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
</script>

<template>
    <div
        class="bg-gray-200 flex flex-col mx-8 p-5 rounded-2xl lg:right-0 lg:left-0 lg:mx-auto lg:max-w-4xl"
    >
        <h1 class="my-8">近期活動</h1>

        <div
            class="flex flex-col gap-2 bg-gray-300 rounded-lg bg-demo-recent bg-cover h-60 px-7 pt-16 text-white"
        >
            <div class="flex">
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
                <p class="ml-2">臺東縣</p>
            </div>

            <h2>哈巴狗與睡美人岩的美麗海灣</h2>
            <div class="flex gap-72">
                <p class="p1">全天候開放</p>
                <button
                    class="border border-white bg-white text-white bg-opacity-20 rounded-lg p-2 hover:bg-opacity-50 hidden md:inline-block"
                >活動詳情</button>
            </div>
        </div>

        <div class="flex flex-col items-center">
            <div class="h-80 lg:h-auto">
                <div class="hidden mt-6 lg:flex lg:flex-wrap lg:justify-center lg:gap-4">
                    <Card :title="'天涯海角'" :position="'台北市'" />
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
            <button
                class="border border-gray-500 bg-white text-gray-500 bg-opacity-20 rounded-lg p-2 hover:bg-opacity-50 flex lg:mt-4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                <span>更多景點</span>
            </button>
        </div>
    </div>
</template>
