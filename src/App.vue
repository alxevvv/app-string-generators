<template>
  <header>
    <span>🐚</span>
    <toggle-dark-mode />
  </header>

  <main>
    <h1>Generators</h1>
    <hr />
    <gen-nano-id :default-length="16" />
    <hr />
    <gen-uuid />
    <hr />
  </main>
</template>

<script setup lang="ts">
import ToggleDarkMode from "./components/ToggleDarkMode.vue"
import GenNanoId from "./components/GenNanoId.vue"
import GenUuid from "./components/GenUuid.vue"
</script>
