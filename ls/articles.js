

let news;
const newsList = document.querySelector('#newsList')
const newsImage = document.querySelector('.newsImage')
const $input = $('input[type="text"]')
let search = $input.val();


$('form').on('submit', handleGetData);

newsList.innerHTML = ''
function handleGetData(event) {
    event.preventDefault();
    
    let search = $input.val();
    
    $.ajax({
       url:'https://newsapi.org/v2/everything?q=' + search + '&apiKey=6fa06be67aa24fc9be2a6483a327ebf9'
      }).then(
        (data) => {
         console.log(data)
            $(".newsList").empty()
            data.articles.forEach(article => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            const image = document.createElement('span'); 
            image.innerHTML = `<img src="${article.urlToImage}">`
            a.href = article.url;
            a.target = '_blank';
            a.textContent = article.title;
            li.append(a);
            li.appendChild(image)
            newsList.append(li);
            $(".news-home").empty()
            console.log(newsList)
            
            
      })}),
        (error) => {
         console.log('bad request', error); 
      };    
}


let home;
const newsHome = document.querySelector('.news-home')
const homeNews = document.createElement ('home')
$.ajax({
    url:'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=6fa06be67aa24fc9be2a6483a327ebf9'
   }).then(
     (data) => {
      console.log(data)
      $(".news-home").empty()
      data.articles.forEach(article => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const image = document.createElement('span'); 
        image.innerHTML = `<img src="${article.urlToImage}">`
        a.href = article.url;
        a.target = '_blank';
        a.textContent = article.title;
        li.append(a);
        li.appendChild(image)
        newsHome.append(li);

        console.log(newsHome)
      });



    }),
    (error) => {
     console.log('bad request', error); 
  };    


    


