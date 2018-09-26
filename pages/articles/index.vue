<template>
  <div>
    <h1>Articles</h1>
    <table class="articles-list">
      <tr
        v-for="(item, index) in articles"
        v-bind:key="'articlesKey' + index">
        <td>{{ item.date }}</td>
        <td><a v-bind:href="item.url">{{ item.title }}</a> <i>({{ item.platform }})</i></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "Photoshop 101: an introduction for web developers",
          url:
            "https://medium.freecodecamp.org/photoshop-101-introduction-for-web-developers-62d55232e62b",
          date: "23/07/2018",
          platform: "FreeCodeCamp"
        },
        {
          title: "Vue.js 101 todo PWA tutorial",
          url: "https://dev.to/vinceumo/vuejs-101-todo-pwa-tutorial-4bne",
          date: "21/07/2018",
          platform: "dev.to"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.articles-list {
  vertical-align: top;

  tr {
    td {
      vertical-align: top;
      padding-bottom: spacer(2);

      @include first(1) {
        font-style: italic;
        font-size: 0.7rem;
        padding-right: spacer(2);
        padding-top: spacer(1);

        @include min(bp(sm)) {
          font-size: 0.8rem;
          padding-right: spacer(3);
        }
      }

      @include last(1) {
        i {
          font-size: 0.7rem;
        }
      }
    }

    a {
      font-weight: bold;
    }
  }
}
</style>
