<template>
  <header>🐚</header>

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
import GenNanoId from './components/GenNanoId.vue';
import GenUuid from './components/GenUuid.vue';
</script>

<style>
header {
  font-size: 48px;
  text-align: center;
  padding: 32px 0 12px;
}

main {
  margin: 0 auto;
  max-width: 640px;
  text-align: center;
}

pre {
  display: inline-block;
  font-size: 24px;
  margin: 0.4em auto 0.25em;
  padding: 0.25em 0.4em;
  background: lightgrey;
}
</style>
