
// Write your helper functions here
require('cross-fetch/polyfill');
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons:${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
};

// validate given input and return response 
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(Number(testInput))) {
        return "Is a Number";
    } else {
        return "Not a Number";
    };

}
//forSubmission function
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {

    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus")
    

    let isValid = true;
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty"
        || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        isValid = false;
        alert("All fields are required");
    } else if ((validateInput(fuelLevel)) === 'Not a Number' || (validateInput(cargoMass)) === 'Not a Number') {
        isValid = false;
        alert('Please enter a number for the fuelLevel and cargoMass');
    } else if ((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number")) {
        isValid = false;
        alert("Please enter a name for the pilot and co-pilot");
    }
    //checking whether the fields are having value
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    //checking the fuelLevel
    if (isValid) {
         if (Number(fuelLevel) < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            if(Number(cargoMass) > 10000) {
                cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            } else {
                cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            }
            launchStatus.style.color = "red";
        } else if (Number(cargoMass) > 10000) {
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            list.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'red';
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        } else if(Number(fuelLevel) > 10000 && Number(cargoMass) > 10000) {
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            list.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'red';
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        } else if((Number(fuelLevel) < 10000 && Number(cargoMass) < 10000)) {
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            list.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'red';
            fuelStatus.innerHTML = "Fuel level too low for launch";
        }
        else {
                list.style.visibility = "visible";
                launchStatus.style.color = "green";
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
        }
    }
};


async function myFetch() {
    let planetsReturned;
   
    planetsReturned =  fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;