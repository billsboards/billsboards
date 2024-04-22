<template>
  <div class="absolute inset-0 p-0 m-0">
    <img class="w-full h-full object-cover" :src="state.imageUrl" alt="Random Image" />
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
    appId: "1:619901129471:web:a626559674a81b0d4f32ca"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  function addView(domain) {
    const cleanRef = domain.replace(/\./g, '_');
    const ref = dbRef(db, `db1/${cleanRef}`);
    runTransaction(ref, (views) => {
      return (views || 0) + 1;
    });
  }

  export default {
    name: "Embed",
    setup() {
      const state = reactive({
        ref: null,
        imageUrl: ""
      });
      onMounted(() => {
        const ranNum = Math.floor(Math.random() * 3) + 1;
        state.imageUrl = `https://cdn.billsboards.net/${ranNum}.png`;
        const urlPar = new URLSearchParams(window.location.search);
        state.ref = urlPar.get("ref");
        addView(state.ref);
      });
      return {
        state
      };
    },
  };
  // TODO: Add leaderboard and optimize data queries
</script>