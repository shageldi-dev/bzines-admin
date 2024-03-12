'use strict';

/**
 * static-file service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-file.static-file');
