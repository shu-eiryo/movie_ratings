var myParent = document.getElementById("movie_post");
var myImage = document.createElement("img");
myImage.src = 'a.jpeg';
myImage.style.width = '300px';
myImage.style.width = '416px';
myParent.appendChild(myImage);

document.getElementById("movie_des").innerHTML = "世界局势波诡云谲，再度出山的邦德（丹尼尔·克雷格 饰）面临有史以来空前的危机，传奇特工007的故事在本片中达到高潮。新老角色集结亮相，蕾雅·赛杜回归，二度饰演邦女郎玛德琳。系列最恐怖反派萨芬（拉米·马雷克 饰）重磅登场，毫不留情地展示了自己狠辣的一面，不仅揭开了玛德琳身上隐藏的秘密，还酝酿着危及数百万人性命的阴谋，幽灵党的身影也似乎再次浮出水面。半路杀出的新00号特工（拉什纳·林奇 饰）与神秘女子（安娜·德·阿玛斯 饰）看似与邦德同阵作战，但其真实目的依然成谜。关乎邦德生死的新仇旧怨接踵而至，暗潮汹涌之下他能否拯救世界？";
document.getElementById("movie_point").innerHTML = "7.7";
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