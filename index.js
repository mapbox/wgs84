module.exports.RADIUS = 6378137;
module.exports.FLATTENING_DENOM = 298.257223563
module.exports.FLATTENING = 1/module.exports.FLATTENING_DENOM;
module.exports.POLAR_RADIUS = module.exports.RADIUS*(1-module.exports.FLATTENING);
