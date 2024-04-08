<template>
  <div id="app" class="px-4 py-8 bg-gray-800 text-white">
    <header class="mb-4">
      <h1 class="text-5xl font-bold text-gray-100">BillsBoards</h1>
    </header>
    <main>
      <p class="mb-4 text-xl">
        <strong>BillsBoards</strong> <em>noun</em> - A image that should be viewed or placed on every website.
      </p>
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
          <button @click="copyToClipboard" class="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-2 px-4 rounded-xl"><i class="fas fa-copy"></i></button>
        </div>
      </div>
      <div id="FAQ">
        <h2 class="text-xl font-bold mb-2">FAQ:</h2>
        <div class="p-3 rounded-xl bg-gray-700 mb-2 cursor-pointer" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-bold mb-2">
              {{ faq.question }}
            </h2>
            <i :class="faq.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
          </div>
          <div v-if="faq.open">
            <p v-html="faq.answer"></p>
          </div>
        </div>
      </div>
    </main>
    <footer>A <a class="text-blue-500" target="_blank" href="https://3kh0.net/">Echo</a> production, hosted by CloudFlare</footer>
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        domain: "example.com",
        embedCode: `<iframe src="https://billsboards.net/embed?ref=example.com" style="margin-left:auto;display:block;margin-right:auto;max-width:732px;width:100%;height:94px;border:none;"></iframe>`,
        faqs: [
          {
            question: "How do I get a BillsBoard?",
            answer: `<ul class="list-disc pl-4">
              <li>
                Email
                <a href="mailto:echo-the-coder@tuta.io" class="text-blue-500 hover:underline">echo-the-coder@tuta.io</a>
                with the subject "billboard request".
              </li>
              <li>You can submit either a static image or an animated one.</li>
              <li>The image should be 728x90 and be a .jpg or .png</li>
              <li>Include the URL you want the billboard to link to.</li>
              <li>You will get email updates about your submission.</li>
            </ul>
            <p class="my-2">Provided there are some basic rules of this such as</p>
            <ul class="list-disc pl-4">
              <li>No hate speech, racism, sexism, homophobia, AI images, NSFW stuff.</li>
              <li>Nothing that will get me in trouble.</li>
              <li>Nothing that you can not legally or morally show to a child.</li>
              <li>If you are wondering if your ad is acceptable or not, please contact me and we can sort it out.</li>
            </ul>`,
            open: false,
          },
          {
            question: "How do I get my billboard removed?",
            answer: `If you would like to have your billboard removed, please send a email to <a href="mailto:echo-the-coder@tuta.io" class="text-blue-500 hover:underline">echo-the-coder@tuta.io</a>`,
            open: false,
          },
          {
            question: "Why should I enter my domain name?",
            answer: 'This is so everytime someone sees a BillsBoard on your site, you get credit for it and will move up on the leaderboard. You also do not have to put in a actual domain, just putting the word "fart" still works.',
            open: false,
          },
          {
            question: "Are you going to track me?",
            answer: `No, the advert that you get is completely random. We also do not track how you interact with the advert nor do we track or record any demographics from your request. We only store data of how many views are from a day so it can be displayed on the leaderboard. If you would like to request that your domain be removed and not be tracked, please send a email to <a href="mailto:privacy@3kh0.net" class="text-blue-500 hover:underline">privacy@3kh0.net</a>`,
            open: false,
          },
          {
            question: "How do I get on the leaderboard?",
            answer: `The leaderboard is based on how many views your domain has gotten. The more views you get, the higher you will be on the leaderboard. The leaderboard is updated every 24 hours.`,
            open: false,
          },
          {
            question: "Can I see the source code?",
            answer: `Why would you want to see the source code? It is a mess. But if you really want to see it, you can view it on <a href="https://github.com/billsboards" class="text-blue-500 hover:underline">GitHub</a>`,
            open: false,
          },
          {
            question: "Why should I do this?",
            answer: "Because I told you so",
            open: false,
          },
        ],
      };
    },
    methods: {
      generateEmbedCode() {
        this.embedCode = `<iframe src="https://billsboards.net/embed?ref=${this.domain}" style="margin-left:auto;display:block;margin-right:auto;max-width:732px;width:100%;height:94px;border:none;"></iframe>`;
      },
      toggleFaq(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
      copyToClipboard() {
        navigator.clipboard.writeText(this.embedCode);
        document.querySelector("button").innerHTML = `<i class="fas fa-check"></i>`;
        document.querySelector("button").classList.add("bg-green-500", "hover:bg-green-600");
        setTimeout(() => {
          document.querySelector("button").classList.remove("bg-green-500", "hover:bg-green-600");
          document.querySelector("button").innerHTML = `<i class="fas fa-copy"></i>`;
        }, 2000);
      },
    },
    watch: {
      domain() {
        this.generateEmbedCode();
      },
    },
  };
</script>