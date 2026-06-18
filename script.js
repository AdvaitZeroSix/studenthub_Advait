const uploadBtn = document.getElementById("uploadBtn");

if(uploadBtn){
    uploadBtn.addEventListener("click", function() {
        alert("Upload feature coming soon!");
    });
}

const searchBar = document.getElementById("searchBar");
const noResults = document.getElementById("noResults");

if(noResults){
    noResults.style.display = "none";
}

if(searchBar){
    searchBar.addEventListener("input", function(){
        const query = searchBar.value.toLowerCase();
        const noteCards = document.querySelectorAll(".note-card");
        let visibleCount = 0;

        noteCards.forEach(function(card){
            const subject = card.querySelector("h3").textContent.toLowerCase();
            const desc = card.querySelectorAll("p")[0].textContent.toLowerCase();
            const matches = subject.includes(query) || desc.includes(query);

            if(matches){
                card.classList.remove("hidden");
                visibleCount++;
            } else {
                card.classList.add("hidden");
            }
        });

        if(noResults){
            noResults.style.display = visibleCount === 0 ? "block" : "none";
        }
    });
}
const themeSwitch =
    document.querySelector(".theme-switch");

const knob =
    document.querySelector(".switch-knob");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    if(knob){
        knob.classList.add("active");
    }
}

if(themeSwitch){

    themeSwitch.addEventListener("click", function(){

        document.body.classList.toggle("light-mode");

        if(knob){
            knob.classList.toggle("active");
        }

        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme", "light");
        }
        else{
            localStorage.setItem("theme", "dark");
        }

    });

}