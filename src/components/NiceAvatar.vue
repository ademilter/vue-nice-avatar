<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "NiceAvatar",
  props: {
    msg: {
      type: String,
      default: "Hey",
    },
  },
};
</script>

<style scoped>
.hello {
  color: red;
}
</style>
