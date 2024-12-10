const ERROR_PREFIX = '[ERROR]';

export const createError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};
