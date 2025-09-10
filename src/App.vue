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
      item: "",
    };
  },
  async mounted() {
    const response = await (await fetch("/api/dataaccess"));
    items = JSON.parse(response.body);
    for(item of items) {
      console.log(item);
    }
  }
};
</script>
