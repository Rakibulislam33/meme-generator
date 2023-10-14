const generateMemeButton = document.querySelector(".generate__meme__btn");
const MemeImage = document.querySelector(".meme__generator img");

const memeTitle = document.querySelector(".meme__title");
const memeAuthor = document.querySelector(".meme__author");


// const updateDetails = (url, title, author) => {
//     MemeImage.setAttribute("src",url);
//     memeTitle.innerHTML = title;
//     memeAuthor.innerHTML = `Meme by: ${author}`;
// }


// const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//     .then ((response) => response.json())
//     .then ((data) => {
//         updateDetails(data.url, data.title, data.author);
//     });
// };


// generateMemeButton.addEventListener("click", generateMeme);

// generateMeme();


//tried with different way but it works
async function generateMeme(){

    const url__api = "https://meme-api.com/gimme/wholesomememes";

    const api__response = await fetch(url__api);
    const data = await api__response.json();


    MemeImage.src = data.url; // Access the 'url' property directly
    memeTitle.innerHTML = data.title; // Access the 'title' property directly
    memeAuthor.innerHTML = `Meme By: ${data.author}`;

    
}

generateMemeButton.addEventListener("click", generateMeme);

generateMeme();
