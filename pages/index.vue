<script setup>
import { useClipboard } from '@vueuse/core'

const url = ref('example.com')
const source = computed(() => `<iframe src="https://billsboards.net/embed?ref=${url.value}" />`)
const button = ref('Copy Embed')

const { copy, copied } = useClipboard({ source })

const people = [
  {
    domain: '3kh0.net',
    views: 591
  },
  {
    domain: 'google.com',
    views: 142
  },
  {
    domain: 'billsboards.net',
    views: 36
  }
]
</script>
<template>
  <div class="space-y-8 text-white prose-headings:text-white">
    <h1 class="text-4xl font-bold">Bill's Boards</h1>
    <blockquote class="text-white border-l border-t-0 border-b-0 border-r-0 border-8 pl-4">
      <span class="p-2 bg-slate-950/80 border border-white/15 font-mono rounded-lg text-sm">billsboard</span>
      (noun): A image that should be viewed or placed on every website.
    </blockquote>

    <p>It is recommended that all people who are not silly should avoid this website. People who are silly should view billsboards and place their own billsboards on sites they control. Failure to do so may result in a lack of silliness.</p>

    <div class="w-full">
      <UTable :rows="people" />
    </div>

    <p>Enter your domain name to show up on the leaderboard!</p>

    <UInput color="white" variant="outline" placeholder="Domain" size="lg" icon="i-heroicons-link" v-model="url" />

    <pre class="bg-slate-800 p-4 rounded-md text-sm overflow-y-scroll"><code>{{ source }}</code></pre>

    <UButton class="w-48 justify-center" size="lg" @click="copy(source)">
      <span v-if="!copied">Copy Embed</span>
      <span v-else>Copied!</span>
    </UButton>

    <UDivider />

    <div class="text-sm text-white/50">
      Made by Echo and proudparrot2 <br />
      Open-source on <ULink variant="white" to="https://github.com/billsboards/billsboards" class="underline underline-offset-4">GitHub</ULink></div>
  </div>
</template>
