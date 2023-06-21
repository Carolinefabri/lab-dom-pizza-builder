// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}


function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((cogumelo) => {
    if (state.mushrooms) {
      cogumelo.style.visibility = 'visible';
   }
   else {
    cogumelo.style.visibility = 'hidden';
   }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(pimentaVerde){
    if (state.greenPeppers) {
      pimentaVerde.style.visibility = "visible";
    }
    else {
      pimentaVerde.style.visibility = "hidden";
    }
  })
}


function renderWhiteSauce() {}
document.querySelectorAll('.whiteSauce').forEach((sauce) => {
  if (state.whiteSauce) {
    sauce.style.visibility = 'visible';
  } else {
    sauce.style.visibility = 'hidden';
  }
});


function renderGlutenFreeCrust() {

  document.querySelectorAll('.glutenFreeCrust').forEach((gluten) => {
    if (state.glutenFreeCrust) {
      gluten.style.visibility = 'visible';
    } else {
      gluten.style.visibility = 'hidden';
    }
  });
}



function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  function renderButtons() {
    const arr = document.querySelectorAll('.btn');
    const keys = Object.keys(state)
  
    for (let i = 0; i < arr.length; i++) {
      console.log(state[keys[i]]);
      if (state[keys[i]]) {
        arr[i].classList.add('active');
      } else {
        arr[i].classList.remove('active');
      }
    }
  }
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`


document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-whiteSauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-glutenFreeCrust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}