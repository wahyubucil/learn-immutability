<script setup>
import { ref, watch } from "vue";
import Sidebar from "./components/Sidebar.vue";

const data = ref({});
const loading = ref(false);

function onSidebarSubmit(submittedData) {
  data.value = submittedData;
}

watch(data, () => getData(), { deep: true });

async function getData() {
  console.log("getData");
  loading.value = true;
  const simulation = () => new Promise((resolve) => setTimeout(resolve, 2000));
  await simulation();
  loading.value = false;
}
</script>

<template>
  <div class="wrapper">
    <Sidebar @formSubmit="onSidebarSubmit" />
    <div class="main">
      <h3>Name: {{ data?.name }}</h3>
      <h3>Age: {{ data?.age }}</h3>

      <!-- <h3>First Name: {{ data?.name?.first }}</h3>
      <h3>Last Name: {{ data?.name?.last }}</h3>
      <h3>Age: {{ data?.age }}</h3> -->

      <h4 v-if="loading">Loading...</h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;

  h3 {
    margin: 0;
  }
}
</style>
