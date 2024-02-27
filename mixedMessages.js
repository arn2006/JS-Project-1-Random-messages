const createMessage = () => {
  let listItems = Math.floor(Math.random() * 15);
  let str = `${randNum(greetings)}
Please buy this at the store:

  `;
  for (let i = 0; i < listItems; i++) {
    str = str + `${i + 1}. ${newOrder()}`;
  };
  
  return str;
};

const randNum = arr => {
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
};

const newOrder = () => {
  let quant = randNum(quantity);
  let category = randNum(food);
  let item = randNum(category);
  return `${quant} ${item}
  `;
};

const greetings = ['Hello!', 'Hi!', 'Good morning!', 'Good day!', 'Good afternoon!', 'Good evening!'];
const fruits = ['red apple', 'green apple', 'banana', 'orange', 'lemon', 'grape', 'peach', 'pear'];
const vegetables = ['carrot', 'broccoli', 'coliflower', 'cucumber', 'potaoes', 'salad', 'tomatoe', 'paprika', 'corn', 'onion'];
const dairy = ['milk', 'yogurt', 'sour cream', 'cheese', 'butter', 'cream'];
const baked = ['bread', 'rolls', 'hamburger bread', 'hot dog bun', 'bun'];
const meat = ['hamburger', 'sausage', 'minced meat', 'tenderloin', 'steak', 'entrecote', 'ham', 'meatballs'];
const baking = ['sugar', 'flour', 'yeast', 'baking soda', 'egg'];
const beverages = ['water', 'apple juice', 'orange juice'];
const quantity = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const food = [fruits, vegetables, dairy, baked, meat, baking, beverages];

console.log(createMessage());