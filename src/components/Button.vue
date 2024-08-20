<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'white' | 'red' | 'purple' 
    text?: string
    icon?: string | object | undefined
    iconClass?: string
    textcolor?: 'white' | 'purple'
  }>(),
  {
    variant: 'white',
    textcolor: 'purple'
  }
)
const variantClass = {
  white: 'bg-gray-50',
    red: 'bg-red-700 text-white border-red-500 !gap-0',
    purple: 'bg-violet-500 text-white border-violet-950'
}
const textcolorClass = {
  white: 'text-gray-50',
    purple: 'text-violet-500'
}
</script>

<template>
 <div :class="[variantClass[props.variant]]" class="px-[8dvw] py-4 rounded-full mb-5 flex justify-center gap-3">
    <component
      v-if="props.icon"
      :is="props.icon"
      class=" w-7 h-7"
      :class=" iconClass"
    />
    <h4 class=" text-center" :class="textcolorClass[props.textcolor]">{{ text }}</h4>
  </div>
</template>
