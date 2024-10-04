async function main() {

const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c88803228amsh03782297d0de8cfp1ccc72jsn2e0b502d4f51',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    document.getElementById("result").append(result.content);
	
    
    
} catch (error) {
	console.error(error);
}

}

document.getElementById("btn").addEventListener("click", main)


