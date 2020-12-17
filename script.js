// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch('https://handlers.education.launchcode.org/static/planets.json').then( function (response) {
   response.json().then(function (data) {
      let destinationPlanet = document.getElementById('missionTarget');
      destination = data[0];
destinationPlanet.innerHTML = 
`<h2>Mission Destination</h2>
<ol>
   <li>Name: ${destination.name}</li>
   <li>Diameter: ${destination.diameter}</li>
   <li>Star: ${destination.star}</li>
   <li>Distance from Earth: ${destination.earth}</li>
   <li>Number of Moons: ${destination.moons}</li>
</ol>
<img src="${destination.image}">`
});
});
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let items = document.getElementById('faultyItems');
      let launchStatus = document.getElementById('launchStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus')
      let ready = true;
      let pilotName = document.querySelector("input[name=pilotName]");
      let  copilotName = document.querySelector("input[name=copilotName]");
      let  fuelLevel = document.querySelector("input[name=fuelLevel]");
      let  cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "" ){
         alert("All fields are required!");
      }else if(isNaN(pilotName.value) === false || isNaN(copilotName.value) === false || isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Valid inputs are required!"); 
      }
      else{
         document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName.value } Ready`
         document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName.value} Ready`
         if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
            fuelStatus.innerHTML = 'Not enough fuel for launch';
            cargoStatus.innerHTML = 'Too much mass for the shuttle to take off';
            items.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle not ready for launch';
         } else if(fuelLevel.value > 10000 && cargoMass.value > 10000){
            fuelStatus.innerHTML = 'Fuel level is good enough for launch';
            cargoStatus.innerHTML = 'Too much mass for the shuttle to take off';
            items.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle not ready for launch';
         }else if(fuelLevel.value < 10000 && cargoMass.value < 10000){
            fuelStatus.innerHTML = 'Not enough fuel for launch';
            cargoStatus.innerHTML = 'Cargo mass is good enough for launch';
            items.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle not ready for launch';
         } else {
            fuelStatus.innerHTML = 'Fuel level is good enough for launch';
            cargoStatus.innerHTML = 'Cargo mass is good enough for launch';
				items.style.visibility = 'visible';
				launchStatus.style.color = 'green';
            launchStatus.innerHTML = 'Shuttle is ready for launch';
            
			}

      }
   }); 
});
