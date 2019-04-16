<template>
  <section class="container">
    <h1>Articles</h1>
    <table class="articles-list">
      <tr v-for="(item, index) in feeds[0].items" v-bind:key="'articlesKey' + index">
        <td>{{ item.date | dateFormat }}</td>
        <td>
          <a v-bind:href="item.url">{{ item.title }}</a>
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
          title: entry.querySelector("title").innerHTML,
          url: `${feed.baseUrl}${entry
            .querySelector("link")
            .getAttribute("href")}`,
          date: new Date(entry.querySelector("published").innerHTML)
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
