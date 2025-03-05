let flavor = prompt ('Please enter a list of flavors seperated by a comma' , 'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

// The user's input string is split into an array of strings.

const inputFlav = flavor.split(",");

console.log(inputFlav);

// A loop is used to iterate through the array of flavors.



alert (`These are there flavors you entered: ${inputFlav}`);

// An object is used to keep count of how many orders there are of each flavor.


function addObjectProperty (order){
const cusFlav = {};
  
for (let i = 0; i < order.length; i++){

  console.log(order[i]);

  if (cusFlav[order[i]]){
    cusFlav[order[i]] = cusFlav[order[i]] + 1
  } else {
    cusFlav[order[i]] = 1
  }
 
} 
return cusFlav
}

  console.table(addObjectProperty(inputFlav));


// The program correctly counts the number of each flavor in the user's input.

  alert (`This is how many orders was placed: ${inputFlav.length}`);