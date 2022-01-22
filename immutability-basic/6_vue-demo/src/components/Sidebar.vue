<script setup>
import { ref, reactive } from "vue";
import cloneDeep from "lodash/cloneDeep";

const emit = defineEmits("formSubmit");

const formData = reactive({
  name: "",
  age: null,
});

// const formData = ref({
//   name: "",
//   age: null,
// });

// const name = ref("");
// const age = ref(null);

// const formData = reactive({
//   name: {
//     first: "",
//     last: "",
//   },
//   age: null,
// });

function onSubmit() {
  /* Use lodash cloneDeep if it's nested object */
  emit("formSubmit", { ...formData });
}
</script>

<template>
  <form class="sidebar" @submit.prevent="onSubmit">
    <div class="form-item">
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        v-model="formData.name"
      />
    </div>

    <!-- <div class="form-item">
      <label for="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        required
        v-model="formData.name.first"
      />
    </div>

    <div class="form-item">
      <label for="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        v-model="formData.name.last"
      />
    </div> -->

    <div class="form-item">
      <label for="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        min="1"
        required
        v-model="formData.age"
      />
    </div>

    <div class="form-item">
      <button type="submit">SUBMIT</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.sidebar {
  border-right: 1px solid #d5d5d5;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 16px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    padding: 4px 8px;
  }

  button {
    background: steelblue;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: rgba(steelblue, 0.8);
    }
  }
}
</style>
