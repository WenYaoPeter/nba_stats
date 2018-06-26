const pg = require('pg');
const jsonfile = require('jsonfile');

//to connnect to pg
const configs = {
	user: 'wenyaolee',
	host: '127.0.0.1',
	database: 'nba_db',
	port: '5432'
};

//create a new instance of pg
const client = new pg.Client(configs);

let playersProfile;

//to get players' records


// let valueee = [];

// 	for (let i = 0; i < playersProfile.length; i++) {
// 		valueee.push(playersProfile[i].name);
// 		valueee.push(playersProfile[i].age);
// 		valueee.push(playersProfile[i].team);
// 		valueee.push(playersProfile[i].games);
// 		valueee.push(playersProfile[i].points);
// 	group name, age, team, games, points as 1 array
// 	}
// 	console.log(valueee);

//start using pg
client.connect((err) => {
	if(err) {
		console.log('error', err.message);
	}

	jsonfile.readFile('players.json', (err, obj) => {
		if(err) {
			console.log(error);
		}
		playersProfile = obj.players;
		console.log(playersProfile[0].name);
		// console.log(playersProfile);


	//queries
	let queryString = 'INSERT INTO players (name, age, team, games, points) VALUES ($1, $2, $3, $4, $5)';

	//values to insert

	for (let i = 0; i < playersProfile.length; i++){
		let values = [playersProfile[i].name, playersProfile[i].age, playersProfile[i].team, playersProfile[i].games, playersProfile[i].points];
		
		client.query(queryString, values, (err, result) => {
			if(err) {
				console.log('query error', err.message);
			} else {
				//console.log('result', result);
			}
		});
	}
});
});







