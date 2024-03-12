'use strict';

/**
 * static-file router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::static-file.static-file');
