<template>
  <h2>UUID v4</h2>
  <p>
    <button type="button" @click="generate()">Generate</button>
  </p>
  <p>
    <button type="button" @click="copy()">
      <span v-if="copied">✓&nbsp;</span>{{ result }}
    </button>
  </p>
</template>

<script setup lang="ts">
import { v4 as uuid } from "uuid";
import { ref, watch } from "vue";
import { useClipboard } from "@vueuse/core";

const result = ref("");

const { copy, copied } = useClipboard({ source: result });

function generate() {
  result.value = uuid();
}

watch(copied, (val) => !val && generate(), { immediate: true })
</script>
