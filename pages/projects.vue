<template>
  <section class="container">
    <h1>Projects</h1>
    <ul class="list-unstyle projects">
      <li class="project" v-for="(item, index) in projects"
        v-bind:key="'projectsKey' + index"
        v-bind:style="'border-color:' + item.brandColor">
        <div class="project-content">
          <h2 v-bind:style="'color:' + item.brandColor">{{item.title}}</h2>
          <ul class="list-unstyle has-mt-3">
            <li><b>Role: </b>{{item.role}}</li>
            <li><b>Year: </b>{{item.year}}</li>
            <li class="project-content--technologies"><b>Technologies: </b>
              <ul class="list-inline">
              <li v-for="(itemB, index) in item.technology" v-bind:key="'projectsTechKey' + index">{{itemB}}</li>
              </ul>
            </li>
            <li v-if="item.description"><b>Description: </b>{{item.description}}</li>
          </ul>
          <ul class="list-unstyle has-mt-3">
            <li v-for="(itemC, index) in item.links"
            v-bind:key="'projectsLinkTechKey' + index">
            <a v-bind:href="itemC.url">{{itemC.name}}</a>
            </li>
          </ul>
        </div>
        <div class="project-img">
          <img class="img-fluid" v-bind:src="require('~/assets/images/projects/' + item.image)" v-bind:alt="item.title + ' screenshot'">
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "A11Y - Color blindness empathy test",
          brandColor: "#108fea",
          image: "a11y-color-blindness.png",
          year: "2018",
          role: "Owner",
          technology: ["Vue.js", "SCSS", "PWA", "WebExtensions API"],
          description:
            "👁 Empathy test for color blindness and visual impairment",
          links: [
            {
              name: "View Web Project",
              url:
                "https://vinceumo.github.io/A11Y-Color-Blindness-Empathy-Test/"
            },
            {
              name: "Chrome extension",
              url:
                "https://chrome.google.com/webstore/detail/a11y-color-blindness-empa/idphhflanmeibmjgaciaadkmjebljhcc"
            },
            {
              name: "Firefox extension",
              url:
                "https://addons.mozilla.org/en-GB/firefox/addon/a11y-color-blindness-test/"
            },
            {
              name: "Web App Code",
              url:
                "https://github.com/vinceumo/A11Y-Color-Blindness-Empathy-Test"
            },
            {
              name: "Browser Extension Code",
              url:
                "https://github.com/vinceumo/A11Y-Color-Blindness-Empathy-Test-browser-extensions"
            }
          ]
        },
        {
          title: "Atomic Bulldog",
          brandColor: "#4b7e9e",
          image: "atomic-bulldog.png",
          year: "2018",
          role: "Owner",
          technology: ["SCSS", "Atomic Design", "Node KSS"],
          description:
            "🍜 Atomic Bulldog is a Scss(Sass) boilerplate base on atomic design methodology. It integrates Node KSS to automatically generate a live styleguide/pattern library.",
          links: [
            {
              name: "View Project",
              url: "https://github.com/vinceumo/atomic-bulldog"
            }
          ]
        },
        {
          title: "Atomic Bulldog Grid",
          brandColor: "#ec6ead",
          image: "atomic-bulldog-grid.png",
          year: "2018",
          role: "Owner",
          technology: ["SCSS", "CSS Grid Layout"],
          description:
            "CSS (SCSS) grid, base on CSS grid layout with @supports fallback to flexbox (partial support).",
          links: [
            {
              name: "View Project",
              url: "https://vinceumo.github.io/atomic-bulldog-grid/"
            }
          ]
        }
        // {
        //   title: "McArthurGlen",
        //   brandColor: "#cd1232",
        //   image: "mcarthurglen.jpg",
        //   year: "2017/2018",
        //   role: "Lead Front End Developer (Dam Digital)",
        //   technology: ["SCSS", "JS", "jQuery", "C#", "Episerver"],
        //   description: "Test",
        //   links: [
        //     {
        //       name: "View Project",
        //       url: "https://www.mcarthurglen.com/"
        //     },
        //     {
        //       name: "View Case Study",
        //       url: "https://www.damdigital.com/look/mcarthurglen/"
        //     }
        //   ]
        // }
      ]
    };
  }
};
</script>

<style lang="scss">
$project-card-bp: bp(md);

.projects {
  .project {
    padding: spacer(3);
    margin-bottom: spacer(4);
    background-color: white;
    border-top: spacer(2) solid;
    text-align: center;

    @include min($project-card-bp) {
      display: flex;
      justify-content: space-between;
      text-align: left;

      @include odd() {
        .project-img {
          order: -1;
          padding-right: spacer(4);
        }
      }

      @include even() {
        .project-img {
          padding-left: spacer(4);
        }
      }
    }

    .project-content {
      > * {
        @include first(1) {
          margin-top: 0;
        }

        @include last(1) {
          margin-bottom: 0;
        }
      }

      & > ul {
        & > li {
          margin-bottom: spacer(2);
        }
      }

      &--technologies {
        & > ul {
          display: inline;

          > li {
            padding: 0 spacer(2);
            background-color: color(light);
            margin: 0 spacer(2) spacer(2) 0;
          }
        }
      }
    }

    .project-img {
      padding-top: spacer(3);

      @include min($project-card-bp) {
        display: flex;
        align-items: center;
        padding-top: 0;
        max-width: 400px;
      }

      img {
        box-shadow: 5px 5px 5px hsla(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
