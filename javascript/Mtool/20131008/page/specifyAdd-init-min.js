KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<div class="page-bottom"> <div class="sabrosus">',c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>",d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> ';break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>"),d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',this.page==1;if(this.page-2<=0){var f=1;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else if(this.page+2>=this.pageCount){var f=this.pageCount-4;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else{var f=this.page-2;if(this.pageCount>this.page+2)var g=this.page+2;else var g=this.pageCount}for(var h=f;h<=g;h++)h>0&&(h==this.page?c+='<span class="current a-padding">'+h+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+h+');">'+h+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("utils/beautifyForm/index",function(a){function g(b,c){var d=this;defaultCfg={init:!0};if(!(d instanceof g))return new g(b,c);var e=a.merge(defaultCfg,c);d._init(b,e)}var b=a.DOM,c=a.Event,d=document,e=b.get("body"),f=!1;return a.UA.safari!="undefined"&&a.UA.safari<3&&(f=!0),a.UA.ie==6&&b.replaceClass("#J_BodyHtml","has-js","no-js"),a.augment(g,{_init:function(a,b){var c=this;c.renderAll(a)},renderAll:function(a){var c=this;a=typeof a=="undefined"?"#J_BodyHtml":a;var d=b.filter(b.query(a+" input"),function(a){if(a.type=="checkbox"||a.type=="radio")return!0});for(var e=d.length-1;e>=0;e--)c.renderInput(d[e])},renderInput:function(a){var c=this,d=b.get(a),e=b.parent(d);e.tagName.toUpperCase()=="LABEL"&&e.className.indexOf("beautify_")>-1?e.className=="beautify_check"?c.renderCheckbox(d):e.className=="beautify_radio"&&c.renderRadio(d):e.tagName.toUpperCase()=="SPAN"&&b.hasClass(d,"beautify_input")&&c.renderCheckPro(d)},renderAllCheckPro:function(a){var c=this,d=b.filter(b.query(a+" input"),function(a){if((a.type=="checkbox"||a.type=="radio")&&b.hasClass(a,"beautify_input"))return!0});if(d.length<1)return;for(var e=d.length-1;e>=0;e--)c.renderCheckPro(d[e])},renderAllCheckbox:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="checkbox")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllCheckbox)");return}for(var f=e.length-1;f>=0;f--)d.renderCheckbox(e[f])},renderAllRadio:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="radio")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllRadio)");return}for(var f=e.length-1;f>=0;f--)d.renderRadio(e[f])},renderCheckPro:function(d){var e=this,g=b.get(d),h=b.prop(g,"type")=="checkbox",i=b.parent(g,"label")||b.parent(g,"span");if(!b.hasClass(g,"beautify_input")){a.log("input\u5fc5\u987b\u6709class=\u201dbeautify_input\u201c(renderCheckPro)");return}h?f&&g.checked==1||g.checked?(b.removeClass(i,"radio-checkoff-span"),b.addClass(i,"radio-checkon-span"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"radio-checkon-span"),b.addClass(i,"radio-checkoff-span"),b.removeClass(b.parent(i),"radio-checkstyle")):f&&g.checked==1||g.checked?(b.removeClass(i,"beautify_radio_off"),b.addClass(i,"beautify_radio_on"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"beautify_radio_on"),b.addClass(i,"beautify_radio_off"),b.removeClass(b.parent(i),"radio-checkstyle")),c.on(i,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;e.toggleCheckPro(g)})},renderCheckbox:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_check"))return;e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_check c_on_disable":g.className="beautify_check beautify_check_disable":(f&&e.checked==1||e.checked?g.className="beautify_check c_on":g.className="beautify_check c_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleCheckbox(e)}))},renderRadio:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_radio"))return;e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_radio r_on_disable":g.className="beautify_radio beautify_radio_disable":(f&&e.checked==1||e.checked?g.className="beautify_radio r_on":g.className="beautify_radio r_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleRadio(e)}))},setCheckboxOn:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_on",c.checked=!0},setCheckboxOff:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_off",c.checked=!1},setCheckboxDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!0},setCheckboxNoDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!1},toggleCheckbox:function(a){var c=b.get(a),d=b.parent(c,"label");d.className=="beautify_check c_off"?(d.className=="beautify_check c_on_disable"?d.className="beautify_check c_on_disable":d.className="beautify_check c_on",f&&c.click()):d.className=="beautify_check c_on_disable"?(d.className="beautify_check c_on_disable",f&&c.click()):d.className=="beautify_check beautify_check_disable"?(d.className="beautify_check beautify_check_disable",f&&c.click()):(d.className="beautify_check c_off",f&&c.click())},toggleRadio:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var g=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var h=0;h<g.length;h++){var i=b.parent(g[h]);if(i.className.indexOf("beautify_radio")==-1)continue;if(b.attr(g[h],"name")!==d)continue;i.className="beautify_radio r_off"}e.className="beautify_radio r_on",f&&c.click()}else e.className=="beautify_radio beautify_radio_disable"?(e.className="beautify_radio beautify_radio_disable",f&&c.click()):(e.className="beautify_radio r_off",f&&c.click())},setRadioOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var f=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var g=0;g<f.length;g++){var h=b.parent(f[g]);if(h.className.indexOf("beautify_radio")==-1)continue;if(b.attr(f[g],"name")!==d)continue;h.className="beautify_radio r_off"}e.className="beautify_radio r_on",c.checked=!0}},toggleCheckPro:function(a){var c=b.get(a),d=b.prop(c,"type")=="checkbox",e=b.attr(c,"name"),g=b.parent(a,"span");if(d)b.hasClass(g,"radio-checkon-span")?(b.removeClass(b.parent(g),"radio-checkstyle"),b.removeClass(g,"radio-checkon-span"),b.hasClass(g,"radio-checkoff-span")||b.addClass(g,"radio-checkoff-span")):(b.addClass(b.parent(g),"radio-checkstyle"),b.toggleClass(g,"radio-checkon-span","radio-checkoff-span"));else if(b.hasClass(g,"beautify_radio_off")){var h=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<h.length;c++){var i=h[c],j=b.parent(h[c]);if(i.className.indexOf("beautify_input")==-1)continue;if(b.attr(i,"name")!==e)continue;j.className="beautify_radio_off",b.removeClass(b.parent(j),"radio-checkstyle")}b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()}else b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()},setRadioPro:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_off",b.removeClass(b.parent(h),"radio-checkstyle")}b.addClass(b.parent(e),"radio-checkstyle"),e.className="beautify_radio_on",b.get(a).checked=!0},setRadioProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_on"}e.className="beautify_radio_off",b.get(a).checked=!1},setCheckboxProOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.addClass(b.parent(e),"radio-checkstyle"),b.toggleClass(e,"radio-checkon-span","radio-checkoff-span"),b.get(a).checked=!0},setCheckboxProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.removeClass(b.parent(e),"radio-checkstyle"),b.removeClass(e,"radio-checkon-span"),b.hasClass(e,"radio-checkoff-span")||b.addClass(e,"radio-checkoff-span"),b.get(a).checked=!1}}),g}),KISSY.add("page/specifyAdd-init",function(a,b,c,d){var a=KISSY,e=a.DOM,f=a.Event;return specifyAdd={msg:null,isLoad:!1,paginator:null,init:function(){specifyAdd.Form=new c;var a=[{text:"10\u6761",value:"10"},{text:"20\u6761",value:"20"}],b=new d.Select({render:"#J_SelectPage",valueField:"#J_SelectItemPage",items:a});b.render(),b.setSelectedValue("10"),b.on("change",function(a){specifyAdd.searchTbItems()});var e=[{text:"\u6700\u65b0\u4e0a\u67b6",value:"0"},{text:"\u6700\u665a\u4e0a\u67b6",value:"1"}],b=new d.Select({render:"#J_SelectOrder",valueField:"#J_SelectItemOrder",items:e});b.render(),b.setSelectedValue("0"),b.on("change",function(a){specifyAdd.searchTbItems()});var f=[{text:"\u5168\u90e8",value:"0"},{text:"\u51fa\u552e\u4e2d",value:"1"},{text:"\u5e93\u4e2d",value:"2"}],g=new d.Select({render:"#J_SelectItemSelling",valueField:"#J_SearchSelling",items:f});g.render(),g.setSelectedValue("0"),specifyAdd.run()},run:function(){specifyAdd.searchTbItems(),f.on("#J_SelectItemCid","change",function(a){specifyAdd.searchTbItems()}),f.on("#J_SearchBtn","click",function(a){specifyAdd.searchTbItems()})},searchTbItems:function(){var a=function(a){e.attr("#J_LCheckAll-b","checked",!1),e.hide("#J_RightLoading"),e.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,e.css(e.get("#J_NoteIcon"),"display","none"),totalRecords>0?(e.css(e.get("#J_REmpty"),"display","none"),e.css(e.query(".J_PromotionItemBtnHolder"),"display","")):(e.css(e.get("#J_REmpty"),"display",""),e.css(e.query(".J_PromotionItemBtnHolder"),"display","none"),e.css(e.query(".J_ControlBtm"),"display","none")),e.html("#ItemNum",a.payload.totalRecords),e.html("#J_PromotionItemList",a.payload.body);var c=e.query("#J_PromotionItemList .J_CheckBox");selectItemNum=0,changeItemId="",f.on(c,"click",function(a){this.checked||e.attr("#J_TCheckAll","checked",!1)});var d=Math.ceil(totalRecords/a.payload.pageNum);specifyAdd.paginator=(new b("specifyAdd.paginator")).setRender(specifyAdd.handlePagination).setPageCount(d).printHtml("#J_BottomPaging",2),specifyAdd.paginator=(new b("specifyAdd.paginator")).setRender(specifyAdd.handlePagination).setPageCount(d).printHtml("#J_TopPaging",3)};if(e.val(e.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var c=encodeURIComponent(e.val(e.get("#J_SearchTitle")));else var c="";var d=e.val(e.get("#J_SelectItemPage")),g=e.val(e.get("#J_SelectItemCid")),h=e.val(e.get("#J_SearchSelling")),i=e.val(e.get("#J_SelectItemOrder")),j="recommend="+recommend+"&q="+c+"&cid="+g+"&type="+h;j+="&itemOrder="+i+"&pageSize="+d;if(h==0){var k=e.val(e.get("#J_StartPrice")),l=e.val(e.get("#J_EndPrice"));j+="&start_price="+k+"&end_price="+l}e.show("#J_RightLoading"),e.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("GET").setHandle(a).setData(j).send()},handlePagination:function(a){pageId=a;var b=function(a){e.hide("#J_RightLoading"),e.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,e.attr("#J_LCheckAll-b","checked",!1),e.css(e.get("#J_NoteIcon"),"display","none"),totalRecords>0?(e.css(e.get("#J_REmpty"),"display","none"),e.css(e.query(".J_PromotionItemBtnHolder"),"display","")):(e.css(e.get("#J_REmpty"),"display",""),e.css(e.query(".J_PromotionItemBtnHolder"),"display","none")),e.html("#ItemNum",a.payload.totalRecords),e.html("#J_PromotionItemList",a.payload.body);if(!specifyAdd.checkBoxs)var b=e.query("#J_PromotionItemList .J_CheckBox");else var b=specifyAdd.checkBoxs;var c=b.length,d=changeItemId.split(",");for(var g=0;g<c;g++)for(var h=0;h<d.length;h++)d[h]==b[g].value&&(b[g].checked=!0);var i=e.query("#J_PromotionItemList .J_CheckBox");f.on(i,"click",function(a){this.checked||e.attr("#J_TCheckAll","checked",!1)});var j=Math.ceil(totalRecords/a.payload.pageNum);specifyAdd.paginator.setPage(pageId).setPageCount(j).printHtml("#J_BottomPaging",2),specifyAdd.paginator.setPage(pageId).setPageCount(j).printHtml("#J_TopPaging",3)};if(e.val(e.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var c=encodeURIComponent(e.val(e.get("#J_SearchTitle")));else var c="";var d=e.val(e.get("#J_SelectItemPage")),g=e.val(e.get("#J_SelectItemCid")),h=e.val(e.get("#J_SearchSelling")),i=e.val(e.get("#J_SelectItemOrder")),j="recommend="+recommend+"&q="+c+"&cid="+g+"&type="+h;j+="&itemOrder="+i+"&pageSize="+d+"&page_id="+pageId;if(h==0){var k=e.val(e.get("#J_StartPrice")),l=e.val(e.get("#J_EndPrice"));j+="&start_price="+k+"&end_price="+l}e.show("#J_RightLoading"),e.hide("#J_MainRightContent"),e.attr("#J_TCheckAll","checked")&&e.prop("#J_TCheckAll","checked",!1),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("GET").setHandle(b).setData(j).send()},swLJCheck:function(b){b.checked?(a.each(a.all(".J_LCheckBox"),function(a){e.attr(a,"disabled")!="disabled"&&e.attr(a,"checked",!0)}),e.attr("#J_LCheckAll","checked",!0),e.attr("#J_LCheckAll-b","checked",!0)):(a.each(a.all(".J_LCheckBox"),function(a,b){e.attr(a,"disabled")!="disabled"&&e.attr(a,"checked",!1)}),e.attr("#J_LCheckAll","checked",!1),e.attr("#J_LCheckAll-b","checked",!1))},addItemToSpecify:function(a){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;specifyAdd.msg=new H.widget.msgBox({title:"",dialogType:"loading",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406"});var b=new Array,c={},d=e.get("#Ltd-"+a);c.itemId=e.val(e.get(".numIid",d)),c.title=e.val(e.get(".itemTitle",d)),c.picUrl=e.val(e.get(".picUrl",d)),c.delistTime=e.val(e.get(".delistTime",d)),b.push(c),e.html("#add-item-msg",""),specifyAdd.ajaxPostProcessItems(1,b)},addItemsToSpecify:function(){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;specifyAdd.msg=new H.widget.msgBox({title:"",dialogType:"loading",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406"});var b=new Array;a.each(a.all(".J_LCheckBox"),function(a,c){if(e.attr(a,"checked")==1||e.attr(a,"checked")=="checked"){var d=e.val(a),f={},g=e.get("#Ltd-"+d);f.itemId=e.val(e.get(".numIid",g)),f.title=e.val(e.get(".itemTitle",g)),f.picUrl=e.val(e.get(".picUrl",g)),f.delistTime=e.val(e.get(".delistTime",g)),b.push(f)}});if(b.length==0)return specifyAdd.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u5b9d\u8d1d",type:"error"}),e.html("#add-item-msg",'<font color="red">\u60a8\u672a\u9009\u62e9\u5b9d\u8d1d\uff01</font>'),!1;e.html("#add-item-msg",""),specifyAdd.ajaxPostProcessItems(1,b)},ajaxPostProcessItems:function(a,b){var c=b.length;b=JSON.stringify(b),b=encodeURIComponent(b);var d="isAjax=1&recommend="+recommend+"&added="+a+"&items="+b;if(recommend){var f=e.val("#remain_count")-c;if(f<0){var g=e.val("#J_RemainNum");specifyAdd.msg.hide();var h="\u4eb2\uff0c\u5fc5\u63a8\u8350\u7684\u5b9d\u8d1d\u4e0d\u80fd\u591a\u4f59"+g+"\u4e2a\u54e6";return Math.abs(f)>0&&(h+="\u8bf7\u5220\u9664"+Math.abs(f)+"\u4e2a\u5b9d\u8d1d\uff0c\u518d\u52a0\u5165\uff01"),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:h,type:"error"}),!1}d+="&remain_count="+e.val("#remain_count")}var i=function(a){var b=a.payload.added,c=a.payload.items;if(b=="1")for(var d=0;d<c.length;d++)specifyAdd.addItemProcess(c[d]);else for(var d=0;d<c.length;d++)specifyAdd.delItemProcess(c[d]);specifyAdd.msg.hide()},j=function(a){specifyAdd.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return};(new H.widget.asyncRequest).setURI(switchItemsToSpecifyUrl).setMethod("POST").setHandle(i).setErrorHandle(j).setData(d).send()},addItemProcess:function(a){recommend=="1"?e.html("#Ltd-"+a.itemId,"\u5df2\u63a8\u8350"):e.html("#Ltd-"+a.itemId,"\u5df2\u6392\u9664"),e.attr("#Lcb-"+a.itemId,"disabled","disabled"),e.removeAttr("#Lcb-"+a.itemId,"checked"),recommend=="1"&&(e.val("#remain_count",parseInt(e.val("#remain_count"))-1),e.html("#rcount",e.val("#remain_count")))},delItemProcess:function(a){e.remove("#Rtr-"+a.itemId)}}},{requires:["utils/showPages/index","utils/beautifyForm/index","bui/select"]}); 