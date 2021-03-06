function setSensorURL(url) {
	$("#url"+selectedBlock).val(url);
	var block =  metaHash.get(selectedBlock);
	block.getBlockMeta().setURL(url);
}

function openURL(url) {
	window.open(url, '_blank');
}


;(function() {	
	window.jsPlumbDemo = {
		init : function() {		
			jsPlumb.importDefaults({
				DragOptions : { cursor: 'pointer', zIndex:2000 },
				PaintStyle : { strokeStyle:'#666' },
				EndpointStyle : { width:14, height:11, strokeStyle:'#666' },
				Endpoint : "Rectangle",
				Anchors : ["TopCenter", "BottomCenter"],
				HoverClass:"connector-hover",	
				ConnectionsDetachable:true
			});						
			var connectorHoverStyle = {
					lineWidth:6,
					strokeStyle:"#E32323"
				};
			var hoverPaintStyle = { strokeStyle:"#7ec3d9" },
			connectorStrokeColor = "rgba(50, 50, 200, 1)";
			connections = [];
			var updateConnections = function(conn, remove) {
				if (!remove) connections.push(conn);
				else {
					var idx = -1;
					for (var i = 0; i < connections.length; i++) {
						if (connections[i] == conn) {
							idx = i; break;
						}
					}
					if (idx != -1) connections.splice(idx, 1);
				}
				if(!remove){
					var node = metaHash.get(conn.targetId);
					var child = metaHash.get(conn.sourceId);
					node.addChild(child);
				}
				else{
					var node = metaHash.get(conn.targetId);
					var child = metaHash.get(conn.sourceId);
					node.removeChild(child);
				}

			};				

			jsPlumb.bind("jsPlumbConnection", function(info, originalEvent) {
				updateConnections(info.connection,false);
//				var myParam = info.connection.endpoints[1].isInputData;
				var sourceId = info.connection.sourceId;
				var block = metaHash.get(sourceId);
				if(block.getBlockMeta().type==='Twitter')
					jsPlumb.detachAllConnections($("#"+block.getId()).attr("rel"));	
			});
			jsPlumb.bind("jsPlumbConnectionDetached", function(info, originalEvent) {
				updateConnections(info.connection, true);
			});
		

			
			var exampleDropOptions = {
				tolerance:'touch',
				hoverClass:'dropHover',
				activeClass:'dragActive'
			};

			var exampleColor = "#00f";
			var w23Stroke = "#A2F0F7"; 
			
			outputDataEndpoint = {	
				endpoint:	["Dot", { radius:8 }],
				paintStyle:{ lineWidth:2,
					outlineWidth:2,
					outlineColor:"#666",fillStyle:"#a7b04b" },
				endpointStyle:{ fillStyle:"#a7b04b" },
				hoverPaintStyle:{ fillStyle:"#7ec3d9" },
				connectorHoverStyle:connectorHoverStyle,
				maxConnections:1,
				scope:"blue dot",
				connectorStyle : {
					strokeStyle:w23Stroke ,	lineWidth:5						
				},
				connector: ["Bezier", { curviness:63 }],
				connectorOverlays:["Arrow"],
				isSource:true,			
				dropOptions : exampleDropOptions
			};				
			
			inputDataEndpoint = {
					endpoint:	["Dot", { radius:8 }],
					paintStyle:{ lineWidth:2,
						outlineWidth:2,
						outlineColor:"#666",fillStyle:"#a7b04b" },
					endpointStyle:{ fillStyle:"#a7b04b" },
					hoverPaintStyle:{ fillStyle:"#7ec3d9" },
					maxConnections:1,
					scope:"blue dot",
					connectorStyle : {
						strokeStyle:w23Stroke ,	lineWidth:5						
					},
					connector: ["Bezier", { curviness:63 }],
					connectorOverlays:["Arrow"],					
					isTarget:true,			
					dropOptions : exampleDropOptions
				};	
			
			mergedDataEndpoint = {
					endpoint:	["Dot", { radius:8 }],
					paintStyle:{ lineWidth:2,
						outlineWidth:2,
						outlineColor:"#666",fillStyle:"#a7b04b" },
					endpointStyle:{ fillStyle:"#a7b04b" },
					hoverPaintStyle:{ fillStyle:"#7ec3d9" },
					maxConnections:-1,
					scope:"blue dot",
					connectorStyle : {
						strokeStyle:w23Stroke ,	lineWidth:5						
					},
					connector: ["Bezier", { curviness:63 }],
					connectorOverlays:["Arrow"],					
					isTarget:true,			
					dropOptions : exampleDropOptions
				};			
	
			filterEndpoint = {				
					endpoint:	["Dot", { radius:7 }],
					paintStyle:{ lineWidth:2,
						outlineWidth:2,
						outlineColor:"#666",fillStyle:"#FFFFFC" },
					endpointStyle:{ fillStyle:"#F8F3F3" },
					hoverPaintStyle:{ fillStyle:"#F7AFAF" },
					maxConnections:10,					
					scope:"filter dot",
					connectorStyle : {
						strokeStyle:"#D1CFCF" ,	lineWidth:3						
					},
					connector: ["Bezier", { curviness:63 }],
					isTarget:true,
					isSource:true,				
					dropOptions : exampleDropOptions,	
					deleteEndpointsOnDetach:false
				};
			
			filterEndpointSource = {				
					endpoint:	["Dot", { radius:7 }],
					paintStyle:{ lineWidth:2,
						outlineWidth:2,
						outlineColor:"#666",fillStyle:"#FFFFFC" },
					endpointStyle:{ fillStyle:"#F8F3F3" },
					hoverPaintStyle:{ fillStyle:"#F7AFAF" },
					maxConnections:10,					
					scope:"filter dot",
					connectorStyle : {
						strokeStyle:"#D1CFCF" ,	lineWidth:3						
					},
					connector: ["Bezier", { curviness:63 }],
					isSource:true,				
					dropOptions : exampleDropOptions,	
					deleteEndpointsOnDetach:false
				};
			
			locationEndpoint = {				
					endpoint:	["Dot", { radius:7 }],
					paintStyle:{ lineWidth:2,
						outlineWidth:2,
						outlineColor:"#666",fillStyle:"#FFFFFC" },
					endpointStyle:{ fillStyle:"#F8F3F3" },
					hoverPaintStyle:{ fillStyle:"#F7AFAF" },
					maxConnections:10,					
					scope:"filter dot",
					connectorStyle : {
						strokeStyle:"#D1CFCF" ,	lineWidth:3						
					},
					connector: ["Bezier", { curviness:63 }],	
					isSource:true,				
					dropOptions : exampleDropOptions,	
					deleteEndpointsOnDetach:false
				};
			
			cqelsEndpoint = {				
					endpoint:	["Dot", { radius:7 }],
					paintStyle:{ lineWidth:2,
						outlineWidth:2,
						outlineColor:"#666",fillStyle:"#EF46E4" },
					endpointStyle:{ fillStyle:"#F8F3F3" },
					hoverPaintStyle:{ fillStyle:"#3FEB14" },
					maxConnections:1,					
					scope:"cqels dot",
					connectorStyle : {
						strokeStyle:"#383A39" ,	lineWidth:3						
					},
					connector: ["Bezier", { curviness:63 }],
					isTarget:true,
					isSource:true,				
					dropOptions : exampleDropOptions,		
					deleteEndpointsOnDetach:false
				};
			
			
			var example3Color = "rgba(229,219,61,0.5)";
			exampleEndpoint3 = {
					endpoint:["Dot", {radius:10} ],
					anchor:"BottomLeft",
					paintStyle:{ fillStyle:example3Color, opacity:0.5 },
					isSource:true,
					scope:'yellow dot',
					connectorStyle:{ strokeStyle:"#A4A4A4", lineWidth:10},
					connector : "Flowchart",
					isTarget:true,
					connectorOverlays:["Arrow"],
					dropOptions : exampleDropOptions,
					beforeDetach:function(conn) { 
						return confirm("Detach connection?"); 
					}
			};

//			anchors = [[1, 0.2, 1, 0], [0.8, 1, 0, 1], [0, 0.8, -1, 0], [0.2, 0, 0, -1] ];
			anchors = ["LeftMiddle", "RightMiddle", "TopCenter", "BottomCenter" ];
			jsPlumbDemo.attachBehaviour();	
					 
		}};	
})();

