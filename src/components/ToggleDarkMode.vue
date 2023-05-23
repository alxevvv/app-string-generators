<template>
  <button type="button" class="dark-mode-button" @click="toggleDark()">
    {{ isDark ? '☽' : '☉' }}
  </button>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>
