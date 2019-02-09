const db = require('../dbconnection/schema.js');

var randomRangeNumbGen =  (range) => {
	let max = Math.floor(range);
	return Math.floor(Math.random() * max);
};
//console.log(randomRangeNumbGen(5));
let resturantNameGen = () => {
	let titleEnds = ['Eatery', 'Thia', 'Deserts', 'Cafe', 'Beers', 'Pubhouse', 'House', 'Friday', 'Kings', 'Queens' ];
	let titleMids = ['the', 'also', 'come in', 'best', 'delicious', 'sweet', 'addicting', 'more', 'can\'t stop', 'drooling' ];
	let titleFirst = ['Dahlia', 'Era', 'Rabbit', 'Fort of', 'Saucer', 'Mellow\'s', 'Rustic but', 'Midnight', 'Harvest', 'Singing' ];

	var end = titleEnds[randomRangeNumbGen(titleEnds.length)];
	var mid = titleMids[randomRangeNumbGen(titleMids.length)];
	var begin = titleFirst[randomRangeNumbGen(titleFirst.length)];
	return begin.concat(' ', mid, ' ', end);
	//console.log(begin, mid, end);

};
//console.log(resturantNameGem());

let phoneNumberGen =  () => {
	let areaCodes = ['650','415', '209', '831','442','925', '510', '707', '530' ];
	let randomNumber = '';
	for (let i = 0;  i < 8; i++){
		if (i === 3) {
			randomNumber += '-'}
			else {
				let singleNum = randomRangeNumbGen(9).toString();
				randomNumber += singleNum;
		}
	}
	var code = '(' + areaCodes[randomRangeNumbGen(areaCodes.length)] + ')';
	return (code).concat(randomNumber)
};
//console.log(phoneNumberGen());
let clamed = () => {
	var boolNum = randomRangeNumbGen(2);
	if(boolNum){
		return true;
	}
	return false;
};
//console.log(clamed());
let priceLevelGen = () => {
	let money = '';
	let level = randomRangeNumbGen(5);
	for (let i = 0; i < level; i++) {
		money += '$';
	}
	return money;
};
//console.log(priceLevelGen());

let addressGen = () => {
	let endStType = ['St.', 'Dr.', 'Ave.', 'Ally','Blvd'];
	let midStType = ['fixed', 'long', 'food', 'market', 'mels', 'alex', 'test me'];
	let biginSt = ['Grant', 'Market', 'Run', 'Purell', 'Green', 'Space', 'Screen', 'Apple', 'Do'];

	let addressNum = randomRangeNumbGen(1564).toString();
	let end = randomRangeNumbGen(endStType.length);
	let mid = randomRangeNumbGen(midStType.length);
	let first = randomRangeNumbGen(biginSt.length);

	return addressNum.concat(' ', biginSt[first], ' ', midStType[mid], ' ', endStType[end]);
};
//console.log(addressGen());

let city = () => {
	let city = ['Millbrea', 'San Fransisco', 'Richmond', 'San Mateo', 'Fremont', 'Oakland', 'South San Fransisco', 'Burlingame', 'San Jose', 'Daily City', 'Seattle Washington'];
	return city[randomRangeNumbGen(city.length)];
};
//console.log(city());
let zip = () => {
	var zipCode = [randomRangeNumbGen(9),randomRangeNumbGen(9), randomRangeNumbGen(9),randomRangeNumbGen(9),randomRangeNumbGen(9)].join('');
	return Number(zipCode);
};
console.log(zip());

let latitude = () => {
	return  (Math.random()*180-90).toFixed(8);
};
let longitude = () => {
	return (Math.random()*360-180).toFixed(8);
};

let category = () => {
	let cat = ['Thai', 'Bars', 'BBQ', 'American', 'Cuisine', 'Italian', 'Seafood', 'Mediterranean', 'Spanish', 'Sushi Bars', 'Sandwiches', 'Desserts', 'Breakfast & Brunch' ]
	return cat[randomRangeNumbGen(cat.length)]
};
let arrOfCats = () => {
	var max = randomRangeNumbGen(4);
	var arrayCat = [category()];
	var i =0;
	while(i < max) {
		var randoCat = category();
		//console.log(randoCat,arrayCat.indexOf(randoCat))
		if(arrayCat.indexOf(randoCat) === -1){
			arrayCat.push(randoCat);
			i++
		}

	}
	return arrayCat;
};
//console.log(arrOfCats());

for(var i = 1; i <= 100; i++) {
	var singleDetail = {
		"restaurant_id" : i,
		"name": resturantNameGen(),
		"phone": phoneNumberGen(),
		"claimed" : clamed(),
		"price_level": priceLevelGen(),
		"review_count": randomRangeNumbGen(3542),
		"address": addressGen(),
		"city": city(),
		"zip_code": zip(),
		"country": "usa",
		"state": "CA",
		"coordinates": {
		"latitude": latitude(),
			"longitude": longitude()
			},
		"category": arrOfCats(),
		"url": "www.resturantSite.com",
		"email": "123@resturantSite.com"
	};

	db.create(singleDetail, function (err) {
		if (err) return handleError(err);
	});
}

