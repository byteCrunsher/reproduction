<template>
  <div id="app">
    <router-link to="/" style="margin:20px;">App Container Home View</router-link>
    <router-link to="/apps/app-one" style="margin:20px;">App 1</router-link>
    <router-link to="/apps/app-two" style="margin:20px;">App 2</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("storage", () => {
      const fullRoute = this.$router.currentRoute.fullPath;
      const routeSegments = fullRoute.split("/");
      const appsIndex = routeSegments.indexOf("apps");
      const newBaseUrlSegments = routeSegments.slice(0, appsIndex + 2);
      const newBaseUrl = newBaseUrlSegments.join("/");
      const subAppRoute = localStorage.subAppRouteUpdate;
      let browserUrl;

      if (subAppRoute.startsWith(newBaseUrl)) {
        browserUrl = newBaseUrl;
      } else {
        browserUrl = newBaseUrl.concat(subAppRoute);
      }

      history.replaceState(null, null, browserUrl);
    });
  }
};
</script>
