// Characters


var mrGreen =  {
  first_name:   "Jacob",
  last_name:    "Green",
  color:        "green",
  description:  "He has a lot of connections",
  age:          45,
  image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation:   "Entrepreneur"
  };
  
  var drOrchid = {
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:   "Scientist"
  };
  
  var profPlum = {
  first_name:   "Victor",
  last_name:    "Plum",
  color:        "purple",
  description:  "Billionare video game designer",
  age:          22,
  image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation:   "Designer"
  };
  
  var missScarlet = {
  first_name:   "Kasandra",
  last_name:    "Scarlet",
  color:        "red",
  description:  "She is an A-list movie star with a dark past",
  age:          31,
  image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation:   "Actor"
  };
  
  var mrsPeacock = {
  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité"
  };
  
  var mrMustard = {
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
  };
  
  // Weapons
  var weapons = [
  {name: "rope", color: "black", description: "plastic",   weight: 10},
  {name: "knife", color: "white", description: "wood",   weight: 8},
  {name: "candlestick", color: "blue", description: "metal",   weight: 2},
  {name: "dumbbell", color: "green", description: "heavy",   weight: 30},
  {name: "poison", color: "yellow", description: "sweet",   weight: 2},
  {name: "axe", color: "purple", description: "rusty",   weight: 15},
  {name: "bat", color: "brown", description: "gum",   weight: 13},
  {name: "trophy", color: "pink", description: "win",   weight: 25},
  {name: "pistol", color: "orange", description: "007",   weight: 20}
  ]
  
  // Rooms
  var rooms = [ 
  {name: "Dinning Room"},
  {name: "Conservatory"},
  {name: "Kitchen"},
  {name: "Study"},
  {name: "Library"},
  {name: "Billiard Room"},
  {name: "Lounge"},
  {name: "Ballroom"},
  {name: "Hall"},
  {name: "Spa"},
  {name: "Living Room"},
  {name: "Observatory"},
  {name: "Theater"},
  {name: "Guest House"},
  {name: "Patio"}
  ];
  
  
  // Characters Collection
  var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
  
  // Rooms' Collection
  var roomsArray = [rooms];
  
  // Weapons Collection
  var weaponsArray = [weapons];
  
//Iteration 2
//random selector
function randomSelector(array) {
  var result = "";
  result = array[Math.floor(Math.random() * array.length)];

   return result;
}

// console.log(randomSelector(weapons));

  // var misteryEnvelope = [];
// function pickMistery() {

//   let misteryEnvelope = [];
//   //  return misteryEnvelope.push(randomSelector(charactersArray));
//     misteryEnvelope.push(randomSelector(weapons));
//     misteryEnvelope.push(randomSelector(rooms));
//     misteryEnvelope.push(randomSelector(charactersArray));
//      // randomSelector();
// // /   / randomSelector();

//     // console.log(misteryEnvelope[0].name);
//     //  console.log(misteryEnvelope[1].name);
//     //   console.log(misteryEnvelope[2].first_name);
//     return misteryEnvelope
//    }

// console.log(pickMistery(charactersArray));

  function pickMystery(charactersArray, weapons, rooms) {
    var mysteryEnvelope = {}
    mysteryEnvelope.murderer = randomSelector(charactersArray)
    mysteryEnvelope.weapon = randomSelector(weapons)
    mysteryEnvelope.room = randomSelector(rooms)

    return mysteryEnvelope
  }


//iteration 3
// function revealMistery(misteryEnvelope) {

//   this.charactersArray = charactersArray;
//   this.rooms = rooms;
//   this.weapons = weapons;
//   this.getMisteryEnvelope = function() {
//     return misteryEnvelope[2].first_name + " " + misteryEnvelope[1].name + " " 
//     + misteryEnvelope[0].name;
//   //    <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!
//   }

//  console.log( getMisteryEnvelope())
// }
// var theMystery = pickMistery(charactersArray, weapons, rooms);

function revealMistery(misteryEnvelope) {
    
    return misteryEnvelope[2].first_name + " " + misteryEnvelope[2].last_name + " killed Mr.Boddy using the " + misteryEnvelope[0].name + " " 
    + " n the " + misteryEnvelope[1].name + " !!!";

}



// console.log(revealMistery( pickMistery() ));

//after that. Make a game constructor that creates
// an game object given any array of characters, weapons and rooms
function Game(characters, weapons, rooms) {
  this.characters = characters;
  this.weapons =weapons;
  this.rooms = rooms;
  this.init = function() {

  }

}
// var anGame  = new Game("joHn", "arrow", "woods");
// anGame.init();
// console.log(anGame);



// var Game = {
//   // initialize the game
//   init: function (characters, weapons, rooms) {
//     this.characters = characters;
//     this.weapons = weapons;
//     this.rooms = rooms;
//   }
// };

// var game = Object.create(Game);
// game.init("oreO", "pistol", 1, "bedroom");
// console.log(game);

   document.getElementById("murderer").style.visibility = "hidden";

function showMistery(mystery) {
    var mystery = pickMystery(charactersArray, weapons, rooms);
    var charImg = mystery.murderer.image;
    document.getElementById("murderer").style.visibility = "visible";
    var img = document.getElementById("murderer").setAttribute("src", charImg);
  
    var ranRoom = document.getElementsByClassName("room")[0].innerHTML = mystery.room.name;
 
    var ranWeapon = document.getElementById("weapon").innerHTML = mystery.weapon.name;

    var randomButton = img + " killed Mr.Body in the " + ranRoom + " with a " + ranWeapon;

    return randomButton;
}



  document.getElementById("button").addEventListener("click", function(){
  document.getElementById("output").innerHTML = showMistery();
});

