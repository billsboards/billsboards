<template>
  <div class="relative m-0 p-0">
    <a :href="state.adUrl" target="_blank" class="w-[728px] h-[90px]">
      <img class="w-[728px] h-[90px] object-cover" :src="state.imageUrl" title="BillsBoard" alt="BillsBoard" />
    </a>
    <div class="absolute top-0 right-0 p-1">
      <a href="https://billsboards.net" target="_blank" title="Learn about BillsBoards" aria-label="BillsBoard link" class="text-white text-xs font-bold bg-gray-700 py-1 px-2 m-0 rounded-lg">BB</a>
    </div>
  </div>
</template>
<script>
  import { onMounted, reactive } from "vue";
  import { getDatabase, ref as dbRef, runTransaction } from "firebase/database";
  import { initializeApp } from "firebase/app";
  const firebaseConfig = {
    apiKey: "AIzaSyCkW3nOPRxHEQ-fmYXCCo4Xas5iU4b7cxk",
    authDomain: "billsboards-63569.firebaseapp.com",
    databaseURL: "https://billsboards-63569-default-rtdb.firebaseio.com",
    projectId: "billsboards-63569",
    appId: "1:619901129471:web:a626559674a81b0d4f32ca",
  };
  // could we offload this to server?
  // probs, but i dont wanna
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  function addView(domain) {
    const cleanRef = domain.replace(/\./g, "_");
    const ref = dbRef(db, `db1/${cleanRef}`);

    runTransaction(ref, (views) => {
      return (views || 0) + 1;
    });
  }

  const cdn = "https://cdn.billsboards.net/";
  export default {
    name: "Embed",
    setup() {
      const state = reactive({
        ref: null,
        adUrl: "",
        imageUrl: "",
      });

      onMounted(async () => {
        const ranNum = Math.floor(Math.random() * 3) + 1;
        state.imageUrl = `${cdn}${ranNum}.png`;
        const urlPar = new URLSearchParams(window.location.search);
        state.ref = urlPar.get("ref");
        addView(state.ref);
        const response = await fetch(`${cdn}/db/${ranNum}.txt`);
        state.adUrl = await response.text();
      });

      return {
        state,
      };
    },
  };
  // TODO: Add leaderboard and optimize data queries
</script>