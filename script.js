// let dog = {
//     name: "dude",
//     numLegs: 4
//   };

// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   // Only change code below this line
//   console.log(dog.name);
//   console.log(dog.numLegs);

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//   };
  
//   dog.sayLegs();

// function Dog (){
//     this.name ="poop";
//     this.color = "brown";
//     this.numLegs = 4;
//   }

// function Dog() {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
//   }
//   // Only change code below this line
  
//   let hound = new Dog();


// function Dog(name,color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4
//   }
//   let terrier = new Dog();


// function House(numBedrooms) {
//     this.numBedrooms = 4;
//   }
  
//   // Only change code below this line
//   let myHouse = new House();
  
  
//   myHouse instanceof House;

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
//   }
  
//   let canary = new Bird("Tweety");
//   let ownProps = [];
//   // Only change code below this line
//   for(let numLegs in canary){
//     if(canary.hasOwnProperty(numLegs)){
//       ownProps.push(numLegs);
//     }
//   }
// function Dog(name) {
//     this.name = name;
//   }
//   Dog.prototype.numLegs = 4;
  
  
  
//   // Only change code above this line
//   let beagle = new Dog("Snoopy");
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {
//       return "This dog has " + dog.numLegs + " legs.";
//     }
//   };
  
//   dog.sayLegs();
  