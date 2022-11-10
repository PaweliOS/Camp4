const schoolBtnTwo = document.querySelector('.school__cards-btn-two');
const schoolHintTwo = document.querySelector('.school__cards-text-hint-two');


function toggleHint() {
    schoolHintTwo.classList.toggle('school__cards-text-hint-two--left-active')
}

schoolBtnTwo.addEventListener('click', toggleHint);

// schoolBtnTwo.addEventListener('click', console.log('wyw funkcji'));