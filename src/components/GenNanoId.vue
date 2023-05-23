<template>
  <h2>NanoID</h2>
  <p>
    <input v-model="length" type="number" min="1" max="256" step="1" />
    <button type="button" @click="generate()">Generate</button>
    <button type="button" @click="save()">Save</button>
  </p>
  <p>
    <button v-for="l in savedLengths" :key="l" type="button" @click="length = l">
      {{ l }}
    </button>
    <button v-if="savedLengths.length" type="button" @click="clear()">Clear</button>
  </p>
  <p>
    <button type="button" @click="copy()">
      <span v-if="copied">✓&nbsp;</span>{{ result }}
    </button>
  </p>
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
import { watch, ref, watchEffect } from "vue";
import { useClipboard, useStorage } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    defaultLength: number;
  }>(),
  {
    defaultLength: 10,
  }
);

const length = useStorage<number>('nanoid-current-length', props.defaultLength);
const result = ref("");

const savedLengths = useStorage<number[]>('nanoid-saved-lengths', []);

const { copy, copied } = useClipboard({ source: result });

function generate(len = length.value) {
  result.value = nanoid(len);
}

function save() {
  const updatedArray = Array.from(new Set([...savedLengths.value, length.value]))
  updatedArray.sort((a, b) => a - b);
  savedLengths.value = updatedArray;
}

function clear() {
  savedLengths.value = [];
}

watch(copied, (val) => !val && generate(length.value));
watchEffect(() => generate(length.value))
</script>
