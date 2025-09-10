<template>
  <div>
    <div>
      {{ items }}
    </div>
    <div>
      <b-table striped responsive hover :items="items" :fields="fields" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      items: [],
      body: "",
      fields: [
        { key: "id", label: "ID" },
        { key: "title", label: "タイトル" },
        { key: "content", label: "内容" },
      ],
    };
  },
  async mounted() {
    const response = await fetch("/api/dataaccess");
    this.body = await response.json();
    for (let item of this.body) {
      this.items.push({
        id: item.RowKey,
        title: item.title,
        content: item.content,
      });
    }
  }
};
</script>
