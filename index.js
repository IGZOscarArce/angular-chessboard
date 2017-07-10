(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.chessboard = factory();
    }
}(this, function () {
	var chessboard = require('chessboardjs');
	var ChessBoard = function (id, options) {
    return chessboard(id, options);
  }

	return ChessBoard;
}));
