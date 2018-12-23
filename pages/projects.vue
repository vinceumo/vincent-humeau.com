<template>
  <section class="container">
    <h1>Projects</h1>
    <ul class="list-unstyle projects">
      <li class="project" v-for="(item, index) in projects"
        v-bind:key="'projectsKey' + index"
        v-bind:style="'border-color:' + item.brandColor">
        <h2 v-bind:style="'color:' + item.brandColor">{{item.title}}</h2>
          <img class="img-fluid" v-bind:src="require('~/assets/images/projects/' + item.image)" v-bind:alt="item.title + ' screenshot'">
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
          <ul class="has-mt-3 links">
            <li v-for="(itemC, index) in item.links"
            v-bind:key="'projectsLinkTechKey' + index">
            <a v-bind:href="itemC.url">{{itemC.name}}</a>
            </li>
          </ul>
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
          title: "McArthurGlen",
          brandColor: "#cd1232",
          image: "mcarthurglen.jpg",
          year: "2017/2018",
          role: "Lead Front End Developer (Dam Digital)",
          technology: ["SCSS", "JS", "jQuery", "C#", "Episerver"],
          description: "Test",
          links: [
            {
              name: "View Project",
              url: "https://www.mcarthurglen.com/"
            },
            {
              name: "View Case Study",
              url: "https://www.damdigital.com/look/mcarthurglen/"
            }
          ]
        },
        {
          title: "A11Y - Color blindness empathy test -- Browser extensions",
          brandColor: "#3c3b5a",
          image: "a11y-color-blindness-extensions.jpg",
          year: "2018",
          role: "Owner",
          technology: ["WebExtensions API"],
          description:
            "👁 Browser extensions to test color blindness and visual impairment. ",
          links: [
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
              name: "Browser Extension Code",
              url:
                "https://github.com/vinceumo/A11Y-Color-Blindness-Empathy-Test-browser-extensions"
            }
          ]
        },
        {
          title: "A11Y - Color blindness empathy test",
          brandColor: "#acb139",
          image: "a11y-color-blindness.jpg",
          year: "2018",
          role: "Owner",
          technology: ["Vue.js", "Webpack", "SCSS", "PWA"],
          description:
            "👁 Empathy test for color blindness and visual impairment",
          links: [
            {
              name: "View Project",
              url:
                "https://vinceumo.github.io/A11Y-Color-Blindness-Empathy-Test/"
            },
            {
              name: "View Code",
              url:
                "https://github.com/vinceumo/A11Y-Color-Blindness-Empathy-Test"
            }
          ]
        },
        {
          title: "DevNotes",
          brandColor: "#EDAB1D",
          image: "devnotes.jpg",
          year: "2018",
          role: "Owner",
          technology: ["Jekyll", "Gulp", "SCSS", "PWA"],
          description:
            "✒ DevNotes/ TIL (Today I Learnt) is a collection of things I learned around web development",
          links: [
            {
              name: "View Project",
              url: "https://vinceumo.github.io/devNotes/"
            },
            {
              name: "View Code",
              url: "https://github.com/vinceumo/devNotes"
            }
          ]
        },
        {
          title: "Atomic Bulldog",
          brandColor: "#4b7e9e",
          image: "atomic-bulldog.jpg",
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
          image: "atomic-bulldog-grid.jpg",
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
      ]
    };
  }
};
</script>

<style lang="scss">
$project-card-bp: bp(md);

.projects {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: spacer(3);

  @include min($project-card-bp) {
    grid-template-columns: repeat(2, 1fr);
  }
  .project {
    padding: spacer(3);
    background-color: white;
    border-top: spacer(2) solid;

    .project-content--technologies {
      & > ul {
        display: inline;

        > li {
          padding: 0 spacer(2);
          background-color: color(light);
          margin: 0 spacer(2) spacer(2) 0;
        }
      }
    }

    img {
      box-shadow: 5px 5px 5px hsla(0, 0, 0, 0.1);
    }
  }
}
</style>
