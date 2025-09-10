<template>
  <div>{{ items }}</div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [],
      body: "",
    };
  },
  async mounted() {
    const response = await fetch("/api/dataaccess");
    this.body = await response.json();
    for (let item of JSON.parse(this.body)) {
      this.items.push({
        id: item.RowKey,
        title: item.title,
        content: item.contentk,
      });
    }
  }
};
</script>
