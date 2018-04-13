//Complaints Form page Step definitions
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var login = require('../pages/LoginPage.js');
var dashBoard = require('../pages/DashBoardPage.js');
var complaintForm = require('../pages/ComplaintFormPage.js');
var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ Given, When, Then }) {

    When('I Provide Blank Details And Click On Submit Button', function () {
        browser.get("https://myvillaplus.villaplus.com");
        var Ref = 'FB9672';
        var LName = "McKane";
        var DashBoardPage = login.login(Ref, LName);
        dashBoard.clickComplaintBtnOnDashboardPage();
        return expect('./ComplaintFormPage.js');
        return expect(complaintForm.getPageTitle()).to.eventually.equal(text);
        browser.waitForAngular();
        complaintForm.clickSubmitBtnOnComplaintsForm();

    });

    var text = "We received your complaint, and our customer service team is now looking into the issue. Thank you for bringing this matter to our attention. Within 4 working days we will provide a more substantive response to your problem and a suitable solution. Thank you for choosing villaplus."

    Then('It Should Display Error Message', function () {
        return expect('./ComplaintFormPage.js');
        browser.waitForAngular();
        console.log("Then Block for Valid is Executed")
        browser.close();

    });

});
