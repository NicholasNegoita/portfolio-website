let button = document.getElementById("darkmode");
let darkMode = false;

button.addEventListener("click", function(){
    if(darkMode){
        document.body.style.backgroundColor = "rgb(103, 103, 194)";
        button.textContent = "Dark Mode"
    }
    else{
        document.body.style.backgroundColor = "black";
        button.textContent = "Light Mode"
    }
    
    darkMode = !darkMode;
});
