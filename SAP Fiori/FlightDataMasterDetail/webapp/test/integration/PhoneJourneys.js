jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"fdmd/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"fdmd/test/integration/pages/App",
	"fdmd/test/integration/pages/Browser",
	"fdmd/test/integration/pages/Master",
	"fdmd/test/integration/pages/Detail",
	"fdmd/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "fdmd.view."
	});

	sap.ui.require([
		"fdmd/test/integration/NavigationJourneyPhone",
		"fdmd/test/integration/NotFoundJourneyPhone",
		"fdmd/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});