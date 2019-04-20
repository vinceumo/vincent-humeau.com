<template>
  <section class="container">
    <h1>Articles</h1>
    <div v-for="(feed, index) in feeds" v-bind:key="'feedKey' + index">
      <h2>{{ feed.title }}</h2>
      <table class="articles-list">
        <tr v-for="(item, index) in feed.items" v-bind:key="'articlesKey' + index">
          <td>{{ item.date | dateFormat }}</td>
          <td>
            <a v-bind:href="item.url">{{ item.title }}</a>
          </td>
        </tr>
      </table>
    </div>
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
        },
        {
          title: "dev.to",
          baseUrl: "",
          rssFeed: "https://dev.to/feed/vinceumo",
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
