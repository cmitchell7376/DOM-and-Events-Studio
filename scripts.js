// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load",function() {

    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let rocket = this.document.getElementById("rocket");

    takeoff.addEventListener("click",function(){
        let results = window.confirm("Is the shuttle ready for takeoff!");
        let launch = 0;
        launch += 10;

        if(results === true){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            rocket.style.bottom = String(launch) + "px";
        }
    });

    landing.addEventListener("click",function(){
        let results = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        rocket.style.bottom = "0px";
    });

});
