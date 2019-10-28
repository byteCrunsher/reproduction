<template>
  <div>
    <iframe :src="`http://localhost:3000/subApps/${appKey}`"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appKey: ""
    };
  },
  async mounted() {
    await this.updateCustomAppContainer();
  },
  methods: {
    async updateCustomAppContainer() {
      const fullRoute = this.$router.currentRoute.fullPath;
      const routeSegments = fullRoute.split("/");
      const appsIndex = routeSegments.indexOf("apps");
      this.appKey = routeSegments[appsIndex + 1];
    }
  },
  watch: {
    async $route(to, from) {
      await this.updateCustomAppContainer();
    }
  }
};
</script>
