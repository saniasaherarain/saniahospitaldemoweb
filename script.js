// script.js
const team = document.querySelector('.team');
const img = document.querySelectorAll('.team img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;
const totalImages = images.length;

function showSlide(i) {
    // Prevent index from going out of bounds
    if (i >= totalImages) index = 0;
    else if (i < 0) index = totalImages - 1;
    else index = i;

    // Calculate the offset for the slides container
    const offset = -index * 100;
    team.style.transform = `translateX(${offset}%)`;
}

// Event listeners for buttons
prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    showSlide(index + 1);
}, 3000);




Card.array.forEach(function(curCard) {
    curCard.addEventListener("click",function(){
        console.log(curCard);
        let div = document.createElement("div");
        div.classList.add("detailcard");
        div.innerHTML=`
        <img src=${curCard.firstElementChild.src} alt="">
        <h2>${curCard.LastElementChild.innerHTML}</h2>
        <p> Lorem ipsum dolor sit amet consectet
        perferendis magni omnis
        nesciunt voluptas eaquee animi.</p>`

        document.querySelector("body").appendChild(div)
    })
});
