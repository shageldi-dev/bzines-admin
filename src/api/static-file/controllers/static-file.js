'use strict';

/**
 * static-file controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::static-file.static-file');
