<template>
  <div id="container" :class="{ 'container--builder': isBuilder }">
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isBuilder = computed(() => route.name === 'builder' || route.path.startsWith('/builder'))
</script>

<style>
#container.container--builder {
  max-width: 100%;
  background-color: #f1f3f5;
  box-shadow: none;
}
</style>
