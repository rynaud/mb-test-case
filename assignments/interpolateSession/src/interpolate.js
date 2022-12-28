const interpolate = (value, session = {}, options = {}) => {
  var regexp = new RegExp(
    `${options.leftDelimiter}([^${options.rightDelimiter}]+)${options.rightDelimiter}`,
    "g"
  );
  return value.replace(regexp, function (ignore, key) {
    return (key = session[key]) === null ? "" : key;
  });
};

module.exports = { interpolate };
