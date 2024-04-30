"use strict";

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: "select",
    plugin: "selectinput",
    type: "string",
  });
};
