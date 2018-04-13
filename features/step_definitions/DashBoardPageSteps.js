// Login page Step definitions
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var login = require('../pages/LoginPage.js');
var dashBoard = require('../pages/DashBoardPage.js');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {
	
	When('I Provideed Valid Credentials and Opened Dash Board Page', function () {
		browser.get("https://myvillaplus.villaplus.com");
		var Ref = 'FB9672';
		var LName = "McKane";
		var DashBoardPage = login.login(Ref,LName);
		browser.waitForAngular();
		var text = "Holiday Reference: FB9672";
		return expect(dashBoard.getPageTitle()).to.eventually.equal(text);
	
		//browser.close();
	});
	   
	   var number = 2;
	 Then('Proper Num of Docs Should display', function (number) {
		return expect(dashBoard.getNumofAvailDocs).to.eventually.equal(number);
		console.log("Then Block For Num of DocsExecuted ")
	   }); 
	   
 	When('I click DownLoad Button', function () {
	dashBoard.clickDownLoadBtn();
	});	

	 Then('Respective Doc should be downloaded', function () {
		return expect(dashBoard.getNumofAvailDocs).to.eventually(number);
		console.log("Then Block for Download Executed")
	   });

	
});
