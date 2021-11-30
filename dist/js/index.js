var xhr = new XMLHttpRequest();
xhr.open('POST', 'getVideo.php',false);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded,charset=utf-8");
xhr.send();
var resultJson=xhr.responseText;
console.log(resultJson);
var result=JSON.parse(resultJson);
console.log(result);

function butotnClick(index){
    //location.replace("detail.html?movieId=" + index);
    console.log("hello");
}

result.forEach(movie => {
    var myDiv = document.createElement("span");
    myDiv.setAttribute('id', movie.video_id);
    myDiv.style.display='inline';
    var myParent = document.getElementById("new-movies");
    var myImage = document.createElement("img");
    myImage.src = movie.video_photo;
    myImage.style.width = '500px';
    myImage.style.height = '690px';
    myDiv.appendChild(myImage);
    var myDiv2 = document.createElement("div");
    var myTitle = document.createElement("h3");
    myTitle.innerHTML = movie.video_name;
    myTitle.style.color = 'white';
    myDiv2.appendChild(myTitle);
    var myPoint = document.createElement("h4");
    myPoint.innerHTML = movie.point;
    myPoint.style.color = 'green';
    myDiv2.appendChild(myPoint);
    myDiv.appendChild(myDiv2);
    index = movie.video_id;
    myDiv.addEventListener('click', butotnClick(index));
    myParent.appendChild(myDiv);
});