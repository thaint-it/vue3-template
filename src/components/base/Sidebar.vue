<template>
  <div class="w-sidebar flex flex-col">
    <div class="logo bg-primary">
      <img class="w-full" src="@/assets/images/logo.png" alt="" />
    </div>
    <nav class="p-2 flex flex-col w-sidebar shadow-md flex-auto">
      <Menu @click="router.push({ name: 'user' })" :data="{ id: 1, name: 'Quản Lý Tài Khoản' }" />
      <Menu @click="router.push({ name: 'form' })" :data="{ id: 2, name: 'Quản lý biểu mẫu' }" />
      <Menu @click="router.push({ name: 'home' })" :data="{ id: 2, name: 'Quản lý thông tin' }" />
      <ul>
        <li v-for="ward in menuItems" :key="ward.id">
          <Menu :data="ward" @click="router.push({ name: 'info', params: { id: ward.id } })" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { IMenu } from '@/types'
import router from '@/router'
import Menu from '../Menu.vue'
import { getWards } from '@/api/system'
import { ref } from 'vue'

// get list ward
const menuItems: IMenu = ref([])
const fetchMenuItem = async () => {
  const data = await getWards()
  menuItems.value = data as IMenu[]
}
fetchMenuItem()
</script>

<style lang="scss" scoped>
.logo {
  padding: 40px;
  height: 160px;
}
</style>
