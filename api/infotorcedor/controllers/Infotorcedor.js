'use strict';

/**
 * Infotorcedor.js controller
 *
 * @description: A set of functions called "actions" for managing `Infotorcedor`.
 */

module.exports = {

  /**
   * Retrieve infotorcedor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.infotorcedor.search(ctx.query);
    } else {
      return strapi.services.infotorcedor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a infotorcedor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.infotorcedor.fetch(ctx.params);
  },

  /**
   * Count infotorcedor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.infotorcedor.count(ctx.query);
  },

  /**
   * Create a/an infotorcedor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.infotorcedor.add(ctx.request.body);
  },

  /**
   * Update a/an infotorcedor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.infotorcedor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an infotorcedor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.infotorcedor.remove(ctx.params);
  }
};
