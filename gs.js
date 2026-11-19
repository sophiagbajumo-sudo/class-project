// Like Button

const likeBtn = document.getElementById("likeBtn"); 

likeBtn.addEventListener("click", function(){
    if(likeBtn.innerHTML == "👍 Like"){

        likeBtn.innerHTML = "❤️ Liked";
        likeBtn.style.background = "crimson";
    }else{

        likeBtn.innerHTML = "👍 Like";
        likeBtn.style.background = "#2196f3"
    }
})

// Subscribe Button

const subscribeBtn = document.getElementById("subscribeBtn")

subscribeBtn.addEventListener("click", function(){
    if(subscribeBtn.innerHTML == "Subscribe"){

        subscribeBtn.innerHTML = "🔔 Subscribed";
        subscribeBtn.style.background = "green";
    }else{

        subscribeBtn.innerHTML = "Subscribe";
        subscribeBtn.style.background = "red"
    }
})

// Alert Button

const alertBtn = document.getElementById("alertBtn")

alertBtn.addEventListener("click", function(){
    alert("Welcome to SkillUp")
})

//Reset Counter

const resetBtn = document.getElementById("resetBtn")



//Dark Mode

const darkbtn = document.getElementById("darkbtn");

//Load saved theme

if (localStorage.getItem("theme") == "dark") {

    document.body.classList.add("add");

    darkbtn.innerHTML = "Light Mode";
}

darkbtn.addEventListener{"click", function(){
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")){
        darkbtn.innerHTML = "Light"
        localStorage.setItem
        
    } else {
        
    }

}}