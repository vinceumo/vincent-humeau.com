<template>
  <div class="container">
    <h1>Projects</h1>
    <ul>
      <li
      v-for="(item, index) in projects"
      v-bind:key="'projectKey' + index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        "A11Y",
        "DevNotes",
        "Atomic Bulldog",
        "MAG corporate",
        "Autowindscreens",
        "Cosmos"
      ]
    };
  }
};
</script>
