<template>
  <h1>{{ message }}</h1>
  <h1 :class="titleClass">Red</h1>
  <p>Count is: {{ counter.count }}</p>
</template>

<script setup>
   import { reactive, ref } from 'vue'

   const counter = reactive({ count: 12 })
   const message = ref('Hello World!')
   const titleClass = ref('title')
</script>

<style>
.title {
  color: red;
}
</style>