// import request from 'superagent'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d6373a80emshf5e1bbcda5e38fep1757adjsna98c528e0171',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));