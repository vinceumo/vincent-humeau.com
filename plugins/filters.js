import Vue from "vue";

const dateFormat = function(date) {
  if (!date) return "";
  return date.toLocaleDateString("en-GB");
};

Vue.filter("dateFormat", dateFormat);
