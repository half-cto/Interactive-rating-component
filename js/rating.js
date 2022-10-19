const submitButton = document.getElementsByClassName('submit-button')[0];
const ratingButtonsIds = ['rating-1', 'rating-2', 'rating-3', 'rating-4', 'rating-5']
const ratingButtons = [];
let storedRating = '0';

ratingButtonsIds.forEach(rating => ratingButtons.push(document.getElementById(rating)));

// event handler for storing selected rating and changing button colours
let selectRating = event => {
    let selectedRating = event.target.innerHTML;
    if(storedRating === selectedRating){
        return;
    } else {
    if (storedRating !== '0') {
        ratingButtons[Number(storedRating) - 1].style.backgroundColor = '';
        ratingButtons[Number(storedRating) - 1].style.color = '';
    } 
    event.target.style.backgroundColor = '#7C8798';
    event.target.style.color = '#FFF';
    storedRating = selectedRating;
    }
}

//adding event handler to rating buttons
ratingButtons.forEach(ratingButton => ratingButton.onclick = selectRating)

// event handler for submit button
let submit = () => {
    document.getElementsByClassName('rating-state')[0].style.display = 'none';
    document.getElementsByClassName('selection-result')[0].innerHTML = `You selected ${storedRating} out of 5`
    document.getElementsByClassName('thank-you-state')[0].style.display = 'flex';

}

submitButton.onclick = submit;