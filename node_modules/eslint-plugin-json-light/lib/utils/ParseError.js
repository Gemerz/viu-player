module.exports = class ExtendableError extends Error {
  constructor(message, hash) {
    super(message);
    this.name = this.constructor.name;
    this.hash = hash;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
};
