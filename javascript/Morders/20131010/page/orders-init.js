/*
combined files : 

utils/showPages/index
utils/beautifyForm/index
page/orders-init

*/
/**
 * @分页组件
 * @author  @sjs_stef
 */
KISSY.add('utils/showPages/index',function (S) {
    var DOM = S.DOM, Event = S.Event, doc = document;
  
    function showPages(name) { //初始化属性 
        var self = this; 
        if (!(self instanceof showPages)) { 
            return new showPages(name); 
        }   
        this.pageNum = 4 ;   
        this.name = name;      //对象名称
        this.page = 1;         //当前页数
        this.pageCount = 200;    //总页数
        this.argName = 'page'; //参数名    
    }

    S.mix(showPages.prototype,{
        jump: function() {
            return undefined;
        },
        
        //进行当前页数和总页数的验证
        checkPages: function() { 
            if (isNaN(parseInt(this.page))) this.page = 1;
            if (isNaN(parseInt(this.pageCount))) this.pageCount = 1;
            if (this.page < 1) this.page = 1;
            if (this.pageCount < 1) this.pageCount = 1;
            if (this.page > this.pageCount) this.page = this.pageCount;
            this.page = parseInt(this.page);
            this.pageCount = parseInt(this.pageCount);
        },
        
        //生成html代码    
        _createHtml: function(mode) { 
       
            var self = this, strHtml = '', prevPage = this.page - 1, nextPage = this.page + 1;   
            if (mode == '' || typeof(mode) == 'undefined') mode = 1;
        
            switch (mode) {
                case 1: 
                    //模式1 (页数)
                     strHtml += '<div class="page-bottom"> <div class="sabrosus">';
	   					strHtml += '<font class="number">';
	   					strHtml += '共'+this.pageCount+'页&nbsp;';
	   					strHtml += '<input style="" type="text"  class="page-input" id="pageInput' + self.name + '"  value="页码" onkeypress="return window.' + self.name + '.formatInputPage(event);" onfocus="this.className=\'page-input page-input-text-on \';if(this.value==\'页码\'){this.value = \'\';}" onblur="this.className=\'page-input\';if(this.value==\'\'){this.value = \'页码\'}">';
	   					strHtml += '<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput' + self.name + '\').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>'+this.pageCount+'){ var turnTo = '+this.pageCount+';} else{var turnTo = page;}  window.' + self.name + '.toPage(turnTo);" >';
	   					strHtml += '</font>';	
	   				    if (prevPage < 1) {
	                        strHtml += '<span class="pre-none page-pic-no"></span>';
	                    } else {
	                        strHtml += '<span title="上一页" class="pre page-pic-no" onclick="' + self.name + '.toPage(' + prevPage + ');"></span>';
	                    }
	   					if (nextPage > this.pageCount) {
	                    	strHtml += '<span class="next-none page-pic-no"></span>';
	                    } else {
	                    	strHtml += '<span title="下一页" class="next page-pic-no" onclick="' + self.name + '.toPage(' + nextPage + ');"></span>';
	                    }
	   				 strHtml += '<div style="clear:both"></div></div></div> '; 
                    break;
                                 
                    case 2: 
    					//模式2 (前后缩略,页数,首页,前页,后页,尾页)
                    	
    					if(this.pageCount > 1){
    	                    strHtml += '<div class="page-bottom"> <div class="sabrosus">';
    	                    
    	                    if (this.pageCount > 5) {
    		   					strHtml += '<font class="number">';
    		   					strHtml += '共'+this.pageCount+'页&nbsp;';
    		   					strHtml += '<input style="" type="text"  class="page-input" id="pageInput' + self.name + '"  value="页码" onkeypress="return window.' + self.name + '.formatInputPage(event);" onfocus="this.className=\'page-input page-input-text-on \';if(this.value==\'页码\'){this.value = \'\';}" onblur="this.className=\'page-input\';if(this.value==\'\'){this.value = \'页码\'}">';
    		   					strHtml += '<input type="button" value="Go" class="btm-go" onclick="javascript:var page = document.getElementById(\'pageInput' + self.name + '\').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>'+this.pageCount+'){ var turnTo = '+this.pageCount+';} else{var turnTo = page;}  window.' + self.name + '.toPage(turnTo);" >';
    		   					strHtml += '</font>';	
    	                    }
    	                    
    	                    
    	                    if (prevPage < 1) {
    	                        strHtml += '<span class="pre-none page-pic-no"></span>';
    	                    } else {
    	                        strHtml += '<span title="上一页" class="pre page-pic-no" onclick="' + self.name + '.toPage(' + prevPage + ');"></span>';
    	                    }
    	                    
    	                    if (this.page != 1) {
    							//strHtml += ' <a class="a-padding" href="javascript:' + self.name  + '.toPage(1);">1</a>';
    						}
    						if(this.page - 2<=0){
    							var start = 1;
    								if (this.pageCount > this.page + 4) {
    	                           		var endPage = this.page + 4;
    	                           } else {
    	                             	var endPage = this.pageCount; 
    	                            }
    						}else if(this.page + 2>=this.pageCount){
    							var start = this.pageCount-4;
    							if (this.pageCount > this.page + 4) {
    	                       		var endPage = this.page + 4;
    	                        } else {
    	                         	var endPage = this.pageCount; 
    	                        }
    						}else {
    							var start = this.page - 2;
    							if (this.pageCount > this.page + 2) {
    		                           		var endPage = this.page + 2;
    		                           } else {
    		                             	var endPage = this.pageCount; 
    		                             }
    						}
    	                    for (var i = start; i <= endPage; i++) {
    	                    if (i > 0) {
    	                       	if (i == this.page) {
    	                           	strHtml += '<span class="current a-padding">'+ i + '</span>';
    	                        } else {
    	                           // if (i != 1 && i != this.pageCount) {
    	                              	strHtml += '<a class="a-padding" href="javascript:' + self.name + '.toPage(' + i + ');">' + i + '</a>';
    	                           // }
    						      }
    	                    }
    	                    }
    	                    if (this.page + 5 < this.pageCount) {
    							strHtml += '<a class="a-padding" title="" href="javascript:' + self.name + '.toPage(' + (this.page + 3) + ');">...</a>';
    						}
    				  	    if (this.page != this.pageCount) {
    							//strHtml += '<span title="Page ' + this.pageCount + '"><a href="javascript:' + self.name + '.toPage(' + this.pageCount + ');">' + this.pageCount + '</a></span>';
    						}
    						if (nextPage > this.pageCount) {
    	                    	strHtml += '<span class="next-none page-pic-no"></span>';
    	                    } else {
    	                    	strHtml += '<span title="下一页" class="next page-pic-no" onclick="' + self.name + '.toPage(' + nextPage + ');"></span>';
    	                      }
    						
    						
    						
    	                   strHtml += '<div style="clear:both"></div></div></div> ';
    					}
                       break;
    			   case 3 :
    				   strHtml += '<div class="page-top"><div class="sabrosus"><span class="count">' + this.page + ' / ' + this.pageCount + '</span>';
                       if (prevPage < 1) {
                           strHtml += ' <span class="pre-none page-pic-no"></span>';
                       } else {
                           strHtml += '<a class="border-left-dedede" href="javascript:' + self.name + '.toPage(' + prevPage + ');" title="上一页"><span class="pre page-pic-no"></span></a>';
                         }
                       if (nextPage > this.pageCount) {
                       	strHtml += '<span class="next-none page-pic-no"></span>';
                       } else {
                           strHtml += '<a href="javascript:' + self.name + '.toPage(' + nextPage + ');" title="下一页"><span class="next page-pic-no"></span></a>';
                         }
                      strHtml += '<div style="clear:both"></div></div></div>';
                      break;
                    
            }
            return strHtml; 
               
        },
         //限定输入页数格式
        formatInputPage : function(e){
            var ie = navigator.appName=="Microsoft Internet Explorer"?true:false;
            if(!ie) var key = e.which;
            else var key = event.keyCode;
            if (key == 8 || key == 46 || (key >= 48 && key <= 57)) return true;
            return false;
        },
      
        //页面跳转 返回将跳转的页数
        toPage: function( page ,flag) { 
            var turnTo = 1;
            var self = this;    
            if (typeof(page) == 'object') {
                turnTo = page.options[page.selectedIndex].value;
            } else {
                turnTo = page;
              }
            
            self.jump(turnTo,flag,'');
              
        },
              
        //显示html代码
        printHtml: function(contian, mode) {  
            this.checkPages();
            DOM.html(contian,this._createHtml(mode));
            return this;
        },
                   
        //设置总页数           
        setPageCount: function( pagecount ) {
            this.pageCount=pagecount;
            return this;
        },              
        
        getPageCount: function() {
            return this.pageCount;
        },
        
        //设置跳转 执行函数
        setRender: function(fn) {
            this.jump = fn;
            return this;
        },  
        setPageNum:function(page_num){
            this.pageNum = page_num;
            return this;
         },
        setPage:function(page){
            this.page = page;  
            return this; 
        }          

               
    });

    return showPages;
  
});
/**
 * @美化按钮组件
 * @author  @sjs_stef
 */
