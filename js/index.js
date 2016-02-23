/**
 * Created by Yanyan on 2016/2/22.
 */
$(function(){
    // 搜索切换
    (function(){
        var aLi=$("#menu li");
        var oText=$("#search").find(".form .text");
        var arrText=[
            "例如：樱花日本料理",
            "例如：昌平区育新站",
            "例如:万达影院",
            "例如：大老虎是谁？",
            "例如：背景除雪"
        ];
        var iNow=0;
        oText.val(arrText[iNow]);
        aLi.each(function(index){
           $(this).click(function(){
               aLi.attr("class","gradient");
               $(this).attr("class","active");
               iNow=index;
               oText.val(arrText[iNow]);
           });
        });
        oText.focus(function(){// focus获取光标事件(也就是获取焦点)
            //console.log(arrText[iNow]);
            //$(this).val("");
            if($(this).val()==arrText[iNow]){//如果内容是数组里面的某一个，就清空掉
                $(this).val("");
            }
        });
        oText.blur(function(){// 失去光标的时候
            if($(this).val()==""){
                oText.val(arrText[iNow]);// 如果内容为空，就还原
            }
        })
    })();
    // update文字滚动
    (function(){
        var oUpdate=$(".update");
        var oUl=$(".update .wrap ul");
        // console.log(iH); 32
        var arrData = [
            { 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
            { 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
            { 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
            { 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
            { 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
        ];
        var str="";// 写个字符串的拼接，把数据都拼接进去
        var oBtnUp=$("#updateUpBtn");
        var oBtnDown=$("#updateDownBtn");
        var iNow=0;// 我们需要知道当前你走到的是第几个(后续还需要处理)，需要关联一下，所以需要设置一个变量！
        var timer=null;
        for(var i=0;i<arrData.length;i++){// for循环会不停的追加，
            str+='<li><a href="'+ arrData[i].url +'"><strong>'+ arrData[i].name +'</strong><span> '+ arrData[i].time +'分钟前 </span>写了一篇新文章：'+ arrData[i].title +'...</a></li>';
        }
        //console.log(str);
        oUl.html(str);
        var iH=oUl.find("li").height();// 要在这里获取li的高度，因为这个时候li的高度才自动生成完
        //oUl.animate({"top":-1*iH},2500,"elasticOut");"elasticOut"是引入的tween.js中的参数写在了jquery中
        oBtnUp.click(function(){
            doMove(-1);
        });
        oBtnDown.click(function(){
            doMove(1);
        });
        oUpdate.hover(function(){// hover()鼠标事件，两个函数，前面是鼠标移入，后边是鼠标移除
            clearInterval(timer);
        },function(){
            autoPlay();
        });
        function autoPlay(){
            timer=setInterval(function(){
                doMove(-1);
            },1600);
        }
        autoPlay();
        function doMove(num){// num代表是一个正数还是一个负数
            iNow+=num;// 每次点击的时候iNow都加上num(-1或者1)
            if(Math.abs(iNow)>arrData.length-1){//arrData.length-1 为什么是长度-1，因为我们需要的索引值
                iNow=0;
            }
            if(iNow>0){
                iNow=-(arrData.length-1);
            }
            oUl.stop().animate({"top":iH*iNow},2200,"elasticOut");// 前面需要加上stop()，每次点击的时候，需要停止之前的运动形式
            // 只需要当前的运动形式，就不会出现连续点击的问题
        }
    })();
    // options 选项卡切换
    (function(){
        fnTab($(".tabNav1"),$(".tabCon1"));
        fnTab($(".tabNav2"),$(".tabCon2"));
        function fnTab(oNav,aCon){
            var aElem=oNav.children();// 找到下面的第一级的子元素
            aCon.hide().eq(0).show();// 全部隐藏，但是第0个显示
            aElem.each(function(index){// 一会儿还要用到索引值，所以要用到each循环
                $(this).click(function(){
                    aElem.removeClass("active").addClass("gradient");// 这个不能用attr，attr是直接就被换掉了
                    $(this).removeClass("gradient").addClass("active");
                    aElem.find("a").attr("class","triangle_down_gray");// 把class的属性值改成后面(指定的属性值)
                    $(this).find("a").attr("class","triangle_down_red");// 把当前的class的属性值改成后面(指定的属性值)
                    aCon.hide().eq(index).show();
                });
            });
        }
    })();
});