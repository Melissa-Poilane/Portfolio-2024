
<script setup lang="ts">
import type { RevesResponse } from '@/pocketbase-types'
const props = defineProps<RevesResponse<any>>() 
const urlImage = `/Types-reves/${props.Type_reve}.svg` 
</script>

<template>
  <img :src="urlImage" alt="Type de rêve">
</template>
