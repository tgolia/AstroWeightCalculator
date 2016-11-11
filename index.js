var planets = [                             //creates an array of objects for each planet
    { name: 'Sun', gravity: 27.9 },
    { name: 'Mercury', gravity: 0.377 },
    { name: 'Venus', gravity: 0.9032 },
    { name: 'Earth', gravity: 1 },
    { name: 'Moon', gravity: 0.1655 },
    { name: 'Mars', gravity: 0.3895 },
    { name: 'Jupiter', gravity: 2.640 },
    { name: 'Saturn', gravity: 1.139 },
    { name: 'Uranus', gravity: 0.917 },
    { name: 'Neptune', gravity: 1.148 },
    { name: 'Pluto', gravity: 0.06 }
];

function roundToDecimal(num,dec) {        //custom function that rounds number num to decimal dec that you specify
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
      return rounded;
    }

//1. How to dynamically generate the select element

for (var i = 0; i < planets.length; i++) {  //iterates through objects in planets array
    var planet = planets[i];                  //creates variable for 'name' property of object

    var optionElement = document.createElement('option'); //creates planet list element objects
    optionElement.value = planet.gravity;                 //assigns value to list element object
    optionElement.innerHTML = planet.name;                //assigns name to list element object

    var selectElement = document.getElementById('selectPlanet'); //adds planets list elements to list
    selectElement.appendChild(optionElement);                    //adds list element objects to list

    //2. Bind a function to the click event
    var button = document.getElementById('calculateWeight');    //names button variable equal to html button element

    button.onclick = function() {          //function to execute certain commands upon the button being clicked
        var inputWeight = document.getElementById('inputWeight'); //

        var weight = inputWeight.value;

        var selectElement = document.getElementById('selectPlanet');

        var selectedIndex = selectElement.selectedIndex;

        var selectedOption = selectElement.options[selectedIndex];

        var planetName = selectedOption.text;
        var planetValue = selectedOption.value;

        var decimals = 2;

        var userWeightOnPlanet = roundToDecimal(weight * planetValue, decimals);
        var barbieWeightOnPlanet = roundToDecimal(userWeightOnPlanet * .5, decimals)

        if (planetName === 'Sun' || planetName === 'Moon') {
            var message = 'If you were on the ' + planetName + ', you would weigh ' + userWeightOnPlanet + ' lbs.';
        } else {
            var message = 'If you were on ' + planetName + ', you would weigh ' + userWeightOnPlanet + ' lbs.';
        }

        if (planetName === 'Sun' || planetName === 'Moon') {
            var messageBarbie = 'If Barbie was on the ' + planetName + ', she would weigh ' + barbieWeightOnPlanet + ' lbs.';
        } else {
            var messageBarbie = 'If Barbie was on ' + planetName + ', she would weigh ' + barbieWeightOnPlanet + ' lbs.';
        }

        var output = document.getElementById('output');
        var outputBarbie = document.getElementById('outputBarbie');

        // Assign the message to the output element we just fetched from the DOM
        if (isNaN(weight) || weight == '') {
          output.style.visibility='hidden';
          outputBarbie.style.visibility='hidden';
          document.getElementById('gif').src = 'img/dancing.gif';
          document.getElementById('comment').innerHTML='Please enter a number.';
          document.getElementById('comment').style.visibility='visible';
          document.getElementById('sassyComment').style.visibility='hidden';
        } else {
          output.style.visibility='visible';
          outputBarbie.style.visibility='visible';
          output.innerHTML = message;
          outputBarbie.innerHTML = messageBarbie;
          document.getElementById('gif').src = 'img/kobayashi.gif';
          document.getElementById('comment').style.visibility='hidden';
          document.getElementById('sassyComment').style.visibility='visible';
        }
    }
}



