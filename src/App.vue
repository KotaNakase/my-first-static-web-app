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
    items = JSON.parse(response.body);
    for(data of items) {
      console.log(data);
    }
  }
};
</script>
