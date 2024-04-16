<template>
  <div id="FAQ">
    <h2 class="text-xl font-bold mb-2">FAQ:</h2>
    <div class="p-3 rounded-xl bg-gray-700 mb-2 cursor-pointer" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-bold mb-2">
          {{ faq.question }}
        </h2>
        <i :class="faq.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'" class="pr-4"></i>
      </div>
      <div v-if="faq.open">
        <p v-html="faq.answer"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FAQ",
    data() {
      return {
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
              <li>No actual annoying adverts, this project is for fun, so make your ad fun!</li>
              <li>No hate speech, racism, sexism, homophobia, AI images, NSFW stuff.</li>
              <li>Nothing that will get me in trouble.</li>
              <li>Nothing that you can not legally or morally show to a child.</li>
              <li>If you are wondering if your ad is acceptable or not, please contact me and we can sort it out.</li>
            </ul>`,
            open: false,
          },
          {
            question: "How do I get my billboard removed?",
            answer: `If you would like to have your billboard removed, please send a email to <a href="mailto:echo-the-coder@tuta.io" class="text-blue-500hover:underline">echo-the-coder@tuta.io</a>`,
            open: false,
          },
          {
            question: "Why should I enter my domain name?",
            answer: 'This is so everytime someone sees a BillsBoard on your site, you get credit for it and will move up on the leaderboard. You also do not have to put in a actual domain, just putting the word "fart" still works.',
            open: false,
          },
          {
            question: "How do I get on the leaderboard?",
            answer: `The leaderboard is based on how many views your domain has gotten. The more views you get, the higher you will be on the leaderboard. The leaderboard is updated every 24 hours.`,
            open: false
          },
          {
            question: "Are you going to track me?",
            answer: `No, the advert that you get is completely random. We also do not track how you interact with the advert nor do we track or record any demographics from your request. We only store data of how many views are from a day so it can be displayed on the leaderboard. If you would like to request that your domain be removed and not be tracked, please send a email to <a href="mailto:privacy@3kh0.net" class="text-blue-500 hover:underline">privacy@3kh0.net</a>`,
            open: false,
          },
          {
            question: "Can I see the source code?",
            answer: `Why would you want to see the source code? It is a mess. But if you really want to see it, you can view it on <a href="https://github.com/billsboards" class="text-blue-500 hover:underline">GitHub</a>`,
            open: false,
          },
          {
            question: "Why should I do this?",
            answer: `Because I told you so`,
            open: false,
          },
        ]
      };
    },
    methods: {
      toggleFaq(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
    }
  };
</script>