/* eslint-disable no-param-reassign */

const toJson = (schema) => {
  let transform;
  if (schema.options.toJSON && schema.options.toJSON.transform) {
    transform = schema.options.toJSON.transform;
  }
  schema.options.toJson = Object.assign(schema.options.toJSON || {}, {
    transform(doc, ret, options) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      if (transform) {
        return transform(doc, ret, options);
      }
    },
  });
};

module.exports = toJson;
