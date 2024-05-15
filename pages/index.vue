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

const accordion = [
  { label: 'How do I put my image on a Board?', content: 'You can open a pull request on our CDN repository, https://github.com/billsboard/cdn' },
  { label: 'Why should I enter my domain name?', content: 'By entering your domain name, we can track the amount of views your Board receives and place you on the leaderboard accordingly. If you don\'t want to track pageviews, you can leave the domain name blank and copy the embed code as normal.' },
  { label: 'What\'s the point of this?', content: 'To bring a little more fun to your personal portfolio or website, and to host a little friendly competition on the leaderboard.' },
  { label: 'Do you track data?', content: 'The Board\'s embed code is an iframe to this website, which just returns an image. We only collect the amount of views that the embed receives under your domain name to host on the leaderboard. If you want your domain\'s data removed, please send an email to "contact@billsboards.net". You can also see the full source code for this website at link at the bottom of the page.' }
]
</script>
<template>
  <div class="space-y-8 text-white prose-headings:text-white">
    <h1 class="text-4xl font-bold">Bill's Boards</h1>
    <blockquote class="text-white border-l border-t-0 border-b-0 border-r-0 border-8 pl-4">
      <span class="p-2 bg-slate-950/80 border border-white/15 font-mono rounded-lg text-sm">billsboard</span>
      (noun): A image that should be viewed or placed on every website.
    </blockquote>

    <p>It is recommended that all people who are not silly should avoid this website. People who are silly should view
      billsboards and place their own billsboards on sites they control. Failure to do so may result in a lack of
      silliness.</p>

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

    <UAccordion :items="accordion" size="lg" variant="solid" color="white" />

    <UDivider />

    <div class="text-sm text-white/50">
      Made by Echo and proudparrot2 <br />
      Open-source on <ULink variant="white" to="https://github.com/billsboards/billsboards"
        class="underline underline-offset-4">GitHub</ULink>
    </div>
  </div>
</template>
