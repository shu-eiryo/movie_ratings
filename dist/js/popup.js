window.onload = function () {
    //获取弹窗按钮
    var btn = document.getElementById("btn");
    var close = document.getElementsByClassName("close")[0];
    var myModal = document.getElementById("myModal");
    //按钮绑定事件
    btn.onclick = function () {
        //获取弹窗
        myModal.style.display = "block";
    }
    close.onclick = function () {
        myModal.style.display = "none";
    }
    //用户点击其他地方关闭弹窗
    window.onclick = function (event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
        }
    }
}