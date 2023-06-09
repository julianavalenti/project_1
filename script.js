
let news;
const newsList = document.querySelector('#newsList')
const newsImage = document.querySelector('.newsImage')
const newsHome = document.querySelector('.news-home')
const $input = $('input[type="text"]')

$('form').on('submit', handleGetData);

newsList.innerHTML = ''

function handleGetData(event) {
    event.preventDefault();
    
let search = $input.val();

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-news-search1.p.rapidapi.com/news/search?q=" +search+ "&freshness=Day&textFormat=Raw&safeSearch=Off",
	"method": "GET",
	"headers": {
		"X-BingApis-SDK": "true",
		"X-RapidAPI-Key": "d913990903msha7edef050068815p160ef1jsn749f27193c73",
		"X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
	}
};


$.ajax(settings).done(function (response) {
	// console.log(response);
    
    $(".news-home").empty()
    

    response.value.forEach(item => {
       
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            const image = document.createElement('span'); 
            const p = document.createElement ('p')
            p.classList.add('hidden')
            image.innerHTML = `<img src="${item.image.thumbnail.contentUrl}">`
            a.href = item.url;
            a.target = '_blank';
            a.textContent = item.name;
            p.textContent = item.description;
            
            li.append(a);
            li.appendChild(image)
            li.appendChild(p)
            newsHome.append(li);
    
            li.addEventListener('mouseover', function (){
              p.classList.remove('hidden')
            })
            
            li.addEventListener('mouseout', function (){
              p.classList.add('hidden')
            })

            

              



            
          });
    
 });
        
}




const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://bing-news-search1.p.rapidapi.com/news/search?q=Tech&freshness=Day&textFormat=Raw&safeSearch=Off",
	"method": "GET",
	"headers": {
		"X-BingApis-SDK": "true",
		"X-RapidAPI-Key": "d913990903msha7edef050068815p160ef1jsn749f27193c73",
		"X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"

  }
}

$.ajax(settings).done(function (response) {
	console.log(response);
    
    $(".news-home").empty()
    

    response.value.forEach(item => {
       
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            const image = document.createElement('span'); 
            const p = document.createElement ('p')
            p.classList.add('hidden')
            image.innerHTML = `<img src="${item.image.thumbnail.contentUrl}">`
            a.href = item.url;
            a.target = '_blank';
            a.textContent = item.name;
            p.textContent = item.description;
            li.append(a);
            li.appendChild(image)
            li.appendChild(p)
            newsHome.append(li);
    
            console.log(newsHome)

            li.addEventListener('mouseover', function (){
              p.classList.remove('hidden')
            })
            
            li.addEventListener('mouseout', function (){
              p.classList.add('hidden')
            })

          });
    
 });



