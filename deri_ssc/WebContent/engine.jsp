<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<html xmlns="http://www.w3.org/1999/xhtml">
<head> 

	<title>SSC Engine</title> 
	<link rel="stylesheet" href="css/Layout/base.css" type="text/css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/Layout/layout-default-latest.css" />
	<link rel="stylesheet" type="text/css" href="css/Layout/tabspanel.css" />
	<link rel="stylesheet" type="text/css" href="css/Layout/complex.css" />
	<link rel="stylesheet" type="text/css" href="css/Layout/datetimepicker.css" />
	<link rel="stylesheet" href="css/style.css"/>
	<link rel="stylesheet" href="css/jsPlumbDemo.css"/>
	<link rel="stylesheet" href="css/drawingArea.css"/>
	<link rel="stylesheet" type="text/css" media="screen" href="css/Layout/droppable_layout.css" />
	<link rel="stylesheet" type="text/css" media="screen" href="css/Layout/droppable_widget.js.css" />

	<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.23/themes/base/jquery-ui.css" type="text/css" media="all" />
	<link rel="stylesheet" href="http://static.jquery.com/ui/css/demo-docs-theme/ui.theme.css" type="text/css" media="all" />
	<link rel="stylesheet" type="text/css" media="screen" href="css/Layout/discover.css" />
	
	<link href='css/VisualSP/dialog.css' rel='stylesheet' type='text/css' />
	<link href='css/VisualSP/components.css' rel='stylesheet' type='text/css' />
	<link rel="stylesheet" type="text/css" media="screen" href="css/Layout/progressbar.css" />

	<style type="text/css">
		p				{ margin:		1em 0; }
	
		/* use !important to override UI theme styles */
		.grey			{ background:	#999 !important; }
		.outline		{ /*border:		1px dashed #F00 !important;*/ }
		.add-padding	{ padding:		10px !important; }
		.no-padding		{ padding:		0 !important; }
		.add-scrollbar	{ overflow:		auto; }
		.no-scrollbar	{ overflow:		hidden; }
		.allow-overflow	{ overflow:		visible; }
		.full-height	{ height:		100%; }
/* 		button			{ cursor:		pointer; } */

		.ui-dialog .ui-dialog-titlebar, .ui-dialog .ui-dialog-buttonpane,.ui-dialog label { font-size: 0.75em; }
	
	</style>
	
	<script type="text/javascript" src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=AIzaSyCs4ADEYjC2PWjoZBpHRm1wG_q1Z2MQ-CY"></script>
	<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js'></script>		
	<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.13/jquery-ui.min.js'></script>	
  	
	<script src="js/Twitter/jquery.livetwitter.js" type="text/javascript"></script>

	<script type="text/javascript" src="js/jshashtable-2.1.js"></script>
	<script type="text/javascript" src="js/Object/MashupVariables.js"></script>
	<script type="text/javascript" src="js/Object/windowMeta.js"></script>
	
<!-- 	<script type="text/javascript" src="js/Layout/jquery.layout.resizePaneAccordions.min-1.0.js"></script> -->
    <script type="text/javascript" src="js/Layout/themeswitchertool.js"></script>
    <script type="text/javascript" src="js/Layout/jquery-ui-timepicker-addon.js"></script>    
    <script type="text/javascript" src="js/Layout/progressbar_mini.js"></script> 
	<script type='text/javascript' src='js/jquery.jsPlumb-1.3.15-all.js'></script>
	
	<script type="text/javascript" src="js/mainPage_events.js"></script>	
	<script type="text/javascript" src="js/drawingArea.js"></script>
	<script type="text/javascript" src="js/drawingArea-jquery.js"></script>

	<script type="text/javascript" src="js/demo-list.js"></script>
	<script type="text/javascript" src="js/demo-helper-jquery.js"></script>
	
	<script type="text/javascript" src="js/Layout/jquery.layout.js"></script>
	<script type="text/javascript" src="js/Layout/debug.js"></script>
	<script type='text/javascript' src='https://www.google.com/jsapi'></script>
	<script type='text/javascript' src="js/jquery.simpleWeather.js" charset="utf-8"></script>
	<script type='text/javascript' src="js/Object/BlockDom.js" charset="utf-8"></script>
	<script type='text/javascript' src="js/Object/SSCBlock.js" charset="utf-8"></script>
	<script type='text/javascript' src="js/Layout/jquery.gmap-1.1.0-min.js" charset="utf-8"></script>

	
	<script type="text/javascript" src="http://yui.yahooapis.com/2.5.0/build/yahoo-dom-event/yahoo-dom-event.js"></script>
	<script type="text/javascript" src="http://yui.yahooapis.com/2.5.0/build/element/element-beta-min.js"></script>
	<script type="text/javascript" src="http://yui.yahooapis.com/2.5.0/build/connection/connection-min.js"></script>
	<script type="text/javascript" src="http://yui.yahooapis.com/2.5.0/build/tabview/tabview-min.js"></script>
	

	<script type="text/javascript">
	google.load('visualization', '1', {packages:['gauge']});
	google.load('visualization', '1', {packages:['table']});
	google.load('visualization', '1', {'packages':['motionchart']});
	google.setOnLoadCallback(window.drawChart);
	google.setOnLoadCallback(window.drawHistorycalChart);
	google.setOnLoadCallback(window.drawTable);
	$(document).ready(function () {		
		// OUTER/PAGE LAYOUT
		pageLayout = $("body").layout({ // DO NOT use "var pageLayout" here
			west__size:			.15 
		,	south__size:		.25
		,	east__size:			.20 
		,	south__initClosed:	false
		,	north__initClosed:	false
		,	east__initClosed:	true
		,	west__onresize:		$.layout.callbacks.resizePaneAccordions // west accordion a child of pane
// 		,	east__onresize:		$.layout.callbacks.resizePaneAccordions // east accordion nested inside a tab-panel
		}); 

		// TABS INSIDE EAST-PANE
		pageLayout.panes.east.tabs({
			show:				$.layout.callbacks.resizePaneAccordions // resize tab2-accordion when tab is activated
		});
		pageLayout.sizeContent("east"); // resize pane-content-elements after creating east-tabs

		// INIT ALL ACCORDIONS - EVEN THOSE NOT VISIBLE
		$("#accordion-west")	.accordion({ fillSpace: true });
		$("#accordion-center")	.accordion({ fillSpace: true });
		$("#accordion-east")	.accordion({ fillSpace: true });

		// THEME SWITCHER
		addThemeSwitcher('#east-toolbar',{ top: '12px', right: '5px' });
		setTimeout( pageLayout.resizeAll, 2000 ); /* allow time for browser to re-render with new theme */
		
		$(".tab_content").hide();
		$(".tab_content:first").show(); 

		$("ul.tabs li").click(function() {
			$("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".tab_content").hide();
			var activeTab = $(this).attr("rel"); 
			$("#"+activeTab).fadeIn(); 
		});
		
		
		$("#draggable").draggable({
		//	use a helper-clone that is append to 'body' so is not 'contained' by a pane
			helper:	function () { return $(this).clone().appendTo('body').css('zIndex',5).show(); }
		,	cursor:	'move'
		});
		
		$(".icon_draggable").draggable({
			//	use a helper-clone that is append to 'body' so is not 'contained' by a pane
				helper:	function () { return $(this).clone().appendTo('body').css('zIndex',5).show(); }
			,	cursor:	'move'
			});
		
	});
	</script> 
    
</head> 
<body onunload="jsPlumb.unload();"> 

<div class="ui-layout-north">
	<div id="mainmenu" align='left' style="float:left;width:100%;">
	    <a  id="sscHome" href="#">Home</a>
<!-- 		<a  id="sscWidget" href="#">Widget</a> -->
<!-- 		<a  id="sscAbout" href="#">About</a> -->
	</div>
</div> 

<div class="ui-layout-south ui-widget-content add-padding">
	 <ul class="tabs"> 
        <li class="active" rel="sparqlTab"> Query</li>
        <li rel="rawdataTab"> Text view</li>
        <li rel="tripleTab"> Triple view</li>
        <li rel="visualizationTab"> Result Visualization</li>
    </ul>
 
    <div class="tab_container"> 
	    <div id="sparqlTab" class="tab_content">		
				<textarea cols="90" rows="12" style="float:left;text-align:left;" id="txtQuery" class="sparql">	
				</textarea>		
				<button id="sparqlvisual" class="button">Sparql visualization</button>		
	     </div><!-- #tab1 -->
	     <div id="rawdataTab" class="tab_content" style="font-size:1em">     
				<textarea  rows="15" style="float:left;width:100%;text-align:left;" id="txtRawData" class="sparql">
				</textarea>	
	     </div>
	     <div id="tripleTab" class="tab_content">        
			 <div id="tableContent" style="overflow:auto">
			 </div>
	     </div>
	     <div id="visualizationTab" class="tab_content">		

		</div>      
 	</div> <!-- .tab_container --> 

</div> 


<div class="ui-layout-west scrollbar add-padding">
	<div id="accordion-west" align="center" style="font-size:0.8em" title="drag icon to editor area">

			<h3><a href="#">LSM Sensors</a></h3>
			<div >
				<p><a href="#"><img src="images/LSMSensor/weather.png" class="icon_draggable" category="LSMSensor" type="Weather"><br/>Weather</a><br/>	
				<p><a href="#"><img src="images/LSMSensor/pachube.png" class="icon_draggable" category="LSMSensor" type="COSM"><br/>COSM</a> <br/>		
				<p><a href="#"><img src="images/LSMSensor/trainstation.png" class="icon_draggable" category="LSMSensor" type="Railway Station"><br/>Train</a> <br/>
				<p><a href="#"><img src="images/LSMSensor/icon_airport.png" class="icon_draggable" category="LSMSensor" type="Airport"><br/>Airport</a> <br/>
				<p><a href="#"><img src="images/LSMSensor/icon_bikehire.png" class="icon_draggable" category="LSMSensor" type="Bike hire"><br/>Bike hire</a> <br/>	
				<p><a href="#"><img src="images/LSMSensor/camera.png" class="icon_draggable" category="LSMSensor" type="Traffic"><br/>Traffic camera</a> <br/>
				<p><a href="#"><img src="images/LSMSensor/gsn.png" class="icon_draggable" category="LSMSensor" type="GSN"><br/>GSN</a> <br/>
			</div>
			
			<h3><a href="#">Sources</a></h3>
			<div>
				<p><a href="#"><img src="images/LSMSensor/lsmstream.png" class="icon_draggable" category="Stream" type="LSMStream"><br/>LSM Stream</a><br/>	
				<p><a href="#"><img src="images/LSMSensor/twitter.png" class="icon_draggable" category="Stream" type="Twitter"><br/>Twitter</a> <br/>						
				<p><a href="#"><img src="images/LSMSensor/sparql.png" class="icon_draggable" category="Sources" type="EndPoint"><br/>Sparql Endpoint</a><br/>
				<p><a href="#"><img src="images/LSMSensor/url.png" class="icon_draggable" category="Sources" type="URL"><br/>URL</a><br/>
			</div>
			<h3><a href="#">Operators</a></h3>
			<div>
				<p><a href="#"><img src="images/LSMSensor/output.png" class="icon_draggable" category="Operators" type="Merge"><br/>Merge</a><br/>
				<p><a href="#"><img src="images/LSMSensor/stream.png" class="icon_draggable" category="Operators" type="ToRDFStream"><br/>To RDF stream</a><br/>
				<p><a href="#"><img src="images/LSMSensor/location.png" class="icon_draggable" category="Operators" type="Location"><br/>Location</a><br/>
				<p><a href="#"><img src="images/LSMSensor/timer.png" class="icon_draggable" category="Operators" type="Timer"><br/>Timer</a><br/>
				<p><a href="#"><img src="images/LSMSensor/cqels.png" class="icon_draggable" category="Operators" type="Cqels"><br/>Cqels filter</a>
			</div>

	</div>
</div>


<div id="tabs-center" class="ui-layout-center no-scrollbar add-padding">
	<!-- center Tabs layout -->
	<div class="ui-layout-content">
		<div class="ui-layout-content">
			<div  style="float:right;border: 1px solid;width: 300px;height:15px">
		   		<a id="login" href="#">Login</a>
		   		<a id="discard" href="#">Discard</a>
		   		<a id="save" href="#">Save</a>
		   		<a id="load" href="#">Load</a>
			</div>
			<div id="demo" >
			</div>
		</div>
	</div>
</div>


<div id="tabs-east" class="ui-layout-east no-padding no-scrollbar">
	<div class="ui-widget-header no-scrollbar add-padding" style="margin: 0 1px;">
		Utilities
	</div>
	<ul class="allow-overflow">
		<li><a href="#tab-panel-east-1">Widget Debug</a></li>
<!-- 		<li><a href="#tab-panel-east-2">Tab 2</a></li> -->
<!-- 		<li><a href="#tab-panel-east-3">Tab 3</a></li> -->
	</ul>
	
	    <script type="text/javascript">
        var ws = null;
		var socketId;
        function setConnected(connected) {
            document.getElementById('connect').disabled = connected;
            document.getElementById('disconnect').disabled = !connected;
            document.getElementById('echo').disabled = !connected;
        }

        function testConnect() {
            var target = document.getElementById('target').value;
            var n=target.lastIndexOf("/");
            socketId = target.substring(n+1);
            target = target.substring(0,n);
            
            if (target == '') {
                alert('Please select server side connection implementation.');
                return;
            }
            if ('WebSocket' in window) {
                ws = new WebSocket(target);
            } else if ('MozWebSocket' in window) {
                ws = new MozWebSocket(target);
            } else {
                alert('WebSocket is not supported by this browser.');
                return;
            }
            ws.onopen = function () {
                setConnected(true);
                log('Info: WebSocket connection opened.');
            };
            ws.onmessage = function (event) {
            	try{
            		var obj = $.parseJSON(event.data); 
                	log('Received: ' + obj.ntriples);
            	}catch(err){
            		log('Received: ' + event.data);
            	}
            };
            ws.onclose = function () {
                setConnected(false);
                log('Info: WebSocket connection closed.');
            };
        }

        function testDisconnect() {
            if (ws != null) {
                ws.close();
                ws = null;
            }
            setConnected(false);
        }

        function echo() {
            if (ws != null) {
                ws.send(socketId);
            } else {
                alert('WebSocket connection not established, please connect.');
            }
        }
		
        function clearConsole(){
        	$("#console").html('');
        }
        function log(message) {
            var console = document.getElementById('console');
            var p = document.createElement('p');
            p.style.wordWrap = 'break-word';
            p.appendChild(document.createTextNode(message));
            console.appendChild(p);
//             while (console.childNodes.length > 25) {
//                 console.removeChild(console.firstChild);
//             }
//             console.scrollTop = console.scrollHeight;
            $("#console").animate({
                scrollTop:$("#console")[0].scrollHeight - $("#console").height()
            },1000);
        }
    </script>
    
	<div class="ui-layout-content ui-widget-content no-scrollbar" style="border-top: 0;">
		<div id="tab-panel-east-1" class="full-height no-padding add-scrollbar">
			<div class="ui-tabs-panel outline" id="mashupWidget">		
				<h2>Test your SSC Socket</h2>
			    <div id="connect-container">
			        <div>        	
			            <span>Please input your SSC socket URL:</span>						
			        </div>
			        <div>
			        	<input id="target" type="text" size="40" style="width: 350px"/><br>
			            <button id="connect" onclick="testConnect();">Connect</button>
			            <button id="disconnect" disabled="disabled" onclick="testDisconnect();">Disconnect</button>
			            <button id="echo" onclick="echo();" disabled="disabled">Submit</button>
			            <button id="clearConsole" onclick="clearConsole();">Clear</button>
			        </div>			
			    </div>
			    <div id="console-container">
			        <div id="console"></div>
			    </div>
			</div>
		</div>
		
<!-- 		<div id="tab-panel-east-3" class="full-height no-padding add-scrollbar"> -->
<!-- 			<div class="ui-tabs-panel outline"> -->
				
<!-- 			</div> -->
<!-- 		</div> -->
<!-- 		<div id="tab-panel-east-2" class="full-height no-padding no-scrollbar"> -->
<!-- 			<div id="accordion-east" class="full-height">		 -->
<!-- <!-- 					<h3><a href="#">Widget Debug</a></h3> --> -->
<!-- <!-- 					<div> --> -->
<!-- <!-- 					</div>		 --> -->
<!-- 			</div> -->
<!-- 		</div> -->
	</div>
	
    <div id="login-form" title="Sign in">
		<form>
		<fieldset>
			<label for="name">Name</label><br/>
			<input type="text" name="name" id="logName" class="text ui-widget-content ui-corner-all" /><br/>			
			<label for="password">Password</label><br/>
			<input type="password" name="password" id="logPass" value="" class="text ui-widget-content ui-corner-all" /><br/>
		</fieldset>
		</form>
		<span>Please <a href="#" id="signUpBtn">click here</a> to sign up!</span>
	</div>
	
	<div id="signup-form" title="Create new user">
		<h2>All form fields are required.</h2>	
		<form>
		<fieldset>
			<label for="name">Name</label><br/>
			<input type="text" name="name" id="signupName" class="text ui-widget-content ui-corner-all" /><br/>
			<label for="password">Password</label><br/>
			<input type="password" name="password" id="signupPassword" value="" class="text ui-widget-content ui-corner-all" /><br/>
			<label for="password">Confirm password</label><br/>
			<input type="password" name="password" id="signupConfirmPassword" value="" class="text ui-widget-content ui-corner-all" /><br/>
			<label for="email">Email</label><br/>
			<input type="text" name="email" id="signupEmail" value="" class="text ui-widget-content ui-corner-all" /><br/>			
		</fieldset>
		</form>
	</div>

	<div id="publishSocket-form" title="Publishing SSC websocket">
		<form style ="width:100%">
		<fieldset>
			<label for="name">Socket URL</label><br/>
			<input style ="width:80%" readonly="readonly" type="text" name="socketURL" id="socketURL" class="text ui-widget-content ui-corner-all" /><br/>			
			<label for="description">Descirption</label><br/>
			<textarea rows="3" cols="35" name="description" id="socketDes" value="" class="text ui-widget-content ui-corner-all"></textarea><br/>
		</fieldset>
		</form>
	</div>
	
    <div id="discover" title="LSM sensor discovery" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable">
         <div style="height: 250px; min-height: 109px; width: auto;" class="ui-dialog-content ui-widget-content" id="dialogLsmDiscover">
	   		<form style ="width:100%">
			<fieldset>
				<label for="name">Location</label>
				<input style ="width:100px" type="text" name="location" id="disLocation" class="text ui-widget-content ui-corner-all" />
				<label for="lat">Lat</label>
				<input style ="width:70px" type="text" name="lat" id="disLat" class="text ui-widget-content ui-corner-all" />
				<label for="long">Long</label>
				<input style ="width:70px" type="text" name="long" id="disLong" class="text ui-widget-content ui-corner-all" />	
				<label for="radius">Radius</label>
				<input style ="width:50px" type="text" name="radius" id="disRadius" class="text ui-widget-content ui-corner-all" />		
				<img title="click here for help" id="discoverHelp" alt="" src="images/8x8/question.png"/>
			</fieldset>
			</form>
		</div>
    </div>
  
   <div id="sindiceDiscover" title="RDF data discovery" class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-resizable">
         <div style="height: 250px; min-height: 109px; width: auto;" class="ui-dialog-content ui-widget-content" id="sindiceResult">
	         <label><strong>Keywords</strong></label><input id="sindiceKeyword" style="width:170px;font-size:12px"/>
	         <img title="click here for help" id="sindiceHelp" alt="" src="images/8x8/question.png"/>
	         <br/>
   		</div>
   </div>
    
    <div id="userviewSave-form" title="Save your view">
		<h3>Please input view name!</h3>	
		<form>
		<fieldset>
			<label for="name">View name</label><br/>
			<input type="text" name="name" id="saveViewName" class="text ui-widget-content ui-corner-all" /><br/>					
		</fieldset>
		</form>
	</div>
	
	<div id="userviewLoad-form" title="Load your view">
		<h3>Please input view name!</h3>	
		<form>
		<fieldset>
			<label for="name">View name</label><br/>
			<input type="text" name="name" id="loadViewName" class="text ui-widget-content ui-corner-all" /><br/>					
		</fieldset>
		</form>
	</div>
	<div id="notification" title="Notification">
		<h3 id="notifiTxt"></h3>
	</div>
	<div id="help" title="Help">
		<p id="helpContent"></p>
	</div>
	<div id="mapContainer">	
		<div id="map" style="width:100%;height:100%"></div>
	</div>
	<div id="loading-form" title="Loading">

	</div>
	
</div>
</body> 
</html>