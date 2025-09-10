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
    const response = await (await fetch("/api/dataaccess"));
    this.items = JSON.parse(response.body);
    for(let item of this.items) {
      console.log(item);
    }
  }
};
</script>
