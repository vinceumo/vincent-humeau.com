<template>
  <section class="container">
    <h1>Projects</h1>
    <ul class="list-unstyle projects">
      <li class="project" v-for="(item, index) in projects"
        v-bind:key="'projectsKey' + index">
        <h2 v-bind:style="'color:' + item.brandColor">{{item.title}}</h2>
        <img class="img-fluid" v-bind:src="require('~/assets/images/projects/' + item.image)" v-bind:alt="item.title + ' screenshot'">
        <ul class="list-unstyle has-mt-3">
          <li><b>Role: </b>{{item.role}}</li>
          <li class="d-inline"><b>Technology: </b>
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
          title: "Marie Curie",
          brandColor: "#ffcd00",
          image: "marie-curie.jpg",
          role: "Front End Developer (Dam Digital)",
          technology: ["SCSS", "JS", "jQuery", "C#", "Episerver", "Bootstrap"],
          description: "",
          links: [
            {
              name: "View Project",
              url: "https://www.mariecurie.org.uk/"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.projects {
  display: grid;
  grid-gap: spacer(3);
  grid-template-columns: repeat(2, 1fr);

  .project {
    padding: spacer(2);
    //border: 3px dashed color(dark);
    background-color: white;

    & > * {
      @include first(1) {
        margin-top: 0;
      }

      @include last(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
