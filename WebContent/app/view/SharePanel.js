var sizeWidth = window.screen.availWidth / 2;
var sizeHeight = window.screen.availHeight / 3;

/*
html : [ '<canvas id="mapCanvas" width="' + 300 + '" height="' + 200 + '">Please HTML5</canvas><br>' ].join("")
*/
Ext.define("GNApp.view.SharePanel", {
	extend: "Ext.Panel",	
	xtype: "sharepanel",	
	id: "sharepanel",
	
	config: {
		layout:{type:'vbox'},
		items: [
		        /*
		        {
		        	xtype: "panel",
		        	id: "shareTopArea",
		        	layout: {type: "hbox", pack : "justify"},
		        	items :[
		        	       {
		        	    	   
		        	    	   html:['<center><img src = "resources/gnmarker.jpg" height="25"/></center>']
		        	       } 
		        	       ]
		        }
		        ,
		        */
		        {
		        	html:['<div id = "donationCondition"><center><b>현재까지 기부현황 : 총 500명 참여</b></center></div>']
		        },
		        
			{
		        // 지도 캔버스
				xtype : 'panel',
				id : 'mapArea',
				html : ['<div id="map_canvas" style = "width : 100%; height : '+sizeHeight+'px;"></div>' ].join("")
			},
			/*
			{   
				xtype: "fieldset",
				items: [
					{ xtype: "textfield", 	name: "id", label: "Id" },
					{ xtype: "textareafield", 	name: "comment", label: "Comment"}
				]
			},
			*/
			{
				//글쓰기 버튼 지역
				xtype: "panel",
				id : "buttonArea",
				layout: {type: "hbox", pack: "end"},
				items:[
				       {
				    	 html: ['<div id = "commentOfFlag">깃발을 클릭하면 자세히 볼 수 있습니다.</div>']  
				       },
						{
							xtype: "button", id: "btnOk", action: "sendOk", height: "10",
							text: "글쓰기", ui: "confirm", scale: 'small'
						}
				       ]
			},
			
			{
				// 게시물 지역
				xtype : 'list',
				itemId : 'tweetList',
				itemTpl : [
						'<div style="float:left; width: 60px;">',
						'  <img src="{profile_image_url}">',
						'</div>',
						'<div style="margin-left: 62px;">',
						'  {text}<br>{created_at:date("d M Y")}<br/>',
						'{id}<br/>',
						'{description}',
						'</div>' ],
				store : 'Tweets',
				flex: 1
				
			}
			
		]
	}
});