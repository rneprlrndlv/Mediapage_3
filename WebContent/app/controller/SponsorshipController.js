Ext.define("GNApp.controller.SponsorshipController",{
	extend: "Ext.app.Controller",
	
	config: {
        refs: {
        },

        control: {
        		"titlebar button[action=sponsorship]":{
        			tap: "onSponsorshipButtonTap"
        		} 
			}
        },
	onSponsorshipButtonTap:function(){
		location.href='http://m.goodneighbors.kr/Payment/onceSuppt.asp';
	},
});
