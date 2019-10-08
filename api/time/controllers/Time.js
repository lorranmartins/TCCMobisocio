'use strict';

/**
 * Time.js controller
 *
 * @description: A set of functions called "actions" for managing `Time`.
 */

module.exports = {

  /**
   * Retrieve time records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.time.search(ctx.query);
    } else {
      return strapi.services.time.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a time record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.time.fetch(ctx.params);
  },

  /**
   * Count time records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.time.count(ctx.query);
  },

  /**
   * Create a/an time record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.time.add(ctx.request.body);
  },

  /**
   * Update a/an time record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.time.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an time record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.time.remove(ctx.params);
  }
};
