KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<div class="page-bottom"> <div class="sabrosus">',c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>",d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> ';break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>"),d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',this.page==1;if(this.page-2<=0){var f=1;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else if(this.page+2>=this.pageCount){var f=this.pageCount-4;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else{var f=this.page-2;if(this.pageCount>this.page+2)var g=this.page+2;else var g=this.pageCount}for(var h=f;h<=g;h++)h>0&&(h==this.page?c+='<span class="current a-padding">'+h+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+h+');">'+h+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("utils/beautifyForm/index",function(a){function g(b,c){var d=this;defaultCfg={init:!0};if(!(d instanceof g))return new g(b,c);var e=a.merge(defaultCfg,c);d._init(b,e)}var b=a.DOM,c=a.Event,d=document,e=b.get("body"),f=!1;return a.UA.safari!="undefined"&&a.UA.safari<3&&(f=!0),a.UA.ie==6&&b.replaceClass("#J_BodyHtml","has-js","no-js"),a.augment(g,{_init:function(a,b){var c=this;c.renderAll(a)},renderAll:function(a){var c=this;a=typeof a=="undefined"?"#J_BodyHtml":a;var d=b.filter(b.query(a+" input"),function(a){if(a.type=="checkbox"||a.type=="radio")return!0});for(var e=d.length-1;e>=0;e--)c.renderInput(d[e])},renderInput:function(a){var c=this,d=b.get(a),e=b.parent(d);e.tagName.toUpperCase()=="LABEL"&&e.className.indexOf("beautify_")>-1?e.className=="beautify_check"?c.renderCheckbox(d):e.className=="beautify_radio"&&c.renderRadio(d):e.tagName.toUpperCase()=="SPAN"&&b.hasClass(d,"beautify_input")&&c.renderCheckPro(d)},renderAllCheckPro:function(a){var c=this,d=b.filter(b.query(a+" input"),function(a){if((a.type=="checkbox"||a.type=="radio")&&b.hasClass(a,"beautify_input"))return!0});if(d.length<1)return;for(var e=d.length-1;e>=0;e--)c.renderCheckPro(d[e])},renderAllCheckbox:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="checkbox")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllCheckbox)");return}for(var f=e.length-1;f>=0;f--)d.renderCheckbox(e[f])},renderAllRadio:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="radio")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllRadio)");return}for(var f=e.length-1;f>=0;f--)d.renderRadio(e[f])},renderCheckPro:function(d){var e=this,g=b.get(d),h=b.prop(g,"type")=="checkbox",i=b.parent(g,"label")||b.parent(g,"span");if(!b.hasClass(g,"beautify_input")){a.log("input\u5fc5\u987b\u6709class=\u201dbeautify_input\u201c(renderCheckPro)");return}h?f&&g.checked==1||g.checked?(b.removeClass(i,"radio-checkoff-span"),b.addClass(i,"radio-checkon-span"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"radio-checkon-span"),b.addClass(i,"radio-checkoff-span"),b.removeClass(b.parent(i),"radio-checkstyle")):f&&g.checked==1||g.checked?(b.removeClass(i,"beautify_radio_off"),b.addClass(i,"beautify_radio_on"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"beautify_radio_on"),b.addClass(i,"beautify_radio_off"),b.removeClass(b.parent(i),"radio-checkstyle")),c.on(i,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;e.toggleCheckPro(g)})},renderCheckbox:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_check"))return;b.append(b.create("<i>&nbsp;</i>"),g),e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_check c_on_disable":g.className="beautify_check beautify_check_disable":(f&&e.checked==1||e.checked?g.className="beautify_check c_on":g.className="beautify_check c_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleCheckbox(e)}))},renderRadio:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_radio"))return;b.append(b.create("<i>&nbsp;</i>"),g),e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_radio r_on_disable":g.className="beautify_radio beautify_radio_disable":(f&&e.checked==1||e.checked?g.className="beautify_radio r_on":g.className="beautify_radio r_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleRadio(e)}))},setCheckboxOn:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_on",c.checked=!0},setCheckboxOff:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_off",c.checked=!1},setCheckboxDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!0},setCheckboxNoDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!1},toggleCheckbox:function(a){var c=b.get(a),d=b.parent(c,"label");d.className=="beautify_check c_off"?(d.className=="beautify_check c_on_disable"?d.className="beautify_check c_on_disable":d.className="beautify_check c_on",f&&c.click()):d.className=="beautify_check c_on_disable"?(d.className="beautify_check c_on_disable",f&&c.click()):d.className=="beautify_check beautify_check_disable"?(d.className="beautify_check beautify_check_disable",f&&c.click()):(d.className="beautify_check c_off",f&&c.click())},toggleRadio:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var g=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var h=0;h<g.length;h++){var i=b.parent(g[h]);if(i.className.indexOf("beautify_radio")==-1)continue;if(b.attr(g[h],"name")!==d)continue;i.className="beautify_radio r_off"}e.className="beautify_radio r_on",f&&c.click()}else e.className=="beautify_radio beautify_radio_disable"?(e.className="beautify_radio beautify_radio_disable",f&&c.click()):(e.className="beautify_radio r_off",f&&c.click())},setRadioOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var f=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var g=0;g<f.length;g++){var h=b.parent(f[g]);if(h.className.indexOf("beautify_radio")==-1)continue;if(b.attr(f[g],"name")!==d)continue;h.className="beautify_radio r_off"}e.className="beautify_radio r_on",c.checked=!0}},toggleCheckPro:function(a){var c=b.get(a),d=b.prop(c,"type")=="checkbox",e=b.attr(c,"name"),g=b.parent(a,"span");if(d)b.hasClass(g,"radio-checkon-span")?(b.removeClass(b.parent(g),"radio-checkstyle"),b.removeClass(g,"radio-checkon-span"),b.hasClass(g,"radio-checkoff-span")||b.addClass(g,"radio-checkoff-span")):(b.addClass(b.parent(g),"radio-checkstyle"),b.toggleClass(g,"radio-checkon-span","radio-checkoff-span"));else if(b.hasClass(g,"beautify_radio_off")){var h=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<h.length;c++){var i=h[c],j=b.parent(h[c]);if(i.className.indexOf("beautify_input")==-1)continue;if(b.attr(i,"name")!==e)continue;j.className="beautify_radio_off",b.removeClass(b.parent(j),"radio-checkstyle")}b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()}else b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()},setRadioPro:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_off",b.removeClass(b.parent(h),"radio-checkstyle")}b.addClass(b.parent(e),"radio-checkstyle"),e.className="beautify_radio_on",b.get(a).checked=!0},setRadioProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_on"}e.className="beautify_radio_off",b.get(a).checked=!1},setCheckboxProOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.addClass(b.parent(e),"radio-checkstyle"),b.toggleClass(e,"radio-checkon-span","radio-checkoff-span"),b.get(a).checked=!0},setCheckboxProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.removeClass(b.parent(e),"radio-checkstyle"),b.removeClass(e,"radio-checkon-span"),b.hasClass(e,"radio-checkoff-span")||b.addClass(e,"radio-checkoff-span"),b.get(a).checked=!1}}),g}),KISSY.add("page/template-init",function(a,b,c,d,e,f,g){var h=a.DOM,i=a.Event;return templateControl={paginator:null,handlePagination:null,isFisrst:!0,panel2:null,init:function(){templateControl.Form=new e,templateControl.changeTemplate("\u987a\u4e30\u901f\u8fd0"),templateControl.searchTbItems(),templateControl.Form.renderAll("#J_toggleCheck"),i.remove("#J_Save"),i.on("#J_Save","click",function(){h.remove(".dragresize "),templateControl.templateSave()}),i.on("#J_DeleteTemplate","click",function(){templateControl.deleteTemplate()}),i.on("#J_ResetTemplate","click",function(){templateControl.resetTemplate()}),i.remove("#J_NewAdd"),i.on("#J_NewAdd","click",function(){var a=h.val("#J_CustomText"),b=h.create('<div class="drsElement drsMoveHandle J_NewAddText" style="left:200px; top:400px; width: 142px; height: 20px;z-index:8;position: absolute;">'+a+'<a class="J_NewAddDelete delete" href="javascript:void(0)">X</a></div>');h.insertBefore(b,"#J_SenderName")}),i.on("#J_NewImg","click",function(){templateControl.newCostomImg()}),i.delegate(document,"click","#J_SaveBill",function(){templateControl.templateBillSave()}),i.on("#J_NewTemplate","click",function(){templateControl.newTemplate()}),i.delegate(document,"click","#J_NewShipAdd",function(){templateControl.newShipCustom()}),i.delegate(document,"click",".J_EditTiger",function(a){var b=h.parent(a.currentTarget);h.addClass(b,"hover"),h.get("input",b).focus()}),i.delegate(document,"focusout",".J_textSize",function(a){KISSY.later(function(){h.removeClass("#J_textSizeBox","hover")},200,!1,null)}),i.delegate(document,"click",".J_textSizeSubmit",function(a){var b=h.val("#J_textSize_1"),c=h.val("#J_textSize1");if(c==b)return;h.style(".J_NewAddText","font-size",b),h.style(".J_NewAddText","line-height",b),h.val("#J_textSize1",b),h.html(h.get("#J_textSizeBox .J_Name"),b)}),i.on("#J_TemplteBtm","click",function(){templateControl.newTemplate(),h.val("#J_ExpressName",h.val("#J_Express")),h.val("#J_Uploader",h.attr("#J_ExpressImg","src"))}),i.delegate(document,"click","#J_Skewing",function(a){h.hasClass(a.target,"J_left")?h.val("#J_Around",h.val("#J_Around")-1):h.hasClass(a.target,"J_Right")?h.val("#J_Around",Number(h.val("#J_Around"))+1):h.hasClass(a.target,"J_Top")?h.val("#J_Middle",h.val("#J_Middle")-1):h.hasClass(a.target,"J_Bottom")&&h.val("#J_Middle",Number(h.val("#J_Middle"))+1)}),i.on("#J_Test","click",function(){var a=h.val("#J_Around"),b=h.val("#J_Middle"),c=h.html("#J_Template");templateControl.CreateOneFormPage(c,a,b),LODOP.PRINT_DESIGN()}),i.delegate(document,"click","#J_ShipTest",function(){var a=h.val("#J_Around"),b=h.val("#J_Middle"),c=h.html("#J_Template");templateControl.CreateOneFormPage(c,a,b),LODOP.PRINT_DESIGN()}),i.on(".J_toggle","click",function(a){var b=h.val(a.currentTarget);h.toggle("#"+b)}),i.delegate(document,"click",".delete",function(a){var b=h.attr(a.currentTarget,"name"),c=h.attr(a.currentTarget,"data");h.hide("#"+b),h.attr("#J_toggle_"+c,"checked",!1)}),i.on(".printFile","click",function(a){h.attr(a.currentTarget,"data")==0?(h.hide(".express-seting"),h.show(".new-search"),window.location.reload()):(h.hide(".new-search"),h.hide(".express-set"),h.show(".express-seting")),h.hasClass(a.currentTarget,"current")||(h.removeClass(h.query(".printFile"),"current"),h.addClass(a.currentTarget,"current"))}),i.delegate(document,"click",".J_NewAddDelete",function(a){h.remove(h.parent(a.currentTarget))})},CreateOneFormPage:function(a,b,c){LODOP=getLodop(document.getElementById("LODOP_OB"),document.getElementById("LODOP_EM")),LODOP.PRINT_INIT(""),LODOP.SET_PRINT_STYLE("FontSize",16),LODOP.SET_PRINT_STYLE("Bold",1),LODOP.SET_PRINT_STYLEA(0,"HtmWaitMilSecs",1e3),LODOP.SET_PRINT_PAGESIZE(1,10800,2e4,12),LODOP.ADD_PRINT_HTM(c,b,"100%","100%",""+a)},deleteTemplate:function(){var a=function(a){new H.widget.msgBox({title:"\u6210\u529f\u63d0\u793a",content:"\u6210\u529f\u5220\u9664",type:"error"}),KISSY.later(function(){window.location.reload()},1500)},b=function(a){},c=h.val("#J_Express"),d="templateName="+c;(new H.widget.asyncRequest).setURI(loadDeleteTemplateUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(d).send()},resetTemplate:function(){var a=function(a){h.html("#J_Template",a.payload.body),new H.widget.msgBox({type:"sucess",content:"\u91cd\u7f6e\u6210\u529f",dialogType:"msg",autoClose:!0,timeOut:3e3})},b=function(a){},c=h.val("#J_Express"),d=1,e="templateName="+c+"&reset="+d;(new H.widget.asyncRequest).setURI(loadChangeUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},resetShipTemplate:function(){var a=function(a){h.html(".template-content",a.payload.body),new H.widget.msgBox({type:"sucess",content:"\u91cd\u7f6e\u6210\u529f",dialogType:"msg",autoClose:!0,timeOut:3e3})},b=function(a){new H.widget.msgBox({type:"sucess",content:a.desc,dialogType:"msg",autoClose:!0,timeOut:3e3})},c="hlgShip",d=1,e="templateName="+c+"&reset="+d;(new H.widget.asyncRequest).setURI(loadShipUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},newShipCustom:function(){templateControl.panel2||(templateControl.panel2=new f.Dialog({width:450,headerContent:"\u81ea\u5b9a\u4e49",bodyContent:"123",mask:!0,align:{points:["cc","cc"]},closable:!0,draggable:!0,aria:!0}));var a='<div style="width:320px;margin:30px auto;"><ul style="overflow:hidden;"><li class="min-height-30 fl"><div class="w-80 align-right fl">\u81ea\u5b9a\u4e49\u5185\u5bb9:</div><div class="fl ml6 input-text"><input type="text" id="J_CustomText" class="w-200 input-none" value="" ></div></li></ul><div style="width:160px;margin:15px auto 0 auto;overflow:hidden;"><input class="btm-68-orange fl J_SaveText" type="button" name="\u786e\u5b9a" value="\u786e\u5b9a"><input class="btm-68-gray fl cancle" type="button" name="\u53d6\u6d88" value="\u53d6\u6d88"></div></div>';templateControl.panel2.set("bodyContent",a),templateControl.panel2.show(),i.remove(".J_SaveText"),i.on(".J_SaveText","click",function(){var a=h.val("#J_CustomText"),b=h.create('<tr><td class="J_NewAddText" style="border:1px solid #999;padding-left: 25px;line-height:25px;border-collapse: collapse;border-top:0;">'+a+"</td></tr>");h.insertAfter(b,"#J_Last"),templateControl.panel2.hide(),i.on(".J_NewAddDelete","click",function(a){h.remove(h.parent(a.currentTarget))})}),i.on(".cancle","click",function(a){templateControl.panel2.hide()})},searchTbItems:function(){var a=function(a){h.html("#Express",a.payload.body)},b=function(a){},c="listCompanies=1";(new H.widget.asyncRequest).setURI(loadCompaniesUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(c).send()},newTemplate:function(a){templateControl.panel||(templateControl.panel=new f.Dialog({width:450,title:"\u65b0\u5efa\u6a21\u677f",bodyContent:"",mask:!0,align:{points:["cc","cc"]},buttons:[{text:"\u786e\u5b9a",elCls:"bui-button bui-button-primary",handler:function(){if(h.val("#J_ExpressName")=="")h.show("#J_PromoNameError");else if(h.val("#J_Uploader")=="")h.hide("#J_PromoNameError"),h.show("#J_PromoImgError");else{h.hide("#J_PromoNameError"),h.hide("#J_PromoImgError");var a=h.create('<option  value="">'+h.val("#J_ExpressName")+"</option>");h.prepend(a,"#J_Express"),h.attr("#J_ExpressImg","src",h.val("#J_Uploader")),h.val(h.query("option")[0],h.val("#J_ExpressName")),h.val("#J_SortContent",h.val("#J_Sort")),this.hide()}}},{text:"\u5173\u95ed",elCls:"bui-button cancle",handler:function(){this.hide()}}],closable:!0,draggable:!0,aria:!0}));var b='<div><ul class="ui-about-list"><li><div class="ui-side-list w-70">\u540d\u79f0:</div><div class="ui-content-list"><input type="text" id="J_ExpressName" class="w-200 input-text-2" value="" ></div><span style="padding-left:20px;color:#ff0000;display:none;" class="error-img w-160" id="J_PromoNameError">\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01</span></li><li class=""><div class="ui-side-list w-70">\u6240\u5c5e\u7c7b\u522b:</div><div class="ui-content-list"><select id="J_Sort"><option>\u81ea\u5b9a\u4e49</option><option   value="EMS" >EMS</option><option   value="\u97f5\u8fbe\u5feb\u8fd0" >\u97f5\u8fbe\u5feb\u8fd0</option><option   value="\u987a\u4e30\u901f\u8fd0" >\u987a\u4e30\u901f\u8fd0</option><option   value="\u6c47\u901a\u5feb\u8fd0" >\u6c47\u901a\u5feb\u8fd0</option><option   value="\u7b2c\u4e00\u7269\u6d41" >\u7b2c\u4e00\u7269\u6d41</option><option   value="\u4e2d\u901a\u901f\u9012" >\u4e2d\u901a\u901f\u9012</option><option   value="\u8054\u90a6" >\u8054\u90a6</option><option   value="\u5706\u901a\u901f\u9012" >\u5706\u901a\u901f\u9012</option><option   value="\u5b85\u6025\u9001" >\u5b85\u6025\u9001</option><option   value="\u7533\u901aE\u7269\u6d41" >\u7533\u901aE\u7269\u6d41</option><option   value="\u5fb7\u90a6\u7269\u6d41" >\u5fb7\u90a6\u7269\u6d41</option><option   value="\u5168\u4e00\u5feb\u9012" >\u5168\u4e00\u5feb\u9012</option><option   value="\u5927\u6dd8\u5b9d" >\u5927\u6dd8\u5b9d</option><option   value="\u4e2d\u56fd\u90ae\u653f-\u5e73\u90ae" >\u4e2d\u56fd\u90ae\u653f-\u5e73\u90ae</option><option   value="\u5927\u7530\u7269\u6d41" >\u5927\u7530\u7269\u6d41</option><option   value="\u4e00\u90a6\u901f\u9012" >\u4e00\u90a6\u901f\u9012</option><option   value="\u5929\u5929\u5feb\u9012" >\u5929\u5929\u5feb\u9012</option><option   value="\u4e00\u7edf" >\u4e00\u7edf</option><option   value="\u4e9a\u98ce" >\u4e9a\u98ce</option><option   value="\u676d\u5ddeABC" >\u676d\u5ddeABC</option><option   value="hh" >hh</option><option   value="e\u90ae\u5b9d" >e\u90ae\u5b9d</option><option   value="wlhtest01" >wlhtest01</option><option   value="\u4fe1\u4e30\u7269\u6d41" >\u4fe1\u4e30\u7269\u6d41</option><option   value="HLX11" >HLX11</option><option   value="\u4f18\u901f\u7269\u6d41" >\u4f18\u901f\u7269\u6d41</option><option   value="\u4e0a\u6d77\u4ed3\u50a8" >\u4e0a\u6d77\u4ed3\u50a8</option><option   value="\u661f\u6668\u6025\u4fbf" >\u661f\u6668\u6025\u4fbf</option><option   value="wlhtest001" >wlhtest001</option><option   value="\u4f73\u5409\u5feb\u8fd0" >\u4f73\u5409\u5feb\u8fd0</option><option   value="NO_COD" >NO_COD</option><option   value="\u90ae\u653f\u56fd\u5185\u5c0f\u5305" >\u90ae\u653f\u56fd\u5185\u5c0f\u5305</option><option   value="\u767e\u4e16\u7269\u6d41\u79d1\u6280" >\u767e\u4e16\u7269\u6d41\u79d1\u6280</option><option   value="NORA051102" >NORA051102</option><option   value="\u554a\u91cc\u5473\u513f"  >\u554a\u91cc\u5473\u513f</option><option   value="nora03" >nora03</option><option   value="CCES" >CCES</option><option   value="DXX" >DXX</option></select></div></li> <li"><div class="ui-side-list w-70">\u5feb\u9012\u56fe\u7247:</div><div class="ui-content-list"><input type="text" class="w-160 input-text-2" value=""  id="J_Uploader" style="width:160px;margin-top:0;"></div>&nbsp;&nbsp;<a id="J_UploaderBtn" class="uploader-button" href="#2" style="display:inline-block;width:40px;">\u6d4f\u89c8</a><ul id="J_UploaderQueue" style="width:300px;margin:10px 0 10px 68px;"></ul><span style="padding-left:20px;color:#ff0000;display:none;" class="error-img w-160" id="J_PromoImgError">\u8bf7\u4e0a\u4f20\u5feb\u9012\u56fe\u7247\uff01</span></li><li><div class="ui-side-list w-70 ">\u5c3a\u5bf8:</div><div class="ui-content-list">\u5bbd<input type="text" class="w-60 input-text-2" value="230" style="margin:0 10px;">\u6beb\u7c73&nbsp;&nbsp;&nbsp;\u5bbd<input type="text" class="w-60 input-text-2" value="126" style="margin:0 10px;">\u6beb\u7c73</div></li></ul>';templateControl.panel.set("bodyContent",b),templateControl.panel.show();var c=new d("#J_UploaderBtn","#J_UploaderQueue",{type:"auto",authConfig:{allowExts:[{desc:"\u652f\u6301\u7684\u56fe\u7247\u683c\u5f0f",ext:"*.gif;*.jpg;*.png"},"\u76ee\u524d\u53ea\u652f\u6301 .gif .jpg .png \u683c\u5f0f\u7684\u56fe\u7247"],max:[5,"\u6bcf\u6b21\u6700\u591a\u4e0a\u4f20{max}\u4e2a\u6587\u4ef6\uff01"],maxSize:[2e3,"\u6587\u4ef6\u5927\u5c0f\u4e3a{size}\uff0c\u6587\u4ef6\u592a\u5927\uff01"],allowRepeat:[!1,"\u8be5\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff01"]},serverConfig:{action:loadUploadimgUrl,data:{dir:"files/"},dataType:"json"},name:"Filedata",urlsInputName:"fileUrls",autoUpload:!0});c.on("init",function(a){var b=a.uploader,c=a.auth,d=a.queue;h.val("#J_Uploader",a.desc),b.on("success",function(a){h.val("#J_Uploader",a.result.desc)}),b.on("error",function(a){h.val("#J_Uploader",a.result.desc)})})},templateSave:function(){var a=function(a){new H.widget.msgBox({title:"\u6210\u529f\u63d0\u793a",content:"\u4fdd\u5b58\u6210\u529f",type:"error"})},b=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};h.remove("#Middle"),h.remove("#Around"),h.remove("#ImgSrc"),h.remove("#Template"),h.remove("#ExpressHeight"),h.remove("#ExpressWidth");var c=KISSY.trim(h.html("#J_Template")),d=h.val("#J_Express"),e=0,f=h.val("#J_Around"),g=h.val("#J_Middle"),i=h.attr("#J_ExpressImg","src"),j=h.val("#J_ExpressWidth"),k=h.val("#J_ExpressHeight"),l=h.val("#J_SortContent"),m="templateContent="+c+"&logisticCompany="+d+"&isDefault="+e+"&leftValue="+f+"&rightValue="+g+"&imgDir="+i+"&expressWidth="+j+"&expressHeight="+k+"&userDefined="+l;(new H.widget.asyncRequest).setURI(loadChangeUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(m).send()},templateBillSave:function(){var a=function(a){new H.widget.msgBox({title:"\u6210\u529f\u63d0\u793a",content:"\u4fdd\u5b58\u6210\u529f",type:"error"})},b=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};h.remove("#Middle"),h.remove("#Around"),h.remove("#ImgSrc"),h.remove("#Template"),h.remove("#ExpressHeight"),h.remove("#ExpressWidth");var c=h.val("#J_Around"),d=h.val("#J_Middle"),e=h.val("#J_ExpressWidth"),f=h.val("#J_ExpressHeight"),g=KISSY.trim(h.html("#J_Template")),i="shipContent="+g+"&leftValue="+c+"&rightValue="+d+"&expressWidth="+e+"&expressHeight="+f;(new H.widget.asyncRequest).setURI(loadShipUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(i).send()},changeTemplate:function(a){var b=function(a){h.html(h.get("#J_Template"),a.payload.body),h.attr("#J_ExpressImg","src",h.val("#ImgSrc")),!h.val("#Around")==""&&h.val("#J_Around",h.val("#Around")),!h.val("#Middle")==""&&h.val("#J_Middle",h.val("#Middle")),h.val("#Template")==1?(h.hide("#J_DeleteTemplate"),h.show("#J_ResetTemplate")):(h.show("#J_DeleteTemplate"),h.hide("#J_ResetTemplate")),h.val("#J_ExpressWidth",h.val("#ExpressWidth")),h.val("#J_ExpressHeight",h.val("#ExpressHeight"))},c=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};a=="EMS-3"?h.css("#J_ExpressImg",{width:"889px"}):a=="\u987a\u4e30\u901f\u8fd0"?h.css("#J_ExpressImg",{height:"510px"}):a=="\u7533\u901a-2"?h.css("#J_ExpressImg",{width:"818px"}):a=="\u7533\u901a-2013"?h.css("#J_ExpressImg",{width:"869px"}):a=="\u6c47\u901a\u5feb\u8fd0"?h.css("#J_ExpressImg",{width:"830px",height:"462px"}):a=="\u5929\u5929\u5feb\u9012"?h.css("#J_ExpressImg",{width:"818px",height:"462px"}):a=="\u97f5\u8fbe"?h.css("#J_ExpressImg",{width:"818px",height:"460px"}):a=="\u5706\u901a\u901f\u9012"?h.css("#J_ExpressImg",{width:"818px"}):a=="\u5706\u901a\u901f\u9012-2"?h.css("#J_ExpressImg",{width:"818px"}):a=="\u5706\u901a\u901f\u9012-vip"?h.css("#J_ExpressImg",{width:"818px"}):a=="\u4e2d\u901a\u901f\u9012"?h.css("#J_ExpressImg",{width:"818px"}):a=="\u8054\u90a6\u5feb\u9012"?h.css("#J_ExpressImg",{width:"869px"}):a=="\u5b85\u6025\u9001"?h.css("#J_ExpressImg",{width:"869px"}):a=="\u5fb7\u90a6\u7269\u6d41"?h.css("#J_ExpressImg",{width:"869px"}):a=="\u661f\u6668\u6025\u4fbf"?h.css("#J_ExpressImg",{width:"869px"}):a=="\u5168\u5cf0\u5feb\u9012"&&h.css("#J_ExpressImg",{width:"869px"});var d="templateName="+a;(new H.widget.asyncRequest).setURI(loadChangeUrl).setMethod("POST").setHandle(b).setErrorHandle(c).setData(d).send()},deliveryPrint:function(){var a=function(a){h.html(".template-content",a.payload.body),templateControl.Form.renderAll("#J_ShiptoggleCheck"),i.on(".J_ShipToggle","click",function(a){var b=h.val(a.currentTarget);h.toggle(".J_Td_"+b)});var b=new d("#J_UploaderBtn2","#J_UploaderQueue",{type:"auto",authConfig:{allowExts:[{desc:"\u652f\u6301\u7684\u56fe\u7247\u683c\u5f0f",ext:"*.gif;*.jpg;*.png"},"\u76ee\u524d\u53ea\u652f\u6301 .gif .jpg .png \u683c\u5f0f\u7684\u56fe\u7247"],max:[1,"\u6bcf\u6b21\u6700\u591a\u4e0a\u4f20{max}\u4e2a\u6587\u4ef6\uff01"],maxSize:[2e3,"\u6587\u4ef6\u5927\u5c0f\u4e3a{size}\uff0c\u6587\u4ef6\u592a\u5927\uff01"],allowRepeat:[!1,"\u8be5\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff01"]},serverConfig:{action:loadUploadimgUrl,data:{dir:"files/"},dataType:"json"},name:"Filedata",urlsInputName:"fileUrls",autoUpload:!0});b.on("init",function(a){var b=a.uploader,c=a.auth,d=a.queue;h.val("#J_Uploader",a.desc),b.on("success",function(a){h.val("#J_Uploader2",a.result.desc),alert(h.val("#J_Uploader2")),h.attr("#J_ImgSrc","src",h.val("#J_Uploader2"))}),b.on("error",function(a){h.val("#J_Uploader2",a.result.desc),h.attr("#J_ImgSrc","src",h.val("#J_Uploader2"))})}),!h.val("#Around")==""&&h.val("#J_Around",h.val("#Around")),!h.val("#Middle")==""&&h.val("#J_Middle",h.val("#Middle"))},b=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},c=1,e="ship="+c;(new H.widget.asyncRequest).setURI(loadShipUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()}}},{requires:["utils/showPages/index","overlay","gallery/form/1.2/uploader/index","utils/beautifyForm/index","bui/overlay","bui/select"]}); 