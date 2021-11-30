window.onload = function () {
    //ポップアップボタンの取得
    var movieReview = document.getElementById("movie_review");
    var close = document.getElementsByClassName("close")[0];
    var myModal = document.getElementById("myModal");
    //ボタンバインディングイベント
    movieReview.onclick = function () {
        //ポップアップウィンドウの取得
        myModal.style.display = "block";
    }
    close.onclick = function () {
        myModal.style.display = "none";
    }
    //ユーザーが他の場所をクリックしてポップアップを閉じる
    window.onclick = function (event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
        }
    }
}