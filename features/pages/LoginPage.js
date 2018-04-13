// Page class for LoginPage

require ('../pages/DashBoardPage.js');

var LoginPage = function() {

	this.BookingRef = element(by.name('holidayReference'));
	this.LNameBox = element(by.name('surname'));
	this.ContinueBtnDisabled = element(by.className('btn btn-success btn-round-xs vpButton bandaregularfont btndisabled'));	
	this.ContinueBtn = element(by.className('btn btn-success btn-round-xs vpButton bandaregularfont'));	
	this.errMsg = element.all(by.className('errormsg'));
	this.errMsgClose = element(by.className('close errorcolse'));

	this.enterBookingRef = function(Ref) {
		this.BookingRef.sendKeys(Ref);
	};
	
	this.enterLname = function(LName) {
		this.LNameBox.sendKeys(LName);
	};
	
	this.clickContinueBtn=function(){
		this.ContinueBtn.click();
		return require('./DashBoardPage.js');
	};
	
	this.readErrMsg=function(){
		return this.errMsg.text();
	};
	
	this.isBtnDisabled=function(){
		return ContinueBtnDisabled;
	};
	
	this.login = function(Ref,LName){
		this.enterBookingRef(Ref);
		this.enterLname(LName);
		this.clickContinueBtn();
		browser.waitForAngular();
	};
};

module.exports = new LoginPage();
