KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<div class="page-bottom"> <div class="sabrosus">',c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>",d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> ';break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>"),d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',this.page==1;if(this.page-2<=0){var f=1;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else if(this.page+2>=this.pageCount){var f=this.pageCount-4;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else{var f=this.page-2;if(this.pageCount>this.page+2)var g=this.page+2;else var g=this.pageCount}for(var h=f;h<=g;h++)h>0&&(h==this.page?c+='<span class="current a-padding">'+h+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+h+');">'+h+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/instock-init",function(a,b,c){var a=KISSY,d=a.DOM,e=a.Event;return instock={msg:null,init:function(){var a=[{text:"\u72b6\u6001",value:"-1"},{text:"\u5f85\u4e0a\u67b6",value:"0"},{text:"\u5df2\u4e0a\u67b6\u6210\u529f",value:"2"},{text:"\u4e0a\u67b6\u5931\u8d25",value:"4"}],b=new c.Select({render:"#J_StatusItem",valueField:"#J_Status",items:a});b.render(),b.setSelectedValue("-1"),b.on("change",function(a){instock.searchList()}),instock.getPlanItemNum(),instock.searchList(),e.on("#J_DelPlan","click",function(){instock.delPlan()}),e.on("#J_SearchBtn","click",function(){instock.searchList()})},searchList:function(){var a=function(a){d.hide("#J_Loading"),d.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,d.css(d.get("#J_NoteIcon"),"display","none"),totalRecords>0?(d.css(d.get("#J_REmpty"),"display","none"),d.css(d.query(".J_PromotionItemBtnHolder"),"display","")):(d.css(d.get("#J_REmpty"),"display",""),d.css(d.query(".J_PromotionItemBtnHolder"),"display","none")),d.html("#J_PromotionItemList",a.payload.body);var c=Math.ceil(totalRecords/a.payload.pageNum);instock.paginator=(new b("instock.paginator")).setRender(instock.handlePagination).setPageCount(c).printHtml("#J_BottomPaging",2)};if(d.val(d.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var c=encodeURIComponent(d.val(d.get("#J_SearchTitle")));else var c="";var e=d.val("#J_PlanId"),f=d.val("#J_Status"),g="title="+c+"&status="+f+"&plan_id="+e+"&page_size=10";d.show("#J_Loading"),d.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getPlanItemsUrl).setMethod("POST").setHandle(a).setData(g).send()},handlePagination:function(a){pageId=a;var b=function(a){d.hide("#J_Loading"),d.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,d.css(d.get("#J_NoteIcon"),"display","none"),totalRecords>0?(d.css(d.get("#J_REmpty"),"display","none"),d.css(d.query(".J_PromotionItemBtnHolder"),"display","")):(d.css(d.get("#J_REmpty"),"display",""),d.css(d.query(".J_PromotionItemBtnHolder"),"display","none")),d.html("#J_PromotionItemList",a.payload.body);var b=d.query("#J_PromotionItemList .J_CheckBox");e.on(b,"click",function(a){this.checked||d.attr("#J_TCheckAll","checked",!1)});var c=Math.ceil(totalRecords/a.payload.pageNum);instock.paginator.setPage(pageId).setPageCount(c).printHtml("#J_BottomPaging",2)};if(d.val(d.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var c=encodeURIComponent(d.val(d.get("#J_SearchTitle")));else var c="";var f=d.val("#J_PlanId"),g=d.val("#J_Status"),h="title="+c+"&status="+g+"&plan_id="+f+"&page_id="+pageId+"&page_size=10";d.show("#J_Loading"),d.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getPlanItemsUrl).setMethod("GET").setHandle(b).setData(h).send()},getPlanItemNum:function(){var a=function(a){d.text("#J_PlanSuccNum",a.payload[0]),d.text("#J_PlanErrorNum",a.payload[1]),d.text("#J_PlanWaitNum",a.payload[2])},b=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},c=d.val("#J_PlanId"),e="plan_id="+c;(new H.widget.asyncRequest).setURI(getPlanItemNumUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},delPlan:function(){new H.widget.msgBox({title:"\u53d6\u6d88\u8ba1\u5212",type:"confirm",content:"\u786e\u5b9a\u53d6\u6d88\u8ba1\u5212\uff1f",buttons:[{value:"\u53d6\u6d88\u8ba1\u5212"},{value:"\u4e0d\u53d6\u6d88\u8ba1\u5212"}],success:function(a){if(a=="\u53d6\u6d88\u8ba1\u5212"){var b=d.val("#J_PlanId"),c="plan_id="+b,e=function(a){new H.widget.msgBox({type:"sucess",content:"\u53d6\u6d88\u6210\u529f",dialogType:"msg",autoClose:!0,timeOut:3e3}),KISSY.later(function(){window.location.href=comeBackUrl},1e3,!1)},f=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return};(new H.widget.asyncRequest).setURI(delPlanUrl).setMethod("POST").setHandle(e).setErrorHandle(f).setData(c).send()}}})},addToShelf:function(a){var b=function(a){instock.msg.hide(),new H.widget.msgBox({type:"sucess",content:"\u4e0a\u67b6\u6210\u529f\uff01",dialogType:"msg",autoClose:!0,timeOut:3e3}),KISSY.later(function(){instock.msg.hide(),instock.getPlanItemNum(),instock.paginator?instock.paginator.toPage(instock.paginator.page):instock.searchList()},1e3,!1)},c=function(a){instock.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},e=d.val("#J_PlanId"),f="plan_id="+e+"&plan_item_id="+a;instock.msg=new H.widget.msgBox({title:"",dialogType:"loading",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406"}),(new H.widget.asyncRequest).setURI(listingUrl).setMethod("POST").setHandle(b).setErrorHandle(c).setData(f).send()},removePlan:function(a){new H.widget.msgBox({title:"\u79fb\u9664\u51fa\u8ba1\u5212",type:"confirm",content:"\u786e\u5b9a\u79fb\u9664\u51fa\u8ba1\u5212\uff1f",buttons:[{value:"\u786e\u5b9a\u79fb\u9664"},{value:"\u4e0d\u79fb\u9664"}],success:function(b){if(b=="\u786e\u5b9a\u79fb\u9664"){var c=function(a){new H.widget.msgBox({type:"sucess",content:"\u79fb\u9664\u6210\u529f\uff01",dialogType:"msg",autoClose:!0,timeOut:3e3}),KISSY.later(function(){instock.getPlanItemNum(),instock.paginator?instock.paginator.toPage(instock.paginator.page):instock.searchList()},1e3,!1)},e=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},f=d.val("#J_PlanId"),g="plan_id="+f+"&plan_item_id="+a;(new H.widget.asyncRequest).setURI(removeItemUrl).setMethod("POST").setHandle(c).setErrorHandle(e).setData(g).send()}}})}}},{requires:["utils/showPages/index","bui/select"]}); 