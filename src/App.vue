<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.preventImageSelect();
    this.preventContextMenu();
  },
  methods: {
    preventImageSelect() {
      var imageview = document.querySelectorAll("img");
      imageview.forEach(imageView => {
        imageView.addEventListener("contextmenu", e => {
          e.preventDefault();
        });
      });
    },
    preventContextMenu() {
      window.addEventListener("contextmenu", e => {
        e.preventDefault();
      });
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

img {
  display: block;
  width: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  -webkit-tap-highlight-color: transparent;
}

.theme-color {
  background-color: #4b64f2;
}
</style>
