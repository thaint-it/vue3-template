<template>
  <div class="flex flex-col">
    <img class="block h-cover-image" alt="Bắc trà my" src="@/assets/images/login-bg.jpg" />
   <div class="flex flex-row border-b-8 pt-4 border-primary">
    <div class="flex-auto">
      <ul
        v-if="route.meta?.showNavigationBar"
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li v-for="menu in menuItems" :key="menu.id" role="presentation">
          <button
            class="flex flex-row p-2 rounded-t-md"
            :class="{ 'bg-primary text-white': menu.isActive }"
            data-tabs-target="#profile"
            type="button"
            @click="selectedItem({...menu})"
          >
            <component
              :is="getIcon(menu.icon)"
              class="w-tab-icon h-tab-icon mr-2"
              :class="{
                'fill-icon': !menu.isActive,
                'fill-white': menu.isActive
              }"
            />
            <icon />
            {{ menu.name }}
          </button>
        </li>
      </ul>
    </div>
    <UserInfo class="pr-4"/>
   </div>
  </div>
</template>

<script setup lang="ts">
import type { IMenuItem } from '@/utils/types'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getWard } from '@/api/system'
import HomeIcon from '@/assets/images/home.svg?component'
import SportIcon from '@/assets/images/sport.svg?component'
import FamilyIcon from '@/assets/images/family.svg?component'
import CultureIcon from '@/assets/images/culture.svg?component'
import CommunicationIcon from '@/assets/images/communication.svg?component'
import TourismIcon from '@/assets/images/tourism.svg?component'
import UserInfo from './UserInfo.vue'
import router from '@/router'
const route = useRoute()
const ward = ref()
const wardId = route.params.id
const getWardById = async (id: number) => {
  const data = await getWard(id)
  ward.value = data
}

// get tab icon
const getIcon = (icon: string) => {
  switch (icon) {
    case 'home':
      return HomeIcon
    case 'tourism':
      return TourismIcon
    case 'sport':
      return SportIcon
    case 'culture':
      return CultureIcon
    case 'family':
      return FamilyIcon
    case 'communication':
      return CommunicationIcon
  }
}



if (wardId) getWardById(1)
const menuItems = ref<IMenuItem[]>([])
  menuItems.value = [
  {
    id: 'home',
    name: 'Trang chủ',
    isActive: true,
    icon: 'home',
    route:'home'
  },
  {
    id: 'tourism',
    name: 'Du lịch',
    isActive: false,
    icon: 'tourism',
    route:'tourism'
  },
  {
    id: 'sport',
    name: 'Thể thao',
    isActive: false,
    icon: 'sport',
    route:'sport'
  },
  {
    id: 'family',
    name: 'Gia đình',
    isActive: false,
    icon: 'family',
    route:'family'
  },
  {
    id: 'culture',
    name: 'Văn hóa',
    isActive: false,
    icon: 'culture',
    route:'culture'
  },
  {
    id: 'communication',
    name: 'Thông tin truyền thông',
    isActive: false,
    icon: 'communication',
    route:'communication'
  }
]

const selectedItem = (menu: INVBars) => {
  menuItems.value.forEach((v) => (v.isActive = v.id !== menu.id ? false : true))
  router.push({name: menu.route})
}
</script>

<style scoped>
.logout-btn {
  width: 52px;
  height: 37px;
}
</style>
