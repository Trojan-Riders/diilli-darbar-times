const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7c30b3f69msh79cfc37cf2576b4p17e14ajsnf60a516795b8',
		'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
	}
};

fetch('https://free-news.p.rapidapi.com/v1/search?q=Indian%20Politics&lang=en', options)
	.then(response => response.json())
	.then(
        (data)=>{

            const link=document.getElementById('zero');
            document.getElementById('zero_title').innerHTML=data.articles[0].title;
            document.getElementById('zero_summary').innerHTML=data.articles[0].summary;
            const image=document.getElementById('zero_media');
            image.setAttribute('src',data.articles[0].media);
            
            document.getElementById('one_title').innerHTML=data.articles[1].title;
            document.getElementById('two_title').innerHTML=data.articles[2].title;
            document.getElementById('three_title').innerHTML=data.articles[3].title;

            console.log(data);
        }
    )
	.catch(err => console.error(err));