const schoolCardsBtns = document.querySelectorAll('.school__cards-btns')
const passesCardsBtns = document.querySelectorAll('.passes__cards-btns')


const setListenerForButtons = () => {
    schoolCardsBtns.forEach((btn) => {
        btn.addEventListener('click', toggleHint)
    }
    )
    passesCardsBtns.forEach((btn) => {
        btn.addEventListener('click', toggleHint)
    }
    )


}

function toggleHint(e) {
    console.log(e);

    let hint = e.target.nextElementSibling
    hint.classList.toggle('school__cards-text-hint-two--left-active')
}

document.addEventListener('DOMContentLoaded', setListenerForButtons)