KISSY.add('utils/beautifyForm/index',function (S) {
	var DOM = S.DOM, Event = S.Event,
	    d = document,
	    body = DOM.get('body'),
		safari = false;
		if(S.UA.safari != 'undefined' && S.UA.safari < 3){
			 safari = true;
		}
	if(S.UA.ie == 6){
		DOM.replaceClass('#J_BodyHtml','has-js','no-js');
	}	
	
	function beautifyForm(el, cfg) { //初始化属性 
	    var self = this; 
	    defaultCfg = {
	        init:true
	    };
	    if(self instanceof beautifyForm) {
	        var config = S.merge(defaultCfg, cfg);
	        self._init(el, config);
	    } else {
	        return new beautifyForm(el, cfg);
	    }
	}
	S.augment(beautifyForm,{
	    _init : function(target, cfg) {
	        var self = this;
//	        if(!target) {
//	            S.log('请输入需要渲染区域的id(_init)');
//	            return;
//	        }
	        self.renderAll(target);
	    },
	    //渲染pid下全部input，自动判断类型
	    renderAll: function(pid){
	        var self = this;
	        pid = typeof(pid) == 'undefined' ? '#J_BodyHtml': pid;
	        var al = DOM.filter (DOM.query(pid+' input'),function(i){if(i.type =='checkbox' || i.type =='radio')return true;});
//	        if(al.length < 1){
//	            S.log('此id下没有input(renderAll)');
//	            return;                
//	        }
//	        DOM.hasClass(body,'has-js') ? '' : DOM.addClass(body,'has-js');
	        for (var h = al.length - 1; h >= 0; h--) {
	            self.renderInput(al[h]);
	        };
	    },
	    //渲染单个input，自动判断类型
	    renderInput: function(id){
	        var self = this;
	        var i = DOM.get(id);
//	        var l = DOM.parent(i,'label') || DOM.parent(i,'span');
	        var l = DOM.parent(i);
	        if (l.tagName.toUpperCase() == 'LABEL' && l.className.indexOf('beautify_') > -1) {
	            if (l.className == 'beautify_check') {
	                self.renderCheckbox(i);
	            }else if (l.className == 'beautify_radio') {
	                self.renderRadio(i);
	            };
	        }else if(l.tagName.toUpperCase() == 'SPAN'){
	            if (DOM.hasClass(i,'beautify_input')) {
	                self.renderCheckPro(i);
	            }
	        }
	    },
	    //渲染pid下全部 高级选择框
	    renderAllCheckPro: function(pid){
	        var self = this;
	        var al = DOM.filter (DOM.query(pid+' input'),function(i){if((i.type =='checkbox' || i.type =='radio') && DOM.hasClass(i,'beautify_input'))return true;});
	        if(al.length < 1){
//	            S.log('此id下没有input(renderAllCheckPro)');
	            return;                
	        }
	        for (var h = al.length - 1; h >= 0; h--) {
	            self.renderCheckPro(al[h]);
	        };
	    },
	    //渲染pid下全部checkbox
	    renderAllCheckbox: function(pid){
	        var self = this;
	        var al = DOM.filter (DOM.query(pid+' input'),function(i){if(i.type =='checkbox')return true;});
	        if(al.length < 1){
	            S.log('此id下没有input(renderAllCheckbox)');
	            return;                
	        }
	        for (var h = al.length - 1; h >= 0; h--) {
	            self.renderCheckbox(al[h]);
	        };
	    },
	    //渲染pid下全部radio
	    renderAllRadio: function(pid){
	        var self = this;
	        var al = DOM.filter (DOM.query(pid+' input'),function(i){if(i.type =='radio')return true;});
	        if(al.length < 1){
	            S.log('此id下没有input(renderAllRadio)');
	            return;                
	        }
	        for (var h = al.length - 1; h >= 0; h--) {
	            self.renderRadio(al[h]);
	        };
	    },
	    //渲染单个高级选择框
	    renderCheckPro: function(id){
	        var self = this;
	        var i = DOM.get(id);
	        var isCheckbox = DOM.prop(i,"type") == "checkbox";
	        var l = DOM.parent(i,'label') || DOM.parent(i,'span');
	        if (!DOM.hasClass(i,'beautify_input')) {
	            S.log('input必须有class=”beautify_input“(renderCheckPro)');
	            return;
	        }
	        if(isCheckbox){
	        	if(safari && i.checked == true || i.checked){
	        		DOM.removeClass(l,'radio-checkoff-span');
	        		DOM.addClass(l,'radio-checkon-span');
	        		DOM.addClass(DOM.parent(l),'radio-checkstyle');
	        	}else{
	        		DOM.removeClass(l,'radio-checkon-span');
	        		DOM.addClass(l,'radio-checkoff-span');
	        		DOM.removeClass(DOM.parent(l),'radio-checkstyle');
	        	}
	        }else{
	        	if(safari && i.checked == true || i.checked){
	        		DOM.removeClass(l,'beautify_radio_off');
	        		DOM.addClass(l,'beautify_radio_on');
	        		DOM.addClass(DOM.parent(l),'radio-checkstyle');
	        	}else{
	        		DOM.removeClass(l,'beautify_radio_on');
	        		DOM.addClass(l,'beautify_radio_off');
	        		DOM.removeClass(DOM.parent(l),'radio-checkstyle');
	        	}
	        }
	        Event.on(l,'click',function(e){
	        	e.stopPropagation();
                if(e.target.tagName.toUpperCase() == 'LABEL'){
                	return ;
                }else{
                	 self.toggleCheckPro(i);
                }
	        })
	    },
	    //渲染单个checkbox
	    renderCheckbox: function(id){
	        var self = this;
	        var i = DOM.get(id);
	        var l = DOM.parent(i,'label') || DOM.parent(i,'span');
	        if (!DOM.hasClass(l,'beautify_check')) {
//	            S.log('input的父级标签应为”beautify_check“(renderCheckbox)');
	            return;
	        }
	        DOM.append(DOM.create('<i>&nbsp;</i>'),l);
	        if(i.disabled == true){
	            if(safari && i.checked == true || i.checked){
	                l.className = 'beautify_check c_on_disable';
	            }else{
	                l.className = 'beautify_check beautify_check_disable';
	            }
	        }else {
	            if(safari && i.checked == true || i.checked){
	                l.className = 'beautify_check c_on';
	            }else{
	                l.className = 'beautify_check c_off';
	            }
	            Event.on(l,'click',function(e){
	            	e.stopPropagation();
	                if(e.target.tagName.toUpperCase() == 'LABEL'){
	                	return ;
	                }else{
	                	 self.toggleCheckbox(i);
	                }
	            })
	        }
	    },
	    //渲染单个radio
	    renderRadio: function(id){
	        var self = this;
	        var i = DOM.get(id);
	        var l = DOM.parent(i,'label') || DOM.parent(i,'span');
	        if (!DOM.hasClass(l,'beautify_radio')) {
//	            S.log('input的父级标签应为”beautify_radio“(renderRadio)');
	            return;
	        }
	        DOM.append(DOM.create('<i>&nbsp;</i>'),l);
	        if(i.disabled == true){
	            if(safari && i.checked == true || i.checked){
	                l.className = 'beautify_radio r_on_disable';
	            }else{
	                l.className = 'beautify_radio beautify_radio_disable';
	            }
	        }else {
	            if(safari && i.checked == true || i.checked){
	                l.className = 'beautify_radio r_on';
	            }else{
	                l.className = 'beautify_radio r_off';
	            }
	            Event.on(l,'click',function(e){
	            	e.stopPropagation();
	                if(e.target.tagName.toUpperCase() == 'LABEL'){
	                	return ;
	                }else{
	                	 self.toggleRadio(i);
	                }
	            })
	        }
	    },
	    // checkbox单个设置为选中
	    setCheckboxOn: function(id) {
	        var i = DOM.get(id);
	        var l = DOM.parent(i,'label');
	        l.className = 'beautify_check c_on';
	        i.checked = true;
	    },
	    // checkbox单个设置为未选中
	    setCheckboxOff: function(id) {
	        var i = DOM.get(id);
	        var l = DOM.parent(i,'label');
	        l.className = 'beautify_check c_off';
	        i.checked = false;
	    },
	    // checkbox单个设置为选中 disabled 状态
	    setCheckboxDisabled: function(id) {
	        var i = DOM.get(id);
	        var l = DOM.parent(i,'label');
            if(safari && i.checked == true || i.checked){
                l.className = 'beautify_check c_on_disable';
            }else{
                l.className = 'beautify_check beautify_check_disable';
            }
	        i.disabled = true;
	    },
	    // checkbox单个设置为选中 disabled 状态
	    setCheckboxNoDisabled: function(id) {
	        var i = DOM.get(id);
	        var l = DOM.parent(i,'label');
	        if(safari && i.checked == true || i.checked){
                l.className = 'beautify_check c_on_disable';
            }else{
                l.className = 'beautify_check beautify_check_disable';
            }
	        i.disabled = false;
	    },
	    // checkbox切换
	    toggleCheckbox: function(id) {
	        var i = DOM.get(id);
	        var l = DOM.parent(i,'label');
	        if (l.className == 'beautify_check c_off') {
	            if(l.className == 'beautify_check c_on_disable'){
	                l.className = 'beautify_check c_on_disable';
	            }else{
	                l.className = 'beautify_check c_on';
	            }
	            if (safari){i.click();}
	        }else if(l.className == 'beautify_check c_on_disable'){
	            l.className = 'beautify_check c_on_disable';
	            if (safari) i.click();
	        }else if(l.className == 'beautify_check beautify_check_disable'){
	            l.className = 'beautify_check beautify_check_disable';
	            if (safari) i.click();
	        }else {
	            l.className = 'beautify_check c_off';
	            if (safari) i.click();
	        };
	    },
	    // radio切换
	    toggleRadio: function(id) {
	        var i = DOM.get(id);
	        var iName = DOM.attr(i,'name');
	        var l = DOM.parent(i,'label');
	        if (l.className == 'beautify_radio r_off' || i.checked) {
	            var ls = DOM.filter (DOM.query('input'),function(i){if(i.type =='radio')return true;});
	            // var ls = DOM.siblings(l);
	            for (var j = 0; j < ls.length; j++) {
	                var li =  DOM.parent(ls[j]);
	                //var lii = DOM.children(ls[j],'input');
	                //console.log(li);
	                if (li.className.indexOf('beautify_radio') == -1)  continue;
	                if (DOM.attr(ls[j],'name') !== iName)  continue;
	                li.className = 'beautify_radio r_off';
	            };
	            l.className = 'beautify_radio r_on';
	            if (safari) i.click();
	        }else if(l.className == 'beautify_radio beautify_radio_disable'){
	            l.className = 'beautify_radio beautify_radio_disable';
	            if (safari) i.click();
	        }else {
	            l.className = 'beautify_radio r_off';
	            if (safari) i.click();
	        };
	    },
	    // 普通radio切换
	    setRadioOn: function(id) {
	        var i = DOM.get(id);
	        var iName = DOM.attr(i,'name');
	        var l = DOM.parent(i,'label');
	        if (l.className == 'beautify_radio r_off' || i.checked) {
	            var ls = DOM.filter (DOM.query('input'),function(i){if(i.type =='radio')return true;});
	            for (var j = 0; j < ls.length; j++) {
	                var li =  DOM.parent(ls[j]);
	                if (li.className.indexOf('beautify_radio') == -1)  continue;
	                if (DOM.attr(ls[j],'name') !== iName)  continue;
	                li.className = 'beautify_radio r_off';
	            };
	            l.className = 'beautify_radio r_on';
	            i.checked = true;
	        };
	    },
	    // 高级选择框切换
	    toggleCheckPro: function(id) {
	        var i = DOM.get(id);
	        var isCheckbox = DOM.prop(i,"type") == "checkbox";
	        var iName = DOM.attr(i,'name');
	        var l = DOM.parent(id,'span');
	        if(isCheckbox){
		        if (DOM.hasClass(l,'radio-checkon-span')) {
		           DOM.removeClass(DOM.parent(l),'radio-checkstyle');
		           DOM.removeClass(l,'radio-checkon-span');
		           if (!DOM.hasClass(l,'radio-checkoff-span')){
		                DOM.addClass(l,'radio-checkoff-span');
		           };
		        }else{
		           DOM.addClass(DOM.parent(l),'radio-checkstyle');
		           DOM.toggleClass(l,'radio-checkon-span','radio-checkoff-span');
		        }
	        }else{
	        	if(DOM.hasClass(l,'beautify_radio_off')){
	        		var ls = DOM.filter (DOM.query('.beautify_input'),function(i){if(i.type =='radio')return true;});
		            for (var i = 0; i < ls.length; i++) {
		                var li = ls[i];
		                var lip = DOM.parent(ls[i]);
		                if (li.className.indexOf('beautify_input') == -1)  continue;
		                if (DOM.attr(li,'name') !== iName)  continue;
		                lip.className = 'beautify_radio_off';
		                DOM.removeClass(DOM.parent(lip),'radio-checkstyle');
		            };
		            DOM.addClass(DOM.parent(l),'radio-checkstyle');
		            l.className = 'beautify_radio_on';
		            if (safari) i.click();
	        	}else{
	        		DOM.addClass(DOM.parent(l),'radio-checkstyle');
		            l.className = 'beautify_radio_on';
		            if (safari) i.click();
	        	}
	        }
	    },
	    // 高级radio切换
	    setRadioPro: function(id) {
	    	  var i = DOM.get(id);
		      var iName = DOM.attr(i,'name');
		      var l = DOM.parent(id,'span');
    		  var ls = DOM.filter (DOM.query('.beautify_input'),function(i){if(i.type =='radio')return true;});
              for (var i = 0; i < ls.length; i++) {
	                var li = ls[i];
	                var lip = DOM.parent(ls[i]);
	                if (li.className.indexOf('beautify_input') == -1)  continue;
	                if (DOM.attr(li,'name') !== iName)  continue;
	                lip.className = 'beautify_radio_off';
	                DOM.removeClass(DOM.parent(lip),'radio-checkstyle');
	             };
	         DOM.addClass(DOM.parent(l),'radio-checkstyle');
             l.className = 'beautify_radio_on';
             DOM.get(id).checked = true;
	    },
	    // 高级radio设置为未选中
	    setRadioProOff: function(id) {
	    	  var i = DOM.get(id);
		      var iName = DOM.attr(i,'name');
		      var l = DOM.parent(id,'span');
    		  var ls = DOM.filter (DOM.query('.beautify_input'),function(i){if(i.type =='radio')return true;});
              for (var i = 0; i < ls.length; i++) {
	                var li = ls[i];
	                var lip = DOM.parent(ls[i]);
	                if (li.className.indexOf('beautify_input') == -1)  continue;
	                if (DOM.attr(li,'name') !== iName)  continue;
	                lip.className = 'beautify_radio_on';
	             };
             l.className = 'beautify_radio_off';
             DOM.get(id).checked = false;
	    },
	    // 高级checkbox on单个设置为选中
	    setCheckboxProOn: function(id) {
	    	  var i = DOM.get(id);
		        var iName = DOM.attr(i,'name');
		        var l = DOM.parent(id,'span');
		        DOM.addClass(DOM.parent(l),'radio-checkstyle');
		        DOM.toggleClass(l,'radio-checkon-span','radio-checkoff-span');
	            DOM.get(id).checked = true;
	    },
	    // 高级checkbox on单个设置为未选中
	    setCheckboxProOff: function(id) {
	    	  var i = DOM.get(id);
		        var iName = DOM.attr(i,'name');
		        var l = DOM.parent(id,'span');
	           DOM.removeClass(DOM.parent(l),'radio-checkstyle');
	           DOM.removeClass(l,'radio-checkon-span');
	           if (!DOM.hasClass(l,'radio-checkoff-span')){
	                DOM.addClass(l,'radio-checkoff-span');
	           };
	           DOM.get(id).checked = false;
	    }
	});
	return beautifyForm;
});
/**
 * @fileOverview 
 * @author  
 */
