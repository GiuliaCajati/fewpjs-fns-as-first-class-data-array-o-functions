"use strict";

function wakeDog(dogName, dogBreed) {
  return "Wake ".concat(dogName, " the ").concat(dogBreed);
}

function leashDog(dogName, dogBreed) {
  return "Leash ".concat(dogName, " the ").concat(dogBreed);
}

function walkToPark(dogName, dogBreed) {
  return "Walk to the park with ".concat(dogName, " the ").concat(dogBreed);
}

function throwFrisbee(dogName, dogBreed) {
  return "Throw the frisbee for ".concat(dogName, " the ").concat(dogBreed);
}

function walkHome(dogName, dogBreed) {
  return "Walk home with ".concat(dogName, " the ").concat(dogBreed);
}

function unleashDog(dogName, dogBreed) {
  return "Unleash ".concat(dogName, " the ").concat(dogBreed);
}

var routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  var messagesArray = [];
  routine.forEach(function (fn) {
    return messagesArray.push(fn(dogName, dogBreed));
  });
  return messagesArray;
} //return routine.map(fn => fn(dog, breed))