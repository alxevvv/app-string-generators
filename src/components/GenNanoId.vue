<template>
  <h2>NanoID</h2>
  <p>
    <input v-model="length" type="number" min="1" step="1" />
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
import { nanoid } from "nanoid";
import { watchEffect, ref, onMounted } from "vue";
import { useClipboard } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    defaultLength: number;
  }>(),
  {
    defaultLength: 10,
  }
);

const length = ref(props.defaultLength);
const result = ref("");

const { copy, copied } = useClipboard({ source: result });

function generate(len = length.value) {
  result.value = nanoid(len);
}

function copyToClipboard() {
  copy();
  generate();
}

watchEffect(() => generate(length.value));
</script>
