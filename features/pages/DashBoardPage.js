var DashBoard = function(){
	
	//this.pageHeading = element(by.className('heading bandaregularfont'));
	this.pageHeading = element(by.css('.heading bandaregularfont'));
	this.docsHeadings = element.all(by.css('#downloaddoc'));
	this.downLoadBtns = element.all(by.className('btn btn-orange btn-sm align-middle btnmiddle bandaregularfont'));
	this.ComplaintBtnOnDashboardPage = element(by.id('btn_Complaint'));

	this.getPageTitle = function(){
		return this.pageHeading.getText();
	};
	
	this.getNumofAvailDocs = function(){
		return this.docsHeadings.count();
	};
	
	// docsHeadings.then(function(items){
	// 	expect(items.length).tobe(4);
    // });
	
	this.clickDownLoadBtn = function(){
		this.downLoadBtns[0].click();
	};
	
	this.clickComplaintBtnOnDashboardPage = function() {
		this.ComplaintBtnOnDashboardPage.click();
		return require('./ComplaintFormPage.js');
    };
};

module.exports = new DashBoard();