<template>
  <div>{{ items }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    const response = await(await fetch("/api/dataaccess")).json();
    for (let item of JSON.parse(response.body)) {
      this.items.push({
        id: item.RowKey,
        title: item.title,
        content: item.contentk,
      });
    }
  }
};
</script>
