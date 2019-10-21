<template>
  <div id="customAppContainer"></div>
</template>

<script>
export default {
  async mounted() {
    await this.updateCustomAppContainer();
  },
  methods: {
    async updateCustomAppContainer() {
      const fullRoute = this.$router.currentRoute.fullPath;
      const routeSegments = fullRoute.split("/");
      const appsIndex = routeSegments.indexOf("apps");
      const appKey = routeSegments[appsIndex + 1];

      document.getElementById(
        "customAppContainer"
      ).innerHTML = `<object style="width: 100%; height:100%;" data="http://localhost:3000/subApps/${appKey}"></object>`;
    }
  },
  watch: {
    async $route(to, from) {
      await this.updateCustomAppContainer();
    }
  }
};
</script>