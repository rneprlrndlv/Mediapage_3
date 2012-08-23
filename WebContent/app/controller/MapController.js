var mapdiv;
var map;
var flag = true;
//TODO 나중에 하기 화면크기 적용 나중에 고민하자
/*
function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map_canvas");
    
  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}
*/



var regionString = new Array();
regionString[0] = "차드";
regionString[1] = "케냐";
regionString[2] = "르완다";
regionString[3] = "에티오피아";
regionString[4] = "이집트";
regionString[5] = "탄자니아";
regionString[6] = "말라위";
// 초기화 지도 렌더링
 function initialize() {
	 // 초기 위치 설정
	 var centerLatlng = new google.maps.LatLng(2.3811507461795243, 23.73046875);	 
	 var schoolLatLngList = new Array();	 
	 var i; 
	 // 학교 위치 저장
	 for(i = 0; i < 7; i++){
		 schoolLatLngList[i] = new google.maps.LatLng(positionInfoList[i].x, positionInfoList[i].y);	 
	 }
	 
   // 지도 옵션
   var myOptions = {
      zoom: 3,
      center: centerLatlng,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
   // 지도 객체 생성
   map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);

   
   // 팝업 안 내용 스트링
   var schoolContent = new Array();
   for(var i = 0; i<7; i++){
	   schoolContent[i] =
	   '<img src = "resources/hopeforafrica.png" height="50"/>'+
	   '<div id = "mapContent">' +
	   regionString[i] +
	   '</div>';
	   
   }
   
   // 팝업윈도우 설정
   var infowindowList = new Array();
   for(i = 0; i<7; i++){
	   infowindowList[i] = new google.maps.InfoWindow({
			  content : schoolContent[i],
			  maxWidth: 200
		   }); 
   }

   // 마커생성
   var markerList = new Array();
   for(i = 0; i<7; i++){
	   markerList[i] = new google.maps.Marker({
		   position: schoolLatLngList[i],
		   map: map,
		   title: ''+regionString[i]+''
	   });
   }

   // 나라 클릭하면 말풍선 생기고 자신을 제외한 모든 정보는 사라지게한다.
   for(i = 0; i<7; i++){
	   (function(m){
		   google.maps.event.addListener(markerList[m], 'click', function(){
			   for(var j = 0; j<7; j++){
				(function(n){
					if(m != n){
						infowindowList[n].close();	
					}   
				   })(j);	
				}
			   infowindowList[m].open(map, markerList[m]); 
			});      
		   
	   })(i);
   }
  
}


// 위치 정보 리스트
var positionInfoList = new Array();
// 포인트 객체
 Point = function(x, y){
		this.x = x;
		this.y = y;
	};
////////////////////////////////////////////////////////////////////
/**
 * 위치정보
 */

// 6개네~~~~~
// 차드 1, 2호
positionInfoList[0] = new Point(14.871530941232791, 18.5888671875);
// 케냐 3호 (진행중)
positionInfoList[1] = new Point(0.38561727300386367, 37.9248046875);
// 르완다
positionInfoList[2] = new Point(-2.1286603959017336, 29.7509765625);
// 에티오피아
positionInfoList[3] = new Point(8.45498586024049, 39.0234375);
// 이집트
positionInfoList[4] = new Point(26.776020282399745,  30.1025390625);
// 탄자니아
positionInfoList[5] = new Point(-6.354607548316607, 34.98046875);
// 말라위
positionInfoList[6] = new Point(-13.643851433773083, 33.92578125);
///////////////////////////////////////////////////////////////////////
 // 지금 안쓴다.
var canvas;
var context;
var image;
var flag = new Array();


var overlayPanel;

// 컨트롤 시작
Ext.define('GNApp.controller.MapController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
        	shareMainView : 'sharemainview',
        	mapArea: 'mappanel #mapArea',
        	inputArea: 'sharepanel #inputArea',
        	flagOverlay: 'aboutschooloverlay'
        },

        control: {
        	"#btnOk" : {
        		tap : "onWriteComment"
        	}
        }        
    },
   
    
    // 초기화 작업
    launch: function() {
    	//initialize();
    	
	}
    ,
    //TODO 글쓰기 클릭, 오버레이 띄우는거 해야되
    onWriteComment : function(btn, e){
    	console.log("clcik!!!");
    }
    
    
});