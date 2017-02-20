jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 FlightCollection in the list
// * All 3 FlightCollection have at least one flightBookings

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
		"fdmd/test/integration/MasterJourney",
		"fdmd/test/integration/NavigationJourney",
		"fdmd/test/integration/NotFoundJourney",
		"fdmd/test/integration/BusyJourney",
		"fdmd/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});