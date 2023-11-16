<template>
    <div class="flex flex-row w-screen h-screen">
        <Sidebar/>
        <div class="flex flex-col flex-auto">
            <Header />
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from '../base/Header.vue'
import Sidebar from '../base/Sidebar.vue'
</script>

