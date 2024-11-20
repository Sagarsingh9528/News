let BASE_URL = "https://newsapi.org/v2/top-headlines?apiKey=fcf7f1e4eae54c55ade40494ce05cfb5"
// console.log(BASE_URL);
let news = document.querySelectorAll(".news select");
// console.log(news);
let search = document.getElementById("Search");
// console.log(search);
let name = document.getElementById("country");
// console.log(country);
let category = document.getElementById("category");
// console.log(category);
// let source = document.getElementById("source");
let btn = document.getElementById("btn");
// console.log(btn);

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let newName = name.value;
    let stringName = String(newName); 
    let search1 = search.value;
    let category1 = category.value;
    // let source1 = source.value;
    const URL = `${BASE_URL}&country=${stringName.toLowerCase()}&q=${search1}&category=${category1}`;
    // console.log(URL);
    let response = await fetch(URL);
    let  data = await response.json();
    // console.log(data);
    // let name2 = data.response;
    // console.log(newName);
    clear();
    myFunction(data);
})

function clear(){
    let div = document.getElementById("someId");
    if(div !== null){
     document.getElementById("someId").remove();
    }
 }

 async function loadFunction(){
    const baseUrl = "https://newsapi.org/v2/top-headlines?apiKey=fcf7f1e4eae54c55ade40494ce05cfb5&country=us";
    let response1 = await fetch(baseUrl);
    let data1 = await response1.json();
    myFunction(data1);
    // console.log(data1);
 }

 
for(code in countryList){
    // console.log(code, countryList);
}
for(let select of news){
    // console.log(countryList);
    countryList.forEach( (country) => {
        // console.log(country);    
        let newOption = document.createElement("option");
        newOption.innerText = country.country_name;
        // console.log(newOption.innerText);
        newOption.value = country["iso-3166"];
        newOption.selected = "selected";
        select.append(newOption);
        

    })
}

// function yourFunction(data1){
//     const newDiv = document.createElement("div");
//     for(let i = 0; i < data.articles.length; i++){

//     }
//     document.body.appendChild(newDiv);
// }

function myFunction(data){
    const allArticlesDiv = document.createElement("div");
    allArticlesDiv.setAttribute('id', "someId");
    for(let i = 0; i < data.articles.length; i++){
        // console.log(data.articles);
        const articleDiv = document.createElement("div");
        articleDiv.classList.add('articl');
        const imageDiv = document.createElement("div")

        let img = document.createElement('img');
 
        img.src = data.articles[i].urlToImage;
        // console.log(img.src);
        // console.log("abc");
        img.classList.add('News');
 
        imageDiv.appendChild(img);


        const contentDiv = document.createElement("div");
        contentDiv.classList.add('box');
        const newTitle = document.createElement("h3");
        newTitle.innerText = data.articles[i].title;
        // let titleNew = newTitle.innerText;
        newTitle.classList.add('title');
        const view = document.createElement("a");
        const viewTextNode = document.createTextNode(data.articles[i].title);
        view.appendChild(viewTextNode);
        view.title = data.articles[i].title;
        view.href = data.articles[i].url;
        view.setAttribute("target", "_blank");
        view.classList.add('view');
        
        
        const descriptionDiv = document.createElement("p");
        descriptionDiv.innerText = data.articles[i].description;
        descriptionDiv.classList.add('description');
        const line = document.createElement("hr");
        line.classList.add('line');
        const content = document.createElement("p");
        content.innerText = data.articles[i].content;
        content.classList.add('content');

        const dateAndAuthor = document.createElement("div");
        dateAndAuthor.classList.add('date');

        let date = document.createElement("SPAN");
        let apiDate = data.articles[i].publishedAt;
        const d = new Date(apiDate);
        const timeAgo = timeSince(d);
        stringD = String(d);
        let newDate = document.createTextNode(timeAgo);
        // let newDate = document.createTextNode();
        // let newDate = document.createTextNode();
        date.appendChild(newDate);
        let author = document.createElement("SPAN");

        let newAuthor = document.createTextNode(data.articles[i].author);
        author.classList.add('author');
        author.appendChild(newAuthor);
        
        dateAndAuthor.appendChild(date);
        dateAndAuthor.appendChild(author);
        contentDiv.appendChild(view);
        // contentDiv.appendChild(newTitle);
        // contentDiv.appendChild(descriptionDiv);

        contentDiv.appendChild(descriptionDiv);
        contentDiv.appendChild(line);
        contentDiv.appendChild(content);
        contentDiv.appendChild(dateAndAuthor);
        
        articleDiv.appendChild(imageDiv);
        articleDiv.appendChild(contentDiv);
 
        allArticlesDiv.appendChild(articleDiv);
 
    }

    document.body.appendChild(allArticlesDiv);
}
function timeSince(d) {

    var seconds = Math.floor((new Date() - d) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      if (interval > 2) {
          return Math.floor(interval) + " years ago";
      } else {
          return Math.floor(interval) + " year ago";
      }
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      if (interval > 2) {
          return Math.floor(interval) + " months ago";
      } else {
          return Math.floor(interval) + " month ago";
      }
    }
    interval = seconds / 86400;
    if (interval > 1) {
        if (interval > 2) {
          return Math.floor(interval) + " days ago";
      } else {
          return Math.floor(interval) + " day ago";
      }
      
    }
    interval = seconds / 3600;
    if (interval > 1) {
      if (interval > 2) {
          return Math.floor(interval) + " hours ago";
      } else {
          return Math.floor(interval) + " hour ago";
      }
    }
    interval = seconds / 60;
    if (interval > 1) {
      if (interval > 2) {
          return Math.floor(interval) + " minutes ago";
      } else {
          return Math.floor(interval) + " minute ago";
      }
    }
    return Math.floor(seconds) + " seconds";
  }
  