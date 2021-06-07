// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    //buttons
   let takeOffButton = document.getElementById("takeoff");
   let landButton = document.getElementById("landing")
   let abortButton = document.getElementById("missionAbort")

   //HTML elements we are effecting with our buttons
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    let shuttleBackground= document.getElementById("shuttleBackground");

   // take off button function
   takeOffButton.addEventListener("click",function(){
       const takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeOffConfirmation){
          flightStatus.innerHTML = "Shuttle in Flight.";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML =+ 10000;
        }
   });
   landButton.addEventListener("click",function(){
       alert("The shuttle is landing. Landing gear engaged.");
       flightStatus.innerHTML = "The shuttle has landed.";
       shuttleBackground.style.backgroundColor = "green";
       spaceShuttleHeight.innerHTML = 0;
   });
   abortButton.addEventListener("click",function(){
        const abortButtonConfirtmation = window.confirm("Confirm that you want to abort the mission?");
        if (abortButtonConfirtmation){
            flightStatus.innerHTML = "MISSION ABORTED";
            shuttleBackground.style.backgroundColor = "red";
            spaceShuttleHeight.innerHTML = 0;
        }
   });

});