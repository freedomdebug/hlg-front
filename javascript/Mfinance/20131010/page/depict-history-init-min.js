KISSY.add("page/depict-history-init",function(a,b){var c=a.DOM,d=a.Event;return historyControl={msg:null,chart:null,init:function(){var a=new Date,b=a.getFullYear();c.html(".J_year0",b),c.html(".J_year1",b-1),c.html(".J_year2",b-2),c.html(".J_year3",b-3),d.on(c.query(".J_Tiger"),"mouseenter mouseleave",function(a){a.type=="mouseenter"?c.addClass(a.currentTarget,"current"):c.removeClass(a.currentTarget,"current")}),d.on(c.query(".J_Page"),"click",function(a){var b=c.attr(a.currentTarget,"data");c.removeClass(c.query("#J_TopLeft .J_Page"),"active"),c.addClass(a.currentTarget,"active"),c.html(c.get("#J_TopLeft .value"),b),c.html(".J_year",b),c.val("#J_SelectItemPage",b),historyControl.searchHisitoryItem()}),historyControl.searchHisitoryItem()},searchHisitoryItem:function(){var a=function(a){var b=a.payload.totals.records;b>0?(c.hide(".noDate"),c.show(".J_ListCon")):(c.show(".noDate"),c.hide(".J_ListCon"));var d=a.payload.totals.income,e=a.payload.totals.pay,f=a.payload.totals.profit;c.html("#J_income",d),c.html("#J_out",e),c.html("#J_profits",f),historyControl.renderItems(a.payload.body),c.hide("#J_LeftLoading"),c.show("#J_MainLeftContent"),historyControl.chart&&historyControl.chart.destroy(),jQuery(function(){jQuery("#J_line_grap").highcharts({chart:{type:"line",height:200,spacingLeft:0,spacingRight:0},title:{text:"",verticalAlign:"bottom",y:35,"float":!0},colors:["#8bd167","#4dc1e8","#fb6e52","#ffce55","#656d78","#ac92ed","#ec87c1","#4b89dc","#db4453","#d8ad88","#00d39f","#a2b1c7","#5937ae","#bc3783"],plotOptions:{series:{stickyTracking:!1,marker:{symbol:"circle"}}},xAxis:{categories:a.payload.profits.xdata,tickInterval:1,labels:{step:a.payload.profits.xkuadu}},yAxis:{title:{text:null},minPadding:0,maxPadding:0,lineWidth:1,gridLineWidth:1,labels:{format:"{value}"}},legend:{enabled:!0,borderWidth:0},credits:{enabled:!1},series:[]})});var g=a.payload.profits.data;historyControl.chart=jQuery("#J_line_grap").highcharts(),historyControl.chart.addSeries(g)},b=function(a){new H.widget.msgBox({content:a.desc,type:"error",autoClose:!0,timeOut:3e3})};c.hide("#J_LeftLoading"),c.show("#J_MainRightContent");var d=c.val("#J_SelectItemPage"),e="year="+d;(new H.widget.asyncRequest).setURI(loadHistoryUrl).setMethod("GET").setHandle(a).setErrorHandle(b).setData(e).send()},renderItems:function(a){c.html(c.get("#J_HistoryItemList"),a,!0)}}},{requires:["bui/select"]}); 