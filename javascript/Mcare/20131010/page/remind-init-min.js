KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<div class="page-bottom"> <div class="sabrosus">',c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>",d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> ';break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;",c+='<input style="" type="text"  class="page-input" id="pageInput'+b.name+'"  value="\u9875\u7801" onkeypress="return window.'+b.name+".formatInputPage(event);\" onfocus=\"this.className='page-input page-input-text-on ';if(this.value=='\u9875\u7801'){this.value = '';}\" onblur=\"this.className='page-input';if(this.value==''){this.value = '\u9875\u7801'}\">",c+='<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);" >',c+="</font>"),d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<span title="\u4e0a\u4e00\u9875" class="pre page-pic-no" onclick="'+b.name+".toPage("+d+');"></span>',this.page==1;if(this.page-2<=0){var f=1;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else if(this.page+2>=this.pageCount){var f=this.pageCount-4;if(this.pageCount>this.page+4)var g=this.page+4;else var g=this.pageCount}else{var f=this.page-2;if(this.pageCount>this.page+2)var g=this.page+2;else var g=this.pageCount}for(var h=f;h<=g;h++)h>0&&(h==this.page?c+='<span class="current a-padding">'+h+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+h+');">'+h+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<span title="\u4e0b\u4e00\u9875" class="next page-pic-no" onclick="'+b.name+".toPage("+e+');"></span>',c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/remind-init",function(a,b,c){var d=a.DOM,e=a.Event;return remind={paginator:null,msg:null,panel:null,isFisrst:!0,init:function(){remind.panel||(remind.panel=new c.Dialog({width:370,headerContent:"\u63d0\u9192\u624b\u673a",bodyContent:'<ul><li class="min-height-30"><span class="fl color-red">\u6d4b\u8bd5\u4f1a\u6d88\u8017\u4e00\u6761\u77ed\u4fe1</span></li><li class="min-height-40"><div class="active-add-edit-title w-80">\u63d0\u9192\u624b\u673a\uff1a</div><div class="active-add-edit-edit w-180"><input id="J_MobileText" type="text" value="" class="input-text w-200"></div></li><li class="min-height-40"><div class="active-add-edit-title w-80">\u63d0\u9192\u65b9\u5f0f\uff1a</div><div class="active-add-edit-edit w-200">\u77ed\u4fe1\u5c11\u4e8e&nbsp;&nbsp;<input id="J_remindNum" value="" type="text" class="input-text w-70">&nbsp;&nbsp;\u6761\u63d0\u9192\u6211</div></li><li><div class="ui-msg" style="display: none; width:300px; margin: 15px auto;" id="J_ParamsErrorBox"><div class="error-msg"><div class="img-16-1"></div><div class="text-16 color-red" id="J_ParamsErrorMsg"></div></div></div><div class="ui-msg" style="display: none;width:300px;margin: 15px auto;" id="J_ParamsSucessBox"><div class="success-msg"><div class="img-16-6"></div><div class="text-16" id="J_ParamsSucessMsg"></div></div></div></li></ul>',mask:!1,align:{points:["cc","cc"]},closable:!0,draggable:!0,aria:!0,buttons:[{text:"\u786e\u5b9a",elCls:"bui-button bui-button-primary",handler:function(){var a=d.val("#J_phoneNum"),b=d.val("#J_MobileText"),c=d.val("#J_remindNum"),e=d.val("#J_noteNum");a==b&&c==e?this.hide():remind.determine()}},{text:"\u6d4b\u8bd5",elCls:"bui-button",handler:function(){remind.remindTest()}}]})),e.on("#J_remind","click",function(){remind.panel.show(),remind.getData()})},getData:function(){var a=function(a){d.val("#J_MobileText",a.payload.mobile),d.val("#J_noteNum",a.payload.sms_remind),d.val("#J_remindNum",a.payload.sms_remind),d.val("#J_phoneNum",a.payload.mobile)};(new H.widget.asyncRequest).setURI(getRemindInfoUrl).setMethod("GET").setHandle(a).setData(null).setDataType("json").send()},determine:function(){var a=d.val("#J_MobileText"),b=d.val("#J_remindNum"),c=KISSY.one("#J_ParamsErrorBox"),e=KISSY.one("#J_ParamsSucessBox"),f=function(a){new H.widget.msgBox({type:"sucess",content:a.payload,dialogType:"msg",autoClose:!0,timeOut:3e3}),remind.panel.hide()},g=function(a){d.html("#J_ParamsErrorMsg",a.desc),c.css("display")==="none"&&c.slideDown();return};data="mobile="+a+"&sms_remind="+b,(new H.widget.asyncRequest).setURI(saveRemindInfoUrl).setMethod("POST").setHandle(f).setErrorHandle(g).setData(data).send()},remindTest:function(){var a=KISSY.one("#J_ParamsErrorBox"),b=KISSY.one("#J_ParamsSucessBox"),c=function(a){new H.widget.msgBox({type:"sucess",content:a.payload,dialogType:"msg",autoClose:!0,timeOut:3e3}),remind.panel.hide()},e=function(b){d.html("#J_ParamsErrorMsg",b.desc),a.css("display")==="none"&&a.slideDown();return},f=d.val("#J_MobileText"),g="mobile="+f;(new H.widget.asyncRequest).setURI(testRemindInfoUrl).setMethod("POST").setHandle(c).setErrorHandle(e).setData(g).send()},updateShopTitle:function(){var a=function(a){d.html("#J_ShopNick",a.desc),new H.widget.msgBox({type:"sucess",content:"\u66f4\u65b0\u6210\u529f",dialogType:"msg",autoClose:!0,timeOut:3e3})},b=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},c="";(new H.widget.asyncRequest).setURI(updateShopTitleUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(c).send()}}},{requires:["utils/showPages/index","bui/overlay"]}); 