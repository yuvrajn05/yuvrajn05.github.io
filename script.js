const mainimages = document.querySelectorAll('section img');
const maintypes = document.querySelectorAll('section .type');
const mainheadlines = document.querySelectorAll('section .headline');
const mainauthors = document.querySelectorAll('section .author');
const maindates = document.querySelectorAll('section .date');

const sideimages = document.querySelectorAll('.sn .news img');
const sidelines = document.querySelectorAll('.sidelines');
const sidedates = document.querySelectorAll('.sidedates');

const sidenews = document.querySelector('.sidenews')

// popupimages = document.querySelector('.popup img');
// popuptypes = document.querySelector('.popup .type');
// popupheadlines = document.querySelector('.popup .headline');
// popupauthors = document.querySelector('.popup .author');
// popupdates = document.querySelector('.popup .date');
// popupcontent = document.querySelector('.popup .content');

console.log(sidenews);

fetch('https://coding-week-2024-api.onrender.com/api/data').then((response) => {
    console.log('resolved',response);
    return response.json();
}).then(data => {
    let i = 0 ;
    while (i<10) {
        console.log(i);
        if (i<4) {
            mainimages[i].src = data[i].image;
            maintypes[i].textContent = data[i].type;
            mainheadlines[i].textContent = data[i].headline;
            mainauthors[i].textContent = data[i].author;
            maindates [i].textContent = data[i].date;
        } else if (i<8) {
            sideimages[i - 4].src = data[i].image;
            sidelines[i - 4].textContent = data[i].headline;
            sidedates[i - 4].textContent = data[i].date
        } else {
            sidenews.innerHTML += `<div class="sn"><a href="" class="news"><img class="image" src=${data[i].image} alt="dog"><div><div class="sidelines">${data[i].headline}</div><div class="sidedates">${data[i].date}</div></div></a></div>`
        }
        i++;
        
    }

    // popupimages.src = data[i].image;
    // popuptypes.textContent = data[i].type;
    // popupheadlines.textContent = data[i].headline;
    // popupauthors.textContent = data[i].author;
    // popupdates.textContent = data[i].date;

    

}).catch((err) => {aonsole.log('rejected'.err);

})
