document.getElementById("movie_des").innerHTML = "私は映画鑑賞が好きで、よく映画館に足を運びます。私が映画に感じる魅力は、音と映像による臨場感で、登場人物に感情移入しやすいところです。さまざまな世界に入り込むことができ、そこで、空想ではありますが、沢山の人生を体験できます。この体験は、私の想像力を刺激し、良い影響を与えてくれます。";

let reviewsArray = [
    ["エターナルズ", '7.7', "非常にいい映画ですね。感動しました。本作は、あくまでこれからMCU映画が新たな方向性を模索する中で生まれた実験的な作品であります。"],
    ["そして、バトンは渡された", '9.1', "全体として様々な伏線がはられていて、終盤につながっていく、という構成です。中盤までは展開に無理を感じる箇所がありつつも、たんたんと物語は進みます。"]
]

var myParent = document.getElementById("movie_review");

reviewsArray.forEach(review => {
    var myReview = document.createElement("div");
    myReview.style.paddingBlock = '20px';
    var movieName = review[0];
    var userPoint = review[1];
    var reviewTitle = movieName + "    " + userPoint + "点";
    var myTitle = document.createElement("label");
    var editDelete = document.createElement("button");
    var myComment = document.createElement("h3");
    myTitle.style.color = '#2abeeb';
    myComment.style.color = 'white';
    myTitle.innerHTML = reviewTitle;
    myComment.innerHTML = review[2];
    editDelete.innerHTML = '編集/削除'
    myReview.appendChild(myTitle);
    myReview.appendChild(editDelete);
    myReview.appendChild(myComment);
    myParent.appendChild(myReview);
});