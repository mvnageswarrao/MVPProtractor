// Login page Step definitions
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var login = require('../pages/LoginPage.js');
var dashBoard = require('../pages/DashBoardPage.js');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {
	When('I Provide Blank Credentials', function () {
		login.enterBookingRef("");
		login.enterLname("");
	});

	Then('Continue Button should be in Disable mode', function () {
		expect(login.isBtnDisabled()).to.eventually.equal(false);
				console.log("Then Block For Blank executed");

	});

	When('I Provide InValid Credentials', function () {
		var Ref = 'Veera';
		var LName = "Mundra";
		var DashBoardPage = login.login(Ref,LName);
		browser.waitForAngular();
		//browser.close();
	});

	var text = "We`re sorry, we could not find your booking. Please check the details entered match the booking invoice.Alternately if you`d prefer to speak to somebody please call us on 01727 836 686 with the Holiday Reference and the Lead Passenger Surname.";

	Then('Should display Error Message', function (text) {
		//expect(login.readErrMsg).to.eventually.equal(text);
		console.log("Then Block For Invalid executed");
		browser.close();
	});

	When('I Provide Valid Credentials', function () {
		browser.get("https://myvillaplus.villaplus.com");

		var Ref1 = 'FB9672';
		var LName1 = "McKane";
		var DashBoardPage = login.login(Ref1,LName1);
		browser.waitForAngular();
	});

	var text = "Holiday Reference: FB9672";
	 Then('Should display Dash Board Page', function (text) {
		//expect(dashBoard.getPageTitle()).to.eventually(text)
		console.log("Then Block for Valid is Executed")
		browser.close();

	   });
	

});

defineSupportCode(function ({ Given, When, Then }) {

	browser.get("https://myvillaplus.villaplus.com");

	/* When('I Provide Valid Credentials', function (done) {
		var Ref1 = 'FB9672';
		var LName1 = "McKane";
		var DashBoardPage = login.login(Ref1,LName1);
		browser.waitForAngular();
	});

	var text = "Holiday Reference: FB9672";
	 Then('Should display Dash Board Page', function (text) {
		expect(dashBoard.getPageTitle()).to.eventually(text)
		browser.close();

	   }); */


});

