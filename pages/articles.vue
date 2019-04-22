<template>
  <section class="container">
    <h1>Articles</h1>
    <p>
      I love to write about web development and share what I learn. I publish all my blog posts on
      <a
        href="https://dev.to/vinceumo"
      >dev.to</a>. I publish them as well with some smaller posts (notes) on my personal blog,
      <a
        href="https://vinceumo.github.io/devNotes/"
      >devNotes</a>.
    </p>
    <div v-for="(feed, index) in feeds" v-bind:key="'feedKey' + index">
      <div v-if="feed.items.length">
        <h2 class="has-mt-6">
          <a v-bind:href="feed.profileUrl">{{ feed.title }}</a>
        </h2>
        <p>
          <i>{{ feed.subtitle }}</i>
        </p>
        <table class="articles-list">
          <tr v-for="(item, index) in feed.items" v-bind:key="'articlesKey' + index">
            <td>{{ item.date | dateFormat }}</td>
            <td>
              <a v-bind:href="item.url">{{ item.title }}</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      feeds: [
        {
          title: "dev.to",
          subtitle: "Last posts published",
          profileUrl: "https://dev.to/vinceumo",
          baseUrl: "",
          rssFeed: "https://dev.to/feed/vinceumo",
          items: []
        },
        {
          title: "devNotes",
          subtitle: "Last 10 posts published",
          profileUrl: "https://vinceumo.github.io",
          baseUrl: "https://vinceumo.github.io",
          rssFeed: "/devNotes/feed.xml",
          items: []
        }
      ]
    };
  },
  mounted() {
    for (let feed of this.feeds) {
      const _this = this;
      const rssFeed = this.getRssFeed(`${feed.baseUrl}${feed.rssFeed}`);

      switch (feed.title) {
        case "devNotes":
          let entries = rssFeed.querySelectorAll("entry");
          for (let entry of entries) {
            feed.items.push({
              title: entry.querySelector("title").innerHTML,
              url: `${feed.baseUrl}${entry
                .querySelector("link")
                .getAttribute("href")}`,
              date: new Date(entry.querySelector("published").innerHTML)
            });
          }
          break;
        case "dev.to":
          entries = rssFeed.querySelectorAll("item");
          for (let entry of entries) {
            feed.items.push({
              title: entry.querySelector("title").innerHTML,
              url: `${feed.baseUrl}${entry.querySelector("link").innerHTML}`,
              date: new Date(entry.querySelector("pubDate").innerHTML)
            });
          }
          break;
      }
    }
  },
  methods: {
    getRssFeed(websiteUrl) {
      let xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", websiteUrl, false);
      xmlhttp.send();
      const xmlDoc = xmlhttp.responseXML;
      return xmlDoc;

      xmlhttp.onerror = function() {
        console.log("hheeello");
      };
    }
  }
};
</script>

<style lang="scss" scoped>
h2 a {
  text-decoration: none;
}
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
