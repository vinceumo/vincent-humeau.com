<template>
  <ul id="skip-navigation">
    <li><a href="#main-content">Skip to content</a></li>
    <li><a href="#main-navigation">Skip to navigation</a></li>  
  </ul>
</template>

<style lang="scss" scoped>
#skip-navigation {
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    left: -999px;
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -999;

    &:focus,
    &:active {
      color: color-gray(100);
      background-color: color-gray(0);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      padding: spacer(3) spacer(5);
      border: 2px solid color-gray(20);
      text-align: center;
      text-decoration: none;
    }
  }
}
</style>