$(document).ready(function(){		 		
		var table = null;
		
		document.onclick = function(e) {
			e = e ? e : window.event;
			var t = e.target ? e.target : e.srcElement;	
			var id = $(t).closest("div").parent().attr("id");
			if (t.className === 'cmdLink remove') {
				stopSend(t);				
				metaHash.remove(id);
				jsPlumb.removeAllEndpoints($(t).attr("rel"));
                $(t).parent().parent().remove();                	
			}else if (t.className === 'cmdLink detach') {
				jsPlumb.detachAllConnections($(t).attr("rel"));				
			}else 
				if (t.className === 'cmdLink submit') {
				if(t.title==="Stop"){
					t.title = "Debug";
					t.src = "images/8x8/submit.png";
					stopSend(t);
				}
				else{					
					t.title = "Stop";
					t.src = "images/8x8/stop.png";
					submit(t);
				}				
			}else if (t.className === 'cmdMashup'){
				initializeMashupOuputTab();
			}else if (t.className === 'cmdLink discover') {
	            var meta = metaHash.get(id).getBlockMeta();
	            $('#discover').attr( 'sensorType', meta.type );
				$( "#discover" ).dialog( "open" );
				return false;
			}else if (t.className === 'cmdLink URLdiscover') {
				$( "#sindiceDiscover" ).dialog( "open" );
			}else if (t.className === 'cmdLink cqels_editor') {
				var popup = window.open("http://" + window.location.host+'/CqelsEditor/index.html', '_blank', 'toolbar=0,location=0,menubar=0');
	    	    $(popup).attr("parentId");
	    	    popup["parentId"]=id;
			}else if (t.className === 'cmdLink publish') {
				if(user.userId==null){
	        		alert("Please sign in!");
	        		return;
				}
				var date = new Date();
				var socketId = user.userId+date.getMilliseconds();
				$( "#publishSocket-form" ).data('id', id).data('socket',socketId).dialog( "open" );
			}
		}
				       
        
       
		 $('#demo').droppable({ 
//			   accept:	".icon_draggable"
//			,  
			drop: function( e, ui ) {
		        // position of the draggable minus position of the droppable
		        // relative to the document
		        var x = ui.offset.left - $(this).offset().left;
		        var y = ui.offset.top - $(this).offset().top;
		        
		        e = e ? e : window.event;
				t = e.target ? e.target : e.srcElement;
				if(t.className==='icon_draggable ui-draggable ui-draggable-dragging'){
					var category = $(t).attr("category");
					var type = $(t).attr("type");
					var id = $(t).attr("id");		
					var block = new Block();
					block.initialized(x, y, category, type);
					block.render();				
				}else{
					if(metaHash.get(t.id)!=null)
						metaHash.get(t.id).getBlockMeta().setXY(x,y);
				}
		    } 
			});
        
        
        /*socket event
         * 
         */
        function submit(target){
        	try{
				var win = $(target).closest("div").parent();			
				var id = $(target).closest("div").parent().attr("id");	
				var block =  metaHash.get(id);
				var meta = block.getBlockMeta();
				
				var obj = new Object();
	        	obj.sparql = meta.sparql;
	        	obj.url = meta.url;
	        	obj.type = meta.type;
	        	obj.filter = meta.filterArr;
	        	obj.childs = meta.childs;
				var message = JSON.stringify(obj); 
				
				if(meta.type==="ToRDFStream"){
					toStream(id);
				}else if(meta.type==="Merge"){
					mergedData(id);
				}else{
					var url = $(win).find("input:first");
					meta.setSparql($("#txtQuery").val());
					meta.setURL($(url).val());
					var socketURL = meta.socketURL;
					
					switch(meta.type){
						case 'LSMStream':
							meta.setSparql("");
							for (var j = 0; j < connections.length; j++) {
								if((connections[j].scope==="cqels dot")&&
										(connections[j].targetId===id||connections[j].sourceId===id)){	
									var t = connections[j].targetId===id?connections[j].sourceId:connections[j].targetId;
									meta.setSparql(metaHash.get(t).getBlockMeta().sparql);					
								}				
							}
							connectWebSocket(socketURL,block);
							break;
						case 'Twitter':
							for (var j = 0; j < connections.length; j++) {
								if((connections[j].scope==="filter dot")&&
										(connections[j].targetId===id||connections[j].sourceId===id)){	
									var t = connections[j].targetId===id?connections[j].sourceId:connections[j].targetId;
									if(metaHash.get(t).getBlockMeta().type==='Location'){
										var locate = $("#"+t).find("input:first");
										metaHash.get(t).getBlockMeta().setURL($(locate).val());
										meta.setURL(url.val()+ " "+ metaHash.get(t).getBlockMeta().url);
									}												
								}				
							}
		//					$("#twitterSearch"+id).liveTwitter(meta.url, {limit: 5, rate: 2000});
							$("#twitterSearch"+id).liveTwitter(meta.url).each(function(){
								this.twitter.refresh();
								this.twitter.start();
							});
							connectWebSocket(socketURL,block);
							break;
//						case 'EndPoint':
//							connectWebSocket(socketURL,block);
//							break;		
						default:
							var arr = new Array();
							for (var j = 0; j < connections.length; j++) {
								if((connections[j].scope==="filter dot")&&(connections[j].targetId===id)){
									meta.setFilter(metaHash.get(connections[j].sourceId).getBlockMeta().filterArr);					
								}				
							}
							connectWebSocket(socketURL,block);
							break;					
					}						
				}
        	}catch(err){        		
      		    alert("There is no data for this source");
      		    return;
      		}
		}
		
		function connectWebSocket(socketURL,block) {      
			try{
				var ws;
	            if (socketURL == '') {
	                alert('Please select server side connection implementation.');
	                return;
	            }
	            if ('WebSocket' in window) {            	
	                ws = new WebSocket(socketURL);                               
	            } else if ('MozWebSocket' in window) {
	                ws = new MozWebSocket(socketURL);
	            } else {
	                alert('WebSocket is not supported by this browser.');
	                return;
	            }
	            ws.onopen = function () {
	    			sendMessage(ws,block,null,null);    			
	            };
	            ws.onmessage = function (event) {            	
	                received(event.data,block,null);
	            };
	            ws.onclose = function () {
	                alert('Info: WebSocket connection closed.');
	            };
			}catch(err){        		
      		    alert("There is no data for this source");
      		    return;
      		}
        }
		
        function sendMessage(ws,block,streamMeta,timeLoop) {
        	try{
        		meta = block.getBlockMeta();
	        	var obj = new Object();
	        	obj.sparql = meta.sparql;
	        	obj.url = meta.url;
	        	obj.type = meta.type;
	        	obj.filter = meta.filterArr;
	        	obj.childs = meta.childs;
	        	
	        	var message = JSON.stringify(obj);                
	            if (ws != null) {   
	            	if(streamMeta!=null){
	            		var iter = parseInt(timeLoop);   
	            		ws.send(message);
	                	streamMeta.setIterationId(setInterval(function() { 
	    		           	ws.send(message);
	    		        }, iter)); 
	                	return;
	            	}
	            	switch(meta.type){
						case 'Twitter':
							meta.setIterationId(setInterval(function() { 
			                  	ws.send(message);
			            	}, 2000));
							break;
						case 'LSMStream':
							meta.setIterationId(setInterval(function() { 
			                  	ws.send(message);
			            	}, 500));
							break;		
						default:
							block.loadProgressBar();							
			                ws.send(message);
	            	}
	            } else {
	                alert('WebSocket connection not established, please connect.');
	            }
        	}catch(err){        		
      		    alert("There is no data for this source");
      		    return;
      		}
        }
        
        function received(message,block,streamId) {
        	try{
        		
	        	var obj = $.parseJSON(message);   
	        	block.stopProgressBar();
	        	if(obj.error==="true"){
	        		alert("There is no data for this source");
	        		return;
	        	}
	        	block.setLatestData(obj);
	        	if(streamId!=null){
	        		var streamBlock = metaHash.get(streamId)
	        		var streamMeta = streamBlock.getBlockMeta();
	        		streamBlock.setLatestData(obj);
	        		if(streamId!=selectedBlock)
	        			return;
	        	}else if(block.getId()!=selectedBlock) {
	        		return;
	        	}	        	
	        	visualizedData(block);	        	
        	}catch(err){
        		txt="There was an error on this page.\n\n";
        		  txt+="Error description: " + err.message + "\n\n";
        		  txt+="Click OK to continue.\n\n";
        		  alert(txt);
        		return;
        	}
        }        
        
        
        function stopSend(target){        	
        	try{
				var id = $(target).closest("div").parent().attr("id");			
				var meta = metaHash.get(id).getBlockMeta();
				if((meta.type==='Twitter')&&($("#twitterSearch"+id)!=null)){
					var t = $("#twitterSearch"+id);
					$("#twitterSearch"+id).each(function(){ this.twitter.stop(); });
				}
				clearInterval(meta.iterationId);
        	}catch(err){
        		
        	}
        }
        
        
        function toStream(id){
        	var t,cqelsId;
        	var ws,cqelsWs;
        	for (var j = 0; j < connections.length; j++) {
				if((connections[j].scope==="blue dot")&&
						(connections[j].targetId===id)){	
					t = connections[j].sourceId;	
//					break;
				}else if((connections[j].scope==="cqels dot")&&(connections[j].targetId===id||connections[j].sourceId===id))	
					cqelsId = connections[j].targetId===id?connections[j].sourceId:connections[j].targetId;
			}
        	if(t==null) return;
        	var streamMeta = metaHash.get(id).getBlockMeta();
        	var sourceBlock = metaHash.get(t);
        	if((sourceBlock.getBlockMeta().type==='Twitter')||(sourceBlock.getBlockMeta().type==='LSMStream')) {
        		alert(sourceBlock.getBlockMeta().type + ' is already a stream');
        		return;
        	}
        	if(cqelsId!=null){
        		var cqelsMeta = metaHash.get(cqelsId).getBlockMeta();
        		streamMeta.setSparql(cqelsMeta.sparql);
        		
        		var cqlesSocket = streamMeta.socketURL;
	        	if (cqlesSocket == '') {
	                alert('Please select server side connection implementation.');
	                return;
	            }
	        	if ('WebSocket' in window) {            	
	        		cqelsWs = new WebSocket(cqlesSocket);                               
	            } else if ('MozWebSocket' in window) {
	            	cqelsWs = new MozWebSocket(cqlesSocket);
	            } else {
	                alert('WebSocket is not supported by this browser.');
	                return;
	            }
	        	cqelsWs.onopen = function () {
//	            	sendMessage(cqleWs,sourceMeta,streamMeta,mili);   			
	            };
	            cqelsWs.onmessage = function (event) {        
	            	if(id!=selectedBlock) {
    	        		return;
    	        	}
            		$("#txtRawData").val($('#txtRawData').val()+"\n" +event.data);	            	
	            };
	            cqelsWs.onclose = function () {
	                alert('Info: WebSocket connection closed.');
	            }; 
        	}
        	
        	var sourceMeta = sourceBlock.getBlockMeta();
        	var timerValue = $("#"+id).find("input:first").val();
        	var unit = $("#"+id+"iterUnit").val();
        	var mili = timeToMilliseconds(timerValue,unit);
        	streamMeta.setURL(timerValue+"_"+unit);
        	
        	if(sourceMeta.type!=("ToRDFStream")){ 
	        	var socketURL = sourceMeta.socketURL;
	        	if (socketURL == '') {
	                alert('Please select server side connection implementation.');
	                return;
	            }
	        	if ('WebSocket' in window) {            	
	                ws = new WebSocket(socketURL);                               
	            } else if ('MozWebSocket' in window) {
	                ws = new MozWebSocket(socketURL);
	            } else {
	                alert('WebSocket is not supported by this browser.');
	                return;
	            }
	            ws.onopen = function () {
	            	sendMessage(ws,sourceBlock,streamMeta,mili);   			
	            };
	            ws.onmessage = function (event) {        
	            	receivedStreamMessage(event.data,sourceBlock,id,cqelsWs);	            	
	            };
	            ws.onclose = function () {
	                alert('Info: WebSocket connection closed.');
	            };   	
        	}else{
        		var iter = parseInt(mili);            	       
            	streamMeta.setIterationId(setInterval(function() { 
            		if(id!=selectedBlock) {
    	        		return;
    	        	}
            		$("#txtRawData").val($('#txtRawData').val()+"\n" +sourceBlock.getLatestData().ntriples);
		        }, iter));
        	}
        }
        
        function receivedStreamMessage(message,sourceBlock,streamId,cqelsWs) {
        	try{
	        	var j = $('#tableContent').children().length;
	        	
	        	var obj = $.parseJSON(message);   
	        	if(obj.error==="true"){
	        		alert("There is no data for this source");
	        		return;
	        	}
	        	sourceBlock.setLatestData(obj);
	        	var sourceMeta = sourceBlock.getBlockMeta();
	        	var streamBlock =  metaHash.get(streamId);
	        	var streamMeta = streamBlock.getBlockMeta();
	        	streamBlock.setLatestData(obj);
	        	
	        	var toStreamObj = new Object();
	        	toStreamObj.sparql = streamMeta.sparql;
	        	toStreamObj.url = streamMeta.url;
	        	toStreamObj.type = streamMeta.type;
	        	toStreamObj.ntriples = streamBlock.getLatestData().ntriples;
	        	var toStreamMessage = JSON.stringify(toStreamObj);	     
	        	
	        	if(cqelsWs!=null){
	        		cqelsWs.send(toStreamMessage);
	        		return;
	        	}
	        	if(streamId!=selectedBlock)
	        		return;	        	        	
	        	
//	        	obj = streamMeta.latestData;	        	
	        		if(sourceMeta.type!="URL"){        			      	
	        			if(j==0){
	        				make_table(obj.results.bindings);
	        				$("#tableContent").append(table);
	        			}        			
	        			table.appendChild(add_To_table(obj.results.bindings));	 
	        		}
	        		$("#txtRawData").val($('#txtRawData').val()+"\n" +streamBlock.getLatestData().ntriples);
	        		
	        		switch(sourceMeta.type){
	        			case 'Weather':
	        					addWeatherForecast(obj.meta);
	        				    weatherVisualization(obj.data.readings);       
	        				    drawHistorycalChart(obj.history);
	        				break;
	        			case 'Railway Station':
	        				addTrainSchedule(obj.data);
	        				break;
	        			case 'Bike hire':
	        				addTrainSchedule(obj.data);
	        				break;
	        			case 'Airport':
	        					addAirportSchedule(obj.meta);    					
	    				break;
	        			case 'Traffic':
	    					addTrafficCamera(obj);    					
	    					break;
	        			case 'COSM':
	        				drawCOSMHistoricalChart(obj.history);
	        				break;
	        			default:
	        				break;
	        		}
	        	           
	            
	            $("#txtRawData").animate({
	                scrollTop:$("#txtRawData")[0].scrollHeight - $("#txtRawData").height()
	            },1000);
	            $("#tableContent").animate({
	                scrollTop:$("#tableContent")[0].scrollHeight - $("#tableContent").height()
	            },1000);
        	}catch(err){
        		txt="There was an error on this page.\n\n";
        		  txt+="Error description: " + err.message + "\n\n";
        		  txt+="Click OK to continue.\n\n";
        		  alert(txt);
        		return;
        	}
        }
        
        function mergedData(mergedId){
        	var sourcesMerged = [];
        	for (var j = 0; j < connections.length; j++) {
				if((connections[j].scope==="blue dot")&&
						(connections[j].targetId===mergedId)){	
					sourcesMerged.push(connections[j].sourceId);
				}				
			}
        	var block = metaHash.get(mergedId);
        	var mergedMeta = block.getBlockMeta();
        	var previousUpdatedhash = new Hashtable();
        	for(var i=0;i < sourcesMerged.length; i++){
    			var sourceBlock = metaHash.get(sourcesMerged[i]);
    			if(sourceBlock.getLatestData()!=null){
    				previousUpdatedhash.put(sourcesMerged[i],sourceBlock.getLatestData().updated);
    				$("#txtRawData").val($('#txtRawData').val()+"\n" +sourceBlock.getLatestData().ntriples);
    			}
    		}        	
        	block.setLatestData($("#txtRawData").val());
        	var sourceBlock;
        	var updated,previousUpdated;
        	mergedMeta.setIterationId(setInterval(function() { 
        		for(var k=0;k < sourcesMerged.length; k++){
        			try{
	        			sourceBlock = metaHash.get(sourcesMerged[k]);
	        			if(sourceBlock.getLatestData()==null) continue;
	        			updated = sourceBlock.getLatestData().updated;        			
	        			previousUpdated = previousUpdatedhash.get(sourcesMerged[k]);
	//        			alert(sourceMeta.latestData.updated+","+previousUpdated);
	        			if(updated>previousUpdated){        				
	        				previousUpdatedhash.put(sourcesMerged[k],sourceBlock.getLatestData().updated);
	        				if(mergedId!=selectedBlock) {
	                    		return;
	                    	}
	        				$("#txtRawData").val($('#txtRawData').val()+"\n" +sourceBlock.getLatestData().ntriples);
	        				$("#txtRawData").animate({
	        	                scrollTop:$("#txtRawData")[0].scrollHeight - $("#txtRawData").height()
	        	            },1000);
	        			}  			
        			}catch(err){
        				continue;
        			}
        		}
	        }, 5000));
        }
        
        
        function visualizedData(block){
        	try{
	        	var blockMeta = block.getBlockMeta();
	        	var j = $('#tableContent').children().length;
	        	var obj = block.getLatestData();
	        	if(obj==null) return;
	        	if(blockMeta.type=='Merge'){
	        		$("#txtRawData").val($('#txtRawData').val()+"\n" +obj);
	        		return;
	        	}
	        	if(blockMeta.category!='Stream'){
	        		if(blockMeta.type!="URL"){        			      	
	        			if(j==0){
	        				make_table(obj.results.bindings);
	        				$("#tableContent").append(table);
	        			}        			
	        			table.appendChild(add_To_table(obj.results.bindings));
	        			$("#txtRawData").val($('#txtRawData').val()+"\n" +JSON.stringify(obj));
	        		}else
	        			$("#txtRawData").val($('#txtRawData').val()+"\n" +obj.ntriples);
	        		
	        		switch(blockMeta.type){
	        			case 'Weather':
	        					addWeatherForecast(obj.meta);
	        				    weatherVisualization(obj.data.readings);       
	        				    drawHistorycalChart(obj.history);
	        				break;
	        			case 'Railway Station':
	        				addTrainSchedule(obj.data);
	        				break;
	        			case 'Bike hire':
	        				addTrainSchedule(obj.data);
	        				break;
	        			case 'Airport':
	        					addAirportSchedule(obj);    					
	    				break;
	        			case 'Traffic':
	    					addTrafficCamera(obj);    					
	    					break;
	        			case 'COSM':
	        				drawCOSMHistoricalChart(obj.history);
	        				break;
	        			default:
	        				break;
	        		}
	        	}else{
	        		$("#txtRawData").val($('#txtRawData').val()+"\n" +obj.ntriples);
	        	}            
	            
	            $("#txtRawData").animate({
	                scrollTop:$("#txtRawData")[0].scrollHeight - $("#txtRawData").height()
	            },1000);
	            $("#tableContent").animate({
	                scrollTop:$("#tableContent")[0].scrollHeight - $("#tableContent").height()
	            },1000);
        	}catch(err){
        		alert("Sorry!!!We can not visualize this data");
        	}
        }
        
        function make_table(data){
        	table = document.createElement('table');
        	var tr = document.createElement('tr');
        	var tbody = document.createElement('tbody');
        	for(var field in data[0]){
                var th = document.createElement('th');
                th.innerHTML=field;
                tr.appendChild(th);              					
        	}
        	tbody.appendChild(tr);
        	table.appendChild(tbody);
            table.id="table_" + Math.floor ( Math.random ( ) * 100 );
        }
        
        function add_To_table(data){
            var tbody = document.createElement('tbody');
            for(var i=0; i<data.length; i++ ){
                    var tr = document.createElement('tr');
                    for(var field in data[0]){                    		
                            var td = document.createElement('td');
                            if(data[i][field].value.indexOf("http") >= 0)
                            	td.innerHTML='<a href="#" onclick="openURL(\''+data[i][field].value+'\')">' + data[i][field].value +'</a>';
                            else
                            	td.innerHTML = data[i][field].value;
                            td.className=field;
                            tr.appendChild(td);                            
                    }
                    tbody.appendChild(tr);
            }
            return tbody;
        }

        
        function addTrafficCamera(data){
        	$("#trafficImage").remove();
        	var img = document.createElement('img');
        	img.src = data.meta.source;     
        	img.setAttribute("id", "trafficImage");
            $("#visualizationTab").append(img);            
        }
        
        function addWeatherForecast(location){
        	$("#weatherForecast").remove();
        	var forecastDiv = document.createElement('div');
        	forecastDiv.style.cssFloat="left";
        	forecastDiv.setAttribute("id", "weatherForecast");
        	$("#visualizationTab").append(forecastDiv);
        	
        	$.simpleWeather({
        		location: location.city + "," + location.country,
				unit: 'c',
				success: function(weather) {
					html = '<h3>'+weather.city+', '+weather.region+' '+weather.country+'</h3>';
					html += '<img style="float:left;" width="125px" src="'+weather.image+'">';
					html += '<p>'+weather.temp+'&deg; '+weather.units.temp+'<br /><span>'+weather.currently+'</span></p>';
					html += '<a href="'+weather.link+'">View Forecast &raquo;</a>';					
					$(forecastDiv).html(html);
				},
				error: function(error) {
					$(forecastDiv).html('<p>'+error+'</p>');
				}
			});
        	
        }
        
        function weatherVisualization(da){      
        	$("#weatherVisual").remove();
        	$("#weatherHistoricalVisual").remove();
        	var weatherDiv = document.createElement('div');
        	weatherDiv.style.cssFloat="left";
        	weatherDiv.style = "margin-right:10px";
        	weatherDiv.setAttribute("id", "weatherVisual");
        	$("#visualizationTab").append(weatherDiv);
        	drawChart(da);
        	
        	var weatherHistoricalDiv = document.createElement('div');
        	weatherHistoricalDiv.style.cssFloat="left";
        	weatherHistoricalDiv.setAttribute("id", "weatherHistoricalVisual");
        	$("#visualizationTab").append(weatherHistoricalDiv);
        }
        
        function drawChart(da) {
        	var gaugeData = new google.visualization.DataTable();
        	gaugeData.addColumn('number', 'WindSpeed');
        	gaugeData.addColumn('number', 'Humidity');
        	gaugeData.addColumn('number', 'Pressure');
        	gaugeData.addRows([
        	                   [parseFloat(da[0]['WindSpeed'].value),parseFloat(da[0]['AtmosphereHumidity'].value),parseFloat(da[0]['AtmospherePressure'].value)]     	                  
        	                 ]);    
            var options = {
              width: 400, height: 120,
              redFrom: 90, redTo: 100,
              yellowFrom:75, yellowTo: 90,
              minorTicks: 5
            };

            var chart = new google.visualization.Gauge(document.getElementById('weatherVisual'));
            chart.draw(gaugeData, options);
          }
        
        function drawHistorycalChart(history) {
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Type');
            data.addColumn('date', 'Date');
            data.addColumn('number', 'Value');   
            for(var i=0; i<history.length; i++ ){
            	var field = history[i].property;
        		if(field==='AirTemperature')
        			data.addRow(['Temperature',new Date(history[i].time),parseFloat(history[i].value)]);
        		else if(field==='AtmosphereHumidity')
        			data.addRow(['Humidity',new Date(history[i].time),parseFloat(history[i].value)]);
        		else if(field==='AtmospherePressure')
        			data.addRow(['Pressure',new Date(history[i].time),parseFloat(history[i].value)]);
        		else if(field==='WindSpeed')
        			data.addRow(['WindSpeed',new Date(history[i].time),parseFloat(history[i].value)]);
            }
            var chart = new google.visualization.MotionChart(document.getElementById('weatherHistoricalVisual'));
            var options = {};
            //  Passing JSON state with escaped double quotes to options class. 
            options['state'] =
            	'{\"iconKeySettings\":[],\"stateVersion\":3,\"time\":\"notime\",\"xAxisOption\":\"_TIME\",\"playDuration\":15,\"iconType\":\"BUBBLE\",\"sizeOption\":\"_NOTHING\",\"xZoomedDataMin\":null,\"xZoomedIn\":false,\"duration\":{\"multiplier\":1,\"timeUnit\":\"none\"},\"yZoomedDataMin\":null,\"xLambda\":1,\"colorOption\":\"_UNIQUE_COLOR\",\"nonSelectedAlpha\":0.4,\"dimensions\":{\"iconDimensions\":[]},\"yZoomedIn\":false,\"yAxisOption\":\"_NOTHING\",\"yLambda\":1,\"yZoomedDataMax\":null,\"showTrails\":true,\"xZoomedDataMax\":null};';
            options['width'] = 600;
            options['height'] = 300;
            chart.draw(data, options);
//            chart.draw(data, {width: 600, height:300});
          }
        
        function drawCOSMHistoricalChart(history){
        	 var data = new google.visualization.DataTable();
             data.addColumn('string', 'Type');
             data.addColumn('date', 'Date');
             data.addColumn('number', 'Value');   
             for(var i=0; i<history.length; i++ ){
             	var field = history[i].property;
         		data.addRow([field,new Date(history[i].time),parseFloat(history[i].value)]);
             }
             var chart = new google.visualization.MotionChart(document.getElementById('visualizationTab'));
             var options = {};
             options['state'] =
             	'{\"iconKeySettings\":[],\"stateVersion\":3,\"time\":\"notime\",\"xAxisOption\":\"_TIME\",\"playDuration\":15,\"iconType\":\"BUBBLE\",\"sizeOption\":\"_NOTHING\",\"xZoomedDataMin\":null,\"xZoomedIn\":false,\"duration\":{\"multiplier\":1,\"timeUnit\":\"none\"},\"yZoomedDataMin\":null,\"xLambda\":1,\"colorOption\":\"_UNIQUE_COLOR\",\"nonSelectedAlpha\":0.4,\"dimensions\":{\"iconDimensions\":[]},\"yZoomedIn\":false,\"yAxisOption\":\"_NOTHING\",\"yLambda\":1,\"yZoomedDataMax\":null,\"showTrails\":true,\"xZoomedDataMax\":null};';
             options['width'] = 600;
             options['height'] = 300;
             chart.draw(data, options);
        }
        
        function addTrainSchedule(data){
        	try{
	        	var dataTable = new google.visualization.DataTable();
	            var fields = data.vars;
	            for(var i=0; i<fields.length; i++)
	            	dataTable.addColumn('string', fields[i]);
	            var valueArr = data.readings;
	            dataTable.addRows(valueArr.length);
	            for(var i=0;i<valueArr.length;i++)
	            	for(var j=0;j<fields.length;j++){
	            		dataTable.setCell(i,j,valueArr[i][fields[j]].value);
	            	}            
	            var options = {};
	            options['width'] = '100%';
	            options['page'] = 'enable';
	            options['pageSize'] = 10;
	            
	            var table = new google.visualization.Table(document.getElementById('visualizationTab'));
	            table.draw(dataTable,options);
        	}catch(err){
        		
        	}
        }
                
        function addAirportSchedule(obj){        	
        	var scheduleDiv = document.getElementById('page-wrap');
        	if(scheduleDiv==null){
        		scheduleDiv = document.createElement('div');
        		scheduleDiv.id = "page-wrap";
        	}
        	var myTabs = new YAHOO.widget.TabView("airportSchedule");
        	var scheduleTabs = document.getElementById('airportSchedule');
        	if(scheduleTabs==null){
        		scheduleTabs = document.createElement('airportSchedule');
        		scheduleTabs.id = 'airportSchedule';
        		scheduleTabs.innerHTML+= '<ul class="yui-nav">'+							
							'<li class="selected"><a href="#">Departure</a></li>'+
							'<li><a href="#">Arrival</a></li>'+
							'<li><a href="#">In radar contact</a></li>'+
							'</ul>'+					
							'<div class="clear"></div>'+						
							'<div class="yui-content">'+
					        	'<div id="Departure">'+							
					        	'</div>'+				
					        	'<div id="Arrival">'+							
					        	'</div>'+
					        	'<div id="radarContact">'+													
								'</div>'+
							'</div>';
				scheduleDiv.appendChild(scheduleTabs);
				$("#visualizationTab").append(scheduleDiv);
				drawTable(obj.departures,'Departure');
				drawTable(obj.arrivals,'Arrival');
        	}        	
        	drawTable(obj.radars,'radarContact');
        }
        
        function drawTable(data,targetId) {
        	try{
	            var dataTable = new google.visualization.DataTable();
	            var fields = data.vars;
	            for(var i=0; i<fields.length; i++)
	            	dataTable.addColumn('string', fields[i]);
	            if(data.data==null) return;
	            var valueArr = data.data;
	            dataTable.addRows(valueArr.length);
	            for(var i=0;i<valueArr.length;i++)
	            	for(var j=0;j<valueArr[i].length;j++){
	            		dataTable.setCell(i,j,valueArr[i][j]);
	            	}            
	            var options = {};
	            options['width'] = '100%';
	            options['page'] = 'enable';
	            options['pageSize'] = 10;
	            
	            var table = new google.visualization.Table(document.getElementById(targetId));
	            table.draw(dataTable,options);
        	}catch(err){
        		
        	}
          }
        
        window.loadLatestData = function(blockId){
        	if(blockId==null) return;
        	var block = metaHash.get(blockId);
        	visualizedData(block);        	
        }
});

