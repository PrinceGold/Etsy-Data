// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
 let avg = 0;
  for (let i = 0; i < data.length; i++){
	avg += data[i].price;
 }
return (avg / data.length)
}


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
	let costly = []
	for (let i = 0; i < data.length; i++){
		if (data[i].price < 18.00 && data[i].price > 14.00){
			costly.push(data[i].price)
		}
	}
	return costly

}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (let i = 0; i < data.length; i++){
  	if (data[i].currency_code == 'GBP')
  		return data[i]
  }
  console.log(data[i].price)
  console.log(data[i].title)
    		

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  wood_items = []
  for (let i = 0; i < data.length; i++){
  	if (data[i].materials.indexOf('wood') > -1)
  		wood_items.push(data[i])
  }
  console.log(wood_items)
  return wood_items
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
	total = []
  for (let i = 0; i < data.length; i++){
  	if (data[i].materials.length >= 8)
  		total.push(data[i])
  }
console.log(total)
for (let i = 0; i < total.length; i++){
  	console.log(total[i].title)
  	console.log(total[i].materials.length)
  	console.log(total[i].materials)
 } 
  
  return total
}


// 6: How many items were made by their sellers?
function question6 () {
	seller = []
 for (let i = 0; i < data.length; i++){
 	if (data[i].who_made == 'i_did')
 		seller.push(data[i])
	}
	console.log(seller.length)
	return seller.length
}