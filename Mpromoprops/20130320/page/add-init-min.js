KISSY.add("page/add-init",function(a){return promotionControl={Paginator:null,msg:null,NameError:!1,CardNumError:!1,free_post_areasId:[],free_post_areasName:[],free_post_num:[],free_post_name:[],init:function(){var a=DOM.val("#J_IsEdit");if(a){var b={mianyouka:{ALL:"207",PART:"208",PART_NOT:"209"},dazheka:{ALL:"201",PART:"202",PART_NOT:"203"},youhuiquan:{ALL:"204",PART:"205",PART_NOT:"206"},shenrika:{ALL:"210",PART:"211",PART_NOT:"212"}},c={201:"\u6253\u6298\u5361[\u5168\u5e97\u53c2\u4e0e]",202:"\u6253\u6298\u5361[\u90e8\u5206\u5546\u54c1\u53c2\u4e0e]",203:"\u6253\u6298\u5361[\u90e8\u5206\u5546\u54c1\u4e0d\u53c2\u4e0e]",207:"\u514d\u90ae\u5361[\u5168\u5e97\u53c2\u4e0e]",208:"\u514d\u90ae\u5361[\u90e8\u5206\u5546\u54c1\u53c2\u4e0e]",209:"\u514d\u90ae\u5361[\u90e8\u5206\u5546\u54c1\u4e0d\u53c2\u4e0e]",204:"\u4f18\u60e0\u5238[\u5168\u5e97\u53c2\u4e0e]",205:"\u4f18\u60e0\u5238[\u90e8\u5206\u5546\u54c1\u53c2\u4e0e]",206:"\u4f18\u60e0\u5238[\u90e8\u5206\u5546\u54c1\u4e0d\u53c2\u4e0e]",210:"\u751f\u65e5\u5361[\u5168\u5e97\u53c2\u4e0e]",211:"\u751f\u65e5\u5361[\u90e8\u5206\u5546\u54c1\u53c2\u4e0e]",212:"\u751f\u65e5\u5361[\u90e8\u5206\u5546\u54c1\u4e0d\u53c2\u4e0e]"};Event.on(".J_RangeType","click",function(a){var c=a.target.value,d=DOM.val("#J_ParentType");if(DOM.val("#J_TypeId")==b[d][c])return;DOM.val("#J_TypeId",b[d][c]),c=="ALL"?(DOM.hide("#J_Step_4"),DOM.hide("#J_Step_3"),DOM.show("#J_Step_2"),DOM.show("#J_BtnPublish_1"),DOM.hide("#J_BtnPublish_0")):c=="PART"?(DOM.hide("#J_Step_4"),DOM.hide("#J_Step_2"),DOM.show("#J_Step_3"),DOM.show("#J_BtnPublish_0"),DOM.hide("#J_BtnPublish_1")):(DOM.hide("#J_Step_3"),DOM.hide("#J_Step_2"),DOM.show("#J_Step_4"),DOM.show("#J_BtnPublish_0"),DOM.hide("#J_BtnPublish_1"))})}Event.on(".J_BtnPublish","click",function(a){var b=IsExpired();if(b>-5e3){var c=function(a){promotionControl.save()},d=function(a){KISSY.Event.fire(".J_TopExpired","click")},e="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(c).setErrorHandle(d).setData(e).send()}else promotionControl.save()}),promotionControl.myCalendar("J_startDate",new Date(2038,11,29,0,0,0)),promotionControl.myCalendar("J_endDate",new Date(2038,11,29,0,0,0)),promotionControl.handleInputs()},myCalendar:function(b,c){var e=(new KISSY.Calendar("#"+b,{popup:!0,triggerType:["click"],minDate:currentDate,date:currentDate,maxDate:c,showTime:!0})).on("select timeSelect",function(b){var c=this.id,e=this;if(c=="J_endDate"){if(b.type=="select")var f=a.Date.format(b.date,"yyyy-mm-dd 23:59:59");else var f=a.Date.format(b.date,"yyyy-mm-dd HH:MM:ss");var g=new Date,i=H.util.StringToDate(a.one("#J_startDate").val()),j=H.util.StringToDate(f);if(j.getTime()<=g.getTime()||j.getTime()<=i.getTime())DOM.addClass(a.one("#J_endDate"),"text-error"),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u5c0f\u4e8e\u5f00\u59cb\u65f6\u95f4\uff01",type:"error",autoClose:!0,timeOut:2e3}),e.hide();else{a.one("#J_endDate").val(f),DOM.removeClass(a.one("#J_endDate"),"text-error");var k=parseInt((j.getTime()-i.getTime())/1e3);d=parseInt(k/86400%1e4),h=parseInt(k/3600%24),str='\u6d3b\u52a8\u6301\u7eed<b class="red">'+d+'</b>\u5929<b class="red">'+h+"</b>\u5c0f\u65f6",e.hide()}}else if(c=="J_startDate"){var f=a.one("#J_endDate").val();if(b.type=="select")var l=a.Date.format(b.date,"yyyy-mm-dd 00:00:01");else var l=a.Date.format(b.date,"yyyy-mm-dd HH:MM:ss");var i=H.util.StringToDate(l),j=H.util.StringToDate(f);if(f!=""&&l>=f)DOM.addClass(a.one("#J_endDate"),"text-error"),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u5c0f\u4e8e\u5f00\u59cb\u65f6\u95f4\uff01",type:"error",autoClose:!0,timeOut:2e3}),a.one("#J_startDate").val(l),e.hide();else{a.one("#J_startDate").val(l),DOM.removeClass(a.one("#J_endDate"),"text-error");var k=parseInt((j.getTime()-i.getTime())/1e3);d=parseInt(k/86400%1e4),h=parseInt(k/3600%24),str='\u6d3b\u52a8\u6301\u7eed<b class="red">'+d+'</b>\u5929<b class="red">'+h+"</b>\u5c0f\u65f6",e.hide()}}else e.hide()})},PromoNameAction:function(a){var b=H.util.isNull(a),c=b[0],d=b[1];return c?(DOM.addClass(promotionForm.promo_name,"text-error"),DOM.html("#J_PromoNameError",d),DOM.hide("#J_PromoNameSucess"),DOM.show("#J_PromoNameError"),promotionControl.NameError=!0):(DOM.removeClass(promotionForm.promo_name,"text-error"),DOM.show("#J_PromoNameSucess"),DOM.hide("#J_PromoNameError"),promotionControl.NameError=!1)},CardNumAction:function(a){var b=H.util.isNull(a),c=b[0],d=b[1];if(c)return DOM.addClass(promotionForm.card_num,"text-error"),DOM.html("#J_CardNumError",d),DOM.hide("#J_CardNumSucess"),DOM.show("#J_CardNumError"),promotionControl.CardNumError=!0;var b=H.util.checkPrice(a),c=b[0],d=b[1];return c?(DOM.addClass(promotionForm.card_num,"text-error"),DOM.html("#J_CardNumError",d),DOM.hide("#J_CardNumSucess"),DOM.show("#J_CardNumError"),promotionControl.CardNumError=!0):(DOM.removeClass(promotionForm.promo_name,"text-error"),DOM.show("#J_CardNumSucess"),DOM.hide("#J_CardNumError"),promotionControl.CardNumError=!1)},save:function(){var a=KISSY,b=a.DOM,c=a.Event;promotionControl.msg=new H.widget.msgBox({title:"",dialogType:"loading",content:"\u6b63\u5728\u4fdd\u5b58\u4e2d\uff0c\u8bf7\u7a0d\u5019"});var d=promotionForm.promo_name.value;promotionControl.PromoNameAction(d);if(promotionControl.NameError==1){promotionControl.msg.hide();return}ParamsErrorBox=KISSY.one("#J_ParamsErrorBox");if(promotionForm.card_num_type[1].checked){var e=document.getElementsByName("card_num")[0].value,f=H.util.isNull(e),g=f[0],h=f[1];if(g){b.addClass(promotionForm.card_num,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}var f=H.util.checkPrice(e),g=f[0],h=f[1];if(g){b.addClass(promotionForm.card_num,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}if(promotionForm.use_type[1].checked){var i=document.getElementsByName("use_type_num")[0].value,f=H.util.isNull(i),g=f[0],h=f[1];if(g){b.addClass(promotionForm.use_type_num,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}var f=H.util.checkPrice(i),g=f[0],h=f[1];if(g){b.addClass(promotionForm.use_type_num,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}if(promotionForm.date_type[0].checked){if(a.one("#J_startDate")){var j=b.val("#J_startDate"),k=a.one("#J_endDate").val();if(k!=""&&j>=k){promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg","\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u5927\u4e8e\u7ed3\u675f\u65f6\u95f4\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),b.addClass("#J_startDate","text-error");return}}if(a.one("#J_endDate")){var k=a.one("#J_endDate").val(),l=new Date,m=H.app.smart.StringToDate(a.one("#J_startDate").val()),n=H.app.smart.StringToDate(k);if(n.getTime()<=l.getTime()||n.getTime()<=m){promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg","\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u5c0f\u4e8e\u5f00\u59cb\u65f6\u95f4\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),b.addClass("#J_endDate","text-error");return}}}var o=promotionForm.type_id.value;switch(o){case"201":case"202":case"203":var p=document.getElementsByName("discount_value")[0].value,f=H.util.isNull(p),g=f[0],h=f[1];if(g){b.addClass(promotionForm.discount_value,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}var f=promotionControl.checkDiscount(p),g=f[0],h=f[1];if(g){b.addClass(promotionForm.discount_value,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}break;case"204":case"205":case"206":break;case"207":case"208":case"209":promotionControl.checkPost(0);if(promotionControl.free_post_num.length==0){var q="\u514d\u90ae\u5730\u533a\u672a\u8bbe\u7f6e!!";promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",q),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}if(b.get("#J_is_item1").checked===!0){var r=document.getElementsByName("item_price")[0].value,f=H.util.isNull(r),g=f[0],h=f[1];if(g){b.addClass(promotionForm.item_price,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}var f=H.util.checkPrice(r),g=f[0],h=f[1];if(g){b.addClass(promotionForm.item_price,"text-error"),promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",h),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}var s=function(a){promotionControl.msg.hide(),ParamsErrorBox.hide(),ParamsSucessBox=KISSY.one("#J_ParamsSucessBox"),b.html("#J_ParamsSucessMsg","\u6210\u529f\u521b\u5efa\u6d3b\u52a8\uff01"),ParamsSucessBox.css("display")==="none"&&ParamsSucessBox.slideDown(),b.scrollIntoView("#J_ParamsSucessMsg",window),window.location.href=a.desc},t=function(a){promotionControl.msg.hide(),b.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),b.scrollIntoView("#J_ParamsErrorMsg",window),promotionControl.backCheckForm()},u="";return(new H.widget.asyncRequest).setURI(savePromoAjaxUrl).setMethod("POST").setForm("#promotion_edit_form").setHandle(s).setErrorHandle(t).setData(u).send(),!0},checkForm:function(){var a=DOM.filter(DOM.query("input"),function(a){if(a.type=="checkbox"&&DOM.hasClass(a,"J_checkForm"))return!0});KISSY.each(a,function(a){a.checked==0&&(a.checked=!0,DOM.val(a,0))})},backCheckForm:function(){var a=DOM.filter(DOM.query("input"),function(a){if(a.type=="checkbox"&&DOM.hasClass(a,"J_checkForm"))return!0});KISSY.each(a,function(a){var b=DOM.val(a);b==1?a.checked=!0:(a.checked=!1,DOM.val(a,1))})},checkPost:function(a){promotionControl.free_post_areasId=[],promotionControl.free_post_areasName=[],promotionControl.free_post_num=[],promotionControl.free_post_name=[];var b=DOM.query("#J_youhui_"+a+" .J_ex_id"),c=DOM.query("#J_youhui_"+a+" .J_ex_name");KISSY.each(b,function(a){a.disabled?promotionControl.free_post_num.push(DOM.val(a)):promotionControl.free_post_areasId.push(DOM.val(a))}),KISSY.each(c,function(a){a.disabled?promotionControl.free_post_name.push(DOM.val(a)):promotionControl.free_post_areasName.push(DOM.val(a))})},handleInputs:function(){var a=DOM.filter(DOM.query("input"),function(a){if(a.type=="text")return!0});Event.on(a,"focus blur",function(a){a.type=="focus"?DOM.hasClass(a.target,"input-none")?(DOM.removeClass(DOM.parent(a.target),"input-text text text-error"),DOM.addClass(DOM.parent(a.target),"input-text-on")):(DOM.removeClass(a.target,"input-text text text-error"),DOM.addClass(a.target,"input-text-on")):a.type=="blur"&&(DOM.hasClass(a.target,"input-none")?(DOM.removeClass(DOM.parent(a.target),"input-text-on"),DOM.addClass(DOM.parent(a.target),"input-text")):(DOM.removeClass(a.target,"input-text-on"),DOM.addClass(a.target,"input-text")))})},checkDiscount:function(a){var b=[],c=!1,d=null;if(isNaN(Number(a))||a<=0||a>=10)c=!0,d="\u6298\u6263\u8303\u56f4\u5728 0.00~9.99\u4e4b\u95f4\u54e6\uff01";else{var e=/(^[0-9]([.][0-9]{1,2})?$)|(^1[0-9]([.][0-9]{1,2})?$)|(^2[0-3]([.][0-9]{1,2})?$)|(^10([.]0{1,2})?$)/;e.test(a)||(c=!0,d="\u6298\u6263\u8303\u56f4\u5728 0.00~9.99\u4e4b\u95f4\u54e6\uff01")}return b.push(c),b.push(d),b}}},{requires:[]}); 