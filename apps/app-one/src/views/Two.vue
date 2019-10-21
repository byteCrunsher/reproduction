<template>
  <div>App 1 - Page 2</div>
</template>

<script>
export default {
  created() {
    console.log(
      `Called app 1 - page 2 with ${this.$router.currentRoute.fullPath}`
    );
  }
};
</script>