KISSY.add('page/orders-init',function (S,showPages,O,LinkSelect,Select,Overlay,Calendar,Tooltip,beautifyForm) {
    // your code here
	var DOM = S.DOM, Event = S.Event;	
	
	return ordersControl = {
	    	paginator : null,
	    	msg : null,
			handlePagination :null,
	    	isFisrst : true,
	    	panel : null,
	    	panel2 : null,
	    	panel3 : null,
	    	panel4 : null,
	    	panel5 : null,
	    	init : function() {
                ordersControl.searchTbItems();
				var $=S.all;
				var a = new LinkSelect(["#s1","#s2","#s3"],tdist, {
	            	defval: {
						text: "全部地区", val: "0"
				 	},
					rootid: 1 //根节点的ID，默认为0
				});
				//
				Event.on('.ui-step-item','click',function(ev){
					if(DOM.attr(ev.currentTarget,'data') == 0){
						DOM.show('.bottom-step');
						DOM.show('.main-contenter-1');
						DOM.hide('.main-contenter-3');
						ordersControl.searchTbItems();
						
					}else if(DOM.attr(ev.currentTarget,'data') == 2){
						DOM.hide('.main-contenter-1');
						DOM.hide('.bottom-step');
						DOM.show('.main-contenter-3');
						
					}
					if(DOM.hasClass(ev.currentTarget,'current')){
						
					}else{
						DOM.removeClass(DOM.query('.ui-step-item'),'current')
						DOM.addClass(ev.currentTarget,'current');
					}
				})
				Event.on('#J_Search','click',function(){
					ordersControl.searchTbItems();
				})
				// 快递公司添加/管理
				Event.remove('.J_Manage')
				Event.on('.J_Manage','click',function(){
					ordersControl.manage();
				})	
				//快递公司
				Event.delegate(document,'click','.simple',function(ev){
					if(DOM.hasClass(ev.currentTarget,'ex-current')){
						
					}else{
						DOM.removeClass(DOM.query('#J_Sinple a'),'ex-current')
						DOM.addClass(ev.currentTarget,'ex-current');
					}
					var html = DOM.html(ev.currentTarget);
					ordersControl.changeExpress(html);
				})
				
				//详情
				Event.delegate(document,'click','.details',function(ev){
					var name = DOM.attr(ev.currentTarget,'data');
					ordersControl.details(name);
				})	
					
				/*Event.delegate(document,'click','.J_CheckBox',function(ev){
					if(DOM.attr(ev.currentTarget,'checked')){
						DOM.addClass(ev.currentTarget,'checked')
					}else{
						DOM.removeClass(ev.currentTarget,'checked')
					}
					checkBoxs = DOM.query("#J_TbItemList .J_CheckBox");
					var len = checkBoxs.length;
					checked = DOM.query("#J_TbItemList .checked");
					var length = checked.length;	
					if(len == length){
						DOM.attr('.J_CheckedAll','checked','checked')
					}else if(length < len){
						DOM.attr('.J_CheckedAll','checked',false)
					}
				})*/
				Event.on('.printFile','click',function(ev){
					if(DOM.attr(ev.currentTarget,'title') == 0){
						DOM.show('#J_Arrival');
						DOM.show('#OrdersPrint');
						DOM.html('#J_Arrival','是否可达');
						DOM.attr('.J_CheckedAll','checked',false);
					}else{
						DOM.html('#J_Arrival','&nbsp;');
						DOM.hide('#OrdersPrint');
						DOM.attr('.J_CheckedAll','checked',false);
					}
					if(DOM.hasClass(ev.currentTarget,'p-current')){
						
					}else{
						DOM.removeClass(DOM.query('.printFile'),'p-current')
						DOM.addClass(ev.currentTarget,'p-current');
					}
				})		
				
				Event.delegate(document,'click','#J_SenderForm',function(){
					ordersControl.senderSave();
					ordersControl.panel3.hide();
				})	
				
						
				
				
				
				
				ordersControl.Form = new beautifyForm();
			  
				var items = [
				    {text:'全部',value:'2'},
	 	         	{text:'未打印',value:'0'},
	 	        	{text:'已打印',value:'1'},
	 	      	],
	 	       	select = new Select.Select({  
	 	       		render:'#J_IsprintItem',
	 	       		valueField:'#J_Isprint',
	 	       		items:items
	 	     	});
		 	 	select.render();
		 	  	select.on('change', function(ev){
		 	  		ordersControl.searchTbItems();
		 	  	});
		 	  	select.setSelectedValue('2');
		 	  	//时间区间
				var datepicker = new Calendar.DatePicker({
    	              trigger:'#J_startDate',
    	              showTime:true,
    	              autoRender : true,
    	              autoSetValue :false,
    	              textField  : '2'
    	      	});
    	         var datepicker2 = new Calendar.DatePicker({
    	              trigger:'#J_endDate',
    	              showTime:true,
    	              autoRender : true,
    	              autoSetValue :false,
    	              textField  : '2'
    	     	});
    	         
    	        datepicker.on('selectedchange',function (e) {
    	        	 	var endDate = H.util.stringToDate(S.one('#J_endDate').val());
						var startDate   = e.value;
						if((endDate !='')&&(startDate.getTime() >= endDate.getTime()))
						{
							new H.widget.msgBox({
								    title:"错误提示",
								    content:'开始时间不能大于结束时间，请重新选择',
								    type:"info"
								});
							//S.one('#J_startDate').val('');
						}else{
							S.one('#J_startDate').val(e.text);
						}
    	      	});
    	        datepicker2.on('selectedchange',function (e) {
		     	       	var endDate   =  e.value;
						var startTime = H.util.stringToDate(S.one('#J_startDate').val());
						var endTime = H.util.stringToDate(endDate);
						if((endTime.getTime() <= startTime.getTime())&&(startTime !='')){
							new H.widget.msgBox({
								    title:"错误提示",
								    content:'结束时间不能小于开始时间，请重新选择',
								    type:"info"
								});
							//S.one('#J_endDate').val('');
						}else{
							S.one('#J_endDate').val(e.text);
						}
    	        });
		 	  	
		 	  	
		 	  	//已发货 start
		 	  	var AlreadyItems = [
		 	  	    {text:'全部状态',value:'0'},
		 	  	    {text:'运送途中',value:'1'},
		 	  	    {text:'已签收',value:'2'},
		 	  	    {text:'已评价',value:'2'}
		 		],
		 		AlreadyStatus = new Select.Select({  
		 			render:'#J_AlreadyStatusItem',
		 			valueField:'#J_AlreadyStatus',
		 			items:AlreadyItems
		 		});
		 	  	AlreadyStatus.render();
		 	  	AlreadyStatus.on('change', function(ev){
		 			//ordersControl.searchTbItems();
		 		});
		 	  	AlreadyStatus.setSelectedValue('0');
		 	  	
		 	  	//时间区间
				var datepicker3 = new Calendar.DatePicker({
    	              trigger:'#J_AlreadystartDate',
    	              showTime:true,
    	              autoRender : true,
    	              autoSetValue :false,
    	              textField  : '2'
    	      	});
    	         var datepicker4 = new Calendar.DatePicker({
    	              trigger:'#J_AlreadyendDate',
    	              showTime:true,
    	              autoRender : true,
    	              autoSetValue :false,
    	              textField  : '2'
    	     	});
    	         
    	         datepicker3.on('selectedchange',function (e) {
    	        	 	var endDate = H.util.stringToDate(S.one('#J_AlreadyendDate').val());
						var startDate   = e.value;
						if((endDate !='')&&(startDate.getTime() >= endDate.getTime()))
						{
							new H.widget.msgBox({
								    title:"错误提示",
								    content:'开始时间不能大于结束时间，请重新选择',
								    type:"info"
								});
							//S.one('#J_startDate').val('');
						}else{
							S.one('#J_AlreadystartDate').val(e.text);
						}
    	      	});
    	         datepicker4.on('selectedchange',function (e) {
		     	       	var endDate   =  e.value;
						var startTime = H.util.stringToDate(S.one('#J_AlreadystartDate').val());
						var endTime = H.util.stringToDate(endDate);
						if((endTime.getTime() <= startTime.getTime())&&(startTime !='')){
							new H.widget.msgBox({
								    title:"错误提示",
								    content:'结束时间不能小于开始时间，请重新选择',
								    type:"info"
								});
							//S.one('#J_endDate').val('');
						}else{
							S.one('#J_AlreadyendDate').val(e.text);
						}
    	        });
    	        Event.delegate(document,'mouseover','.J_detailHelp',function(ev){
						var detail_id = DOM.attr(ev.currentTarget,'data');
						var data_desc=DOM.attr(ev.currentTarget,'data-desc');
						var data_date=DOM.attr(ev.currentTarget,'data-date');
						//提示框
						if(!ordersControl.tooltip){
							ordersControl.tooltip = new Tooltip.Tip({
								 trigger : '#J_detailHelp_'+detail_id,
								 alignType : 'top',
								 offset : 10,
								 elCls : 'ui-tip',
								 title : '<div class="time_pop">'+
								 '<ul>'+
				                   '<li class="fon-clor">'+data_date+'</li>'+
				                   '<li>'+data_desc+'</li>'+
				                 '</ul>'+
			               '</div>'
							 }).render() 
						}
						
			 	});
    	         
    	       
    	         
    	         
    	         
    	         
		 	  	
    	        Event.on(DOM.query('.J_Tiger'),'mouseenter mouseleave',function(ev){
   	        	  	if(ev.type == 'mouseenter'){
   	        	  		DOM.addClass(ev.currentTarget,'current');
   	        	  	}else{
   	        	  		DOM.removeClass(ev.currentTarget,'current');
   	        	  	}
   	          	})
   	          	Event.on(DOM.query('.J_Page'),'click',function(ev){
   	          		var v = DOM.attr(ev.currentTarget,'data');		
   	          			DOM.removeClass(DOM.query('#J_TopLeft .J_Page'),'active');
   	          			DOM.addClass(ev.currentTarget,'active');
	 					DOM.html(DOM.get('#J_TopLeft .value'),v);
	 					DOM.val('#J_SelectItemPage',v);
	 					ordersControl.searchTbItems();
   	          	})
   	          	Event.on("#J_RightBottonCheckAll", "click", ordersControl.checkAll);
    	        // 编辑input
				Event.delegate(document,'click','.J_EditTiger',function(ev){
					var p =DOM.parent(ev.currentTarget);
					DOM.addClass(p,'hover');
					DOM.get('input',p).focus();
				})
				// 失去焦点
				Event.delegate(document,'focusout','.J_ExpressNum',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					KISSY.later(function(){
						DOM.removeClass('#J_ExpressNumBox_'+id,'hover');
			 		},200,false,null);
				})
				Event.delegate(document,'focusout','.J_Address',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					KISSY.later(function(){
						DOM.removeClass('#J_AddressBox_'+id,'hover');
			 		},200,false,null);
				})
				Event.delegate(document,'focusout','.J_BuyerBZ',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					KISSY.later(function(){
						DOM.removeClass('#J_BuyerBZBox_'+id,'hover');
			 		},200,false,null);
				})
				Event.delegate(document,'focusout','.J_SellererBZ',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					KISSY.later(function(){
						DOM.removeClass('#J_SellererBZBox_'+id,'hover');
			 		},200,false,null);
				})
				// 收件人地址
				Event.delegate(document,'click','.J_AddressSubmit',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					var title = DOM.val('#J_Address_'+id);
					var submitHandle = function(o) {
						new H.widget.msgBox({ 
					 		type: "sucess", 
					 		content: "修改成功",
							dialogType:"msg", 
							autoClose:true, 
							timeOut:3000
						});
						DOM.val('#J_Address'+id,title);
						DOM.html(DOM.get('#J_AddressBox_'+id+' .J_Name'),title);
					};
					var otitle = DOM.val('#J_Address'+id);
					if(otitle == title){
						return ;
					}
					var data = "item_id="+id+"&item_number="+title;
					new H.widget.asyncRequest().setURI().setMethod("GET").setHandle(submitHandle).setData(data).send();
				})
				// 修改快递单号
				Event.delegate(document,'click','.J_ExpressNumSubmit',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					var title = DOM.val('#J_ExpressNum_'+id);
					DOM.html('#J_ExpressNumBox_'+id+' .J_Name',title);
					var submitHandle = function(o) {
							new H.widget.msgBox({ 
					 			type: "sucess", 
					 			content: "修改成功",
								dialogType:"msg", 
								autoClose:true, 
								timeOut:3000
							});
						DOM.val('#J_ExpressNum'+id,title);
						DOM.html(DOM.get('#J_ExpressNumBox_'+id+' .J_Name'),title);
					};
					var errorHandle = function(o){
						new H.widget.msgBox({
							title:"错误提示",
							content:o.desc,
							 type:"error"
						});
					};	
					var otitle = DOM.val('#J_ExpressNum'+id);
					if(otitle == title){
						return ;
					}
					var data = "item_id="+id+"&num="+title;
	        	    new H.widget.asyncRequest().setURI().setMethod("GET").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
				});
				// 买家留言
				Event.delegate(document,'click','.J_BuyerBZSubmit',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					var title = DOM.val('#J_BuyerBZ_'+id);
					var submitHandle = function(o) {
							new H.widget.msgBox({ 
					 			type: "sucess", 
					 			content: "修改成功",
								dialogType:"msg", 
								autoClose:true, 
								timeOut:3000
							});
						DOM.val('#J_BuyerBZ'+id,title);
						DOM.html(DOM.get('#J_BuyerBZBox_'+id+' .J_Name'),title);
					};
					var otitle = DOM.val('#J_BuyerBZ'+id);
					if(otitle == title){
						return ;
					}
					var data = "item_id="+id+"&num="+title;
	        	    new H.widget.asyncRequest().setURI().setMethod("GET").setHandle(submitHandle).setData(data).send();
				});
				// 卖家留言
				Event.delegate(document,'click','.J_SellererBZSubmit',function(ev){
					var id = DOM.attr(ev.currentTarget,'data');
					var title = DOM.val('#J_SellererBZ_'+id);
					var submitHandle = function(o) {
							new H.widget.msgBox({ 
					 			type: "sucess", 
					 			content: "修改成功",
								dialogType:"msg", 
								autoClose:true, 
								timeOut:3000
							});
						DOM.val('#J_SellererBZ'+id,title);
						DOM.html(DOM.get('#J_SellererBZBox_'+id+' .J_Name'),title);
					};
					var otitle = DOM.val('#J_SellererBZ'+id);
					if(otitle == title){
						return ;
					}
					var data = "item_id="+id+"&num="+title;
	        	    new H.widget.asyncRequest().setURI().setMethod("GET").setHandle(submitHandle).setData(data).send();
				});
				//展示更多操作
				Event.delegate(document,'mouseenter mouseleave','.J_downIcon2',function(ev){
					 var downMore = S.one('#J_downMore2');
					 var display = downMore.css('display');	
					 if(ev.type == 'mouseenter'){
						 downMore.slideDown(0.2);
					 }else{
						 downMore.hide();
					 }
				})
				
				//展示活动列表更多操作
				Event.delegate(document,'mouseenter mouseleave','.J_downIcon',function(ev){
					 var id = DOM.attr(ev.currentTarget,'pid');
					 var downMore = S.one('#J_downMore'+id);
					 var display = downMore.css('display');	
					 if(ev.type == 'mouseenter'){
						 downMore.slideDown(0.2);
					 }else{
						 downMore.hide();
					 }
				})
				
				Event.on('.J_PrintOrders','click',function(ev){
					var data = DOM.attr(ev.currentTarget,'data');
					DOM.val('#J_PrintData',data);
  					checked = DOM.query("#J_TbItemList .c_on");
					var length = checked.length;
					if(DOM.html('.ex-current') == undefined){
						new H.widget.msgBox({
						    title:"提示",
						    content:'请选择快递',
						    type:"error"
						});
					}else if(length == 0){
						new H.widget.msgBox({
						    title:"提示",
						    content:'请至少选择一条订单',
						    type:"error"
						});
					}else{
						ordersControl.ordersPrint(data);
						DOM.val('#J_PageNum',DOM.val('#J_PageSize'))
					}
				})
				//批量设置快递单号
				Event.on('#J_BatchSet','click',function(){
					checked = DOM.query("#J_TbItemList .c_on");
					var length = checked.length;
					if(length == 0){
						new H.widget.msgBox({
						    title:"提示",
						    content:'请至少选择一条订单',
						    type:"error"
						});
					}else{
						ordersControl.batchSet();
					}
				})
				//发货
				Event.on('#J_Delivery','click',function(){
					checked = DOM.query("#J_TbItemList .c_on");
					var length = checked.length;
					if(length == 0){
						new H.widget.msgBox({
						    title:"提示",
						    content:'请至少选择一条订单',
						    type:"error"
						});
					}else{
						ordersControl.deliver();
					}					
				})		
				
	        },
	        batchSet : function(){
	        	var submitHandle = function(o) {
					if(!ordersControl.panel4){
						ordersControl.panel4 = new Overlay.Dialog({
						      width: 450,
						      title: '批量设置快递信息',
						      bodyContent: '',
						      mask: true,
						      align: {
						          points: ['cc', 'cc']
						      },
						      buttons:[
							           {
							        	   text:'确定',
							        	   elCls : 'bui-button bui-button-primary',
							        	   handler : function(){
							        	   		ordersControl.batchNum();
							        	   		this.hide();
		 						     	   		
	 						     	       }
	 						     	    },{
	 						     	    	text:'取消',
	 						     	   	    elCls : 'bui-button',
	 						     	   	    handler : function(){
	 						     	       		this.hide();
	 						     	                       	
	 						     	    	}
	 						     	    }
	 							],
						      closable :true,
						      draggable: true,
						      aria:true
						  });
		        	}
					var cont = '<div><ul class="ui-about-list" style="overflow:hidden">'
					+'<li>'
					+'<div class="ui-side-list">快递:</div>'
					+'<div class="ui-content-list">'
					+o.payload.body
					+'</div>'
					+'</li>'
					+'<li>'
					+'<div class="ui-side-list">起始单号:</div>'
					+'<div class="ui-content-list"><input type="text" class="w-200 input-text-2" value="" name="expressId" id="J_ExpressNum"></div>'
					+'</li>'
					+'<li>'
					+'<div class="ui-side-list">规则:</div>'
					+'<div class="ui-content-list">依次递增</div><div class="fl ml6 input-text"><input type="text" class="w-100 input-text-2" value="1" name="regex" id="J_Regex"></div>'
					+'</li>'
					+'</ul>';
					ordersControl.panel4.set('bodyContent',cont);
					ordersControl.panel4.show();
					
				};
        	    var errorHandle = function(o){
					new H.widget.msgBox({
					    title:"错误提示",
					    content:o.desc,
					    type:"error"
					});
        	    };
				var listCompanies = 1; 
				var data = "listCompanies="+listCompanies;				
        	    new H.widget.asyncRequest().setURI(loadManageUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },
	        batchNum : function(){
	        	var submitHandle = function(o) {
	        		ordersControl.renderItems(o.payload.body);
	        	};
        	    var errorHandle = function(o){
					new H.widget.msgBox({
					    title:"错误提示",
					    content:o.desc,
					    type:"error"
					});
        	    };
				var checked = DOM.query("#J_TbItemList .c_on");
				var length = checked.length;
				var json = [];
        	    for(i=0; i<length; i++){ 
        	    	var id = DOM.attr(checked[i],'value')
					var o = '{"tid":"' + id + '"}';
					o = eval('(' + o + ')');	
					json.push(o);
        	    }
				var itemsJson = KISSY.JSON.stringify(json);        	    
				var expressId = DOM.val('#J_ExpressNum');
				var logisticCompany = DOM.val('#J_Express');
				var regex = DOM.val('#J_Regex');
				var data = "logisticCompany="+logisticCompany+"&expressId="+expressId+"&regex="+regex+"&tids="+itemsJson;				
        	    new H.widget.asyncRequest().setURI(deliveryUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },	      
	        deliver : function() {
  				var submitHandle = function(o) {

				};
				var errorHandle = function(o){
					new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
					});
				};	  
				var json = [];
				var checked = DOM.query("#J_TbItemList .c_on");
				var length = checked.length;
				for(i=0; i<length; i++){
					var expressId = DOM.attr(DOM.parent(checked[i]),'data');
					var logisticCompany = DOM.attr(DOM.parent(checked[i]),'value'); 
					var tid = DOM.attr(checked[i],'value'); 
					var o = '{"expressId":"' + expressId + '","tid":"' + tid + '","logisticCompany":"' + logisticCompany + '"}';
					o = eval('(' + o + ')');						
					json.push(o);
				}
				var itemsJson = KISSY.JSON.stringify(json);
				var data = "delivers="+itemsJson;
				new H.widget.asyncRequest().setURI(deliveryUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
			},	  
	        ordersPrint :function(value){
  				var submitHandle = function(o) {
  					if(!ordersControl.panel){
	  					ordersControl.panel = new Overlay.Dialog({
						      width: 450,
						      title: '打印快递单',
						      bodyContent:'',
						      mask: true,
						      align: {
						          points: ['cc', 'cc']
						      },
						      buttons:[
						           {
						        	   text:'打印',
						        	   elCls : 'bui-button bui-button-primary',
						        	   handler : function(){
	 						     	   		this.hide();
	 						     	   		ordersControl.printValue();
	 						     	   		//DOM.val('#J_PagSizeList',DOM.val('#PagSizeList'))
 						     	       }
 						     	    },{
 						     	    	text:'取消',
 						     	   	    elCls : 'bui-button',
 						     	   	    handler : function(){
 						     	       		this.hide();
 						     	                       	
 						     	    	}
 						     	    }
 						     ],
						      closable :true,
						      draggable: true,
						      aria:true
	  				 	});
  					}
  					if(value == 0){
  						ordersControl.panel.set('title','打印快递单');
  					}else{
  						ordersControl.panel.set('title','打印发货单');
  					}
  					ordersControl.panel.set('bodyContent',o.payload.body);
  				 	ordersControl.panel.show();
  				 	//ordersControl.CreatePagSizeList();      

  					Event.on('.J_NotSet','click',function(){
  						DOM.hide('.J_SetContent')
  					})  
  					Event.on('.J_Set','click',function(){
  						DOM.show('.J_SetContent')
  					})   					
  					checked = DOM.query("#J_TbItemList .c_on");
					var length = checked.length;
					var title = 0;
					for(i=0; i<length; i++){
						title += Number(DOM.attr(DOM.parent(checked[i]),'title'));
					}
  					DOM.html('#J_MergeOrder',length)
  					DOM.html('#J_TotalOrder',title)
				};
				var errorHandle = function(o){
					new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
							});
				};	
				var printType = value;
				var data = "printType="+printType;
				new H.widget.asyncRequest().setURI(loadPrintUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();		

			                   
	        },
	        printValue : function(name){
	        	var submitHandle = function(o) {
	        		var body = o.payload.body;
	        		DOM.html('#J_Body',body);
	        		var top = DOM.val('#Middle');
	        		var left = DOM.val('#Around');
					ordersControl.CreateOneFormPage(body,left,top);
					//LODOP.PREVIEW();
					LODOP.PRINT_DESIGN();
					//LODOP.PRINT();
					ordersControl.panel.hide();
					new H.widget.msgBox({
					    title:"成功提示",
					    content:'打印成功',
					    type:"error"
					});
        	    };
        	    var errorHandle = function(o){
					new H.widget.msgBox({
					    title:"错误提示",
					    content:o.desc,
					    type:"error"
					});
        	    	return;
        	    };
        	    checked = DOM.query("#J_TbItemList .c_on");
				var length = checked.length;
				var json = [];
        	    for(i=0; i<length; i++){ 
        	    	var id = DOM.attr(checked[i],'value')
        	    	var logisticName = DOM.html('.ex-current');
        	    	var buyernick = H.util.strProcess(DOM.val(DOM.get('#J_Input_'+id)));
        	    	var printType = DOM.val('#J_PrintData');

        	    	var status = DOM.val('#J_SearchStatus');      
        	    	
					var o = '{"tid":"' + id + '", "buyerNick":"' + buyernick + '"}';
					o = eval('(' + o + ')');	
					json.push(o);
        	    }
				var itemsJson = KISSY.JSON.stringify(json);
				var data = "printItems="+itemsJson+"&status="+status+"&logisticName="+logisticName+"&printType="+printType;
        	    new H.widget.asyncRequest().setURI(loadSearchUrl).setMethod("POST").setForm('#J_PrintValue').setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
        	  
	        },
	        CreateOneFormPage : function(desc,left,top){
	        		LODOP=getLodop(document.getElementById('LODOP_OB'),document.getElementById('LODOP_EM'));  
	        		LODOP.PRINT_INIT("");
	        		LODOP.SET_PRINT_STYLE("FontSize",16);
	        		LODOP.SET_PRINT_STYLE("Bold",1);
	        		LODOP.SET_PRINT_STYLEA(0,"HtmWaitMilSecs",1000); 
	        		//LODOP.ADD_PRINT_TEXT(0,0,230,126,desc);
	        		//LODOP.SET_PRINT_PAGESIZE(1,0,32000,DOM.val('#J_PagSizeList'));
	        		LODOP.SET_PRINT_PAGESIZE(1,2100,32000,''); 
	        		LODOP.ADD_PRINT_HTM(top,left,'100%','100%',''+desc);
	        		
	        },
	        /*
	        CreatePagSizeList : function(){   
	        	//alert(12)
	        	LODOP=getLodop(document.getElementById('LODOP_OB'),document.getElementById('LODOP_EM')); 
	     	    ordersControl.clearPageListChild();
	     	    var strPageSizeList=LODOP.GET_PAGESIZES_LIST(ordersControl.getSelectedPrintIndex(),"\n");
	     	    var Options=new Array(); 
	      	    Options=strPageSizeList.split("\n");     
	     	    for (i in Options){    
		     	     var option=document.createElement('option');   
		     		 option.innerHTML=Options[i];
		     		 option.value=Options[i];
		        	 document.getElementById('PagSizeList').appendChild(option);
	     	    } 
	     	},	 
	     	clearPageListChild : function(){
	     	   var PagSizeList =document.getElementById('PagSizeList'); 
	     	   while(PagSizeList.childNodes.length>0){
	       		   var children = PagSizeList.childNodes;	
	     	  		  for(i=0;i<children.length;i++){		
	     			PagSizeList.removeChild(children[i]);	
	     	  	   };	    
	     	   };	   
	     	},  */
	     	
	     	getSelectedPrintIndex : function(){
	    		//if (document.getElementById("Radio2").checked) 
	    		//return document.getElementById("PrinterList").value;
	    		//else return -1; 	  	
	    	},
	        deliverOrder : function(){
	            var submitHandle = function(o) {
					DOM.hide('#J_LeftLoading');
					DOM.show('#J_MainLeftContent');
	        	    totalRecords = o.payload.totalRecords;
	        	    DOM.val('#J_TotalRecords',totalRecords)
					if(totalRecords > 0){
						DOM.css(DOM.get('#J_LEmpty') ,'display','none');
						DOM.css(DOM.query(".J_ItemSelectBtnHolder") ,'display' , '');
					}else{
						DOM.css(DOM.get('#J_LEmpty'), 'display' , '');
						DOM.css(DOM.query(".J_ItemSelectBtnHolder") , 'display' , 'none');
					}
					ordersControl.renderItems(o.payload.body);
					var pageCount = Math.ceil(totalRecords/o.payload.pageSize); 
					ordersControl.paginator = new showPages('ordersControl.paginator').setRender(ordersControl.handlePagination).setPageCount(pageCount).printHtml('#J_Paging',2);
					ordersControl.paginator = new showPages('ordersControl.paginator').setRender(ordersControl.handlePagination).setPageCount(pageCount).printHtml('#J_TopPaging',3);
	    	    };
	    	    var errorHandle = function(o){
					new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
							});
					DOM.hide('#J_LeftLoading');
					DOM.hide('#J_MainLeftContent');					
					DOM.css(DOM.get('#J_LEmpty'), 'display' , '');
					DOM.css(DOM.query(".J_ItemSelectBtnHolder") , 'display' , 'none');					
	    	    };	    	    
	    	    var data = ordersControl.getData();
	    	    var printShip = 1;
	 			DOM.show('#J_LeftLoading');
				DOM.hide('#J_MainLeftContent');
				data +="&printShip="+printShip;
	    	    new H.widget.asyncRequest().setURI(loadPrintshipUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },
	     	//同步订单
	        updateOrders : function(){
	        	var submitHandle = function(o) {
	        		ordersControl.msg.hide();
	        		new H.widget.msgBox({ 
			 			type: "sucess", 
			 			content: "订单同步成功",
						dialogType:"msg", 
						autoClose:true, 
						timeOut:3000
					});					
        	    };
        	    var errorHandle = function(o){
        	    	ordersControl.msg.hide();
        	    	new H.widget.msgBox({
					    title:"错误提示",
					    content:o.desc,
					    type:"error"
					});
        	    	return;
        	    };
        	    ordersControl.msg = new H.widget.msgBox({
					dialogType : 'loading',
				    content:'正在同步订单，请稍后...'	
        	    });
        	    var status = 3;
				var data = "status="+status;
        	    new H.widget.asyncRequest().setURI(loadUpdateUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },	
	        //付款已否搜索
	       /* searchStatus : function(value){
	        	var submitHandle = function(o) {
	        		DOM.html('#J_TbItemList',o.payload.body);
					DOM.hide('#J_LeftLoading');
					DOM.show('#J_MainLeftContent');
					totalRecords = o.payload.totalRecords;
					if(totalRecords > 0){
						DOM.css(DOM.get('#J_LEmpty') ,'display','none');
						DOM.css(DOM.query(".J_ItemSelectBtnHolder") ,'display' , '');
					}else{
						DOM.css(DOM.get('#J_LEmpty'), 'display' , '');
						DOM.css(DOM.query(".J_ItemSelectBtnHolder") , 'display' , 'none');
					}
					DOM.attr('.J_CheckedAll','checked',false)
					//ordersControl.renderItems(o.payload.body);
					var pageCount = Math.ceil(totalRecords/o.payload.pageSize); 
					ordersControl.paginator = new showPages('ordersControl.paginator').setRender(ordersControl.handlePagination).setPageCount(pageCount).printHtml('#J_Paging',2);
					ordersControl.paginator = new showPages('ordersControl.paginator').setRender(ordersControl.handlePagination).setPageCount(pageCount).printHtml('#J_TopPaging',3);	        		
        	    };
        	    var errorHandle = function(o){
					DOM.hide('#J_LeftLoading');
					DOM.hide('#J_MainLeftContent');					
					DOM.css(DOM.get('#J_LEmpty'), 'display' , '');
					DOM.css(DOM.query(".J_ItemSelectBtnHolder") , 'display' , 'none');	
        	    };
	    	    var status = value;
	    	    var pagesize =10;
	 			DOM.show('#J_LeftLoading');
				DOM.hide('#J_MainLeftContent');
        	    var data = "status="+status+"&pagesize="+pagesize;
        	    new H.widget.asyncRequest().setURI(loadSearchUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },	      */  
	        senderSave : function(){
	        	var submitHandle = function(o) {
	        		window.location.reload();
	        	};
        	    var errorHandle = function(o){
					new H.widget.msgBox({
					    title:"错误提示",
					    content:o.desc,
					    type:"error"
					});
        	    	return;
        	    };
	    	    var List = DOM.query('#J_OrdersItem .list');
	    	    var len = List.length;
				var json = [];
        	    for(i=0; i<len; i++){ 
        	    	var id = List[i].value;
        	    	var tid  = DOM.val('#J_Tid_'+id);
					var receiverName  = DOM.val('#J_ReceiverName');	  
	        	    var receiverMobile  = DOM.val('#J_ReceiverMobile');
					var receiverPhone  = DOM.val('#J_ReceiverPhone');	  
	        	    var receiverZip  = DOM.val('#J_ReceiverZip');
					var receiverState = DOM.val('#c1');	  
	        	    var receiverCity  = DOM.val('#c2');
					var receiverDistrict   = DOM.val('#c3');	  
	        	    var receiverAddress   = DOM.val('#J_ReceiverAddress');
	        	    var short  = DOM.val('#J_Short_'+id);    
					var buyer_message  = DOM.val('#J_Buyer_message_'+id);	  
	        	    var seller_memo  = DOM.val('#J_Seller_memo_'+id);          	    
					var o = '{"tid":"' + tid + '","short":"' + short + '", "buyer_message":"' + buyer_message + '", "seller_memo":"' + seller_memo + '"}';
					o = eval('(' + o + ')');	
					json.push(o);
        	    }
				var itemsJson = KISSY.JSON.stringify(json);
				var data = "receivers="+itemsJson+"&receiverName="+receiverName+"&receiverMobile="+receiverMobile+"&receiverPhone="+receiverPhone+"&receiverZip="+receiverZip +"&receiverState="+receiverState+"&receiverCity="+receiverCity+"&receiverDistrict="+receiverDistrict+"&receiverAddress="+receiverAddress;
        	    new H.widget.asyncRequest().setURI(loadSearchUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },	        
	       changeExpress : function(html){
	            var submitHandle = function(o) {
	            	ordersControl.renderItems(o.payload.body);
	    	    };
	    	    var errorHandle = function(o){
					new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
					});
	    	    };	  
	    	    var json = [];
	    	    var J_CheckBox = DOM.query('#J_TbItemList .J_CheckBox');
	    	    var len = J_CheckBox.length;
	    	    for(i=0; i<len; i++){
		    	    id = J_CheckBox[i].value;
					var buyernick = H.util.strProcess(DOM.val(DOM.get('#J_Input_'+id)));
					var receiverdistrict  = DOM.val(DOM.get('#J_HiddenInput_'+id));	  
					var senddistrict = DOM.val('#J_Senddistrict');
					var o = '{"buyernick":"' + buyernick + '", "receiverdistrict":"' + receiverdistrict + '", "senddistrict":"' + senddistrict + '"}';
					o = eval('(' + o + ')');						
					json.push(o);
	    	    }
				var itemsJson = KISSY.JSON.stringify(json);
	    	    var starttime = DOM.val('#J_startDate');
	    	    var endtime = DOM.val('#J_endDate');
	    	    var isprint = DOM.val('#J_Isprint');
	    	    
	    	    
	    	    var state = DOM.val('#s1');
	    	    var name = DOM.val('#J_SearchName'); 
	    	    var status = DOM.val('#J_SearchStatus');
	    	  
   	    	    if(DOM.val(DOM.get("#J_SearchNick")) != '订单号、旺旺'){
   	    	    	var nick = encodeURIComponent(DOM.val(DOM.get("#J_SearchNick"))); 
   	    	    }else{
   	    	    	var nick ='';
   	    	    } 
   	    	    var pagesize = DOM.val(DOM.get("#J_SelectItemPage"));//每页多少条
   	    	    var pageId = DOM.val('#J_PageId');
				var data = "items="+itemsJson+"&loginstic="+html+"&status="+status+"&starttime="+starttime+"&endtime="+endtime+"&state="+state+"&buyernick="+nick+"&isprint="+isprint+"&pagesize="+pagesize+"&page_id="+pageId;
	    	    new H.widget.asyncRequest().setURI(loadSearchUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();			

	        },	 
	        checkAll : function(e){
				checkBoxs = DOM.query("#J_TbItemList .J_CheckBox");
				len = checkBoxs.length;
				for(i=0; i<len; i++){
					var iid = checkBoxs[i].value;
					if(checkBoxs[i].disabled) continue;
					if(this.checked){	
						if(e.currentTarget.id == 'J_TopCheckAll'){
							ordersControl.Form.setCheckboxOn(DOM.get('#J_RightBottonCheckAll'));
						}else{
							ordersControl.Form.setCheckboxOn(DOM.get('#J_TopCheckAll'));
						}
						ordersControl.Form.setCheckboxOn(checkBoxs[i]);
					} else {
						if(e.currentTarget.id == 'J_TopCheckAll'){
							ordersControl.Form.setCheckboxOff(DOM.get('#J_RightBottonCheckAll'));
						}else{
							ordersControl.Form.setCheckboxOff(DOM.get('#J_TopCheckAll'));
							
						}
						ordersControl.Form.setCheckboxOff(checkBoxs[i]);
					}
				}
				
	        },
	        manage : function(){
	        	var submitHandle = function(o) {
		        	if(!ordersControl.panel2){
						ordersControl.panel2 = new Overlay.Dialog({
						      width: 450,
						      title: '快递管理',
						      bodyContent:'',
						      buttons:[
						         {
			     	                     text:'确定',
			     	                     elCls : 'bui-button bui-button-primary',
			     	                     handler : function(){
						        	 		ordersControl.express();
						        	 		var allExpress = DOM.val('#J_AllExpress');
											var arr = allExpress.split(',');
											DOM.html('#J_Sinple','');
											DOM.html('#J_ManageSinple','');
											for(var i =0,len=arr.length;i<len;i++){
												DOM.prepend(DOM.create('<a class="simple">'+arr[i]+'</a>'),'#J_Sinple')
												DOM.prepend(DOM.create('<a class="simple">'+arr[i]+'</a>'),'#J_ManageSinple')
											}
											
											DOM.addClass(DOM.query('.simple')[0],'ex-current');
											ordersControl.changeExpress(DOM.html('.ex-current'));
											
						        	 		this.hide();
			     	                     }
			     	      		 },{
			     	      			 text:'关闭',
			     	      			 elCls : 'bui-button cancle',
			     	      			 handler : function(){
			     	      			 	this.hide();
			     	      		 		}
			     	             }
			     	          ],
						      mask: true,
						      align: {
						          points: ['cc', 'cc']
						      },
						      closable :true,
						      draggable: true,
						      aria:true
						  });
		        	}
					var cont = o.payload.body;
					ordersControl.panel2.set('bodyContent',cont);
					ordersControl.panel2.show();
					Event.remove('#J_ExpressName');
					Event.on('#J_ExpressName','click',function(ev){			
						var data = DOM.attr(ev.target,'value');
						var allExpress = DOM.val('#J_AllExpress');
						var arr = allExpress.split(',');
						DOM.val('#J_AllExpress',arr.join(','));
			        	if(DOM.attr(ev.target,'checked')){
							if(!allExpress){
								var arr =[];
							}else{
								var arr = allExpress.split(',');
							}
							arr.push(data);
							DOM.val('#J_AllExpress',arr.join(','));
							DOM.addClass(ev.target,'123')
			        	}else{
							for(var i =0,len=arr.length;i<len;i++){
								if(arr[i] == data){
									arr.splice(i,1);
								}
							}
							DOM.val('#J_AllExpress',arr.join(','));		        		
			        	}	
					})					
	        	}
        	    var errorHandle = function(o){
					new H.widget.msgBox({
					    title:"错误提示",
					    content:o.desc,
					    type:"error"
					});
        	    };
        	    DOM.val('#J_AllExpress','');
        	    var simple = DOM.query('.simple');
				var allExpress = DOM.val('#J_AllExpress');
				var arr = allExpress.split('');
				for(var i =0,len=simple.length;i<len;i++){
					data = DOM.html(simple[i])
					arr.push(data);
					DOM.val('#J_AllExpress',arr.join(','));
				}
				var logisticString = DOM.val('#J_AllExpress')
				var data = "logisticString="+logisticString;				
        	    new H.widget.asyncRequest().setURI(loadManageUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },	    
	        express : function(){
	        	var submitHandle = function(o) {
        	    };
        	    var errorHandle = function(o){
					new H.widget.msgBox({
					    title:"错误提示",
					    content:o.desc,
					    type:"error"
					});
        	    };
				var logistics = DOM.val('#J_AllExpress')
				var data = "logistics="+logistics;				
        	    new H.widget.asyncRequest().setURI(loadExpressUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },		        
	        details : function(name){
	        	var submitHandle = function(o) {
	        		ordersControl.msg.hide();
	        		if(!ordersControl.panel3){
						ordersControl.panel3 = new Overlay.Dialog({
						      width: 610,
						      title: '订单详情',
						      bodyContent: '',
						      mask: true,
						      align: {
						          points: ['cc', 'cc']
						      },
						      buttons:[
								{
									text:'确定',
									elCls : 'bui-button bui-button-primary',
					     	    	handler : function(){
						     	    	this.hide();
					     	    	}
					     	 	},{
					     	 		text:'关闭',
					     	 		elCls : 'bui-button cancle',
					     	 		handler : function(){
					     	 			this.hide();
					     	 		}
					     	 	}
					     	  ],
						      closable :true,
						      draggable: true,
						      aria:true
						  });
	        		}
					ordersControl.panel3.set('bodyContent',o.payload.body);
					ordersControl.panel3.show();
					
					var a = new LinkSelect(["#c1","#c2","#c3"],tdist, {
						rootid: 1 //根节点的ID，默认为0
					});
					a.focus(2,DOM.val('#J_Country'));
					
					DOM.val('#J_TidNum',name);
        	    };
        	    var errorHandle = function(o){
        	    	alert(o.desc);
        	    	return;
        	    };
        	    ordersControl.msg = new H.widget.msgBox({
						dialogType : 'loading',
					    content:'正在获取订单详情！'	
				});
        	    var receiverAddress = DOM.val(DOM.get('#J_ReceiverAddress_'+name));
        	    var buyernick = DOM.val(DOM.get('#J_Input_'+name));
	    	    var starttime = DOM.val('#J_startDate');
	    	    var endtime = DOM.val('#J_endDate');
	    	    var isprint = DOM.val('#J_Isprint');
	    	    var status = DOM.val('#J_SearchStatus');
        	    var data = "status="+status+"&starttime="+starttime+"&endtime="+endtime+"&buyernick="+buyernick+"&isprint="+isprint+"&receiverAddress="+receiverAddress;
        	    new H.widget.asyncRequest().setURI(loadDetailUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
	        },
	        
	        
	        searchTbItems : function() {
	            var submitHandle = function(o) {
					DOM.hide('#J_LeftLoading');
					DOM.show('#J_MainLeftContent');
	        	    totalRecords = o.payload.totalRecords;
	        	    DOM.val('#J_TotalRecords',totalRecords)
					if(totalRecords > 0){
						DOM.css(DOM.get('#J_LEmpty') ,'display','none');
						DOM.css(DOM.query(".J_ItemSelectBtnHolder") ,'display' , '');
					}else{
						DOM.css(DOM.get('#J_LEmpty'), 'display' , '');
						DOM.css(DOM.query(".J_ItemSelectBtnHolder") , 'display' , 'none');
					}
					ordersControl.renderItems(o.payload.body);
					DOM.replaceClass('.simple','ex-current','');
					DOM.addClass(DOM.query('.simple')[0],'ex-current');
					ordersControl.changeExpress(DOM.html('.ex-current'));
					var pageCount = Math.ceil(totalRecords/o.payload.pageSize); 
					ordersControl.paginator = new showPages('ordersControl.paginator').setRender(ordersControl.handlePagination).setPageCount(pageCount).printHtml('#J_Paging',2);
					ordersControl.paginator.setPageCount(pageCount).printHtml('#J_TopPaging',3); 
	    	    };
	    	    var errorHandle = function(o){
					new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
							});
					DOM.hide('#J_LeftLoading');
					DOM.hide('#J_MainLeftContent');					
					DOM.css(DOM.get('#J_LEmpty'), 'display' , '');
					DOM.css(DOM.query(".J_ItemSelectBtnHolder") , 'display' , 'none');					
	    	    };	   
	    	    var data = ordersControl.getData();
	    	    new H.widget.asyncRequest().setURI(loadSearchUrl).setMethod("POST").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send();
			},
			renderItems: function(c) {
	    	    DOM.html(DOM.get("#J_TbItemList"), c);
	    	    if(DOM.width('#J_Sinple') == '580'){
					DOM.hide('#J_ManagedownIcon');
					DOM.show('.J_downIcon2');
				}else{
					DOM.show('#J_ManagedownIcon');
					DOM.hide('.J_downIcon2');
				}
	    	    var lis = DOM.query("#J_TbItemList .J_TbItem");
	        	Event.on(lis, "mouseenter mouseleave click", function(ev){
	        		var el = DOM.get('.J_CheckBox',ev.currentTarget);
	        		if(el.disabled) return;
	        		if(ev.type == 'mouseenter'){
						DOM.addClass(ev.currentTarget,'current');
	        		}else if(ev.type == 'mouseleave'){
						DOM.removeClass(ev.currentTarget,'current');
					}
	        	});
	        	ordersControl.Form.setCheckboxOff(DOM.get('#J_RightBottonCheckAll'));
	        	ordersControl.Form.renderAll('#J_TbItemList');
	        	Event.on(DOM.query('#J_TbItemList .J_CheckBox'),'click',function(ev){
	        		//ev.stopPropagation();
	        		var checkBoxs = DOM.query("#J_TbItemList .J_CheckBox");
	    			var len = checkBoxs.length;
	    			var j = 0 ;
	    			for(i=0; i<len; i++){
						if(checkBoxs[i].disabled) continue;
						if(checkBoxs[i].checked){
							j++;
						} 
					}
	        		//DOM.html('#J_SeletedNum',j);
	        		var iid = ev.currentTarget.value;
	        		if(this.checked){
	        			var checkBoxs = DOM.query("#J_TbItemList .J_CheckBox");
	        			var len = checkBoxs.length;
	        			var allFlag = true;
	        			for(i=0; i<len; i++){
							if(checkBoxs[i].disabled) continue;
							if(!checkBoxs[i].checked){
								allFlag = false;
								break;
							} 
						}
	        			if(allFlag){
	        				ordersControl.Form.setCheckboxOn(DOM.get('#J_RightBottonCheckAll'));
	        			}
	        		}else{
	        			ordersControl.Form.setCheckboxOff(DOM.get('#J_RightBottonCheckAll'));
	        		}
	        	});
			},
	    	handlePagination : function(turnTo) {
		    	var pageId = turnTo;
	    		var submitHandle = function(o) {
	    			totalRecords = o.payload.totalRecords;
	 				if(totalRecords > 0){
	 					DOM.css(DOM.get('#J_LEmpty') ,'display','none');
	 					DOM.css(DOM.query(".J_ItemSelectBtnHolder") ,'display' , '');
	 				} else {
	 					DOM.css(DOM.get('#J_LEmpty'), 'display' , '');
	 					DOM.css(DOM.query(".J_ItemSelectBtnHolder") , 'display' , 'none');
	 				}
	 				var pageCount = Math.ceil(totalRecords/o.payload.pageSize); 
	 				ordersControl.paginator.setPage(pageId).setPageCount(pageCount).printHtml('#J_Paging',2);
	 				ordersControl.paginator.setPage(pageId).setPageCount(pageCount).printHtml('#J_TopPaging',3);
	 				ordersControl.renderItems(o.payload.body);
	 				ordersControl.changeExpress(DOM.html('.ex-current'));
	 				DOM.hide('#J_LeftLoading');
					DOM.show('#J_MainLeftContent');
					DOM.val('#J_PageId',pageId);
		    	};
		    	var data = ordersControl.getData();
	    	    var json = [];
	    	    var J_CheckBox = DOM.query('#J_TbItemList .J_CheckBox');
	    	    var len = J_CheckBox.length;
	    	    for(i=0; i<len; i++){
		    	    id = J_CheckBox[i].value;
					var buyernick = H.util.strProcess(DOM.val(DOM.get('#J_Input_'+id)));
					var receiverdistrict  = DOM.val(DOM.get('#J_HiddenInput_'+id));	  
					var senddistrict = DOM.val('#J_Senddistrict');
					var o = '{"buyernick":"' + buyernick + '", "receiverdistrict":"' + receiverdistrict + '", "senddistrict":"' + senddistrict + '"}';
					o = eval('(' + o + ')');						
					json.push(o);
	    	    }
				var itemsJson = KISSY.JSON.stringify(json);	
	    	    var printShipOrEx = DOM.attr('.p-current','title');
		    	data +="&page_id="+pageId+"&items="+itemsJson+"&printShipOrEx="+printShipOrEx;
		    	data +="&page_id="+pageId;
				DOM.show('#J_LeftLoading');
				DOM.hide('#J_MainLeftContent');
	    	    new H.widget.asyncRequest().setURI(loadSearchUrl).setMethod("post").setHandle(submitHandle).setData(data).send();
			},
			getData : function(){
	    	    var starttime = DOM.val('#J_startDate');
	    	    var endtime = DOM.val('#J_endDate');
	    	    var isprint = DOM.val('#J_Isprint');
	    	    if(DOM.val(DOM.get("#J_SearchNick")) != '订单号、旺旺'){
   	    	    	var nick = encodeURIComponent(DOM.val(DOM.get("#J_SearchNick"))); 
   	    	    }else{
   	    	    	var nick ='';
   	    	    } 
	    	    var itemPage = DOM.val(DOM.get("#J_SelectItemPage"));//每页多少条
	    	    
	    	    var state = DOM.val('#s1');
	    	    var name = DOM.val('#J_SearchName'); 
	    	    var status = DOM.val('#J_SearchStatus');
   	    	   
   	    	    var loginstic = DOM.html('.ex-current');
   	    	    var data = "loginstic="+loginstic+"&status="+status+"&starttime="+starttime+"&endtime="+endtime+"&state="+state+"&buyernick="+nick+"&isprint="+isprint+"&pagesize="+itemPage;
		        return data;  
			}			
	}
}, {
    requires: ['utils/showPages/index','overlay','gallery/province/1.0/index','bui/select','bui/overlay','bui/calendar','bui/tooltip','utils/beautifyForm/index']
});
