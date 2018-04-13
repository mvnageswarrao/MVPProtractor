// Page class for Complaints Form

require ('../pages/DashBoardPage.js');

var ComplaintFormPage = function() {
    
    this.PageHeading = element(by.id('complaints_form'));
    this.BookingRef = element(by.id('bookingRef'));
	this.LNameBox = element(by.id('lName'));	
	this.Title = element(by.id('title'));	
	this.FirstName = element(by.id('fName'));
    this.LastName = element(by.id('lastName'));
    this.EmailID = element(by.id('email'));
    this.MobNumber = element(by.id('mobno'));
    this.Address = element(by.id('address'));
    this.Postcode = element(by.id('postcode'));
    this.VillaName = element(by.id('villa'));
    this.AirCon = element(by.id('ac'));
    this.Maintenance = element(by.id('maintenance'));
    this.ElectricSupply = element(by.id('electricsupply'));
    this.Transfers = element(by.id('transfer'));
    this.Housekeeping = element(by.id('housekeeping'));
    this.SwimmingPool = element(by.id('pool'));
    this.WiFi = element(by.id('wifi'));
    this.ServiceIssue = element(by.id('services'));
    this.Towels = element(by.id('towels'));
    this.WaterSupply = element(by.id('water'));
    this.CarHire = element(by.id('car'));
    this.Other = element(by.id('other'));
    this.IssueReporting = element(by.id('issuereporting'));
    this.ComplaintDetails = element(by.id('comments'));
    this.AttachedFile = element(by.id('attachment_1'));
    this.AddAttachment = element(by.id('btnAdd'));
    this.DeclarationName = element(by.id('decName'));
    this.DeclarationDate = element(by.id('decDate'));
    this.SubmitBtnOnComplaintsForm = element(by.id('btnSubmit'));
    
    this.getPageTitle = function() {
        return this.PageHeading.getText();
    };

    this.clickSubmitBtnOnComplaintsForm = function() {
        this.SubmitBtnOnComplaintsForm.click();
        return require('./ComplaintFormPage.js');
    };

};

module.exports = new ComplaintFormPage();