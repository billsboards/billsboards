<template>
  <div id="app" class="bg-gray-800 text-white">
    <Main />
  </div>
</template>
<script>
import Main from './components/indexMain.vue'

export default {
  name: "App",
  components: {
    Main
  },
  beforeCreate() {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  },
};
</script>