// Write your JavaScript code here!

window.addEventListener("load", function () {
    // get form and the list from dom
    const form = document.querySelector("form");
    const list = document.getElementById("faultyItems")
    //on submit get the required fields from screen and pass to formSubmission function
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const pilot = document.querySelector("input[name=pilotName]").value;
        const copilot = document.querySelector("input[name=copilotName]").value;
        const fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        const cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

    })
});







let listedPlanets;
// Set listedPlanetsResponse equal to the value returned by calling myFetch()
let listedPlanetsResponse = myFetch();
listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);


    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.   
    let planet = pickPlanet(listedPlanets);

    let name = planet.name;
    let diameter = planet.diameter;
    let star = planet.star;
    let distance = planet.distance;
    let imageUrl = planet.image;
    let moons = planet.moons;


    addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

});




