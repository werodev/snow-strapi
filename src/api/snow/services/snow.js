'use strict';

/**
 * snow service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::snow.snow');
