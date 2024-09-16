<template>
  <div class="min-h-screen bg-base-200 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <div class="flex items-center space-x-5">
            <div class="avatar placeholder">
              <div class="bg-warning text-warning-content rounded-full w-14">
                <span class="text-3xl">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <h1>neac job portal sample</h1>
              <h2 class="card-title">Add New Neac Work</h2>
              <p class="text-sm opacity-70">Enter the details of your new work item.</p>
            </div>
          </div>
          <div class="divider"></div>
          <form @submit.prevent="submitWork" class="space-y-4">
            <div class="form-control">
              <label class="label" for="title">
                <span class="label-text">Title</span>
              </label>
              <input v-model="work.title" id="title" name="title" type="text" placeholder="Title" class="input input-bordered w-full" required />
            </div>
            <div class="form-control">
              <label class="label" for="description">
                <span class="label-text">Description</span>
              </label>
              <input v-model="work.description" id="description" name="description" type="text" placeholder="Description" class="input input-bordered w-full" />
            </div>
            <div class="form-control">
              <label class="label" for="company">
                <span class="label-text">Company</span>
              </label>
              <input v-model="work.company" id="company" name="company" type="text" placeholder="Company" class="input input-bordered w-full" required />
            </div>
            <div class="form-control">
              <label class="label" for="salary">
                <span class="label-text">Salary</span>
              </label>
              <input v-model="work.salary" id="salary" name="salary" type="number" step="0.01" placeholder="Salary" class="input input-bordered w-full" />
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-accent">Add Work</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
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