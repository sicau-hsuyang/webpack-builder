<template>
  <div class="container">
    <h1 align="center">Hello, {{ name }}</h1>
    <img :src="img" alt="无法显示图片" class="img" />
  </div>
</template>

<script>
import img from "./assets/logo.png";
console.log(img);
export default {
  data() {
    return {
      name: "World",
      img: img
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/index.scss";
.container {
  @extend %container;
  background-color: red;
}

.img-wrapper {
  @extend %img;
}
</style>
