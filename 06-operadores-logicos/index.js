// logicos 

// && E (AND)
// || OU (OR)
// ! NÃO (NOT)

const a = true
const b = false 
console.log(a && b)


const lavarLouca = false;
const fazerDever = false; 
console.log(lavarLouca || fazerDever)

const isOpen = false
console.log(!isOpen)

const tomouBanho = true;
const escovou = false;
const lavou = true;
const dever = false;

console.log((tomouBanho && escovou) && (lavou || dever));