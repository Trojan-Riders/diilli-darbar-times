const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7c30b3f69msh79cfc37cf2576b4p17e14ajsnf60a516795b8',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

fetch('https://free-news.p.rapidapi.com/v1/search?q=Indian%20Finance&lang=en', options)
	.then(response => response.json())
	.then(
        (data)=>{

            document.getElementById('one').innerHTML=data.articles[1].title;
			document.getElementById('three').innerHTML=data.articles[3].title;
			document.getElementById('four').innerHTML=data.articles[4].title;
			document.getElementById('two').innerHTML=data.articles[2].title;
			document.getElementById('zero_media').setAttribute('src',data.articles[0].media);
            document.getElementById('zero_title').innerHTML=data.articles[0].title;
			document.getElementById('zero_summary').innerHTML=data.articles[0].summary;
			console.log(data);
        }
    )
	.catch(err => console.error(err));
	var x = 1;
	function menu() {
		if (x == 1) {
			document.getElementById('mobile').style.display = 'block';
			x = 0;
		}
		else {
			document.getElementById('mobile').style.display = 'none';
			x = 1;
		}
	}