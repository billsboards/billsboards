<template>
  <div class="absolute inset-0 p-0 m-0">
    <img class="w-full h-full object-cover" :src="imageUrl" alt="Random Image" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Embed',
  setup() {
    const refParam = ref(null)
    const imageUrl = ref('')

    onMounted(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1
      imageUrl.value = `https://cdn.billsboards.net/${randomNumber}.png`
      const urlParams = new URLSearchParams(window.location.search)
      refParam.value = urlParams.get('ref')
      console.log("Domain log" + refParam.value)
    })

    return {
      ref: refParam,
      imageUrl
    }
  }
}
</script>