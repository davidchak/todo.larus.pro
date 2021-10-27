<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',

  data() {
    return {};
  },

  created() {
    this.axios
      .get('/api/v1/')
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  },
};
</script>
