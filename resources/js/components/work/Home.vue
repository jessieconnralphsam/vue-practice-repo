<template>
  <form @submit.prevent="submitWork">
    <input v-model="work.title" placeholder="Title" required> <br>
    <input v-model="work.description" placeholder="Description"> <br>
    <input v-model="work.company" placeholder="Company" required> <br>
    <input v-model="work.salary" type="number" step="0.01" placeholder="Salary"> <br>
    <button type="submit">Add Work</button>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const work = reactive({
  title: '',
  description: '',
  company: '',
  salary: null
})

const submitWork = async () => {
  try {
    const response = await axios.post('/work', work)
    console.log('Work created:', response.data)
    // Reset form fields
    Object.keys(work).forEach(key => work[key] = '')
  } catch (error) {
    console.error('Error creating work:', error)
  }
}
</script>

<style>

</style>