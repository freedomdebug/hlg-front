KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<div class="page-bottom"> <div class="sabrosus">',c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>",d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> ';break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>"),d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',this.page==1;if(this.page-2<=0){var f=1;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else if(this.page+2>=this.pageCount){var f=this.pageCount-4;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else{var f=this.page-2;if(this.pageCount>this.page+2)var g=this.page+2;else var g=this.pageCount}for(var h=f;h<=g;h++)h>0&&(h==this.page?c+='<span class="current a-padding">'+h+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+h+');">'+h+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/addPromoUser-init",function(S,showPages){var S=KISSY,DOM=S.DOM,Event=S.Event;return addPromoUser={paginator:null,rightPaginator:null,msg:null,tabs:null,isFisrst:!0,init:function(){Event.on("#J_TopCheckAll","click",addPromoUser.checkAll),Event.on("#J_TopRightCheckAll","click",addPromoUser.RcheckAll),Event.on("#J_LeftSearch","click",function(){addPromoUser.searchTbItems()}),Event.on("#J_RightFresh","click",function(){addPromoUser.searchTbItems()}),Event.on("#J_RightSearch","click",function(){addPromoUser.searchRightItems()}),Event.delegate(document,"click dblclick","#J_TopAddItems",function(){addPromoUser.addSelectNotice("member")}),Event.delegate(document,"click dblclick","#J_TopAddItems2",function(){addPromoUser.addSelectNotice("order")}),addPromoUser.maxNum=DOM.val("#J_MaxNum"),Event.delegate(document,"click","#J_CareSave",function(a){var b=DOM.val("#J_Status"),c="\u6635\u79f0\uff1a"+DOM.val("#J_Nickname")+" \uff0c\u59d3\u540d\uff1a"+DOM.val("#J_Name")+" \uff0c\u624b\u673a\u53f7\u7801\uff1a"+DOM.val("#J_Phone"),d=DOM.val("#J_Nickname"),e=DOM.val("#J_Name"),f=DOM.val("#J_Phone");if(d==""||e==""||f==""){DOM.show("#J_MsgErrorBox");return}DOM.hide("#J_MsgErrorBox");if(f.search(/(^((0[1,2]{1}\d{1}-?\d{8})|(0[3-9]{1}\d{2}-?\d{7,8}))$)|(^0?(13[0-9]|15[0-35-9]|18[01236789]|14[57])[0-9]{8}$)/)==-1){DOM.html("#J_ErrorMsg","\u624b\u673a\u53f7\u683c\u5f0f\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01"),DOM.show("#J_MsgErrorBox");return}addPromoUser.notice(d,e,f,"hand")}),addPromoUser.tabs=(new S.Tabs("#wrapper",{triggerType:"click",contentCls:"main-content",activeTriggerCls:"current"})).on("switch",function(a){var b=a.currentIndex;b==0?addPromoUser.paginator?addPromoUser.paginator.toPage(addPromoUser.paginator.page):addPromoUser.searchTbItems():addPromoUser.searchRightItems()}),addPromoUser.searchTbItems()},checkAll:function(a){checkBoxs=DOM.query("#J_TbItemList .J_CheckBox"),len=checkBoxs.length;for(i=0;i<len;i++){var b=checkBoxs[i].value;if(checkBoxs[i].disabled)continue;this.checked?checkBoxs[i].checked=!0:checkBoxs[i].checked=!1}},RcheckAll:function(a){checkBoxs=DOM.query("#J_RightTbItemList .J_CheckBox"),len=checkBoxs.length;for(i=0;i<len;i++){var b=checkBoxs[i].value;if(checkBoxs[i].disabled)continue;this.checked?checkBoxs[i].checked=!0:checkBoxs[i].checked=!1}},searchTbItems:function(){var a=function(a){DOM.hide("#J_LeftLoading"),DOM.show("#J_MainLeftContent"),totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.css(DOM.get("#J_LEmpty"),"display","none"),DOM.css(DOM.query(".J_TbExt"),"display","")):(DOM.css(DOM.get("#J_LEmpty"),"display",""),DOM.css(DOM.query(".J_TbExt"),"display","none")),addPromoUser.renderItems(a.payload.body);var b=Math.ceil(totalRecords/a.payload.pageNum),c=DOM.query("#J_TbItemList .J_CheckBox");Event.on(c,"click",function(a){this.checked||DOM.attr("#J_TopCheckAll","checked",!1)}),addPromoUser.paginator=(new showPages("addPromoUser.paginator")).setRender(addPromoUser.handlePagination).setPageCount(b).printHtml("#J_Paging",2),addPromoUser.paginator=(new showPages("addPromoUser.paginator")).setRender(addPromoUser.handlePagination).setPageCount(b).printHtml("#J_TopPaging",3)},b=addPromoUser.getData();DOM.show("#J_LeftLoading"),DOM.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(loadMemberFromCrmUrl).setMethod("GET").setHandle(a).setData(b).send()},renderItems:function(a){DOM.html(DOM.get("#J_TbItemList"),a)},handlePagination:function(a){DOM.attr("#J_TopCheckAll","checked",!1),pageId=a;var b=function(a){totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.css(DOM.get("#J_LEmpty"),"display","none"),DOM.css(DOM.query(".J_TbExt"),"display","")):(DOM.css(DOM.get("#J_LEmpty"),"display",""),DOM.css(DOM.query(".J_TbExt"),"display","none"));var b=Math.ceil(totalRecords/a.payload.pageNum);addPromoUser.paginator.setPage(pageId).setPageCount(b).printHtml("#J_Paging",2),addPromoUser.paginator.setPage(pageId).setPageCount(b).printHtml("#J_TopPaging",3),addPromoUser.renderItems(a.payload.body);var c=DOM.query("#J_TbItemList .J_CheckBox");Event.on(c,"click",function(a){this.checked||DOM.attr("#J_TopCheckAll","checked",!1)}),DOM.hide("#J_LeftLoading"),DOM.show("#J_MainLeftContent")},c=addPromoUser.getData();c+="&page_id="+pageId,DOM.show("#J_LeftLoading"),DOM.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(loadMemberFromCrmUrl).setMethod("GET").setHandle(b).setData(c).send()},getData:function(){if(DOM.val(DOM.get("#J_SearchNick"))!="\u8f93\u5165\u65fa\u65fa\u540d\u79f0")var a=encodeURIComponent(DOM.val(DOM.get("#J_SearchNick")));else var a="";var b="nick="+a;if(DOM.val(DOM.get("#J_SearchName"))!="\u8f93\u5165\u59d3\u540d")var c=encodeURIComponent(DOM.val(DOM.get("#J_SearchName")));else var c="";b+="&name="+c;var d=DOM.val("#a1"),e=DOM.val("#a2");return d==0?b+="&state="+encodeURIComponent("\u5168\u90e8")+"&city="+encodeURIComponent("\u5168\u90e8"):e==0?b+="&state="+encodeURIComponent(window.link.data[""+d+""][0])+"&city="+encodeURIComponent("\u5168\u90e8"):b+="&state="+encodeURIComponent(window.link.data[""+d+""][0])+"&city="+encodeURIComponent(window.link.data[""+e+""][0]),b+="&pageSize=100",b},notice:function(buyer_nick,buyer_name,mobile,from){var typeId=DOM.val("#J_CareId");if(buyer_nick==""){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u7528\u6237\u6635\u79f0\u4e0d\u80fd\u4e3a\u7a7a",type:"error",autoClose:!0,timeOut:3e3});return}if(buyer_name==""){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u7528\u6237\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a",type:"error",autoClose:!0,timeOut:3e3});return}if(mobile==""){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u7528\u6237\u624b\u673a\u53f7\u7801\u4e0d\u80fd\u4e3a\u7a7a",type:"error",autoClose:!0,timeOut:3e3});return}var json=[],o='{"buyer_nick":"'+buyer_nick+'","buyer_name":"'+buyer_name+'", "mobile":"'+mobile+'"}';o=eval("("+o+")"),json.push(o);var itemsJson=KISSY.JSON.stringify(json),data="typeId="+typeId+"&items="+itemsJson+"&form_key="+FORM_KEY+"&from="+from,submitHandle=function(a){DOM.prop("#J_CheckBox_"+mobile,"disabled","disabled"),DOM.prop("#J_CheckBox_"+mobile,"checked","checked"),DOM.html("#J_Care_"+mobile,"\u5df2\u901a\u77e5"),from=="hand"&&(DOM.val("#J_Nickname",""),DOM.val("#J_Name",""),DOM.val("#J_Phone",""))},errorHandle=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error",autoClose:!0,timeOut:3e3})};(new H.widget.asyncRequest).setURI(addMembersToPromoUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()},addSelectNotice:function(from){new H.widget.msgBox({title:"\u63d0\u793a",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d\u3002\u3002\u3002",type:"info",autoClose:!0,timeOut:3e3});var typeId=DOM.val("#J_CareId");if(from=="order")var checkBoxs=DOM.query("#J_RightTbItemList .J_CheckBox");else if(from=="member")var checkBoxs=DOM.query("#J_TbItemList .J_CheckBox");var len=checkBoxs.length,m=0,json=[];for(i=0;i<len;i++)if(checkBoxs[i].checked&&!checkBoxs[i].disabled){id=checkBoxs[i].value;var buyer_nick=DOM.html(DOM.get("#J_Nick_"+id)),buyer_name=DOM.html(DOM.get("#J_Name_"+id)),mobile=id,o='{"buyer_nick":"'+buyer_nick+'","buyer_name":"'+buyer_name+'", "mobile":"'+mobile+'"}';o=eval("("+o+")"),json.push(o),m++}if(m==0){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u4e70\u5bb6",type:"error",autoClose:!0,timeOut:3e3});return}var itemsJson=KISSY.JSON.stringify(json),data="typeId="+typeId+"&items="+itemsJson+"&form_key="+FORM_KEY+"&from="+from,submitHandle=function(a){for(i=0;i<len;i++)checkBoxs[i].checked&&!checkBoxs[i].disabled&&(id=checkBoxs[i].value,DOM.prop("#J_CheckBox_"+id,"disabled","disabled"),DOM.prop("#J_CheckBox_"+id,"checked","checked"),DOM.html("#J_Care_"+id,"\u5df2\u901a\u77e5"))},errorHandle=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error",autoClose:!0,timeOut:3e3})};(new H.widget.asyncRequest).setURI(addMembersToPromoUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()},searchRightItems:function(){var a=function(a){DOM.hide("#J_RightLoading"),DOM.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.css(DOM.get("#J_REmpty"),"display","none"),DOM.css(DOM.query(".J_RightExt"),"display","")):(DOM.css(DOM.get("#J_REmpty"),"display",""),DOM.css(DOM.query(".J_RightExt"),"display","none")),addPromoUser.renderRightItems(a.payload.body);var b=Math.ceil(totalRecords/a.payload.pageNum);addPromoUser.rightPaginator=(new showPages("addPromoUser.rightPaginator")).setRender(addPromoUser.RhandlePagination).setPageCount(b).printHtml("#J_RightTopPaging",3),addPromoUser.rightPaginator=(new showPages("addPromoUser.rightPaginator")).setRender(addPromoUser.RhandlePagination).setPageCount(b).printHtml("#J_RightPaging",2)},b=addPromoUser.getRightData();DOM.show("#J_RightLoading"),DOM.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(loadMemberFromOrderUrl).setMethod("GET").setHandle(a).setData(b).send()},renderRightItems:function(a){DOM.html(DOM.get("#J_RightTbItemList"),a)},RhandlePagination:function(a){pageId=a;var b=function(a){totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.css(DOM.get("#J_REmpty"),"display","none"),DOM.css(DOM.query(".J_RightExt"),"display","")):(DOM.css(DOM.get("#J_REmpty"),"display",""),DOM.css(DOM.query(".J_RightExt"),"display","none"));var b=Math.ceil(totalRecords/a.payload.pageNum);addPromoUser.rightPaginator.setPage(pageId).setPageCount(b).printHtml("#J_RightTopPaging",3),addPromoUser.rightPaginator.setPage(pageId).setPageCount(b).printHtml("#J_RightPaging",2),addPromoUser.renderRightItems(a.payload.body),DOM.hide("#J_RightLoading"),DOM.show("#J_MainRightContent")},c=addPromoUser.getRightData();c+="&page_id="+pageId,DOM.show("#J_RightLoading"),DOM.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(loadMemberFromOrderUrl).setMethod("GET").setHandle(b).setData(c).send()},getRightData:function(){var a=encodeURIComponent(DOM.val(DOM.get("#J_RightSearchNick")));data="nick="+a;var b=DOM.val(DOM.get("#J_RightSelectItemPage")),c=DOM.val("#J_endDate"),d=DOM.val("#J_startDate");return data+="&pageSize="+b+"&start_date="+d+"&end_date="+c,data},save:function(){var a=addPromoUser.generatePostTemple();if(addPromoUser.checkParams(a)==1)return;var b=KISSY.JSON.stringify(a),c=DOM.val("#J_CareId"),d=DOM.val("#J_Type");ParamsErrorBox=KISSY.one("#J_ParamsErrorBox"),ParamsSucessBox=KISSY.one("#J_ParamsSucessBox");var e=function(a){ParamsErrorBox.hide(),DOM.html("#J_ParamsSucessMsg","\u8bbe\u7f6e\u6210\u529f"),ParamsSucessBox.css("display")==="none"&&ParamsSucessBox.slideDown()},f=function(a){ParamsSucessBox.hide(),DOM.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return},g="type="+d+"&care_id="+c+"&templets="+b;return(new H.widget.asyncRequest).setURI(saveCareUrl).setMethod("POST").setHandle(e).setErrorHandle(f).setData(g).send(),location.reload(),!0}}},{requires:["utils/showPages/index"]}); 