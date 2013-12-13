var test = require('tap').test,
    request = require('request'),
    wgs84 = require('../');

test('earth is right', function (t) {
    request('http://spatialreference.org/ref/sr-org/7483/prettywkt/', function (error, response, body) {
        t.ok(body.indexOf(wgs84.RADIUS) !== -1, 'the radius is right');
        t.end();
    });
});

test('flattening is right', function (t) {
    request('http://earth-info.nga.mil/GandG/wgs84/gravitymod/egm96/egm96.html', function (error, response, body) {
        t.ok(body.indexOf(wgs84.FLATTENING_DENOM) !== -1, 'the flattening is right');
        t.end();
    });
});
