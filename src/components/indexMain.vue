<template>
  <div class="p-4">
    <iframe src="/embed?ref=billsboards.net" style="margin-left: auto; display: block; margin-right: auto; max-width: 728px; width: 100%; height: 90px; border: none;"></iframe>
    <header class="mb-4">
      <h1 class="text-5xl font-bold text-gray-100">BillsBoards</h1>
    </header>
    <main>
      <p class="mb-4 text-xl"><strong>BillsBoards</strong> <em>noun</em> - A image that should be viewed or placed on every website.</p>
      <p class="mb-4">
        It is recommended that all people who are not silly should avoid this website. People who are silly should view billsboards and place their own billsboards on sites they control. Failure to do so may result in a lack of silliness.
      </p>
      <h2 class="text-xl font-bold mb-2">Add BillsBoards to your site:</h2>
      <div class="mb-4">
        <label for="domain" class="block font-bold mb-2">Enter your domain:</label>
        <input type="text" id="domain" v-model="domain" class="border border-gray-400 rounded-xl px-3 py-2 w-50% bg-gray-700 text-white" placeholder="example.com" />
      </div>
      <div v-if="embedCode" class="mb-4">
        <label class="block font-bold mb-2">Embed Code:</label>
        <div class="bg-gray-700 text-white p-4 rounded-xl whitespace-pre-wrap flex justify-between items-center">
          <p>{{ embedCode }}</p>
          <button @click="copyToClipboard" id="copyButton" aria-label="Copy to Clipboard" class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-xl"><i class="fas fa-copy"></i></button>
        </div>
      </div>
      <IndexFAQ />
    </main>
    <iframe src="/embed?ref=billsboards.net" style="margin-left: auto; display: block; margin-right: auto; max-width: 728px; width: 100%; height: 90px; border: none;"></iframe>
    <footer>A <a class="text-blue-400 underline" target="_blank" href="https://3kh0.net/">Echo</a> production, hosted by CloudFlare</footer>
  </div>
</template>
<script>
  import IndexFAQ from "./indexFAQ.vue";

  export default {
    name: "App",
    components: {
      IndexFAQ,
    },
    data() {
      return {
        domain: "example.com",
        embedCode: `<iframe src="https://billsboards.net/embed?ref=example.com" style="margin-left:auto;display:block;margin-right:auto;max-width:728px;width:100%;height:90px;border:none;"></iframe>`,
      };
    },
    methods: {
      generateEmbedCode() {
        this.embedCode = `<iframe src="https://billsboards.net/embed?ref=${this.domain}" style="margin-left:auto;display:block;margin-right:auto;max-width:728px;width:100%;height:90px;border:none;"></iframe>`;
      },
      copyToClipboard() {
        const copy = document.getElementById("copyButton");
        if (copy) {
          navigator.clipboard.writeText(this.embedCode);
          copy.innerHTML = `<i class="fas fa-check"></i>`;
          copy.classList.add("bg-green-500", "hover:bg-green-600");
          setTimeout(() => {
            copy.innerHTML = `<i class="fas fa-copy"></i>`;
            copy.classList.remove("bg-green-500", "hover:bg-green-600");
          }, 2000);
        }
      },
    },
    watch: {
      domain() {
        this.generateEmbedCode();
      },
    },
  };
</script>