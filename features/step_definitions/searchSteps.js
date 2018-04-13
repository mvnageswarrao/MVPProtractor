// Step definitions

var search = require('../pages/searchPage.js');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {	
	
	/* Given('On MVP Login Page'), function(){
		browser.get('https://Myvillaplus.villaplus.com');
	}; */
	When( 'I open the Flights Page', function (done)	
	{
		//Select Source Airport			
		browser.sleep(30000); 
		 from =element(by.css('.DepartBox>img'));
		browser.executeScript("arguments[0].scrollIntoView();",from);
		browser.executeScript("arguments[0].click();",from);

		//search.from.click();
		browser.driver.switchTo().activeElement();
		browser.pause(30000); 		
		element.all(by.css('.region-list-container>a')).get(0).click();
		browser.pause(30000); 		
		element.all(by.css('.country-list> li')).get(12).click();		

		//Enter Destination Airport 
		browser.wait(EC.visibilityOf(search.selectAdult), 200000);
		search.enterArrAirport.click();
		search.enterArrAirport.sendKeys('South Florida Area');
		browser.manage().timeouts().implicitlyWait(4000);

		//Enter Deptature Date
		browser.wait(EC.visibilityOf(search.deptDate), 200000);
		search.deptDate.click();
		search.deptDate.sendKeys("03-15-2018");

		//Enter Arrival Date
		browser.wait(EC.visibilityOf(search.retDate), 200000);
		search.retDate.click();
		search.retDate.sendKeys("03-20-2018");
		
		//Select Adults
		browser.wait(EC.visibilityOf(search.selectAdult), 200000);
		search.selectAdult.click();		
		element.all(by.xpath(".//*[@id='jbBookerGroup-0']/div/ol/li")).get(2).click();

		//Click on the Find It button.
		var btnFind= element(by.xpath("//input[@value='Find it']"));
		btnFind.click();
		browser.sleep(60000);
		browser.waitForAngularEnabled(false);
		search.refund.click();
		browser.sleep(60000);
		browser.waitForAngularEnabled(false);

		//Select the Flights
      	element(by.id('ffGroupButton_od1_gr2')).click();
      	browser.sleep(20000);
      	element(by.id('flightSelectGr_0_50')).click();
      	browser.sleep(20000);
      	element(by.id('ffGroupButton_od2_gr2')).click();		
		var returnflight =element(by.id('flightSelectGr_1_391'));
		browser.executeScript("arguments[0].scrollIntoView();",returnflight);
		browser.executeScript("arguments[0].click();",returnflight);		
		browser.sleep(20000);
		element(by.id('summaryBlockHeader')).click();
		browser.sleep(20000);
		element(by.id('pgButtonNext')).click();
		browser.sleep(20000);
		browser.driver.switchTo().activeElement();
		element(by.css('.button1')).click();
		browser.sleep(40000);


		//Enter the Passenger Details
		var titles = "//select[contains(@id,'.title')]";
		element.all(by.xpath(titles)).then(function (alltitles)
		 {
		  for (t = 0; t < alltitles.length; t++) 
		  {
			alltitles[t].$('[value="MR"]').click();
		  }
		});
	
		element.all(by.xpath("//input[contains(@id,'.firstName')]")).then(function (allvalues)
		 {
		  for (var i = 0; i < allvalues.length; i++)
		   {
			allvalues[i].sendKeys("Vipul");
		  }
		});
	
	
		element.all(by.xpath("//input[contains(@id,'.lastName')]")).then(function (alllastname)
		 {
		  for (var i = 0; i < alllastname.length; i++)
		   {
			alllastname[i].sendKeys("Saste");
		  }
		});
	
		element.all(by.xpath("//input[contains(@id,'.gender')]")).then(function (genderlist) 
		{
		  for (var i = 0; i < genderlist.length; i++) 
		  {
			genderlist[i].click();
		  }
		});
	
		var dobMonth = "//select[contains(@id,'(dobMonth)')]";
		var dobDate = "//select[contains(@id,'(dobDay)')]";
		var dobYear = "//select[contains(@id,'(dobYear)')]";
	
		element.all(by.xpath(dobMonth)).then(function (allMonth) 
		{
		  for (t = 0; t < allMonth.length; t++) 
		  {
			allMonth[t].$('[value="11"]').click();
		  }
		});
	
	
		element.all(by.xpath(dobDate)).then(function (allDay) 
		{
		  for (t = 0; t < allDay.length; t++) 
		  {
			allDay[t].$('[value="15"]').click();
		  }
		});
	
		element.all(by.xpath(dobYear)).then(function (allYear) 
		{
		  for (t = 0; t < allYear.length; t++) 
		  {
			allYear[t].$('[value="1986"]').click();
		  }
		});
	
		var addressLine1 = element(by.id('travellersInfo[0].advancedPassengerDetails(addressLine1)'));
		addressLine1.sendKeys("Test Add");
		var cityName = element(by.id('travellersInfo[0].advancedPassengerDetails(cityName)'));
		cityName.sendKeys("Test Home");
		element(by.id('travellersInfo[0].advancedPassengerDetails(stateCode)Display')).$('[value="AK"]').click();
		var poCode = element(by.id('travellersInfo[0].advancedPassengerDetails(postalCode)'));
		poCode.sendKeys("12345")
		var personalEmail = element(by.id('travellersInfo[0].advancedPassengerDetails(personalEmail)'));
		personalEmail.sendKeys("saste_vipul@rediffmail.com");
		var confirmPersonalEmail = element(by.id('travellersInfo[0].advancedPassengerDetails(confirmPersonalEmail)'));
		confirmPersonalEmail.sendKeys("saste_vipul@rediffmail.com");
		var personalEmail1 = element(by.id('travellersInfo[1].advancedPassengerDetails(personalEmail)'));
		personalEmail1.sendKeys("saste_vipul@rediffmail.com");
		var phNumber = element(by.id('travellersInfo[0].homePhone.phoneNumber'));
		phNumber.sendKeys("12345678900");
		browser.sleep(40000);
	
		//Click on the Home Page Link
		var HomePageOpen = element(by.id('returnToJB')).click();
		//browser.close();

							
	});
	
	
});
