<template>
    <div class="flex flex-row justify-center items-center">
        <NotificationIcon class="mr-2"/>
        <div class="rounded-full w-avatar h-avatar overflow-hidden mr-2">
            <img class="w-full h-full" src="@/assets/images/avatar.jpg"/>
        </div>
        <div class="flex flex-row items-center">
            <span>Admin</span>
            <DownIcon class="w-menu-icon h-menu-icon fill-dark"/>
        </div>

    </div>
</template>
<script setup lang="ts">
import NotificationIcon from '@/assets/images/notification.svg?component'
import DownIcon from '@/assets/images/down.svg?component'
</script>