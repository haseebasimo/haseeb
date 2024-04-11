//Q2

let message = 'haseeb'
console.log(`hello ${message}, would you like to learn typescript today?`)


//Q3
let personName = 'haseeb asim'
console.log(personName.toLocaleUpperCase());
console.log(personName.toLowerCase());
console.log(personName.charAt(0) + personName.slice(1));

//Q4
console.log('albert Einstein once said, "A person who never made a mistake never tried anything new."');

//Q5
let famousPerson : string ="Albert Einstein";
let Message : string = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
console.log(Message)

//Q6

let Name : string = "\t\n haseeb \t\n";
console.log(Name);
console.log(Name.trim());

//Q7
 
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//Q8
console.log(5+3);
console.log(12-4);
console.log(16/2);
console.log(2*4);




//Q9

let favoriteNumber: number = 25;
console.log(`My favorite number is ${favoriteNumber}`);
  //Q10

//Haseeb Asim, 2k24-3-09
//Program discribe personal message

let myself : string= "Haseeb asim";
console.log(`"Hello ${myself} would you like to learn some typescript today"`);


//Q11

let Names:string [] = ["hassam, umair, wadood"];
for (let i=0; i < Names.length; i++ ) {
    console.log(Names [i]);
}

//Q12

let names = ["umair, hassam ,wadood"];
for (let name of names) {
  console.log(`Hello ${name}, would you like to learn some typescript today?`);
}

//Q13

let transports : string[] =["united moterbike","hyunda car","bianchi bicycle"];
transports.forEach(transports => {
  console.log(`I like to own a ${transports}`);
});

//Q14
 let Guest : string[]= ["hassan ", "ahmad ","akhtar","shakell"];
Guest.forEach(Guest => {
  console.log(`Dear ${Guest}. would you like to joint at dinner`);
  
});
//Q15
let unableToAttend ="hassan";
console.log(`${unableToAttend} cant make it to dinner.`);
let newGuest = "haseeb asim";
Guest[Guest.indexOf(unableToAttend)]= newGuest;
Guest.forEach(guests => {
  console.log(`Dear ${Guest}, wouls you like me to join at dinner`)
  
});
//Q16

  let guests: string[]= ["haseeb","marie curie","charles darwin" ];
console.log("Great news! I found a bigger dinner tabel!");
guests.unshift("isaac newton");
guests.splice(guests.length/2,0,"malik haseeb");
guests.push(" Ada lovelace");
guests.forEach(guests => {
  console.log(`Dear ${guests}, would  you like to join me for dinner?`);
  
});
//Q17

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests.splice(0, guests.length);
console.log(guests);

//Q18
let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);
//Q19

let guest: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log(`I am inviting ${guest.length} people to dinner.`);


//Q20

let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);

//Q21


let book: { title: string; author: string; yearPublished: number } = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

//Q22
let friends: string[] = ["Alice", "Bob", "Charlie"];

console.log(friends[3]); 
friends[2] = "Charlie"; 
//Q23
let car = 'Kia';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'Kia'); 

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); 

//Q24

console.log("Testing equality with strings:");
console.log("apple" == "apple"); 
//console.log("apple"== "Apple"); 
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple")

console.log("Numerical tests:");
console.log(10 > 5); 
console.log(2 < 1); 

console.log("Tests with 'and' and 'or':");
console.log(true && false); 
//console.log(true  false); 
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); 

console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango"));


//Q25

let alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}

//Q26
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}

//Q27
alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
} else {
    console.log("You just earned 10 points.");
}


//Q28

let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 4) {
    console.log("The person is a toddler.");
} else if (age < 13) {
    console.log("The person is a kid.");
} else if (age < 20) {
    console.log("The person is a teenager.");
} else if (age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


//Q29
let favorite_fruits: string[] = ["apples", "bananas", "cherries"];

if (favorite_fruits.includes("bananas")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}

//Q30
let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
//Q31

let username:string[]=[];
if (username.length===0){
    console.log("We need to find some user!")
} else{
    // great user
}

//Q32

let current_users :String[]=["user1","admin", "user3", "user4", "user5"];
let new_user : string[]=["User 6","User7","User8","admin","User9"];
new_user.forEach(newuser => {
  if (current_users.some(current_users=>current_users.toLowerCase()===newuser.toLowerCase()))
  {
    console.log(`${newuser}, needs to enter a new username`)
  } else{

    console.log(`${newuser}, is avalible`)
  }
  
});

//Q33

let numbers :number[]=[1 , 2 , 3 , 4, 5, 6, 7];
numbers.forEach(number => {
  
  let suffix = "th"
  if (number === 1) {
    suffix="st";
  } else if (number ===2){
    suffix="nd";
  } else if (number ===3){
    suffix="rd";
  }
  console.log(`${number},${suffix}`);
});

//Q34

let pizzas :string[] =["fajjita", "tikka", "peppreroni"];
pizzas.forEach(pizzas => {
  console.log(`I like ${pizzas} pizza`)
});
console.log("I really love pizza");

//Q35 
let animals :string[]=["Dog","Cat","Rabbit"];
animals.forEach(animals => {
  console.log(`A ${animals} would make a good pet.`)
  
});
console.log("Any of these animal would make a great pet!!");


//Q36
function make_shirt(size: string, message: string) {
  console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");



//Q37

function make_tshirt(size :string="Large", messagE :string= "I love typescript") {
  console.log(`Make a${size} T-shirt,with message ${messagE} printed on it`)
  
}
make_tshirt();
make_tshirt("small, Dive into coding");
make_tshirt("medium");



//Q38

function  Name_city(city:string, country:string='Pakistan') {
  console.log(`${city} is in ${country}`)
  
}
Name_city("Chackwal");
Name_city("Islamabad");
Name_city("Tehran ", "Iran");

//Q39
function city_country(city:string, country:string): string {
  return`${city}, ${country}` 
}
console.log(city_country("Chackwal","Pakistan"));
console.log(city_country("kabul","Afganistan"));
console.log(city_country("Hanoi", "vietnam"));

//Q40

function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
      //album["artist"] = tracks;
  }
  return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12)); 

//Q41
let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

//Q42

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = magicians[i] + " the Great";
  }
}

make_great(magicians); 
show_magicians(magicians); 

// Q43

//let magicians: string[] = ["Alice", "David", "Chris"];

//function make_great(magicians: string[]): string[] {
  //  let greatMagicians = [];
    //magicians.forEach(magician => {
      //  greatMagicians.push(`${magician} the Great`);
  //  });
    //return greatMagicians;
//}

let greatMagicians = make_great(magicians.slice()); 
console.log("Original magicians:");
show_magicians(magicians); 

console.log("Great magicians:");
//show_magicians(greatMagicians); 


//Q44

function make_sadwich(items:string[]) {
  console.log(`Making a sandwich with ${items.join(" ")}`);
  
}
//make_sadwich("cheese", "ham ");
//make_sadwich("lettuce");
//make_sadwich("mustard ","mayo");

//Q45
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
  let car = { manufacturer, model };
 // options.forEach(([key, value]) => car [key] = value);
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));


//calculations
function add(x :number,y:number):number {
  return x + y;
}
function subtract(x:number,y:number) {
  return x - y;
}
function divide(x:number, y :number) {
  if (y === 0) {
    throw new Error("Cannot divide by zero, correct you number");
    
  } else {
    return x / y;
  }
}
function multiply(x :number, y : number) {
  return x*y
}
console.log("addition",add(5, 3));
console.log("subtraction",subtract(5,3));
console.log("multiplication",multiply(5,3));
console.log("Division",divide(5,3));


//calculator


