jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Customers in the list
// * All 3 Customers have at least one Orders

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
		"tn/test/integration/MasterJourney",
		"tn/test/integration/NavigationJourney",
		"tn/test/integration/NotFoundJourney",
		"tn/test/integration/BusyJourney",
		"tn/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});