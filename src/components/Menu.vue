<template>
  <a class="rounded border border-gray m-1 text-primary p-button flex flex-row items-center">
    <div class="flex-auto">
      <span class="capitalize">{{ data.name }}</span>
    </div>
    <img src="@/assets/images/right-arrow.svg" class="w-menu-icon h-menu-icon" />
  </a>
</template>

<script setup lang="ts">
import type { IMenu } from '@/types'
import { type PropType } from 'vue'
const props = defineProps({
  data: {
    type: Object as PropType<IMenu>,
    required: true
  }
})
</script>
