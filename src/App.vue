<template>
  <div>{{ message01 }}</div>
  <div>{{ message02 }}</div>  
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message01: "",
      message02: "",
    };
  },
  async mounted() {
    const { text } = await (await fetch("/api/message")).json();
    this.message01 = text;

    const { data } = await (await fetch("/api/getCosmosData")).json();
    this.message02 = data;

  }
};
</script>
