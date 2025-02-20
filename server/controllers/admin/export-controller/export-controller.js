'use strict';

const { getService } = require('../../../utils');
const { handleAsyncError } = require('../../content-api/utils');

const exportData = async (ctx) => {
  if (!hasPermissions(ctx)) {
    return ctx.forbidden();
  }

  let { slug, search, applySearch, exportFormat, relationsAsId, deepness = 5 } = ctx.request.body;

  const data = await getService('export').exportData({ slug, search, applySearch, exportFormat, relationsAsId, deepness });

  ctx.body = {
    data,
  };
};

const hasPermissions = (ctx) => {
  let { slug } = ctx.request.body;
  const { userAbility } = ctx.state;

  const permissionChecker = strapi.plugin('content-manager').service('permission-checker').create({ userAbility, model: slug });

  return permissionChecker.can.read();
};

module.exports = ({ strapi }) => ({
  exportData: handleAsyncError(exportData),
});
