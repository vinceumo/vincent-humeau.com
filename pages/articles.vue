<template>
  <section class="container">
    <h1>Articles</h1>
    <table class="articles-list">
      <tr v-for="(item, index) in feeds[0].items" v-bind:key="'articlesKey' + index">
        <!-- <td>{{ item.date }}</td> -->
        <td>
          <a v-bind:href="item.url">{{ item.title }}</a>
          <i>({{ item.platform }})</i>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      feeds: [
        {
          title: "devNotes",
          baseUrl: "https://vinceumo.github.io",
          rssFeed: "/devNotes/feed.xml",
          items: []
        }
      ],
      articles: [
        {
          title: "Cross Browser extensions with WebExtensions API - 101",
          url:
            "https://vinceumo.github.io/devNotes/javascript/2018/10/23/webextensionapi.html",
          date: "23/10/2018",
          platform: "DevNotes"
        },
        {
          title: "Inert - Avoid keyboard trap",
          url:
            "https://vinceumo.github.io/devNotes/a11y/2018/08/21/avoid-keyboard-trap.html",
          date: "21/08/2018",
          platform: "DevNotes"
        },
        {
          title: "Vue - SCSS set up with Vue CLI 3",
          url:
            "https://vinceumo.github.io/devNotes/javascript/2018/08/13/vue-scss-setup.html",
          date: "13/08/2018",
          platform: "DevNotes"
        },
        {
          title: "CSS custom properties (CSS variables) with SCSS",
          url:
            "https://vinceumo.github.io/devNotes/sass/2018/07/25/css-var-with-scss.html",
          date: "25/07/2018",
          platform: "DevNotes"
        },
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
  },
  mounted() {
    for (let feed of this.feeds) {
      const _this = this;
      const rssFeed = this.getRssFeed(`${feed.baseUrl}${feed.rssFeed}`);
      const entries = rssFeed.querySelectorAll("entry");
      for (let entry of entries) {
        feed.items.push({
          title: entry.querySelector("title").innerText,
          url: `${feed.baseUrl}${entry
            .querySelector("link")
            .getAttribute("href")}`
        });
      }
      console.log(feed);
    }
  },
  methods: {
    getRssFeed(websiteUrl) {
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", websiteUrl, false);
      xmlhttp.send();
      const xmlDoc = xmlhttp.responseXML;
      return xmlDoc;
    }
  }
};
</script>

<style lang="scss" scoped>
.articles-list {
  vertical-align: top;

  tr {
    td {
      vertical-align: top;
      padding-bottom: spacer(3);
      line-height: 1.2;

      @include first(1) {
        font-style: italic;
        font-size: 0.7rem;
        padding-right: spacer(2);
        line-height: 1.5;

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
      text-decoration: none;
    }
  }
}
</style>
