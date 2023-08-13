let API_key = "5978600201884d949b749b67814e0b6e";
let url = "https://newsapi.org/v2/everything?q=";

let news_section = document.querySelector(".news-section");
let search_news = document.querySelector('#search-news');
let search_btn = document.querySelector('#search');
let li_tag = document.querySelectorAll('li');
let home_page = document.querySelector('img');
let arr = [];

async function show_News(query) {

    console.log(query);
 
  // let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-07-06&sortBy=publishedAt&apiKey=${API_key}`);

  let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-07-12&sortBy=publishedAt&apiKey=5978600201884d949b749b67814e0b6e`)
  let data = await response.json();
  console.log(data);

  for (let i = 0; i < data.articles.length; i++) {

    if(data.articles[i].urlToImage != null){

    let news_card = document.createElement("div");
    news_card.classList.add("news-card");

    news_card.innerHTML = ` <div class="image">
    <img src="${data.articles[i].urlToImage}" class="news-image" alt="">
    </div>
    
  <div class="news-content">
  <h3>${data.articles[i].title}</h3>
  <p>Date: <span>${data.articles[i].publishedAt}</span></p>
  <h5>${data.articles[i].description}</h5>
  </div>`;

  news_section.appendChild(news_card);
  arr.push(news_card);

  if( i == data.articles.length - 1){

    showFullNews(arr , data.articles);

    arr = [];
  }
  
}
}

}

function showFullNews(news , article){

  console.log(news);

  for(let i = 0;i<article.length ;i++){

     let imagetag =  news[i].firstElementChild;
    
     imagetag.addEventListener('click' , ()=>{

      window.open(article[i].url, "_blank");
    })
    // console.log(article[i].url)
    
  }
  console.log(article.length);

}



search_btn.addEventListener('click' , ()=>{

    if(search_news.value != "")
    {

      for( let i = 0 ; i < li_tag.length ; i++){

        if(li_tag[i].classList.contains('active')){
          li_tag[i].classList.remove('active');
        }
  
      }
    news_section.innerHTML = "";
    show_News(search_news.value);
    
    }
})

show_News("India");

li_tag.forEach((element)=>{

  element.addEventListener('click' , ()=>{

    for( let i = 0 ; i < li_tag.length ; i++){

      if(li_tag[i].classList.contains('active')){
        li_tag[i].classList.remove('active');
      }

    }

    element.classList.add('active');
    search_news.value = `${element.innerText}`;
    news_section.innerHTML = "";
    show_News(element.innerText);

  })
})

home_page.addEventListener('click' , ()=>{

   news_section.innerHTML = "" ;
   show_News('India');
})



