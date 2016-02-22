/**
 * Created by Yanyan on 2016/2/22.
 */
$(function(){
    // 搜索切换
    (function(){
        var aLi=$("#menu li");
        var oText=$(".form").find(".text");
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
});