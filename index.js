'use strict';

var _Random = require('./lib/display/Random.js');

var _Random2 = _interopRequireDefault(_Random);

var _Rate = require('./lib/attitude/Rate.js');

var _Rate2 = _interopRequireDefault(_Rate);

var _Inputarea = require('./lib/input/Inputarea.js');

var _Inputarea2 = _interopRequireDefault(_Inputarea);

var _Inputbox = require('./lib/input/Inputbox.js');

var _Inputbox2 = _interopRequireDefault(_Inputbox);

var _Vote = require('./lib/attitude/Vote.js');

var _Vote2 = _interopRequireDefault(_Vote);

var _AddtoList = require('./lib/list/AddtoList.js');

var _AddtoList2 = _interopRequireDefault(_AddtoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
	Random: _Random2.default,
	Rate: _Rate2.default,
	Inputarea: _Inputarea2.default,
	Inputbox: _Inputbox2.default,
	Vote: _Vote2.default,
	AddtoList: _AddtoList2.default
};
