import Vue from "vue";

const dateFormat = function(value) {
  return `hello ${value}`;
};

Vue.filter("dateFormat", dateFormat);
