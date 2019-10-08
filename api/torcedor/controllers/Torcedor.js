'use strict';

/**
 * Torcedor.js controller
 *
 * @description: A set of functions called "actions" for managing `Torcedor`.
 */

module.exports = {

  /**
   * Retrieve torcedor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.torcedor.search(ctx.query);
    } else {
      return strapi.services.torcedor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a torcedor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.torcedor.fetch(ctx.params);
  },

  /**
   * Count torcedor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.torcedor.count(ctx.query);
  },

  /**
   * Create a/an torcedor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.torcedor.add(ctx.request.body);
  },

  /**
   * Update a/an torcedor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.torcedor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an torcedor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.torcedor.remove(ctx.params);
  }
};
