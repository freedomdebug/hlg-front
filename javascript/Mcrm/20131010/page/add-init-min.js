KISSY.add("utils/beautifyForm/index",function(a){function g(b,c){var d=this;defaultCfg={init:!0};if(!(d instanceof g))return new g(b,c);var e=a.merge(defaultCfg,c);d._init(b,e)}var b=a.DOM,c=a.Event,d=document,e=b.get("body"),f=!1;return a.UA.safari!="undefined"&&a.UA.safari<3&&(f=!0),a.UA.ie==6&&b.replaceClass("#J_BodyHtml","has-js","no-js"),a.augment(g,{_init:function(a,b){var c=this;c.renderAll(a)},renderAll:function(a){var c=this;a=typeof a=="undefined"?"#J_BodyHtml":a;var d=b.filter(b.query(a+" input"),function(a){if(a.type=="checkbox"||a.type=="radio")return!0});for(var e=d.length-1;e>=0;e--)c.renderInput(d[e])},renderInput:function(a){var c=this,d=b.get(a),e=b.parent(d);e.tagName.toUpperCase()=="LABEL"&&e.className.indexOf("beautify_")>-1?e.className=="beautify_check"?c.renderCheckbox(d):e.className=="beautify_radio"&&c.renderRadio(d):e.tagName.toUpperCase()=="SPAN"&&b.hasClass(d,"beautify_input")&&c.renderCheckPro(d)},renderAllCheckPro:function(a){var c=this,d=b.filter(b.query(a+" input"),function(a){if((a.type=="checkbox"||a.type=="radio")&&b.hasClass(a,"beautify_input"))return!0});if(d.length<1)return;for(var e=d.length-1;e>=0;e--)c.renderCheckPro(d[e])},renderAllCheckbox:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="checkbox")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllCheckbox)");return}for(var f=e.length-1;f>=0;f--)d.renderCheckbox(e[f])},renderAllRadio:function(c){var d=this,e=b.filter(b.query(c+" input"),function(a){if(a.type=="radio")return!0});if(e.length<1){a.log("\u6b64id\u4e0b\u6ca1\u6709input(renderAllRadio)");return}for(var f=e.length-1;f>=0;f--)d.renderRadio(e[f])},renderCheckPro:function(d){var e=this,g=b.get(d),h=b.prop(g,"type")=="checkbox",i=b.parent(g,"label")||b.parent(g,"span");if(!b.hasClass(g,"beautify_input")){a.log("input\u5fc5\u987b\u6709class=\u201dbeautify_input\u201c(renderCheckPro)");return}h?f&&g.checked==1||g.checked?(b.removeClass(i,"radio-checkoff-span"),b.addClass(i,"radio-checkon-span"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"radio-checkon-span"),b.addClass(i,"radio-checkoff-span"),b.removeClass(b.parent(i),"radio-checkstyle")):f&&g.checked==1||g.checked?(b.removeClass(i,"beautify_radio_off"),b.addClass(i,"beautify_radio_on"),b.addClass(b.parent(i),"radio-checkstyle")):(b.removeClass(i,"beautify_radio_on"),b.addClass(i,"beautify_radio_off"),b.removeClass(b.parent(i),"radio-checkstyle")),c.on(i,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;e.toggleCheckPro(g)})},renderCheckbox:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_check"))return;b.append(b.create("<i>&nbsp;</i>"),g),e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_check c_on_disable":g.className="beautify_check beautify_check_disable":(f&&e.checked==1||e.checked?g.className="beautify_check c_on":g.className="beautify_check c_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleCheckbox(e)}))},renderRadio:function(a){var d=this,e=b.get(a),g=b.parent(e,"label")||b.parent(e,"span");if(!b.hasClass(g,"beautify_radio"))return;b.append(b.create("<i>&nbsp;</i>"),g),e.disabled==1?f&&e.checked==1||e.checked?g.className="beautify_radio r_on_disable":g.className="beautify_radio beautify_radio_disable":(f&&e.checked==1||e.checked?g.className="beautify_radio r_on":g.className="beautify_radio r_off",c.on(g,"click",function(a){a.stopPropagation();if(a.target.tagName.toUpperCase()=="LABEL")return;d.toggleRadio(e)}))},setCheckboxOn:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_on",c.checked=!0},setCheckboxOff:function(a){var c=b.get(a),d=b.parent(c,"label");d.className="beautify_check c_off",c.checked=!1},setCheckboxDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!0},setCheckboxNoDisabled:function(a){var c=b.get(a),d=b.parent(c,"label");f&&c.checked==1||c.checked?d.className="beautify_check c_on_disable":d.className="beautify_check beautify_check_disable",c.disabled=!1},toggleCheckbox:function(a){var c=b.get(a),d=b.parent(c,"label");d.className=="beautify_check c_off"?(d.className=="beautify_check c_on_disable"?d.className="beautify_check c_on_disable":d.className="beautify_check c_on",f&&c.click()):d.className=="beautify_check c_on_disable"?(d.className="beautify_check c_on_disable",f&&c.click()):d.className=="beautify_check beautify_check_disable"?(d.className="beautify_check beautify_check_disable",f&&c.click()):(d.className="beautify_check c_off",f&&c.click())},toggleRadio:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var g=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var h=0;h<g.length;h++){var i=b.parent(g[h]);if(i.className.indexOf("beautify_radio")==-1)continue;if(b.attr(g[h],"name")!==d)continue;i.className="beautify_radio r_off"}e.className="beautify_radio r_on",f&&c.click()}else e.className=="beautify_radio beautify_radio_disable"?(e.className="beautify_radio beautify_radio_disable",f&&c.click()):(e.className="beautify_radio r_off",f&&c.click())},setRadioOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(c,"label");if(e.className=="beautify_radio r_off"||c.checked){var f=b.filter(b.query("input"),function(a){if(a.type=="radio")return!0});for(var g=0;g<f.length;g++){var h=b.parent(f[g]);if(h.className.indexOf("beautify_radio")==-1)continue;if(b.attr(f[g],"name")!==d)continue;h.className="beautify_radio r_off"}e.className="beautify_radio r_on",c.checked=!0}},toggleCheckPro:function(a){var c=b.get(a),d=b.prop(c,"type")=="checkbox",e=b.attr(c,"name"),g=b.parent(a,"span");if(d)b.hasClass(g,"radio-checkon-span")?(b.removeClass(b.parent(g),"radio-checkstyle"),b.removeClass(g,"radio-checkon-span"),b.hasClass(g,"radio-checkoff-span")||b.addClass(g,"radio-checkoff-span")):(b.addClass(b.parent(g),"radio-checkstyle"),b.toggleClass(g,"radio-checkon-span","radio-checkoff-span"));else if(b.hasClass(g,"beautify_radio_off")){var h=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<h.length;c++){var i=h[c],j=b.parent(h[c]);if(i.className.indexOf("beautify_input")==-1)continue;if(b.attr(i,"name")!==e)continue;j.className="beautify_radio_off",b.removeClass(b.parent(j),"radio-checkstyle")}b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()}else b.addClass(b.parent(g),"radio-checkstyle"),g.className="beautify_radio_on",f&&c.click()},setRadioPro:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_off",b.removeClass(b.parent(h),"radio-checkstyle")}b.addClass(b.parent(e),"radio-checkstyle"),e.className="beautify_radio_on",b.get(a).checked=!0},setRadioProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span"),f=b.filter(b.query(".beautify_input"),function(a){if(a.type=="radio")return!0});for(var c=0;c<f.length;c++){var g=f[c],h=b.parent(f[c]);if(g.className.indexOf("beautify_input")==-1)continue;if(b.attr(g,"name")!==d)continue;h.className="beautify_radio_on"}e.className="beautify_radio_off",b.get(a).checked=!1},setCheckboxProOn:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.addClass(b.parent(e),"radio-checkstyle"),b.toggleClass(e,"radio-checkon-span","radio-checkoff-span"),b.get(a).checked=!0},setCheckboxProOff:function(a){var c=b.get(a),d=b.attr(c,"name"),e=b.parent(a,"span");b.removeClass(b.parent(e),"radio-checkstyle"),b.removeClass(e,"radio-checkon-span"),b.hasClass(e,"radio-checkoff-span")||b.addClass(e,"radio-checkoff-span"),b.get(a).checked=!1}}),g}),KISSY.add("page/add-init",function(S,beautifyForm,Overlay,Calendar,Tooltip,Select,XTemplate){var DOM=S.DOM,Event=S.Event;return addControl={msg:null,num:0,groupList:eval("("+groupJson+")"),inputValue:eval("("+sellerCats+")"),init:function(){addControl.groupList.length>0&&addControl.renderTemp();var a="",b=addControl.inputValue;S.each(b,function(a,b){value=a.value}),b||customSelect.setSelectedValue(value),DOM.hide("#J_Cancle_0"),Event.on("#J_Stat","click",function(a){var b=DOM.attr(a.currentTarget,"data");addControl.addTemp(),DOM.hide("#J_Cancle_0"),customSelect.setSelectedValue(DOM.val("#J_SelectCustom_0"))}),Event.delegate(document,"click",".J_Cancle",function(a){var b=DOM.attr(a.currentTarget,"data");addControl.cancelTemp(b),DOM.hide("#J_Cancle_0")});var c=DOM.val("#J_IsGroup"),d=DOM.val("#J_TbGroupId");c=="1"&&(DOM.html("#J_Tab_1","\u7528\u6237\u5206\u7ec4"),DOM.html("#J_Tab_2","\u5207\u6362\u4e3a\u7b5b\u9009"),DOM.hide("#J_Radio"),DOM.show("#J_Choose"),customSelect.setSelectedValue(d));var e=new Calendar.DatePicker({trigger:".timing",autoRender:!0,showTime:!0}),f=new Calendar.DatePicker({trigger:".starttime",autoRender:!0}),g=new Calendar.DatePicker({trigger:".endtime",autoRender:!0});Event.on("#J_Tab_2","click",function(a){var b=DOM.html(a.currentTarget);b=="\u5207\u6362\u4e3a\u5206\u7ec4"?(DOM.html("#J_Tab_1","\u7528\u6237\u5206\u7ec4"),DOM.html(a.currentTarget,"\u5207\u6362\u4e3a\u7b5b\u9009"),DOM.hide("#J_Radio"),DOM.show("#J_Choose"),DOM.attr("#J_Tab_2","data","1")):(DOM.html("#J_Tab_1","\u7528\u6237\u7b5b\u9009"),DOM.html(a.currentTarget,"\u5207\u6362\u4e3a\u5206\u7ec4"),DOM.show("#J_Radio"),DOM.hide("#J_Choose"),DOM.attr("#J_Tab_2","data","0"))}),Event.on(".custom-radio","click",function(a){var b=DOM.attr(a.currentTarget,"data-num");DOM.val(a.currentTarget)=="5"?DOM.show(".J_Custom_"+b):DOM.hide(".J_Custom_"+b)}),Event.on(".totalamount","click",function(a){var b=DOM.attr(a.currentTarget,"data-min"),c=DOM.attr(a.currentTarget,"data-max");DOM.val(".min_trade_amount",b),DOM.val(".max_trade_amount",c)}),Event.on(".tradeitems","click",function(a){var b=DOM.attr(a.currentTarget,"data-min"),c=DOM.attr(a.currentTarget,"data-max");DOM.val(".min_trade_item_count",b),DOM.val(".max_trade_item_count",c)}),Event.on(".tradecount","click",function(a){var b=DOM.attr(a.currentTarget,"data-min"),c=DOM.attr(a.currentTarget,"data-max");DOM.val(".min_trade_count",b),DOM.val(".max_trade_count",c)}),Event.on(".lasttradetime","click",function(a){var b=DOM.attr(a.currentTarget,"data-min"),c=DOM.attr(a.currentTarget,"data-max");DOM.val(".starttime",b),DOM.val(".endtime",c)}),Event.on(".avgprice","click",function(a){var b=DOM.attr(a.currentTarget,"data-min"),c=DOM.attr(a.currentTarget,"data-max");DOM.val(".min_avg_price",b),DOM.val(".max_avg_price",c)}),Event.on(".closetradenum","click",function(a){var b=DOM.attr(a.currentTarget,"data-min"),c=DOM.attr(a.currentTarget,"data-max");DOM.val(".min_close_trade_num",b),DOM.val(".max_close_trade_num",c)}),addControl.Form=new beautifyForm,Event.on(".J_SecondNext","click",function(){var a=DOM.val("#J_ContentBox"),b=DOM.val("#J_SignContent");if(b==""||a=="\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9..."){DOM.remove(".bui-dialog");var c=new Overlay.Dialog({title:"\u63d0\u793a",width:230,height:150,mask:!1,buttons:[{text:"\u786e\u5b9a",elCls:"bui-button bui-button-primary",handler:function(){this.hide()}},{text:"\u53d6\u6d88",elCls:"bui-button",handler:function(){this.hide()}}],bodyContent:""});c.show();if(a=="\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9...")return c.set("bodyContent",'<div style="text-align: center;font-size:14px;font-weight:bold;">\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9</div>'),!1;if(b=="")return c.set("bodyContent",'<div style="text-align: center;font-size:14px;font-weight:bold;">\u8bf7\u8f93\u5165\u5e97\u94fa\u540d\u79f0</div>'),!1}return DOM.hide(".J_FirstStep"),DOM.hide(".J_SecondStep"),DOM.show(".J_ThirdStep"),DOM.addClass(DOM.query(".ui-step-li")[2],"current"),!1}),Event.on(".J_SecondPre","click",function(){return DOM.hide(".J_FirstStep"),DOM.hide(".J_ThirdStep"),DOM.show(".J_SecondStep"),DOM.removeClass(DOM.query(".ui-step-li")[2],"current"),!1}),Event.on(".J_FirstNext","click",function(){var a=DOM.val(DOM.children("#J_Radio .r_on")),b=DOM.val("#J_MinCount"),c=DOM.val("#J_MaxCount"),d=DOM.val("#J_MinAmount"),e=DOM.val("#J_MaxAmount"),f=DOM.val("#J_MinAvgPrice"),g=DOM.val("#J_MaxAvgPrice"),h=DOM.val("#J_MinCloseNum"),i=DOM.val("#J_MaxCloseNum"),j=DOM.val("#J_StartDate"),k=DOM.val("#J_EndDate"),l=DOM.val("#J_MaxItemNum"),m=DOM.val("#J_MinItemNum"),n=a+b+c+d+e+f+g+h+i+j+k+l+m;if(n==""||n==0){var o=new Overlay.Dialog({title:"\u63d0\u793a",width:230,height:150,mask:!1,buttons:[{text:"\u786e\u5b9a",elCls:"bui-button bui-button-primary",handler:function(){this.hide()}},{text:"\u53d6\u6d88",elCls:"bui-button",handler:function(){this.hide()}}],bodyContent:"\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u6761\u4ef6\uff01"});return o.show(),!1}DOM.hide(".J_FirstStep"),DOM.show(".J_SecondStep"),DOM.addClass(DOM.query(".ui-step-li")[1],"current");var p=function(a){DOM.show(".J_StatContent"),DOM.html(".J_StatNum",a.desc)},q=function(a){DOM.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown()},r="";return(new H.widget.asyncRequest).setURI(getMemberCountUrl).setMethod("POST").setForm("#J_Marketing").setHandle(p).setErrorHandle(q).setData(r).send(),!1}),Event.on(".J_GroupFirstNext","click",function(){DOM.hide(".J_FirstStep"),DOM.show(".J_SecondStep"),DOM.addClass(DOM.query(".ui-step-li")[1],"current");var a=function(a){DOM.show(".J_StatContent"),DOM.html(".J_StatNum",a.desc)},b=function(a){DOM.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown()},c="";return(new H.widget.asyncRequest).setURI(getMemberCountUrl).setMethod("POST").setForm("#J_Marketing").setHandle(a).setErrorHandle(b).setData(c).send(),!1}),Event.on(".J_FirstPre","click",function(){return DOM.show(".J_FirstStep"),DOM.hide(".J_SecondStep"),DOM.removeClass(DOM.query(".ui-step-li")[1],"current"),!1}),Event.on(".J_Complete","click",function(){var a=DOM.query(".J_SelectCustom"),b=a.length;json=[];for(i=0;i<b;i++){var c=a[i].value;json.push(c)}var d=json,e=function(a){var b='<div class="ui-msg" style="margin-bottom: 10px;"><div class="success-msg"><div class="img-success"></div><div class="text-16">'+a.desc+"</div></div></div>";DOM.html("#messages",b),window.location.href=loadPlansIndexFromTbUrl},f=function(a){var b='<div class="ui-msg" style="margin-bottom: 10px;"><div class="success-msg"><div class="img-success"></div><div class="text-16">'+a.desc+"</div></div></div>";DOM.html("#messages",b)},g=DOM.attr("#J_Tab .current","data"),h="is_group="+g+"&groups="+d;return(new H.widget.asyncRequest).setURI(loadPlansFromTbUrl).setMethod("POST").setForm("#J_Marketing").setHandle(e).setErrorHandle(f).setData(h).send(),!1}),Event.delegate(document,"click",".J_AddReplace",function(a){var b=DOM.html(a.currentTarget),c=DOM.get("#J_ContentBox"),d=addControl.getCursorPosition(c);addControl.add(c,d,b),addControl.checkTitleLen(DOM.val("#J_ContentBox"))}),Event.on(".J_Setting","click",function(){DOM.remove(".bui-dialog");var a=new Overlay.Dialog({title:"\u4e70\u5bb6\u5730\u5740\u8bbe\u7f6e",width:500,height:390,mask:!1,buttons:[{text:"\u786e\u5b9a",elCls:"bui-button bui-button-primary",handler:function(){this.hide()}},{text:"\u53d6\u6d88",elCls:"bui-button",handler:function(){this.hide()}}],bodyContent:""}),b='<div id="J_hlgArea" class="hlg-area"><p style="margin:20px 0;"><button id="J_CheckAll" class="btm-small button-gray">\u5168\u9009</button>&nbsp;&nbsp;<button id="J_UncheckAll" class="btm-small button-gray">\u91cd\u9009</button></p><p><label data-id="9" class="beautify_check"><input class="checked_1 J_CheckBox" name="\u4e0a\u6d77" value="310000" id="J_Area_2" type="checkbox">\u4e0a\u6d77</label><label data-id="10" class="beautify_check"><input name="\u6c5f\u82cf" class="checked_1 J_CheckBox" value="320000" id="J_Area_3" type="checkbox" >\u6c5f\u82cf</label><label data-id="11" class="beautify_check"><input name="\u6d59\u6c5f" class="checked_1 J_CheckBox" value="330000" id="J_Area_4" type="checkbox" >\u6d59\u6c5f</label><label data-id="12" class="beautify_check"><input name="\u5b89\u5fbd" class="checked_1 J_CheckBox" value="340000" id="J_Area_5" type="checkbox" >\u5b89\u5fbd</label><label data-id="13" class="beautify_check"><input name="\u798f\u5efa" class="checked_1 J_CheckBox" value="350000" id="J_Area_6" type="checkbox" >\u798f\u5efa</label><label data-id="14" class="beautify_check"><input name="\u6c5f\u897f" class="checked_1 J_CheckBox" value="360000" id="J_Area_7" type="checkbox" >\u6c5f\u897f</label></p><p><label data-id="1" class="beautify_check"><input name="\u5317\u4eac" value="110000" id="J_Area_9" type="checkbox" class="J_CheckBox" >\u5317\u4eac</label><label data-id="2" class="beautify_check"><input name="\u5929\u6d25" value="120000" id="J_Area_10" type="checkbox" class="J_CheckBox" >\u5929\u6d25</label><label data-id="3" class="beautify_check"><input name="\u6cb3\u5317" value="130000" id="J_Area_11" type="checkbox" class="J_CheckBox" >\u6cb3\u5317</label><label data-id="15" class="beautify_check"><input name="\u5c71\u4e1c" value="370000" id="J_Area_12" type="checkbox" class="J_CheckBox" >\u5c71\u4e1c</label><label data-id="4" class="beautify_check"><input name="\u5c71\u897f" value="140000" id="J_Area_13" type="checkbox" class="J_CheckBox" >\u5c71\u897f</label><label data-id="5" class="beautify_check"><input name="\u5185\u8499\u53e4" value="150000" id="J_Area_14" type="checkbox" class="J_CheckBox" >\u5185\u8499\u53e4</label></p><label data-id="19" class="beautify_check"><input name="\u5e7f\u4e1c" value="440000" id="J_Area_16" type="checkbox" class="J_CheckBox" >\u5e7f\u4e1c</label><label data-id="20" class="beautify_check"><input name="\u5e7f\u897f" value="450000" id="J_Area_17" type="checkbox" class="J_CheckBox" >\u5e7f\u897f</label><label data-id="21" class="beautify_check"><input name="\u6d77\u5357" value="460000" id="J_Area_18" type="checkbox" class="J_CheckBox" >\u6d77\u5357</label></p><p><label data-id="16" class="beautify_check"><input name="\u6cb3\u5357" value="410000" id="J_Area_20" type="checkbox" class="J_CheckBox" >\u6cb3\u5357</label><label data-id="17" class="beautify_check"><input name="\u6e56\u5317" value="420000" id="J_Area_21" type="checkbox" class="J_CheckBox" >\u6e56\u5317</label><label data-id="18" class="beautify_check"><input name="\u6e56\u5357" value="430000" id="J_Area_22" type="checkbox" class="J_CheckBox" >\u6e56\u5357</label></p><p><label data-id="6" class="beautify_check"><input name="\u8fbd\u5b81" value="210000" id="J_Area_24" type="checkbox" class="J_CheckBox" >\u8fbd\u5b81</label><label data-id="7" class="beautify_check"><input name="\u5409\u6797" value="220000" id="J_Area_25" type="checkbox" class="J_CheckBox" >\u5409\u6797</label><label data-id="8" class="beautify_check"><input name="\u9ed1\u9f99\u6c5f" value="230000" id="J_Area_26" type="checkbox" class="J_CheckBox" >\u9ed1\u9f99\u6c5f</label></p><p><label data-id="22" class="beautify_check"><input name="\u91cd\u5e86" value="500000" id="J_Area_28" type="checkbox" class="J_CheckBox" >\u91cd\u5e86</label><label data-id="23" class="beautify_check"><input name="\u56db\u5ddd" value="510000" id="J_Area_29" type="checkbox" class="J_CheckBox" >\u56db\u5ddd</label><label data-id="24" class="beautify_check"><input name="\u8d35\u5dde" value="520000" id="J_Area_30" type="checkbox" class="J_CheckBox" >\u8d35\u5dde</label><label data-id="25" class="beautify_check"><input name="\u4e91\u5357" value="530000" id="J_Area_31" type="checkbox" class="J_CheckBox" >\u4e91\u5357</label></p><p><label data-id="27" class="beautify_check"><input name="\u9655\u897f" value="610000" id="J_Area_33" type="checkbox" class="J_CheckBox" >\u9655\u897f</label><label data-id="28" class="beautify_check"><input name="\u7518\u8083" value="620000" id="J_Area_34" type="checkbox" class="J_CheckBox" >\u7518\u8083</label><label data-id="29" class="beautify_check"><input name="\u9752\u6d77" value="630000" id="J_Area_35" type="checkbox" class="J_CheckBox" >\u9752\u6d77</label><label data-id="30" class="beautify_check"><input name="\u5b81\u590f" value="640000" id="J_Area_36" type="checkbox" class="J_CheckBox" >\u5b81\u590f</label></p><p><label data-id="26" class="beautify_check"><input name="\u897f\u85cf" value="540000" id="J_Area_38" type="checkbox" class="J_CheckBox" >\u897f\u85cf</label><label data-id="31" class="beautify_check"><input name="\u65b0\u7586" value="650000" id="J_Area_39" type="checkbox" class="J_CheckBox" >\u65b0\u7586</label><label data-id="33" class="beautify_check"><input name="\u9999\u6e2f" value="" id="J_Area_40" type="checkbox" class="J_CheckBox" >\u9999\u6e2f</label><label data-id="34" class="beautify_check"><input name="\u6fb3\u95e8" value="" id="J_Area_41" type="checkbox" class="J_CheckBox" >\u6fb3\u95e8</label><label data-id="32" class="beautify_check"><input name="\u53f0\u6e7e" value="" id="J_Area_42" type="checkbox" class="J_CheckBox" >\u53f0\u6e7e</label><label data-id="35" class="beautify_check"><input name="\u6d77\u5916" value="" id="J_Area_43" type="checkbox" class="J_CheckBox" >\u6d77\u5916</label></p></div>';a.set("bodyContent",b),a.show(),addControl.Form=new beautifyForm,Event.on("#J_CheckAll","click",addControl.checkAll),Event.on("#J_UncheckAll","click",addControl.uncheckAll),Event.on(".bui-button-primary","click",function(){var a=DOM.query("#J_hlgArea .c_on");len=a.length;var b=[];for(i=0;i<len;i++){var c=DOM.attr(a[i],"data-id");b.push(c)}DOM.val("#J_Province",b)})}),Event.on(".J_Test","click",function(){DOM.remove(".bui-dialog");var a=new Overlay.Dialog({title:"\u6d4b\u8bd5",width:330,height:160,mask:!1,buttons:[{text:"\u786e\u5b9a",elCls:"bui-button bui-button-primary",handler:function(){this.hide()}},{text:"\u53d6\u6d88",elCls:"bui-button",handler:function(){this.hide()}}],bodyContent:'\u624b\u673a\u53f7\u7801\uff1a<input type="text" id="J_Cellphone" class="input-text-2 J_Placeholder" value="" placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801">'});a.show(),Event.on(".bui-button-primary","click",function(){var a=DOM.val("#J_ContentBox"),b=DOM.val("#J_SignContent"),c=DOM.val("#J_Cellphone");if(c.search(/(^((0[1,2]{1}\d{1}-?\d{8})|(0[3-9]{1}\d{2}-?\d{7,8}))$)|(^0?(13[0-9]|15[0-35-9]|18[0123456789]|14[57])[0-9]{8}$)/)==-1){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u624b\u673a\u53f7\u683c\u5f0f\u6709\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\uff01",type:"error"});return}if(b==""||a=="\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9..."||c==""){DOM.remove(".bui-dialog");var d=new Overlay.Dialog({title:"\u63d0\u793a",width:230,height:150,mask:!1,buttons:[{text:"\u786e\u5b9a",elCls:"bui-button bui-button-primary",handler:function(){this.hide()}},{text:"\u53d6\u6d88",elCls:"bui-button",handler:function(){this.hide()}}],bodyContent:""});d.show();if(a=="\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9...")return d.set("bodyContent",'<div style="text-align: center;font-size:14px;font-weight:bold;">\u8bf7\u8f93\u5165\u77ed\u4fe1\u5185\u5bb9</div>'),!1;if(b=="")return d.set("bodyContent",'<div style="text-align: center;font-size:14px;font-weight:bold;">\u8bf7\u8f93\u5165\u5e97\u94fa\u540d\u79f0</div>'),!1;if(c=="")return d.set("bodyContent",'<div style="text-align: center;font-size:14px;font-weight:bold;">\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801</div>'),!1}var e=function(a){new H.widget.msgBox({type:"sucess",content:"\u53d1\u9001\u6210\u529f",dialogType:"msg",autoClose:!0,timeOut:3e3})},f=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},g=DOM.val("#J_Cellphone"),h=DOM.val("#J_SignContent"),a=DOM.val("#J_ContentBox"),i="mobiles="+g+"&sign_content="+h+"&content="+a;(new H.widget.asyncRequest).setURI(planManualSendFromTbUrl).setMethod("POST").setHandle(e).setErrorHandle(f).setData(i).send()})})},addTemp:function(a){addControl.tempSave();var b=addControl.groupList,c={group_value:""};addControl.groupList.push(c),addControl.renderTemp(),DOM.hide("#J_Cancle_0")},cancelTemp:function(a){addControl.tempSave();var b=addControl.groupList;addControl.groupList.splice(a,1),addControl.renderTemp()},renderTemp:function(){var a=addControl.groupList,b=DOM.html(DOM.get("#J_Templet")),c={data:a},d=(new XTemplate(b)).render(c);DOM.html(DOM.get("#J_groups"),d);for(i=0;i<a.length;i++)customSelect=new Select.Select({render:"#J_SelectCustomBox_"+i,valueField:"#J_SelectCustom_"+i,items:S.JSON.parse(sellerCats)}),customSelect.render(),customSelect.setSelectedValue(DOM.val("#J_SelectCustom_"+i))},tempSave:function(){addControl.groupList=[];var a=DOM.query(".J_SelectCustomBox");S.each(a,function(a,b){var c={};c.group_value=DOM.val(DOM.get(".J_SelectCustom",a)),addControl.groupList.push(c)})},updateSign:function(){var a=DOM.html(".J_CurrentMsg");a.replace(DOM.val("#J_Sign"),DOM.val("#J_SignContent")),addControl.checkTitleLen(DOM.val("#J_ContentBox"))},checkAll:function(a){checkBoxs=DOM.query("#J_hlgArea .J_CheckBox"),len=checkBoxs.length;for(i=0;i<len;i++){var b=checkBoxs[i].value;if(checkBoxs[i].disabled)continue;this.checked?addControl.Form.setCheckboxOff(checkBoxs[i]):addControl.Form.setCheckboxOn(checkBoxs[i])}},uncheckAll:function(a){checkBoxs=DOM.query("#J_hlgArea .J_CheckBox"),len=checkBoxs.length;for(i=0;i<len;i++){var b=checkBoxs[i].value;if(checkBoxs[i].disabled)continue;this.checked?addControl.Form.setCheckboxOn(checkBoxs[i]):addControl.Form.setCheckboxOff(checkBoxs[i])}},getCursorPosition:function(a){var b={text:"",start:0,end:0};a.focus();if(a.setSelectionRange)b.start=a.selectionStart,b.end=a.selectionEnd,b.text=b.start!=b.end?a.value.substring(b.start,b.end):"";else if(document.selection){var c,d=document.selection.createRange(),e=document.body.createTextRange();e.moveToElementText(a),b.text=d.text,b.bookmark=d.getBookmark();for(c=0;e.compareEndPoints("StartToStart",d)<0&&d.moveStart("character",-1)!==0;c++)a.value.charAt(c)=="\n"&&c++;b.start=c,b.end=b.text.length+b.start}return b},checkTitleLen:function(a){var b=a.replace(/【买家姓名】/g,"123").replace(/【店铺名称】/g,DOM.val("#J_SignContent")).length,c=DOM.val("#J_SignContent");DOM.html(DOM.get("#J_Zs_Num"),b);var d=Math.ceil(b/67);DOM.html(DOM.get(".J_MsgNum"),d),a=a.replace(/【店铺名称】/g,DOM.val("#J_SignContent")),DOM.html(".J_CurrentMsg",a);var c=DOM.val("#J_SignContent")},add:function(a,b,c){var d,e,f,g,h,i,j;a.setSelectionRange?(d=a.value,e=d.substring(0,b.start)+c+d.substring(b.end),h=i=b.start+c.length,j=a.scrollTop,a.value=e,a.scrollTop!=j&&(a.scrollTop=j),a.setSelectionRange(h,i)):a.createTextRange&&(g=document.selection.createRange(),g.text=c,g.setEndPoint("StartToEnd",g),g.select())}}},{requires:["utils/beautifyForm/index","bui/overlay","bui/calendar","bui/tooltip","bui/select","xtemplate"]}); 