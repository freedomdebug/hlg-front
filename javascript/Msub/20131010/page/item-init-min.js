KISSY.add("page/item-init",function(a){var b=KISSY.DOM,c=a.Event;return subControl={init:function(){c.on(".J_Start","click",function(a){var c=b.attr(a.currentTarget,"data"),d=b.get("#J_ChooseRoleContent_"+c),e=b.query("#J_RoleCell_"+c+" input");for(var f=0;f<e.length;f++)b.attr(e[f],"checked")&&(b.css("#J_Btm_"+c,"display",""),b.css("#J_RoleControl_"+c,"display","none"));b.css(d,"visibility","visible")}),c.on(".J_iconDeletelink","click",function(){b.css(".J_ChooseRoleContent","visibility","hidden")}),c.on(".J_ChooseRole","click",function(a){b.val("#J_RoleId",b.val(a.currentTarget));var c=b.attr(a.currentTarget,"data");b.css("#J_Btm_"+c,"display",""),b.css("#J_RoleControl_"+c,"display","none")}),c.on(".J_Btm_cancel","click",function(a){var c=b.attr(a.currentTarget,"data");b.prop("input","checked",!1),b.val("#J_RoleId",""),b.css("#J_Btm_"+c,"display","none"),b.css("#J_RoleControl_"+c,"display","")})},UpdataRoleId:function(a){var c=b.val("#J_RoleId"),d="subId="+a+"&roleId="+c,e=function(a){window.location.href=currentUrl},f=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};(new H.widget.asyncRequest).setURI(savePermissionsUrl).setMethod("GET").setHandle(e).setErrorHandle(f).setData(d).send()}}},{requires:[]}); 