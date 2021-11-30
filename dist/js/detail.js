var xhr = new XMLHttpRequest();
xhr.open('POST', 'getDetails.php',false);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded,charset=utf-8");
var data={};
data["video_id"]=1;
var str=JSON.stringify(data);
console.log(str);
xhr.send(str);
var resultJson=xhr.responseText;
console.log(resultJson);
var result=JSON.parse(resultJson);
console.log(result);

xhr.open('POST', 'getComment.php',false);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded,charset=utf-8");
xhr.send(str);
var resultJson=xhr.responseText;
console.log(resultJson);
var comment_result=[];
comment_result=JSON.parse(resultJson);
console.log(comment_result);

var myParent = document.getElementById("movie_post");
var myImage = document.createElement("img");
myImage.src = result.video_photo;
myImage.style.width = '300px';
myImage.style.height = '416px';
myParent.appendChild(myImage);

document.getElementById("movie_name").innerHTML = result.video_name;
document.getElementById("movie_des").innerHTML = result.video_intro;
document.getElementById("movie_point").innerHTML = result.point;
var review_count = result.point_number + "人が評価した"
document.getElementById("movie_review_count").innerHTML = review_count;

var myParent = document.getElementById("movie_review");
comment_result.forEach(review => {
    var myReview = document.createElement("div");
    myReview.style.paddingBlock = '20px';
    var userName = review.user_name;
    var userPoint = review.point;
    var reviewTitle = userName + "    " + userPoint + "点";
    var myTitle = document.createElement("h2");
    var myComment = document.createElement("h3");
    myTitle.style.color = '#2abeeb';
    myComment.style.color = 'white';
    myTitle.innerHTML = reviewTitle;
    myComment.innerHTML = review.comment_about;
    myReview.appendChild(myTitle);
    myReview.appendChild(myComment);
    myParent.appendChild(myReview);
});