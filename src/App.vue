<template>
  <div id="app" class="px-4 py-8 bg-gray-800 text-white h-screen">
    <header class="mb-4">
      <h1 class="text-3xl font-bold text-gray-100">BillsBoards: silly adverts</h1>
    </header>
    <main>
      <p class="mb-4">
        It is recommended that all people who are not silly should avoid this website. People who are silly should view billsboards and place their own billsboards on sites they control. Failure to do so may result in a lack of silliness.
      </p>
      <div class="mb-4">
        <label for="domain" class="block font-bold mb-2">Enter your domain name:</label>
        <input type="text" id="domain" v-model="domain" class="border border-gray-400 rounded px-3 py-2 w-full bg-gray-700 text-white" placeholder="example.com" />
      </div>
      <div v-if="embedCode" class="mb-4">
        <pre class="bg-gray-700 text-white p-4 rounded whitespace-pre-wrap">{{ embedCode }}</pre>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">How to post a billboard:</h2>
        <ul class="list-disc pl-4">
          <li>
            Email
            <a href="mailto:echo-the-coder@tuta.io" class="text-blue-500 hover:underline">echo-the-coder@tuta.io</a>
            with the subject "billboard request".</li>
          <li>The image should be 728x90 and be a .jpg or .png</li>
          <li>Include the URL you want the billboard to link to</li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        domain: "example.com",
        embedCode: `<iframe src="https://bill.3kh0.net/embed?ref=example.com" style="margin-left:auto;display:block;margin-right:auto;max-width:732px;width:100%;height:94px;border:none;"></iframe>`,
      }
    },
    methods: {
      generateEmbedCode() {
        this.embedCode = `<iframe src="https://bill.3kh0.net/embed?ref=${this.domain}" style="margin-left:auto;display:block;margin-right:auto;max-width:732px;width:100%;height:94px;border:none;"></iframe>`;
      }
    },
    watch: {
      domain() {
        this.generateEmbedCode()
      }
    }
  }
</script>