<template>
  <h2>UUID v4</h2>
  <p>
    <button type="button" @click="generate()">Generate</button>
  </p>
  <p>
    <pre>{{ result }}</pre>
  </p>
  <p>
    <button type="button" @click="copyToClipboard">
      <span v-if="copied">✓&nbsp;</span>Copy
    </button>
  </p>
</template>

<script setup lang="ts">
import { v4 as uuid } from "uuid";
import { ref, onMounted } from "vue";
import { useClipboard } from "@vueuse/core";

const result = ref("");

const { copy, copied } = useClipboard({ source: result });

function generate() {
  result.value = uuid();
}

function copyToClipboard() {
  copy();
  generate();
}

onMounted(generate);
</script>
