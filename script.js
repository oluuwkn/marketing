//faq accordion
const items = document.querySelectorAll('.faq__item');

items.forEach(item => {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', () => {
        items.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
}); 


const recallBtn = document.querySelectorAll('.recall__button');
const formPopup = document.querySelector('.form');
const formClose = document.querySelector('.form__close');

for(btns of recallBtn){
    btns.addEventListener('click', () => {
        formPopup.classList.add('active');
    });
}

formClose.addEventListener('click', () => {
    formPopup.classList.remove('active');

});

const joinBtn = document.querySelectorAll('.join__button');
const joinPopup = document.querySelector('.form__join');
const joinClose = document.querySelector('.form__join__close');

for(btns of joinBtn){
    btns.addEventListener('click', () => {
        joinPopup.classList.add('active');
    });
}

joinClose.addEventListener('click', () => {
    joinPopup.classList.remove('active');

});


