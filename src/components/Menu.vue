<template>
  <a class="menu rounded border border-gray m-1 text-primary p-button flex flex-row items-center">
    <div class="flex-auto">
      <span class="capitalize">{{ data.name }}</span>
    </div>
    <ArrowIcon class="icon fill-primary" />
  </a>
</template>

<script setup lang="ts">
import type { IMenu } from '@/types'
import { type PropType } from 'vue'
import ArrowIcon from '@/assets/images/right.svg?component'
// props
defineProps({
  data: {
    type: Object as PropType<IMenu>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.menu {
  svg {
    width: 16px;
    height: 16px;
  }
}
</style>
