import Vue from "vue";

const dateFormat = function(value) {
  if (!value) return "";
  return value;
};

Vue.filter("dateFormat", dateFormat);
