KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<div class="page-bottom"> <div class="sabrosus">',c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>",d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> ';break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>"),d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',this.page==1;if(this.page-2<=0){var f=1;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else if(this.page+2>=this.pageCount){var f=this.pageCount-4;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else{var f=this.page-2;if(this.pageCount>this.page+2)var g=this.page+2;else var g=this.pageCount}for(var h=f;h<=g;h++)h>0&&(h==this.page?c+='<span class="current a-padding">'+h+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+h+');">'+h+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("utils/beautifyForm/index",function(a){function g(b,c){var d=this;defaultCfg={init:!0};if(!(d instanceof g))return new g(b,c);var e=a.merge(defaultCfg,c);d._init(b,e)}var b=a.DOM,c=a.Event,d=document,e=b.get("body"),f=!1;return a.UA.safari!="undefined"&&a.UA.safari<3&&(f=!0),a.UA.ie==6&&b.replaceClass("#J_BodyHtml","has-js","no-js"),a.augment(g,{_init:function(a,b){var c=this;c.renderAll(a)},renderAll:function(a){var c=this;a=typeof a=="undefined"?"#J_BodyHtml":a;var d=b.filter(b.query(a+" input"),function(a){if(a.type=="checkbox"||a.type=="radio")return!0});for(var e=d.length-1;e>=0;e--)c.renderInput(d[e])},renderInput:function(a){var c=this,d=b.get(a),e=b.parent(d);e.tagName.toUpperCase()=="LABEL"&&e.className.indexOf("beautify_")>-1?e.className=="beautify_check"?c.renderCheckbox(d):e.className=="beautify_radio"&&c.renderRadio(d):e.tagName.toUpperCase()=="SPAN"&&b.hasClass(d,"beautify_input")&&c.renderCheckPro(d)},renderAllCheckPro:function(a){var c=this,d=b.filter(b.query(a+" input"),function(a){if((a.type=="checkbox"||a.type=="radio")&&b.hasClass(a,"beautify_input"))return!0});if(d.length<1)return;for(var e=d.length-1;e>=0;e--)c.renderCheckPro(d[e])},renderAllCheckbox:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="checkbox")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllCheckbox)");return}for(var f=e.length-1;f>=0;f--)d.renderCheckbox(e[f])},renderAllRadio:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="radio")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllRadio)");return}for(var f=e.length-1;f>=0;f--)d.renderRadio(e[f])},renderCheckPro:function(d){var e=this,g=b.get(d),h=b.prop(g,"type")=="checkbox",i=b.parent(g,"label")||b.parent(g,"span");if(!b.hasClass(g,"beautify_input")){a.log("input\u5fc5\u987b\u6709class=\u201dbeautify_input\u201c(renderCheckPro)");return}h?f&&g.checked==1||g.checked?(b.removeClass(i,"radio-checkoff-span"),b.addClass(i,"radio-checkon-span"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"radio-checkon-span"),b.addClass(i,"radio-checkoff-span"),b.removeClass(b.parent(i),"radio-checkstyle")):f&&g.checked==1||g.checked?(b.removeClass(i,"beautify_radio_off"),b.addClass(i,"beautify_radio_on"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"beautify_radio_on"),b.addClass(i,"beautify_radio_off"),b.removeClass(b.parent(i),"radio-checkstyle")),c.on(i,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;e.toggleCheckPro(g)})},renderCheckbox:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_check"))return;b.append(b.create("<i>&nbsp;</i>"),g),e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_check c_on_disable":g.className="beautify_check beautify_check_disable":(f&&e.checked==1||e.checked?g.className="beautify_check c_on":g.className="beautify_check c_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleCheckbox(e)}))},renderRadio:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_radio"))return;b.append(b.create("<i>&nbsp;</i>"),g),e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_radio r_on_disable":g.className="beautify_radio beautify_radio_disable":(f&&e.checked==1||e.checked?g.className="beautify_radio r_on":g.className="beautify_radio r_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleRadio(e)}))},setCheckboxOn:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_on",c.checked=!0},setCheckboxOff:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_off",c.checked=!1},setCheckboxDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!0},setCheckboxNoDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!1},toggleCheckbox:function(a){var c=b.get(a),d=b.parent(c,"label");d.className=="beautify_check c_off"?(d.className=="beautify_check c_on_disable"?d.className="beautify_check c_on_disable":d.className="beautify_check c_on",f&&c.click()):d.className=="beautify_check c_on_disable"?(d.className="beautify_check c_on_disable",f&&c.click()):d.className=="beautify_check beautify_check_disable"?(d.className="beautify_check beautify_check_disable",f&&c.click()):(d.className="beautify_check c_off",f&&c.click())},toggleRadio:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var g=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var h=0;h<g.length;h++){var i=b.parent(g[h]);if(i.className.indexOf("beautify_radio")==-1)continue;if(b.attr(g[h],"name")!==d)continue;i.className="beautify_radio r_off"}e.className="beautify_radio r_on",f&&c.click()}else e.className=="beautify_radio beautify_radio_disable"?(e.className="beautify_radio beautify_radio_disable",f&&c.click()):(e.className="beautify_radio r_off",f&&c.click())},setRadioOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var f=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var g=0;g<f.length;g++){var h=b.parent(f[g]);if(h.className.indexOf("beautify_radio")==-1)continue;if(b.attr(f[g],"name")!==d)continue;h.className="beautify_radio r_off"}e.className="beautify_radio r_on",c.checked=!0}},toggleCheckPro:function(a){var c=b.get(a),d=b.prop(c,"type")=="checkbox",e=b.attr(c,"name"),g=b.parent(a,"span");if(d)b.hasClass(g,"radio-checkon-span")?(b.removeClass(b.parent(g),"radio-checkstyle"),b.removeClass(g,"radio-checkon-span"),b.hasClass(g,"radio-checkoff-span")||b.addClass(g,"radio-checkoff-span")):(b.addClass(b.parent(g),"radio-checkstyle"),b.toggleClass(g,"radio-checkon-span","radio-checkoff-span"));else if(b.hasClass(g,"beautify_radio_off")){var h=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<h.length;c++){var i=h[c],j=b.parent(h[c]);if(i.className.indexOf("beautify_input")==-1)continue;if(b.attr(i,"name")!==e)continue;j.className="beautify_radio_off",b.removeClass(b.parent(j),"radio-checkstyle")}b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()}else b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()},setRadioPro:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_off",b.removeClass(b.parent(h),"radio-checkstyle")}b.addClass(b.parent(e),"radio-checkstyle"),e.className="beautify_radio_on",b.get(a).checked=!0},setRadioProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_on"}e.className="beautify_radio_off",b.get(a).checked=!1},setCheckboxProOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.addClass(b.parent(e),"radio-checkstyle"),b.toggleClass(e,"radio-checkon-span","radio-checkoff-span"),b.get(a).checked=!0},setCheckboxProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.removeClass(b.parent(e),"radio-checkstyle"),b.removeClass(e,"radio-checkon-span"),b.hasClass(e,"radio-checkoff-span")||b.addClass(e,"radio-checkoff-span"),b.get(a).checked=!1}}),g}),KISSY.add("page/item-init",function(S,showPages,beautifyForm,Select,Switchable){var DOM=S.DOM,Event=S.Event;return PromopropsItem={panel:null,msg:null,currentMode:step,paginator:null,promotionItemPaginator:null,init:function(){PromopropsItem.Form=new beautifyForm,iconTabs=(new Switchable.Tabs("#J_main",{navCls:"ks-switchable-nav",contentCls:"main-content",activeTriggerCls:"current",triggerType:"click"})).on("switch",function(a){var b=a.currentIndex;b==1?(PromopropsItem.currentMode="2",DOM.hide(".J_Seach_1"),DOM.show(".J_Seach_2"),PromopropsItem.promotionItemPaginator?PromopropsItem.promotionItemPaginator.toPage(PromopropsItem.promotionItemPaginator.page):PromopropsItem.loadPromotionItems(),DOM.addClass("#J_Step_1","current")):(PromopropsItem.currentMode="1",DOM.show(".J_Seach_1"),DOM.hide(".J_Seach_2"),PromopropsItem.paginator?PromopropsItem.paginator.toPage(PromopropsItem.paginator.page):PromopropsItem.searchTbItems())}),Event.on(doc,"keydown",function(a){a.which===13&&(PromopropsItem.paginator?PromopropsItem.paginator.toPage(PromopropsItem.paginator.page):PromopropsItem.searchTbItems())}),PromopropsItem.currentMode==1?PromopropsItem.searchTbItems():iconTabs.switchTo(1),Event.on("#J_NextStep","click",function(a){iconTabs.switchTo(1)}),Event.on("#J_BaceStep","click",function(a){iconTabs.switchTo(0)}),promoSelect=new Select.Select({render:"#J_SelectItemCidBox",valueField:"#J_SelectItemCid",items:S.JSON.parse(sellerCats),visibleMode:"display"}),promoSelect.render(),promoSelect.setSelectedValue("0"),DOM.css(DOM.get(".bui-list-picker"),{left:"-999px",top:"-999px"});var a=[{text:"\u5168\u90e8",value:"0"},{text:"\u51fa\u552e\u4e2d",value:"1"},{text:"\u5e93\u4e2d",value:"2"}],b=new Select.Select({render:"#J_SelectItemSelling",valueField:"#J_SearchSelling",items:a});b.render(),b.setSelectedValue("0");var c=[{text:"\u9ed8\u8ba4\u6392\u5e8f",value:"3"},{text:"\u4e0a\u67b6\u65f6\u95f4:\u65e9",value:"0"},{text:"\u4e0a\u67b6\u65f6\u95f4:\u665a",value:"1"}],d=new Select.Select({render:"#J_SelectItemSort",valueField:"#J_SelectItemSortHide",items:c});d.render(),d.setSelectedValue("0"),d.on("change",function(a){PromopropsItem.searchTbItems()});var e=[{text:"\u72b6\u6001",value:"0"},{text:"\u7b49\u5f85\u5904\u7406",value:"2"},{text:"\u5904\u7406\u5931\u8d25",value:"1"},{text:"\u6210\u529f\u52a0\u5165",value:"3"}],f=new Select.Select({render:"#J_SearchStatusBox",valueField:"#J_SearchStatus",items:e});f.render(),f.setSelectedValue(status),f.on("change",function(a){PromopropsItem.loadPromotionItems()}),Event.on(DOM.query(".J_Tiger"),"mouseenter mouseleave",function(a){a.type=="mouseenter"?DOM.addClass(a.currentTarget,"current"):DOM.removeClass(a.currentTarget,"current")}),Event.on(DOM.query(".J_Page"),"click",function(a){var b=DOM.attr(a.currentTarget,"data");PromopropsItem.currentMode=="1"?(DOM.removeClass(DOM.query("#J_TopLeft .J_Page"),"active"),DOM.addClass(a.currentTarget,"active"),DOM.html(DOM.get("#J_TopLeft .value"),b),DOM.val("#J_SelectItemPage",b),PromopropsItem.searchTbItems()):(DOM.removeClass(DOM.query("#J_TopRight .J_Page"),"active"),DOM.addClass(a.currentTarget,"active"),DOM.html(DOM.get("#J_TopRight .value"),b),DOM.val("#J_RightSelectItemPage",b),PromopropsItem.loadPromotionItems())}),Event.delegate(document,"click",".J_Editor_Promo",function(a){if(!showPermissions("editor_promoprops","\u4fc3\u9500\u9053\u5177"))return;var b=DOM.attr(a.currentTarget,"data"),c=IsExpired();if(c>-5e3){var d=function(a){window.location.href=b},e=function(a){KISSY.Event.fire(".J_TopExpired","click")},f="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(d).setErrorHandle(e).setData(f).send()}else window.location.href=b}),Event.delegate(document,"click",".J_AddToPromo",function(a){var b=DOM.attr(a.currentTarget,"data"),c=function(a){DOM.val("#J_TotalPromoItems",a.payload);if(a.payload>=150)new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u975e\u5168\u5e97\u7c7b\u578b\u9053\u5177\u5361\u5b9d\u8d1d\u6570\u91cf\u4e0d\u80fd\u5927\u4e8e150\u4e2a\uff0c\u73b0\u5728\u5df2\u7ecf\u52a0\u5165"+a.payload+"\u8bf7\u5220\u9664\u591a\u4f59\u7684\u5b9d\u8d1d.",type:"info"});else{var c=IsExpired();if(c>-5e3){var d=function(a){b=="1"&&PromopropsItem.addSelectItemsToPromotion()},e=function(a){KISSY.Event.fire(".J_TopExpired","click")},f="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(d).setErrorHandle(e).setData(f).send()}else b=="1"&&PromopropsItem.addSelectItemsToPromotion()}},d=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},e="promo_id="+pid;(new H.widget.asyncRequest).setURI(getPromoItemNumUrl).setMethod("GET").setHandle(c).setErrorHandle(d).setData(e).send()}),Event.on("#J_RightSearchBtn","click",function(a){PromopropsItem.currentMode=="1"?PromopropsItem.searchTbItems():PromopropsItem.currentMode=="2"&&PromopropsItem.loadPromotionItems()}),Event.on("#J_TopCheckAll","click",PromopropsItem.checkAll),Event.on("#J_RightCheckAll","click",PromopropsItem.rightCheckAll),Event.on("#J_RightBottonCheckAll","click",PromopropsItem.rightCheckAll),Event.on("#J_BatchAddBtn","click",PromopropsItem.batchAddItems),Event.on("#J_RemovePromotionItems","click",PromopropsItem.removePromotionItemHandle)},searchTbItems:function(a){var b=function(a){DOM.removeClass(".J_ItemSelectBtnHolder","ks-hidden"),totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.get("#J_LEmpty").style.display="none",DOM.css(DOM.query(".J_ItemSelectBtnHolder"),"display","")):(DOM.get("#J_LEmpty").style.display="",DOM.css(DOM.query(".J_ItemSelectBtnHolder"),"display","none")),PromopropsItem.renderItems(a.payload.body),pageCount=Math.ceil(totalRecords/a.payload.pageNum),PromopropsItem.paginator=(new showPages("PromopropsItem.paginator")).setRender(PromopropsItem.handlePagination).setPageCount(pageCount).printHtml("#J_Paging",2),PromopropsItem.paginator.printHtml("#J_TopPaging",3),DOM.hide("#J_LeftLoading"),DOM.show("#J_MainLeftContent")},c=function(a){DOM.hide("#J_LeftLoading"),DOM.show("#J_MainLeftContent"),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};if(DOM.val(DOM.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var d=encodeURIComponent(DOM.val(DOM.get("#J_SearchTitle")));else var d="";var e=DOM.val(DOM.get("#J_SelectItemPage")),f=DOM.val(DOM.get("#J_SelectItemCid")),g=DOM.val(DOM.get("#J_SearchSelling")),h=DOM.val(DOM.get("#J_SelectItemOrder")),i="q="+d+"&cid="+f+"&type="+g;i+="&itemOrder="+h+"&pageSize="+e,i+="&pid="+pid;var j=DOM.val(DOM.get("#J_StartPrice")),k=DOM.val(DOM.get("#J_EndPrice"));i+="&start_price="+j+"&end_price="+k,DOM.show("#J_LeftLoading"),DOM.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("GET").setHandle(b).setErrorHandle(c).setData(i).setDataType("json").send()},renderItems:function(a){DOM.html(DOM.get("#J_TbItemList"),a,!0);var b=DOM.query("#J_TbItemList .J_TbItem");Event.on(b,"mouseenter mouseleave click",function(a){var b=DOM.get(".J_CheckBox",a.currentTarget);if(b.disabled)return;a.type=="mouseenter"?DOM.addClass(a.currentTarget,"mouseover"):a.type=="mouseleave"?DOM.removeClass(a.currentTarget,"mouseover"):a.type=="click"&&(b.checked==0?(DOM.addClass(a.currentTarget,"selected"),b.checked=!0):(DOM.removeClass(a.currentTarget,"selected"),PromopropsItem.Form.setCheckboxOff(DOM.get("#J_TopCheckAll")),b.checked=!1))}),PromopropsItem.Form.setCheckboxOff(DOM.get("#J_TopCheckAll"))},checkAll:function(a){checkBoxs=DOM.query("#J_TbItemList .J_CheckBox"),len=checkBoxs.length;for(i=0;i<len;i++){var b=checkBoxs[i].value;if(checkBoxs[i].disabled)continue;this.checked?(checkBoxs[i].checked=!0,DOM.addClass("#J_TbItem_"+b,"selected")):(checkBoxs[i].checked=!1,DOM.removeClass("#J_TbItem_"+b,"selected"))}},handlePagination:function(a){pageId=a;var b=function(a){totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.get("#J_LEmpty").style.display="none",DOM.css(DOM.query(".J_ItemSelectBtnHolder"),"display","")):(DOM.get("#J_LEmpty").style.display="",DOM.css(DOM.query(".J_ItemSelectBtnHolder"),"display","none")),pageCount=Math.ceil(totalRecords/a.payload.pageNum),PromopropsItem.paginator.setPage(pageId).setPageCount(pageCount).printHtml("#J_Paging",2),PromopropsItem.paginator.setPage(pageId).setPageCount(pageCount).printHtml("#J_TopPaging",3),PromopropsItem.renderItems(a.payload.body),DOM.hide("#J_LeftLoading"),DOM.show("#J_MainLeftContent")};if(DOM.val(DOM.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var c=encodeURIComponent(DOM.val(DOM.get("#J_SearchTitle")));else var c="";var d=DOM.val(DOM.get("#J_SelectItemPage")),e=DOM.val(DOM.get("#J_SelectItemCid")),f=DOM.val(DOM.get("#J_SearchSelling")),g=DOM.val(DOM.get("#J_SelectItemOrder")),h="q="+c+"&cid="+e+"&type="+f;h+="&itemOrder="+g+"&pageSize="+d,h+="&pid="+pid+"&page_id="+pageId;if(f==0){var i=DOM.val(DOM.get("#J_StartPrice")),j=DOM.val(DOM.get("#J_EndPrice"));h+="&start_price="+i+"&end_price="+j}DOM.show("#J_LeftLoading"),DOM.hide("#J_MainLeftContent"),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("GET").setHandle(b).setData(h).send()},addSelectItemsToPromotion:function(iid){if(!showPermissions("editor_promoprops","\u4fc3\u9500\u9053\u5177"))return;DOM.attr("#J_TopAddToPromo","disabled",!0),DOM.addClass("#J_TopAddToPromo","button-disabled"),checkBoxs=DOM.query("#J_TbItemList .J_CheckBox");var json=[];len=checkBoxs.length;var translateDiv=DOM.get("#J_Translate");for(i=0;i<len;i++){var flag=!1;iid!=undefined?checkBoxs[i].value==iid&&!checkBoxs[i].disabled&&(flag=!0):checkBoxs[i].checked&&!checkBoxs[i].disabled&&(flag=!0);if(flag==1){var totalNum=Number(DOM.val("#J_TotalPromoItems"));totalNum+=1;if(totalNum>150){new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u975e\u5168\u5e97\u7c7b\u578b\u9053\u5177\u5361\u5b9d\u8d1d\u6570\u91cf\u4e0d\u80fd\u5927\u4e8e150\u4e2a\uff0c\u5f53\u524d\u5df2\u52a0\u5165"+totalNum+"\u4e2a\u5b9d\u8d1d\uff0c\u8bf7\u5220\u9664\u591a\u4f59\u7684\u5b9d\u8d1d\u3002",type:"info"});break}DOM.val("#J_TotalPromoItems",totalNum);var id=checkBoxs[i].value,title=H.util.strProcess(DOM.val(DOM.get("#J_ItemTitle_"+id))),picUrl=DOM.val(DOM.get("#J_ItemPic_"+id)),price=DOM.val(DOM.get("#J_ItemPrice_"+id)),outId=H.util.strProcess(DOM.val(DOM.get("#J_ItemOuterId_"+id)));o='{"id":"'+id+'", "outer_id":"'+outId+'", "title":"'+title+'", "price":"'+price+'", "pic_url":"'+picUrl+'"}',o=eval("("+o+")"),json.push(o);if(iid!=undefined)break}}if(json.length==0){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u5b9d\u8d1d\uff01",type:"error",autoClose:!0,timeOut:2e3}),DOM.attr("#J_TopAddToPromo","disabled",!1),DOM.removeClass("#J_TopAddToPromo","button-disabled");return}var itemsJson=KISSY.JSON.stringify(json),submitHandle=function(a){DOM.attr("#J_TopAddToPromo","disabled",!1),DOM.removeClass("#J_TopAddToPromo","button-disabled"),a.payload.limit!=null&&new H.widget.msgBox({title:"\u64cd\u4f5c\u5931\u8d25",content:a.payload.limit,type:"error"}),PromopropsItem.paginator?PromopropsItem.paginator.toPage(PromopropsItem.paginator.page):PromopropsItem.searchTbItems()},errorHandle=function(a){DOM.attr("#J_TopAddToPromo","disabled",!1),DOM.removeClass("#J_TopAddToPromo","button-disabled"),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},data="pid="+pid+"&items="+itemsJson+"&form_key="+FORM_KEY;(new H.widget.asyncRequest).setURI(addPromoItemsUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()},loadPromotionItems:function(){var a=function(a){totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.get("#J_REmpty").style.display="none",DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display",""),totalRecords==1&&new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u975e\u5168\u5e97\u9053\u5177\u5361\u5b9d\u8d1d\u6570\u91cf\u9700\u5927\u4e8e1\u4e2a\uff0c\u5426\u5219\u6d3b\u52a8\u4e0d\u4f1a\u751f\u6548\u3002",type:"info"})):(DOM.get("#J_REmpty").style.display="",DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display","none")),DOM.html(DOM.get("#J_PromotionItemList"),a.payload.body,!0),DOM.hide("#J_RightLoading"),DOM.show("#J_MainRightContent"),pageCount=Math.ceil(totalRecords/a.payload.pageNum),PromopropsItem.renderPromoItems(),PromopropsItem.promotionItemPaginator=(new showPages("PromopropsItem.promotionItemPaginator")).setRender(PromopropsItem.promotionItemPaginationHandle).setPageCount(pageCount).printHtml("#J_PromotionItemPaging",2)};if(DOM.val(DOM.get("#J_RightSearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var b=encodeURIComponent(DOM.val(DOM.get("#J_RightSearchTitle")));else var b="";var c=DOM.val(DOM.get("#J_SearchStatus")),d=DOM.val(DOM.get("#J_RightSelectItemPage")),c=DOM.val(DOM.get("#J_SearchStatus")),e="pid="+pid+"&status="+c+"&q="+b+"&page_size="+d;DOM.show("#J_RightLoading"),DOM.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(loadPromotionItemsUrl).setMethod("GET").setHandle(a).setData(e).send()},renderPromoItems:function(){var a=DOM.query("#J_PromotionItemList .J_TbItem");Event.on(a,"mouseenter mouseleave",function(a){var b=DOM.get(".J_CheckBox",a.currentTarget);if(b.disabled)return;a.type=="mouseenter"?DOM.addClass(a.currentTarget,"hover"):a.type=="mouseleave"&&DOM.removeClass(a.currentTarget,"hover")}),PromopropsItem.Form.setCheckboxOff(DOM.get("#J_RightBottonCheckAll")),PromopropsItem.Form.setCheckboxOff(DOM.get("#J_RightCheckAll")),PromopropsItem.Form.renderAll("#J_PromotionItemList"),Event.on(DOM.query("#J_PromotionItemList .J_CheckBox"),"click",function(a){var b=a.currentTarget.value;if(this.checked){var c=DOM.query("#J_PromotionItemList .J_CheckBox"),d=c.length,e=!0;for(i=0;i<d;i++){if(c[i].disabled)continue;if(!c[i].checked){e=!1;break}}e&&(PromopropsItem.Form.setCheckboxOn(DOM.get("#J_RightBottonCheckAll")),PromopropsItem.Form.setCheckboxOn(DOM.get("#J_RightCheckAll")))}else PromopropsItem.Form.setCheckboxOff(DOM.get("#J_RightBottonCheckAll")),PromopropsItem.Form.setCheckboxOff(DOM.get("#J_RightCheckAll"))})},promotionItemPaginationHandle:function(a){pageId=a;var b=function(a){DOM.get("#J_RightCheckAll").checked=!1,totalRecords=a.payload.totalRecords,totalRecords>0?(DOM.get("#J_REmpty").style.display="none",DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display",""),totalRecords==1&&new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u975e\u5168\u5e97\u9053\u5177\u5361\u5b9d\u8d1d\u6570\u91cf\u9700\u5927\u4e8e1\u4e2a\uff0c\u5426\u5219\u6d3b\u52a8\u4e0d\u4f1a\u751f\u6548\u3002",type:"info"})):(DOM.get("#J_REmpty").style.display="",DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display","none")),pageCount=Math.ceil(totalRecords/a.payload.pageNum),PromopropsItem.promotionItemPaginator.setPage(pageId).setPageCount(pageCount).printHtml("#J_PromotionItemPaging",2),DOM.html(DOM.get("#J_PromotionItemList"),a.payload.body),PromopropsItem.renderPromoItems(),DOM.hide("#J_RightLoading"),DOM.show("#J_MainRightContent")};DOM.show("#J_RightLoading"),DOM.hide("#J_MainRightContent");if(DOM.val(DOM.get("#J_RightSearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var c=encodeURIComponent(DOM.val(DOM.get("#J_RightSearchTitle")));else var c="";var d=DOM.val(DOM.get("#J_SearchStatus")),e=DOM.val(DOM.get("#J_RightSelectItemPage")),d=DOM.val(DOM.get("#J_SearchStatus")),f="pid="+pid+"&status="+d+"&q="+c+"&page_size="+e+"&page_id="+pageId;(new H.widget.asyncRequest).setURI(loadPromotionItemsUrl).setMethod("GET").setHandle(b).setData(f).send()},removePromotionItemHandle:function(a,b,c){if(!showPermissions("editor_promoprops","\u4fc3\u9500\u9053\u5177"))return;DOM.attr("#J_RemovePromotionItems","disabled",!0),DOM.addClass("#J_RemovePromotionItems","button-disabled"),itemIds=[];if(a&&b)itemIds.push(a),pid=b;else{checkBoxs=DOM.query("#J_PromotionItemList .J_CheckBox"),len=checkBoxs.length;for(i=0;i<len;i++)checkBoxs[i].checked&&!checkBoxs[i].disabled&&itemIds.push(checkBoxs[i].value)}if(itemIds.length==0){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u5b9d\u8d1d\uff01",type:"error",autoClose:!0,timeOut:3e3}),DOM.attr("#J_RemovePromotionItems","disabled",!1),DOM.removeClass("#J_RemovePromotionItems","button-disabled");return}var d=function(a){DOM.attr("#J_RemovePromotionItems","disabled",!1),DOM.removeClass("#J_RemovePromotionItems","button-disabled"),c!="promoItems"?PromopropsItem.loadPromotionItems():iconControl.paginator?iconControl.paginator.toPage(iconControl.paginator.page):iconControl.searchPromoItems()},e="pid="+pid+"&item_ids="+itemIds+"&form_key="+FORM_KEY;(new H.widget.asyncRequest).setURI(removePromotionItemUrl).setMethod("POST").setHandle(d).setData(e).send()},rightCheckAll:function(a){checkBoxs=DOM.query("#J_PromotionItemList .J_CheckBox"),len=checkBoxs.length;for(i=0;i<len;i++){var b=checkBoxs[i].value;if(checkBoxs[i].disabled)continue;this.checked?(a.currentTarget.id=="J_RightCheckAll"?PromopropsItem.Form.setCheckboxOn(DOM.get("#J_RightBottonCheckAll")):PromopropsItem.Form.setCheckboxOn(DOM.get("#J_RightCheckAll")),PromopropsItem.Form.setCheckboxOn(checkBoxs[i])):(a.currentTarget.id=="J_RightCheckAll"?PromopropsItem.Form.setCheckboxOff(DOM.get("#J_RightBottonCheckAll")):PromopropsItem.Form.setCheckboxOff(DOM.get("#J_RightCheckAll")),PromopropsItem.Form.setCheckboxOff(checkBoxs[i]))}},retry:function(a,b){if(!showPermissions("editor_promoprops","\u4fc3\u9500\u9053\u5177"))return;var c=function(a){PromopropsItem.msg.hide(),PromopropsItem.promotionItemPaginator?PromopropsItem.promotionItemPaginator.toPage(PromopropsItem.promotionItemPaginator.page):PromopropsItem.loadPromotionItems()},d="promo_item_id="+a+"&force="+b;PromopropsItem.msg=new H.widget.msgBox({title:"",dialogType:"loading",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d\uff0c\u8bf7\u7a0d\u5019"}),(new H.widget.asyncRequest).setURI(retryUrl).setMethod("GET").setHandle(c).setData(d).send()}}},{requires:["utils/showPages/index","utils/beautifyForm/index","bui/select","switchable"]}); 