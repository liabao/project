$(function () {
    refresher.init({
        id: "wrapper",//<------------------------------------------------------------------------------------┐
        pullDownAction: Refresh,
        pullUpAction: Load
    });
    function Refresh() {
        setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.querySelector("#wrapper ul");
            //这里写你的刷新代码
            var str = ListLoadData();

            li = document.createElement('ul');
            li.innerHTML = str;
            el.appendChild(li, el.childNodes[0]);

            document.getElementById("wrapper").querySelector(".pullDownIcon").style.display = "none";
            document.getElementById("wrapper").querySelector(".pullDownLabel").innerHTML = "<img src='css/ok.png'/>刷新成功";
            setTimeout(function () {
                wrapper.refresh();
                if (str == "") {
                    $(".pullUpLabel").text("没有更多的数据");
                }
                document.getElementById("wrapper").querySelector(".pullDownLabel").innerHTML = "";
            }, 500);//模拟qq下拉刷新显示成功效果
            /****remember to refresh after  action completed！ ---yourId.refresh(); ----| ****/
        }, 500);
    }
    function Load() {
        setTimeout(function () {// <-- Simulate network congestion, remove setTimeout from production!
            var el, li, i;
            el = document.querySelector("#wrapper ul");

            var str = ListLoadData();
            
            li = document.createElement('ul');
            li.innerHTML = str;
            el.appendChild(li, el.childNodes[0]);

            wrapper.refresh();/****remember to refresh after action completed！！！   ---id.refresh(); --- ****/
            if (str == "") {
                $(".pullUpLabel").text("没有更多的数据");
            }
        }, 1000);
    }
});