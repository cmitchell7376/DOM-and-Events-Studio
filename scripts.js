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
    let rocket = document.getElementById("rocket");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let launch = 0;
    let horiz = 0;

    takeoff.addEventListener("click",function(){
        let results = window.confirm("Is the shuttle ready for takeoff!");
        if(results === true){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            launch += 10;
            rocket.style.bottom = String(launch) + "px";
            spaceShuttleHeight.innerHTML = String(launch * 1000);
        }
    });

    landing.addEventListener("click",function(){
        let results = window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        rocket.style.bottom = "0px";
        spaceShuttleHeight.innerHTML = "0";
        launch = 0;
    });

    missionAbort.addEventListener("click",function(){
        let results = window.confirm("Confirm that you want to abort the mission.");

        if(results === true){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            rocket.style.bottom = "0px";
            spaceShuttleHeight.innerHTML = "0";
            launch = 0;
        }
    });

    up.addEventListener("click",function(){
        launch += 10;
        rocket.style.bottom = String(launch) + "px";
        spaceShuttleHeight.innerHTML = String(launch * 1000);
    });

    down.addEventListener("click",function(){
        launch -= 10;
        rocket.style.bottom = String(launch) + "px";
        spaceShuttleHeight.innerHTML = String(launch * 1000);
    });

    left.addEventListener("click",function(){
        horiz -= 10;
        rocket.style.left = String(horiz) + "px";
    });

    right.addEventListener("click",function(){
        horiz += 10;
        rocket.style.left = String(horiz) + "px";
    });

});
