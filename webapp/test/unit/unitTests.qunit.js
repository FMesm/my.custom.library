/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"umg/my.custom.library/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
