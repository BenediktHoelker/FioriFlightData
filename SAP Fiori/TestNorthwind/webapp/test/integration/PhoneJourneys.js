jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"tn/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"tn/test/integration/pages/App",
	"tn/test/integration/pages/Browser",
	"tn/test/integration/pages/Master",
	"tn/test/integration/pages/Detail",
	"tn/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "tn.view."
	});

	sap.ui.require([
		"tn/test/integration/NavigationJourneyPhone",
		"tn/test/integration/NotFoundJourneyPhone",
		"tn/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});