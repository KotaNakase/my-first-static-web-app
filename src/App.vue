<template>
  <div>{{ items }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
      items: [],
    };
  },
  async mounted() {
    const response = await fetch("/api/dataaccess");
    this.items = await response.json();
    for (let item of this.items) {
      console.log(item);
    }
  }
};
</script>
