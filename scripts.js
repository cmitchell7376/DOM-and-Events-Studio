// Write your JavaScript code here.
// Remember to pay attention to page loading!
function inti(){
    let takeoff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let flightStatus = document.getElementById("flightStatus");

    function statusChange(){
        flightStatus.innerHTML = "Shuttle in flight.";
    }

    if(window.confirm("Is the shuttle ready for takeoff!" === true)){
        takeoff.addEventListener("click",statusChange);
    }


}
window.addEventListener("load",inti);