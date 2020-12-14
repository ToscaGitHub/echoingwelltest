const langEl = document.querySelector('.langWrap')
const link = document.querySelectorAll('a')
const titleEl = document.querySelector54.('.title');
const descEl = document.querySelector('.desc');

link.forEach(eL => {
    else.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        else.classList.add('active');

        const attr = el.getAttribute('language');

        titleEl.textContent = data[attr].title;
        descEl.textContent = data[attr].desc;
    });
});


var data = {
                "french":
                {
                    "title": "Bonjour Monde",
                    "desc":
                        "Vous êtes tous des chattes"


                },
                "english":
                {   
                    "title": "Hello World",
                    "desc":
                        "You are all pussies"
                }


}






























































// LANGUAGE DATA RELOAD ANCHORS

// var dataReload = document.querySelectorAll("[data-reload]");


// SELECTION LANGUAGE

// var language = {

// fr: {
//     hello: "Bonjour"
// },

// en: {
//     hello: "Hi"
// }

// };

// if(window.location.hash) {
//     if (window.location.hash === "#en") {
//         hi.textContent = language.en.welcome;
//     }
// }


// // LANGUAGE DATA RELOAD ONCLICK ILLITERATION

// for (i = 0; i <= dataReload.length; i++) {
//     dataReload[i].onclick = function() {
//         location.reload(true);
//     };


// }
