'use strict';

/**
 * Listamembros.js controller
 *
 * @description: A set of functions called "actions" for managing `Listamembros`.
 */

module.exports = {

  /**
   * Retrieve listamembros records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.listamembros.search(ctx.query);
    } else {
      return strapi.services.listamembros.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a listamembros record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.listamembros.fetch(ctx.params);
  },

  /**
   * Count listamembros records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.listamembros.count(ctx.query);
  },

  /**
   * Create a/an listamembros record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.listamembros.add(ctx.request.body);
  },

  /**
   * Update a/an listamembros record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.listamembros.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an listamembros record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.listamembros.remove(ctx.params);
  }
};
