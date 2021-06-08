// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    //buttons
   let takeOffButton = document.getElementById("takeoff");
   let landButton = document.getElementById("landing")
   let abortButton = document.getElementById("missionAbort")
   let upButton = document.getElementById("up");
   let downButton = document.getElementById("down");
   let rightButton = document.getElementById("right");
    let leftButton = document.getElementById("left");
    // rocketImage.style.position = 'absolute';
    // rocketImage.style.left = 0 px;
    // rocketImage.style.bottom = 0 px;

   //HTML elements we are effecting with our buttons
    let flightStatus = document.getElementById("flightStatus");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    let shuttleBackground= document.getElementById("shuttleBackground");
    let rocketImage = this.document.getElementById("rocket");
   // take off button function(if clicked)
   takeOffButton.addEventListener("click",function(){
       const takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(takeOffConfirmation){
          flightStatus.innerHTML = "Shuttle in Flight.";
          shuttleBackground.style.backgroundColor = "blue";
          spaceShuttleHeight.innerHTML = 10000;
        }
   });
   // land button function (if clicked)
   landButton.addEventListener("click",function(){
       alert("The shuttle is landing. Landing gear engaged.");
       flightStatus.innerHTML = "The shuttle has landed.";
       shuttleBackground.style.backgroundColor = "green";
       spaceShuttleHeight.innerHTML = 0;
   });
   //abort button function (if clicked)
   abortButton.addEventListener("click",function(){
        const abortButtonConfirtmation = window.confirm("Confirm that you want to abort the mission.");
        if (abortButtonConfirtmation){
            flightStatus.innerHTML = "MISSION ABORTED";
            shuttleBackground.style.backgroundColor = "red";
            spaceShuttleHeight.innerHTML = 0;
        }
   });
//    // up/down/right/left button pushed
   upButton.addEventListener("click", function(){
    let shuttleHeightNumber = Number(spaceShuttleHeight.innerHTML);
    spaceShuttleHeight.innerHTML = shuttleHeightNumber + 10000;
//     // parseInt
//     // let bottomPosition = rocketImage.style.bottom;
//     // let bottomPositionNumber = parseInt(bottomPosition);
//     let movement = bottomPositionNumber + 10 + "px";
//     // assign this style.bottom poperty to a string it "10px"
//     rocketImage.style.bottom = movement;
//    });
//    downButton.addEventListener("click",function(){
//     let shuttleHeightNumber = Number(spaceShuttleHeight.innerHTML);
//     spaceShuttleHeight.innerHTML = shuttleHeightNumber - 10000;
//    });
//    leftButton.addEventListener("click",function(){

//    });
//    rightButton.addEventListener("click", function(){

//    });
});