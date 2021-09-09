
const drinks = {
  coffee: [
    {
      title: "Early Bird",
      price: "$$",
    },
    {
      title: "Dark Horse",
      price: "$",
    },
    {
      title: "Le Gourmand",
      price: "$",
    },
    {
      title: "At Origin Coffee",
      price: "$$",
    },
    {
      title: "Sam James Coffee Bar",
      price: "$$",
    },
    {
      title: "Pilot Coffee Roasters",
      price: "$$",
    },
    {
      title: "Dineen Coffee Co",
      price: "$$",
    },
    {
      title: "Rooster Coffee House",
      price: "$$",
    },
    {
      title: "Starbucks",
      price: "$",
    },
    {
      title: "Second Cup",
      price: "$",
    },
    {
      title: "McCafe",
      price: "$",
    },
    {
      title: "Tim Hortons",
      price: "$",
    },
    {
      title: "Jimmy's Coffee",
      price: "$",
    },
    {
      title: "Mos Mos Coffee",
      price: "$",
    },
    {
      title: "i deal coffee",
      price: "$",
    },
    {
      title: "Prologue Cafe",
      price: "$$",
    },
    {
      title: "Coffee Oysters Champagne",
      price: "$$",
    },
  ],

  tea: [
    {
      title: "David's Tea",
      price: "$$",
    },
    {
      title: "Tealish",
      price: "$$",
    },
    {
      title: "Teavana",
      price: "$",
    },
    {
      title: "Tao Tea Leaf",
      price: "$$",
    },
    {
      title: "Icha Tea",
      price: "$$",
    },
    {
      title: "Crimson Teas",
      price: "$",
    },
    {
      title: "Kitten and the bear",
      price: "$$",
    },
    {
      title: "Kung Fu Tea on Spadina",
      price: "$",
    },
    {
      title: "Chatime",
      price: "$",
    },
    {
      title: "Ten Ren's Tea",
      price: "$$",
    },
    {
      title: "Spot Crepes & Tea",
      price: "$",
    },
    {
      title: "CoCo fresh Tea & Juice",
      price: "$",
    },
    {
      title: "The Alley",
      price: "$$",
    },
    {
      title: "Tea for U",
      price: "$",
    },
    {
      title: "Elchi Chai Shop",
      price: "$",
    },
    {
      title: "Gong Cha",
      price: "$",
    },

    {
      title: "t-buds",
      price: "$$",
    },
    {
      title: "Tsujiri Dundas",
      price: "$$",
    },
  ],
};


const form = document.querySelector('form');

form.addEventListener('submit', function(e) {

    e.preventDefault();

    const drinkChoice = document.querySelector("input[name=beverage]:checked").value;

    const priceChoice = document.querySelector(
      "input[name=price]:checked"
    ).value;
    

    const arrayChoice = drinks[drinkChoice];

    const filteredChoice = [];

    for (let i = 0; i < arrayChoice.length; i++) {
        const store = arrayChoice[i];

        if (store.price === priceChoice) {
            filteredChoice.push(store)
        }
    }

    const displayChoices = randomShop(filteredChoice);
    // console.log(displayChoices);

    const result = document.querySelector('.result');

    result.innerHTML = `<h2 class='choice'>${displayChoices.title}</h2>`;


});

const randomShop = (element) => {
  const randomIndex = Math.floor(Math.random() * element.length);

  return element[randomIndex];
};


