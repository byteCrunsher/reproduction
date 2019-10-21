<template>
  <div>
    <div>App one - Page One</div>
    <div>Value from localStorage: {{v}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      v: localStorage.message
    };
  }
};
</script>