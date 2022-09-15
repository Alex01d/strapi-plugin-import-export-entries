'use strict';

module.exports = {
  default: {
    /**
     * Public hostname of the server.
     */
    serverPublicHostname: '',
    /**
     * Ignore extension check (trust imported JSON/CSV) or not.
     */
    ignoreExtensionCheck: false,
    importUniqueIdentifierField: undefined,
  },
  validator: ({ serverPublicHostname } = {}) => {
    if (typeof serverPublicHostname !== 'string') {
      throw new Error('serverPublicHostname has to be a string.');
    }
  },
};
