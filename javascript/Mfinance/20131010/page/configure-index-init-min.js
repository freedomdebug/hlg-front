KISSY.add("page/configure-index-init",function(a,b){var c=a.DOM,d=a.Event;return indexControl={msg:null,init:function(){indexControl.getStatusProgress()},getStatusProgress:function(){var a=function(a){totalRecords=a.payload.totalRecords;var b=a.payload.already,d=a.payload.all,e=d-b;c.html(".J_already",b),c.html(".J_all",d);var f=(b/d*100).toFixed(2)+"%";c.css("#J_ui_progress","width",f),c.html(".J_less",e),d-b==0?d==0?(c.css("#J_ui_progress","width",0),c.show("#container"),c.hide(".J_setSuccess"),c.show(".J_lessTwo"),c.hide(".J_lessOne")):(c.show("#container"),c.hide(".J_setSuccess"),c.show(".J_lessTwo"),c.hide(".J_lessOne")):(c.show("#container"),c.show(".J_lessOne"))};(new H.widget.asyncRequest).setURI(getCostsSetUrl).setMethod("GET").setHandle(a).setData(null).send()}}},{requires:["bui/tooltip"]}); 