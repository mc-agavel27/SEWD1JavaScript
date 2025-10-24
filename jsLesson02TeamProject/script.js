// ============================================
// TEAM PROFILE PAGE
// Team Members: [Add your names here!]
// ============================================

// ============================================
// MEMBER 1 VARIABLES
// ============================================

let member1Name = "Tyler";
let member1Age = 17;
let member1Game = "Minecraft";
let member1Music = "Rustage";
let member1BestFood = "mac and cheese";
let member1Restaurant = "home";
let member1PitBull = "yes";
let member1Basketball = "nether";
let member1Future = "gaming";


// ============================================
// MEMBER 2 VARIABLES
// ============================================

//Just copy from member 1 and change values: 
// let's debug the member2Age issue here - we need to define the member2Age variable or the .js won't run //
let member2Name = "Adam";
let member2Age = 17;
let member2Game = "OneShot";
let member2Music = "Nirvana";
let member2BestFood = "Chicken Alfredo";
let member2Restaurant = "home";
let member2PitBull = "no";
let member2Basketball = "LeBron";
let member2Future = "nothing";

// ============================================
// TEAM CALCULATIONS
// ============================================

// How many team members?
let totalMembers = 2;  // Change this to 3 if you have 3 people!

// Calculate total age
let totalAge = member1Age + member2Age;  // Add member3Age if needed

// Calculate average age
let averageAge = totalAge / totalMembers;

// ============================================
// DISPLAY TEAM STATS
// ============================================

document.getElementById('total-members').textContent = totalMembers;
document.getElementById('total-age').textContent = totalAge;
document.getElementById('average-age').textContent = averageAge.toFixed(1);

// ============================================
// DISPLAY MEMBER 1
// ============================================

document.getElementById('member1Name').textContent = member1Name;
document.getElementById('member1Age').textContent = member1Age;
document.getElementById('member1Game').textContent = member1Game;
document.getElementById('member1Music').textContent = member1Music;
document.getElementById('member1BestFood').textContent = member1BestFood;
document.getElementById('member1Restaurant').textContent = member1Restaurant;
document.getElementById('member1PitBull').textContent = member1PitBull;
document.getElementById('member1Basketball').textContent = member1Basketball;
document.getElementById('member1Future').textContent = member1Future;


// ============================================
// DISPLAY MEMBER 2
// ============================================

// again copy from member 1, but remember to change the element IDs: 'member2-name' etc.
document.getElementById('member2-name').textContent = member2Name;
document.getElementById('member2-age').textContent = member2Age;
document.getElementById('member2-game').textContent = member2Game;
document.getElementById('member2-music').textContent = member1Music;
document.getElementById('member2-bestfood').textContent = member2BestFood;
document.getElementById('member2-restaurant').textContent = member2Restaurant;
document.getElementById('member2-pitbull').textContent = member2PitBull;
document.getElementById('member2-basketball').textContent = member2Basketball;
document.getElementById('member2-future').textContent = member2Future;



// ============================================
// LOG TO CONSOLE (for testing)
// ============================================

console.log("Team loaded!");
console.log("Total members:", totalMembers);
console.log("Total age:", totalAge);
console.log("Average age:", averageAge);