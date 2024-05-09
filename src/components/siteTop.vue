<template>
  <div class="bg-gray-700 rounded-xl shadow-md overflow-hidden m-2">
    <div class="md:flex">
      <div class="p-4 w-full">
        <h2 class="text-xl font-bold mb-2">Leaderboard</h2>
        <div class="mt-2 w-full">
          <div v-for="(site, index) in sites" :key="site.name" class="p-2 w-full rounded-lg" :class="{ 'bg-gray-600': index % 2 === 1, 'bg-gray-800': index % 2 === 0 }">
            <div class="flex justify-between items-center w-full">
              <p class="text-gray-300 leading-none">{{ site.name }}</p>
              <p class="text-gray-300 font-mono">{{ site.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        { name: "billsboards.net", count: 146 },
        { name: "3kh0.net", count: 33 },
        { name: "project-neutron.site", count: 9 },
        { name: "google.com", count: 4 },
        { name: "example.com", count: 0 },
      ],
    };
  },
};
</script>