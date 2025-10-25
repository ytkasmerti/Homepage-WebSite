let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let sansSerifButton = document.querySelector('.font-button-sans-serif');
let serifButton = document.querySelector('.font-button-serif');
let page = document.querySelector('.page');

darkThemeButton.onclick = function ()
{
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
    page.classList.add('dark');
}

lightThemeButton.onclick = function ()
{
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
    page.classList.remove('dark');
}

sansSerifButton.onclick = function()
{
    sansSerifButton.classList.add('active');
    serifButton.classList.remove('active');
    page.classList.remove('serif');
}

serifButton.onclick = function()
{
    serifButton.classList.add('active');
    sansSerifButton.classList.remove('active');
    page.classList.add('serif');
}

let shortArticles = document.querySelectorAll('.blog-article.short');

for (let article of shortArticles)
{
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function ()
    {
        article.classList.remove('short');
    }
}

let gridButton = document.querySelector('.card-view-button-grid'); 
let listButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

gridButton.onclick = function()
{
    gridButton.classList.add('active');
    listButton.classList.remove('active');
    cards.classList.remove('list');
}

listButton.onclick = function()
{
    listButton.classList.add('active');
    gridButton.classList.remove('active');
    cards.classList.add('list');
}

let photos = document.querySelectorAll('.preview-list a');
let mainPhoto= document.querySelector('.active-photo');

for (let activePhoto of photos)
{
    activePhoto.onclick = function (evt)
    {
        evt.preventDefault();
        mainPhoto.src = activePhoto.href;
        let currentActive = document.querySelector('.active-item');
        currentActive.classList.remove('active-item');
        activePhoto.classList.add('active-item');
    }
}