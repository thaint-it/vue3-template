<template>
  <div>
    <div class="mb-4 border-b-8 pt-4 border-primary dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li v-for="tab in tabs" :key="tab.id" role="presentation">
          <button
            class="flex flex-row p-2 rounded-t-md"
            :class="{ 'bg-primary text-white': tab.isActive }"
            data-tabs-target="#profile"
            type="button"
            @click="activeTab(tab.id)"
          >
            <component
              :is="getIcon(tab.icon)"
              class="w-tab-icon h-tab-icon mr-2"
              :class="{
                'fill-icon': !tab.isActive,
                'fill-white': tab.isActive
              }"
            />
            <icon />
            {{ tab.name }}
          </button>
        </li>
      </ul>
    </div>
    <TabHome v-show="isShow('home')" />
    <TabTourism  v-show="isShow('tourism')" />
    <TabSport  v-show="isShow('sport')"/>
    <TabFamily  v-show="isShow('family')"/>
    <TabCuture  v-show="isShow('culture')"/>
    <TabCommunication  v-show="isShow('communication')"/>
  </div>
</template>

<script setup lang="ts">
import type { ITabs } from '@/utils/types'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getWard } from '@/api/system'
import HomeIcon from '@/assets/images/home.svg?component'
import SportIcon from '@/assets/images/sport.svg?component'
import FamilyIcon from '@/assets/images/family.svg?component'
import CultureIcon from '@/assets/images/culture.svg?component'
import CommunicationIcon from '@/assets/images/communication.svg?component'
import TourismIcon from '@/assets/images/tourism.svg?component'
import TabHome from './tab-items/Home.vue'
import TabCuture from './tab-items/Culture.vue'
import TabFamily from './tab-items/Family.vue'
import TabSport from './tab-items/Sport.vue'
import TabTourism from './tab-items/Tourism.vue'
import TabCommunication from './tab-items/Communication.vue'

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

const isShow=(tabId:string)=>{
  return tabs.value.find(x=>x.id===tabId)?.isActive
}

if (wardId) getWardById(1)
const tabs = ref<ITabs[]>([])
tabs.value = [
  {
    id: 'home',
    name: 'Trang chủ',
    isActive: true,
    icon: 'home'
  },
  {
    id: 'tourism',
    name: 'Du lịch',
    isActive: false,
    icon: 'tourism'
  },
  {
    id: 'sport',
    name: 'Thể thao',
    isActive: false,
    icon: 'sport'
  },
  {
    id: 'family',
    name: 'Gia đình',
    isActive: false,
    icon: 'family'
  },
  {
    id: 'culture',
    name: 'Văn hóa',
    isActive: false,
    icon: 'culture'
  },
  {
    id: 'communication',
    name: 'Thông tin truyền thông',
    isActive: false,
    icon: 'communication'
  }
]

const activeTab = (id: string) => {
  tabs.value.forEach((v) => (v.isActive = v.id !== id ? false : true))
}
</script>
