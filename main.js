const generateMemeButton = document.querySelector(".generate__meme__btn");
const MemeImage = document.querySelector(".meme__generator img");

const memeTitle = document.querySelector(".meme__title");
const memeAuthor = document.querySelector(".meme__author");


const updateDetails = (url, title, author) => {
    MemeImage.setAttribute("src",url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then ((response) => response.json())
    .then ((data) => {
        updateDetails(data.url, data.title, data.author);
    });
};


generateMemeButton.addEventListener("click", generateMeme);

generateMeme();