// document.write("coding with abdul")
//First Methode
let viewstr;

function card(title, cName, views, monthsOld, duration) {
    if(views < 1000000 && views > 999){
        views = Math.floor (views/1000)
        viewstr = views   + "K";
    }
    else if(views > 1000000){
        views = Math.floor (views/1000000)
        viewstr =  views   + "M";
    }
    else{
        viewstr = views
    }
  let html = ` <div class="card">
    <div class="image">
        <img src="images/sigma.jpg" alt="Sigma web development">
        <div class="capsul">${duration}</div>
    </div>
    <div class="text">
    <h1>${title}</h1>
    <p>${cName} . ${viewstr} views . ${monthsOld} months ago</p>
</div>
</div>`;

document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML + html 
}

card(
  "Introduction to web development | Sigma web development","CodeWithHerry",4543230,2 ,"32:23"
);




//Second Methode

// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     document.querySelector(".duration").innerHTML = duration;
//     document.querySelector(".title").innerHTML = title;
//     if (views >= 1000000) views = views / 1000000 + "M";
//     else if (views >= 1000) views = views / 1000 + "K";
//     document.querySelector(".details").innerHTML = cName + " . " + views + " views . " + monthsOld + " months ago";
//     document.querySelector(".image").src = thumbnail;
//         }
//         createCard("Introduction to Backend | Sigma Web Dev veido #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"); 
    