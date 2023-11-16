<template>
  <div class="w-sidebar flex flex-col">
    <div class="logo bg-primary">
      <img class="w-full" src="@/assets/images/logo.png" alt="" />
    </div>
    <nav class="p-2 flex flex-col w-sidebar shadow-md flex-auto">
      <Menu @click="router.push({ path: 'user' })" :data="{ id: 1, name: 'Quản Lý Tài Khoản' }" />
      <Menu :data="{ id: 2, name: 'Quản lý biểu mẫu' }" />
      <Menu :data="{ id: 2, name: 'Quản lý thông tin' }" />
      <ul>
        <li v-for="ward in wards" :key="ward.id">
          <Menu :data="ward" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { IMenu } from '@/types'
import router from '@/router'
import Menu from '../Menu.vue'

const wards: IMenu[] = [
  { id: 1, name: 'Xã Trà Bùi' },
  { id: 2, name: 'Xã Trà Đốc' }
]
</script>

<style lang="scss" scoped>
.logo {
  padding: 40px;
  height: 160px;
}
</style>
