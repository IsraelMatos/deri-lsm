;(function() {
	
	var _initialised = false;

	jsPlumbDemo.showConnectionInfo = function(s) {
		$("list").set('html', s);
		$("list").setStyle("display","block");
	};
	
	jsPlumbDemo.hideConnectionInfo = function() {
		$("list").setStyle("display","none");
	};

	jsPlumbDemo.attachBehaviour = function() {
		if (!_initialised) {
			$$(".hide").each(function(h) {
				h.addEvent('click', function() {
					jsPlumb.toggle(h.get("rel"));
				});
			});
			
			$$(".drag").each(function(d) {
				d.addEvent('click', function() {
					var s = jsPlumb.toggleDraggable(d.get("rel"));
					d.set('html', s ? 'disable dragging' : 'enable dragging');
					if (!s) $(d.get("rel")).addClass('drag-locked'); 
					else $(d.get("rel")).removeClass('drag-locked');
					$(d.get("rel")).setStyle("cursor", s ? "pointer" : "default");
				});

			});

			$$(".detach").each(function(d) {
				d.addEvent('click', function() {
					jsPlumb.detachAllConnections(d.get("rel"));
				});
			});

//			$$(".remove").each(function(d) {
//				d.addEvent('click', function() {
//					jsPlumb.detachAllConnections(d.get("rel"));
//					jsPlumb.removeAllEndpoints(d.get("rel"));
//					$(this).attr("rel").remove();
//				});
//			});
			
			$("clear").addEvent('click', function() { jsPlumb.detachEveryConnection(); jsPlumbDemo.showConnectionInfo(""); });

			_initialised = true;
		}
	};

})();