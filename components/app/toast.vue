<script setup>
defineProps({
  message: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'teal',
  },
})
</script>

<template>
  <div
    class="max-w-xs bg-{{ color }}-500 text-sm text-white rounded-xl shadow-lg"
    role="alert"
    tabindex="-1"
    aria-labelledby="hs-toast-solid-color-{{ color }}-label"
  >
    <div id="hs-toast-solid-color-{{ color }}-label" class="flex p-4">
      {{ message }}
    </div>
  </div>
</template>
