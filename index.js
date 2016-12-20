'use strict';

var _Rate = require('./lib/rate/Rate.js');

var _Rate2 = _interopRequireDefault(_Rate);

var _Upvote = require('./lib/upvote/Upvote.js');

var _Upvote2 = _interopRequireDefault(_Upvote);

var _Inputbox = require('./lib/inputbox/Inputbox.js');

var _Inputbox2 = _interopRequireDefault(_Inputbox);

var _Inputarea = require('./lib/inputbox/Inputarea.js');

var _Inputarea2 = _interopRequireDefault(_Inputarea);

var _Imagebox = require('./lib/imagebox/Imagebox.js');

var _Imagebox2 = _interopRequireDefault(_Imagebox);

var _Random = require('./lib/random/Random.js');

var _Random2 = _interopRequireDefault(_Random);

var _Droplist = require('./lib/droplist/Droplist.js');

var _Droplist2 = _interopRequireDefault(_Droplist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	Rate: _Rate2.default,
	Upvote: _Upvote2.default,
	Inputbox: _Inputbox2.default,
	Inputarea: _Inputarea2.default,
	Imagebox: _Imagebox2.default,
	Random: _Random2.default,
	Droplist: _Droplist2.default
};
