const uploadBtn = document.getElementById("uploadBtn");

if(uploadBtn){
    uploadBtn.addEventListener("click", function() {
        alert("Upload feature coming soon!");
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