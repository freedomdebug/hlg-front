KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<span class="number">',this.page!=1&&(c+='<span title="Page 1"><a href="javascript:'+b.name+'.toPage(1);">1</a></span>'),this.page>=5&&(c+="<span>...</span>");if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount;for(var g=this.page-2;g<=f;g++)g>0&&(g==this.page?c+='<span title="Page '+g+'">'+g+"</span>":g!=1&&g!=this.pageCount&&(c+='<span title="Page '+g+'"><a href="javascript:'+b.name+".toPage("+g+');">'+g+"</a></span>"));this.page+3<this.pageCount&&(c+="<span>...</span>"),this.page!=this.pageCount&&(c+='<span title="Page '+this.pageCount+'"><a href="javascript:'+b.name+".toPage("+this.pageCount+');">'+this.pageCount+"</a></span>"),c+="</span><br />";break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',this.page==1;if(this.page-2<=0){var h=1;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else if(this.page+2>=this.pageCount){var h=this.pageCount-4;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else{var h=this.page-2;if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount}for(var g=h;g<=f;g++)g>0&&(g==this.page?c+='<span class="current a-padding">'+g+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+g+');">'+g+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;\u5230\u7b2c&nbsp;",this.page>=this.pageCount?c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+this.pageCount+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875':c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+(this.page+1)+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875',c+='<input type="button" value="" class="page-pic-no gray-btm-h-go w-30 btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);">',c+="</font>"),c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/relistCreate-init",function(a,b){var a=KISSY,c=a.DOM,d=a.Event,e=document,f=0;return relistCreate={paginator:null,toPageNum:1,paginator2:null,msg:null,planCats:null,timer:null,planIdFromUrl:null,init:function(){relistCreate.planIdFromUrl=c.val("#J_PlanIdFromUrl");var a=c.val("#J_StepFromUrl");if(relistCreate.planIdFromUrl&&relistCreate.planIdFromUrl>0){a==1&&c.show("#J_StepCont1"),a==2&&relistCreate.setStep2BaseHtml(),a==3&&relistCreate.searchStep3();if(a==4){c.removeClass(c.query(".ui-step-item"),"current"),c.addClass("#J_Step4","current");var b=c.html("#J_StepCont4Preview");c.html("#J_StepCont",b),relistCreate.showRelistView(),relistCreate.getPlanItems(),scroll(0,0)}}else c.show("#J_StepCont1");d.on("#J_Step1PromptClick","click",function(){c.prop("#J_AtuoRadio","checked")?c.css("#J_Step1PromptCont","visibility","visible"):c.css("#J_Step1PromptCont","visibility","hidden")}),d.on("#J_BtnPublish","click",function(){relistCreate.saveStep1(),scroll(0,0)}),d.delegate(e,"click","#J_Step2Save",function(){relistCreate.saveStep2(),scroll(0,0)}),d.delegate(e,"click","#J_Step3Save",function(){relistCreate.saveStep3(),scroll(0,0)}),d.delegate(e,"click","#J_Step3To5",function(){relistCreate.stepTo5(),scroll(0,0)}),d.delegate(e,"click","#J_Step4Save",function(){relistCreate.step4Save(),scroll(0,0)}),d.delegate(e,"click","#J_CreateAgain",function(){window.location.href=createAgainUrl,scroll(0,0)}),d.delegate(e,"click","#J_ComeToList",function(){window.location.href=indexListUrl,scroll(0,0)}),d.delegate(document,"click mouseenter mouseleave",".J_EditorListTime",function(a){if(a.type=="mouseenter")c.addClass(a.currentTarget,"edit-activity-hover");else if(a.type=="mouseleave")c.removeClass(a.currentTarget,"edit-activity-hover");else if(a.type=="click"){var b=c.attr(a.currentTarget,"data");relistCreate.editorListTime(b)}})},saveStep1:function(){if(isVersionPer("tool"))return;if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;var a=function(a){relistCreate.msg.hide(),c.val("#J_PlanId",a.payload),relistCreate.setStep2BaseHtml()},b=function(a){relistCreate.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},d=c.val("#J_PlanName");if(d==""){c.css("#J_PlanName","border","1px solid red");return}if(c.prop("#J_AtuoRadio","checked"))var e=0;else var e=1;if(relistCreate.planIdFromUrl)relistCreate.setStep2BaseHtml();else{var f="plan_id=0&step=1&planName="+d+"&add_way="+e;relistCreate.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),(new H.widget.asyncRequest).setURI(saveUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setForm(J_subform).setData(f).send()}},setStep2BaseHtml:function(){c.removeClass(c.query(".ui-step-item"),"current"),c.addClass("#J_Step2","current");var a=c.html("#J_StepCont2");c.html("#J_StepCont",a),relistCreate.planCats||relistCreate._getPlanCats()},searchStep2:function(){var a=function(a){c.hide("#J_Step2Loading"),c.show("#J_Step2Cont"),c.html("#J_Step2List",a.payload.body),totalRecords=a.payload.totalRecords,totalRecords>0?(c.css(c.get("#J_Step2Empty"),"display","none"),c.css(c.query(".J_Step2Holder"),"display","")):(c.css(c.get("#J_Step2Empty"),"display",""),c.css(c.query(".J_Step2Holder"),"display","none"));var d=Math.ceil(totalRecords/a.payload.pageNum);relistCreate.paginator=(new b("relistCreate.paginator")).setRender(relistCreate.pagination).setPageCount(d).printHtml("#J_Step2Paging",2)},d=function(a){c.html("#J_StepCont",'<div class="point relative"><div class="point-w-1">'+a.desc+'&nbsp;&nbsp;<a href="#2" onclick="relistCreate.saveStep1()">\u91cd\u8bd5</a>&nbsp;&nbsp;<a href="javascript:location.reload();">\u91cd\u65b0\u521b\u5efa</a></div></div>')},e=c.val("#J_Step2SearchTitle");e=="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801"&&(e="");var f=c.val("#J_Step2Status"),g=c.val("#J_Step2Cat"),h=relistCreate.planIdFromUrl||c.val("#J_PlanId"),i="plan_id="+h+"&pageSize=10&q="+e+"&status="+f+"&cid="+g;c.hide("#J_Step2Loading"),c.show("#J_Step2Cont"),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("POST").setHandle(a).setErrorHandle(d).setData(i).send(),relistCreate.getExcludeItemNum()},_getPlanCats:function(){var a=function(a){relistCreate.planCats=a.payload,c.html("#J_Step2Cat",relistCreate.planCats),c.show("#J_Step2Cat"),relistCreate.searchStep2()},b=function(){relistCreate._getPlanCats()},d=relistCreate.planIdFromUrl||c.val("#J_PlanId"),e="plan_id="+d;(new H.widget.asyncRequest).setURI(getPlanCatsUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},pagination:function(a){pageId=a,relistCreate.toPageNum=a;var b=function(a){c.hide("#J_Step2Loading"),scroll(0,0),c.show("#J_Step2Cont"),c.html("#J_Step2List",a.payload.body),totalRecords=a.payload.totalRecords,totalRecords>0?(c.css(c.get("#J_Step2Empty"),"display","none"),c.css(c.query(".J_Step2Holder"),"display","")):(c.css(c.get("#J_Step2Empty"),"display",""),c.css(c.query(".J_Step2Holder"),"display","none"));var b=Math.ceil(totalRecords/a.payload.pageNum);relistCreate.paginator.setPage(pageId).setPageCount(b).printHtml("#J_Step2Paging",2)},d=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},e=c.val("#J_Step2SearchTitle");e=="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801"&&(e="");var f=c.val("#J_Step2Status"),g=c.val("#J_Step2Cat"),h=relistCreate.planIdFromUrl||c.val("#J_PlanId"),i="plan_id="+h+"&pageSize=10&q="+e+"&status="+f+"&cid="+g+"&page_id="+pageId;c.hide("#J_Step2Loading"),c.show("#J_Step2Cont"),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("POST").setHandle(b).setErrorHandle(d).setData(i).send()},getExcludeItemNum:function(){var a=function(a){c.html("#J_Step2ExcludeNum",a.payload)},b=relistCreate.planIdFromUrl||c.val("#J_PlanId"),d="plan_id="+b;(new H.widget.asyncRequest).setURI(getExcludeItemNumUrl).setMethod("POST").setHandle(a).setData(d).send()},excludeItem:function(a){var b=function(a){relistCreate.msg.hide(),relistCreate.getExcludeItemNum(),relistCreate.paginator.toPage(relistCreate.toPageNum)},d=function(a){relistCreate.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},e=a,f=relistCreate.planIdFromUrl||c.val("#J_PlanId"),g="plan_id="+f+"&item_ids="+a;relistCreate.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),(new H.widget.asyncRequest).setURI(excludeItemUrl).setMethod("POST").setHandle(b).setErrorHandle(d).setData(g).send()},cancelExclude:function(a){var b=function(a){relistCreate.msg.hide(),relistCreate.getExcludeItemNum(),relistCreate.paginator.toPage(relistCreate.toPageNum)},d=function(a){relistCreate.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},e=a,f=relistCreate.planIdFromUrl||c.val("#J_PlanId"),g="plan_id="+f+"&item_ids="+a;relistCreate.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),(new H.widget.asyncRequest).setURI(cancelExcludeUrl).setMethod("POST").setHandle(b).setErrorHandle(d).setData(g).send()},saveStep2:function(){var a=function(a){relistCreate.msg.hide(),relistCreate.searchStep3()},b=function(a){relistCreate.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},d=relistCreate.planIdFromUrl||c.val("#J_PlanId"),e="plan_id="+d+"&step=2";relistCreate.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),(new H.widget.asyncRequest).setURI(saveUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},_getPlanItemNum:function(){var a=function(a){c.val("#J_Step3AllNumTmp",a.payload[0]),c.val("#J_Step3DistriNumTmp",a.payload[1]),c.val("#J_Step3UndistriNumTmp",a.payload[2])},b=function(a){relistCreate._getPlanItemNum();return},d=relistCreate.planIdFromUrl||c.val("#J_PlanId"),e="plan_id="+d;(new H.widget.asyncRequest).setURI(getPlanItemNumUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},quitFromPlan:function(a){var b=function(a){relistCreate.searchStep2()},d=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},e=relistCreate.planIdFromUrl||c.val("#J_PlanId"),f="plan_id="+e+"&relistItemId="+a;(new H.widget.asyncRequest).setURI(quitFromPlanUrl).setMethod("POST").setHandle(b).setErrorHandle(d).setData(f).send()},searchStep3:function(){relistCreate._getPlanItemNum();var b=function(b){c.removeClass(c.query(".ui-step-item"),"current"),c.addClass("#J_Step3","current"),c.html("#J_StepCont",b.payload.body),a.later(function(){c.html("#J_Step3AllNum",c.val("#J_Step3AllNumTmp")),c.html("#yfpNum",c.val("#J_Step3DistriNumTmp")),c.html("#wfpNum",c.val("#J_Step3UndistriNumTmp"))},500);var e=KISSY.Node.all;window.onscroll=function(){var a=c.offset("#J_Step_5").top+70,b=e(window).scrollTop();b>a?(c.addClass("#J_Step3Week","fix-top"),c.css("#J_Step3Week","width",c.width("#J_Step_5")+"px")):c.removeClass("#J_Step3Week","fix-top")},d.on(".J_OnClickEdit","mouseover",function(a){var b=c.attr(a.currentTarget,"data");c.hide(a.currentTarget),c.show("#seg_"+b),c.get("#seg_"+b).focus()}),d.on(".J_EditNum","mouseover",function(a){c.get(a.currentTarget).focus()})},e=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},f=relistCreate.planIdFromUrl||c.val("#J_PlanId"),g="plan_id="+f;(new H.widget.asyncRequest).setURI(distriUrl).setMethod("POST").setHandle(b).setErrorHandle(e).setData(g).send()},uniformDistri:function(a,b){var a=parseInt(c.val("#J_DistriStart")),b=parseInt(c.val("#J_DistriEnd"));if(isNaN(a)==1||a<0||a>23){c.css("#J_DistriStart","border","1px solid red");return}if(isNaN(b)==1||b<0||b<a||b>23){c.css("#J_DistriEnd","border","1px solid red");return}var d=parseInt(c.html("#J_Step3AllNum"));if(d<1){new H.widget.msgBox({title:"\u5b9d\u8d1d\u603b\u6570\u4e0d\u8db3\uff0c\u8bf7\u786e\u8ba4!",content:o.desc,type:"error"});return}var e=(b-a+1)*7,f=Math.floor(d/e),g=d%e;for(var h=0;h<=23;h++)for(var i=1;i<=7;i++)h>=a&&h<=b?g>0?(c.val("#seg_"+i+"_"+h,f+1),c.html("#J_ShowNum_"+i+"_"+h,f+1),c.show("#J_ShowNum_"+i+"_"+h),g--):(c.val("#seg_"+i+"_"+h,f),f==0?c.html("#J_ShowNum_"+i+"_"+h,"&nbsp;"):c.html("#J_ShowNum_"+i+"_"+h,f),c.show("#J_ShowNum_"+i+"_"+h)):(c.val("#seg_"+i+"_"+h,0),c.html("#J_ShowNum_"+i+"_"+h,"&nbsp;"),c.show("#J_ShowNum_"+i+"_"+h));c.html("#yfpNum",d),c.html("#wfpNum",0),relistCreate.countSum();return},reset:function(){for(var a=0;a<=23;a++)for(var b=1;b<=7;b++)c.val("#seg_"+b+"_"+a,""),c.html("#J_ShowNum_"+b+"_"+a,"&nbsp;"),c.show("#J_ShowNum_"+b+"_"+a);c.val("#J_DistriStart",""),c.val("#J_DistriEnd",""),c.html("#yfpNum",c.val("#J_Step3DistriNumTmp")),c.html("#wfpNum",c.val("#J_Step3UndistriNumTmp")),relistCreate.countSum();return},plus:function(a,b){var d=parseInt(c.html("#yfpNum")),e=parseInt(c.html("#wfpNum"));if(e<1){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u5206\u914d\u7684\u6570\u91cf\u4e0d\u8db3\uff0c\u8bf7\u786e\u8ba4!",type:"error"});return}if(a=="")for(var f=1;f<=7;f++){var g=parseInt(c.val("#seg_"+f+"_"+b))<=0||isNaN(parseInt(c.val("#seg_"+f+"_"+b)))?0:parseInt(c.val("#seg_"+f+"_"+b));e>0&&(c.val("#seg_"+f+"_"+b,g+1),c.html("#J_ShowNum_"+f+"_"+b,g+1),c.show("#J_ShowNum_"+f+"_"+b),e--,d++)}else if(b=="")for(var f=0;f<=23;f++){var g=parseInt(c.val("#seg_"+a+"_"+f))<=0||isNaN(parseInt(c.val("#seg_"+a+"_"+f)))?0:parseInt(c.val("#seg_"+a+"_"+f));e>0&&(c.val("#seg_"+a+"_"+f,g+1),c.html("#J_ShowNum_"+a+"_"+f,g+1),c.show("#J_ShowNum_"+a+"_"+f),e--,d++)}c.html("#yfpNum",d),c.html("#wfpNum",e),relistCreate.countSum();return},minus:function(a,b){var d=parseInt(c.html("#yfpNum")),e=parseInt(c.html("#wfpNum"));if(a=="")for(var f=1;f<=7;f++){var g=parseInt(c.val("#seg_"+f+"_"+b))<=0||isNaN(parseInt(c.val("#seg_"+f+"_"+b)))?0:parseInt(c.val("#seg_"+f+"_"+b));g>0&&(c.val("#seg_"+f+"_"+b,g-1),c.html("#J_ShowNum_"+f+"_"+b,g-1),g-1<=0&&(c.val("#seg_"+f+"_"+b,""),c.html("#J_ShowNum_"+f+"_"+b,"&nbsp;")),c.show("#J_ShowNum_"+f+"_"+b),e++,d--)}else if(b=="")for(var f=0;f<=23;f++){var g=parseInt(c.val("#seg_"+a+"_"+f))<=0||isNaN(parseInt(c.val("#seg_"+a+"_"+f)))?0:parseInt(c.val("#seg_"+a+"_"+f));g>0&&(c.val("#seg_"+a+"_"+f,g-1),c.html("#J_ShowNum_"+a+"_"+f,g-1),g-1<=0&&(c.val("#seg_"+a+"_"+f,""),c.html("#J_ShowNum_"+a+"_"+f,"&nbsp;")),c.show("#J_ShowNum_"+a+"_"+f),e++,d--)}c.html("#yfpNum",d),c.html("#wfpNum",e),relistCreate.countSum();return},formatInputNum:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},changeVal:function(a){var b=c.attr(a,"data"),d=c.get("#J_ShowNum_"+b),e=parseInt(c.html("#yfpNum")),g=parseInt(c.html("#wfpNum"));if(isNaN(a.value)||a.value==""||a.value<0||!relistCreate.isInteger(a.value))a.value=0;var h=a.value-f;h>g?(new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u5206\u914d\u7684\u6570\u91cf\u4e0d\u8db3\uff0c\u8bf7\u786e\u8ba4!",type:"error"}),a.value=f):(c.html("#yfpNum",e+h),c.html("#wfpNum",g-h),c.html(d,a.value),relistCreate.countSum());return},segFocus:function(a){f=Number(a.value==""?0:a.value),c.get(a).select()},inputBlur:function(a){var b=c.attr(a,"data"),d=c.get("#J_ShowNum_"+b);isNaN(a.value)||a.value==""||a.value===0||a.value=="0"||a.value<0||!relistCreate.isInteger(a.value)?(a.value="",c.html(d,"&nbsp;"),c.hide(a)):(c.html(d,a.value),c.hide(a),relistCreate.countSum()),c.show(d)},isInteger:function(a){var b=/^[-]{0,1}[0-9]{1,}$/;return b.test(a)},countSum:function(){for(var a=1;a<=7;a++){var b=0;for(var d=0;d<=23;d++)b+=isNaN(c.val("#seg_"+a+"_"+d))||c.val("#seg_"+a+"_"+d)==""||parseInt(c.val("#seg_"+a+"_"+d))<0?0:parseInt(c.val("#seg_"+a+"_"+d));c.html("#J_SumWeek"+a,b)}},saveStep3:function(){var b=parseInt(c.html("#wfpNum"));if(b>1){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u8fd8\u6709\u5b9d\u8d1d\u7b49\u5f85\u5206\u914d\uff0c\u8bf7\u786e\u8ba4!",type:"error"});return}var d=function(b){relistCreate.msg.hide(),c.removeClass(c.query(".ui-step-item"),"current"),c.addClass("#J_Step4","current");var d=c.html("#J_StepCont4");c.html("#J_StepCont",d),relistCreate.getGenerateSchedule(),relistCreate.timer=a.later(function(){relistCreate.getGenerateSchedule()},2e3,!0)},e=function(a){relistCreate.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},f=relistCreate.planIdFromUrl||c.val("#J_PlanId"),g="plan_id="+f+"&step=3&operate=preview";relistCreate.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),(new H.widget.asyncRequest).setURI(saveUrl).setMethod("POST").setHandle(d).setErrorHandle(e).setForm(J_Step3Form).setData(g).send()},stepTo5:function(){var a=parseInt(c.html("#wfpNum"));if(a>1){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u8fd8\u6709\u5b9d\u8d1d\u7b49\u5f85\u5206\u914d\uff0c\u8bf7\u786e\u8ba4!",type:"error"});return}var b=function(a){relistCreate.msg.hide(),c.removeClass(c.query(".ui-step-item"),"current"),c.addClass("#J_Step5","current");var b=c.html("#J_StepCont5");c.html("#J_StepCont",b),relistCreate.getGenerateSchedule()},d=function(a){relistCreate.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},e=relistCreate.planIdFromUrl||c.val("#J_PlanId"),f="plan_id="+e+"&step=3&operate=save";relistCreate.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),(new H.widget.asyncRequest).setURI(saveUrl).setMethod("POST").setHandle(b).setErrorHandle(d).setForm(J_Step3Form).setData(f).send()},getGenerateSchedule:function(){var a=function(a){if(a.payload.success==1){if(a.payload.percent==100){relistCreate.timer.cancel(),c.replaceClass("#J_Step4ToPreview","btm-gray","btm-orange");var b=c.html("#J_StepCont4Preview");c.html("#J_StepCont",b),relistCreate.showRelistView(),relistCreate.getPlanItems(),scroll(0,0)}var d=a.payload.percent+"%";c.css("#J_GeneratePercent","width",d),c.html("#J_GeneratePercent2",d),c.html("#J_TimeLeft",a.payload.remain)}else relistCreate.timer.cancel(),c.html("#J_StepCont",'<div class="point relative"><div class="point-w-1">'+a.desc+'&nbsp;&nbsp;<a href="#2" onclick="relistCreate.getGenerateSchedule();">\u91cd\u8bd5</a>&nbsp;&nbsp;<a href="'+indexListUrl+'">\u8fd4\u56de\u8ba1\u5212\u5217\u8868</a></div></div>')},b=function(a){relistCreate.timer.cancel(),c.html("#J_StepCont",'<div class="point relative"><div class="point-w-1">'+a.desc+'&nbsp;&nbsp;<a href="'+indexListUrl+'">\u8fd4\u56de\u8ba1\u5212\u5217\u8868</a></div></div>')},d=relistCreate.planIdFromUrl||c.val("#J_PlanId"),e="plan_id="+d;(new H.widget.asyncRequest).setURI(getGenerateScheduleUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},step4Save:function(){var a=parseInt(c.html("#wfpNum"));if(a>1){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u8fd8\u6709\u5b9d\u8d1d\u7b49\u5f85\u5206\u914d\uff0c\u8bf7\u786e\u8ba4!",type:"error"});return}var b=function(a){relistCreate.msg.hide(),c.removeClass(c.query(".ui-step-item"),"current"),c.addClass("#J_Step5","current");var b=c.html("#J_StepCont5");c.html("#J_StepCont",b)},d=function(a){relistCreate.msg.hide(),c.html("#J_StepCont",'<div class="point relative"><div class="point-w-1">'+a.desc+'&nbsp;&nbsp;<a href="#2" onclick="relistCreate.saveStep3()">\u91cd\u8bd5</a>&nbsp;&nbsp;<a href="javascript:location.reload();">\u91cd\u65b0\u521b\u5efa</a></div></div>');return},e=relistCreate.planIdFromUrl||c.val("#J_PlanId"),f="plan_id="+e+"&step=4&operate=open";relistCreate.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"}),(new H.widget.asyncRequest).setURI(saveUrl).setMethod("POST").setHandle(b).setErrorHandle(d).setData(f).send()},showRelistView:function(){var a=function(a){relistCreate.chart&&relistCreate.chart.destroy(),relistCreate.chart=new Highcharts.Chart({chart:{renderTo:"J_BaoBiao",height:400,marginBottom:60},title:{text:"\u8ba1\u5212\u4e2d\u5b9d\u8d1d\u4e0a\u67b6\u524d\u540e\u5bf9\u6bd4"},credits:{enabled:!1},legend:{floating:!0,align:"left",x:450,y:5},xAxis:{categories:a.payload.xdata,labels:{step:a.payload.xkuadu}},yAxis:[{lineWidth:1,tickWidth:1,title:{align:"high",offset:0,text:"",rotation:0,y:-10},min:0}],tooltip:{formatter:function(a){var b;return b=""+this.x+": "+this.y,b}},series:[{type:"spline",name:"\u8c03\u6574\u524d",data:a.payload.raw},{type:"spline",name:"\u8c03\u6574\u540e",data:a.payload.relist}]})},b=function(a){c.html(c.get("#J_BaoBiao"),a.desc,!0)},d=relistCreate.planIdFromUrl||c.val("#J_PlanId"),e="plan_id="+d;(new H.widget.asyncRequest).setURI(getPlanReportDatasUrl).setMethod("POST").setHandle(a).setErrorHandle(b).setData(e).send()},getPlanItems:function(){var a=function(a){c.hide("#J_RightLoading"),c.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,totalRecords>0?(c.css(c.get("#J_REmpty"),"display","none"),c.css(c.query(".J_PromotionItemBtnHolder"),"display","")):(c.css(c.get("#J_REmpty"),"display",""),c.css(c.query(".J_PromotionItemBtnHolder"),"display","none")),c.html("#J_PromotionItemList",a.payload.body);var d=Math.ceil(totalRecords/a.payload.pageNum);relistCreate.paginator2=(new b("relistCreate.paginator2")).setRender(relistCreate.handlePagination).setPageCount(d).printHtml("#J_BottomPaging",2)},d=relistCreate.planIdFromUrl||c.val("#J_PlanId"),e=c.val("#J_Step4SearchTitle");e=="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5"&&(e="");var f=c.val("#J_Step4Status"),g=c.val("#J_Step4Week"),h="plan_id="+d+"&pageSize=10"+"&status="+f+"&week="+g+"&q="+e;c.show("#J_RightLoading"),c.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getPlanItemsUrl).setMethod("POST").setHandle(a).setData(h).send()},handlePagination:function(a){pageId=a;var b=function(a){c.hide("#J_RightLoading"),c.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,totalRecords>0?(c.css(c.get("#J_REmpty"),"display","none"),c.css(c.query(".J_PromotionItemBtnHolder"),"display","")):(c.css(c.get("#J_REmpty"),"display",""),c.css(c.query(".J_PromotionItemBtnHolder"),"display","none")),c.html("#J_PromotionItemList",a.payload.body);var b=Math.ceil(totalRecords/a.payload.pageNum);relistCreate.paginator2.setPage(pageId).setPageCount(b).printHtml("#J_BottomPaging",2)},d=relistCreate.planIdFromUrl||c.val("#J_PlanId"),e=c.val("#J_Step4SearchTitle");e=="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5"&&(e="");var f=c.val("#J_Step4Status"),g=c.val("#J_Step4Week"),h="plan_id="+d+"&pageSize=10"+"&status="+f+"&week="+g+"&q="+e+"&page_id="+pageId;c.show("#J_RightLoading"),c.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getPlanItemsUrl).setMethod("POST").setHandle(b).setData(h).send()},retryPlanItem:function(a){var b=function(a){relistCreate.getPlanItems()},d=function(a){c.html("#J_StepCont",'<div class="point relative"><div class="point-w-1">'+a.desc+'&nbsp;&nbsp;<a href="#2" onclick="relistCreate.saveStep3()">\u91cd\u8bd5</a>&nbsp;&nbsp;<a href="javascript:location.reload();">\u91cd\u65b0\u521b\u5efa</a></div></div>');return},e=relistCreate.planIdFromUrl||c.val("#J_PlanId"),f="plan_id="+e+"&relist_item_id="+a;(new H.widget.asyncRequest).setURI(retryPlanItemUrl).setMethod("POST").setHandle(b).setErrorHandle(d).setData(f).send()},editorListTime:function(a){c.hide(c.get(".J_EditorListTime","#J_Promo_"+a));var b=KISSY.trim(c.val("#J_SouceListTime_"+a)),e='<div class="bianji-shijian w-170"><span class="block riqi">&nbsp;<input style="*width:135px;" type="text" readonly="readonly" id="J_ScheListDate_'+a+'" name="start_date" class="input-text input-day-2" value="'+b+'" title="\u4e0a\u67b6\u65f6\u95f4">'+"</span>"+'<span class="block clear"></span>'+'<div style=" margin:0px 2px 0px 4px; _display:inline;" class="gray-btm-h-20 w-70 fl" id="J_SaveTime_'+a+'" data="'+a+'">\u4fdd\u5b58</div><div class="gray-btm-h-20 w-70" id="J_CancelTime_'+a+'" data="'+a+'">\u53d6\u6d88</div>'+"</div>";c.html("#J_ShowEditorListTime_"+a,e),c.show("#J_ShowEditorListTime_"+a),c.hide("#J_ListTimeBox_"+a),relistCreate.Calendar("J_ScheListDate_",a),d.remove("#J_SaveTime_"+a),d.remove("#J_CancelTime_"+a),d.on("#J_SaveTime_"+a,"click",function(a){var b=c.attr(a.currentTarget,"data"),d=KISSY.trim(c.val("#J_SouceListTime_"+b)),e=KISSY.trim(c.val("#J_ScheListDate_"+b));if(d==e){c.hide("#J_ShowEditorListTime_"+b),c.hide("#J_ListTimeBox_"+b),c.show("#J_ListTimeBox_"+b);return}KISSY.later(function(){c.hide("#J_ShowEditorListTime_"+b),c.show("#J_ListTimeBox_"+b)},200,!1,null);var f=function(a){c.show("#J_ListTimeBox_"+b),relistCreate.getPlanItems()},g=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return},h="relistItemId="+b+"&scheListTime="+e+"&form_key="+FORM_KEY;(new H.widget.asyncRequest).setURI(saveScheListTimeUrl).setMethod("GET").setHandle(f).setErrorHandle(g).setData(h).send()}),d.on("#J_CancelTime_"+a,"click",function(a){var b=c.attr(a.currentTarget,"data");c.hide("#J_ShowEditorListTime_"+b),c.show("#J_ListTimeBox_"+b);return})},Calendar:function(b,d){var e=(new a.Calendar("#"+b+d,{popup:!0,triggerType:["click"],showTime:!0,date:new Date,minDate:new Date})).on("timeSelect",function(b){var e=this.id,f=this,g=new Date,h=KISSY.Date.format(b.date,"yyyy-mm-dd HH:MM:ss");h<=g?(new H.widget.msgBox({title:"\u4e0a\u67b6\u65f6\u95f4\u4e0d\u80fd\u5c0f\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9",content:o.desc,type:"error"}),relistCreate.msg.hide(!0)):(a.one("#J_ScheListDate_"+d).val(h),c.html("#J_ListTime_"+d,h),f.hide())})}}},{requires:["utils/showPages/index"]}); 