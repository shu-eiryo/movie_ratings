// console.log("ha");
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'getDetails.php',false);
// xhr.send("movie_id:1");
// var result=xhr.responseText;
// console.log(result);
// var a=JSON.parse(result);
// console.log(a);
// console.log("haha");

var myParent = document.getElementById("movie_post");
var myImage = document.createElement("img");
myImage.src = 'a.jpeg';
myImage.style.width = '300px';
myImage.style.height = '416px';
myParent.appendChild(myImage);

document.getElementById("movie_name").innerHTML = result.video_name;
document.getElementById("movie_des").innerHTML = result.video_intro;
document.getElementById("movie_point").innerHTML = result.point;
var review_count = "412341" + "人が評価した"
document.getElementById("movie_review_count").innerHTML = review_count;

let reviewsArray = [
    ["しゅう", '8.8', "非常にいい映画ですね。感動しました。fasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasvbgdfbgdfddddddfgfsdfsadfsadfasdfasdfasdfasdfasdfasdfasdfdas"],
    ["盧さん", '9.1', "楽しかったです。感動しました。vcxvvxcxcfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasvbgdfbgdfddddddfgfsdfsadfsadfasdfasdfasdfasdfasdfasdfasdfdas"]
]

var myParent = document.getElementById("movie_review");
reviewsArray.forEach(review => {
    var myReview = document.createElement("div");
    myReview.style.paddingBlock = '20px';
    var userName = review[0];
    var userPoint = review[1];
    var reviewTitle = userName + "    " + userPoint + "点";
    var myTitle = document.createElement("h2");
    var myComment = document.createElement("h3");
    myTitle.style.color = '#2abeeb';
    myComment.style.color = 'white';
    myTitle.innerHTML = reviewTitle;
    myComment.innerHTML = review[2];
    myReview.appendChild(myTitle);
    myReview.appendChild(myComment);
    myParent.appendChild(myReview);
});