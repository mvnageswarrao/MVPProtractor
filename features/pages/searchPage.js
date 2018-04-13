// Page class for search page

var SearchPage = function() {

	this.deptDate = element(by.id('jbBookerCalendarDepart'));
	this.retDate = element(by.id('jbBookerCalendarReturn'));	
	this.from = element(by.css('.DepartBox>img'));
	this.selectAdult = element(by.css('.passengerSelect [ng-repeat="group in config\[searchType\]\.ageGroups"]:nth-of-type(1) [src]'));
	this.enterDepAirport = element(by.id('jbBookerDepart'));
	this.enterArrAirport = element(by.id('jbBookerArrive'));	
	this.refund = element(by.css('.flightSelectionByAirlineGT [class="button-2"] span:nth-of-type(1) span'));			
};

module.exports = new SearchPage();
