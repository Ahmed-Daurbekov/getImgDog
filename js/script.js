const cards = document.querySelector('.cards')
let close = document.querySelector('.close')

// let dataArr = []
fetch('https://dog.ceo/api/breeds/image/random/12')
    .then(response => response.json())
    .then(data => {
        addCard(data.message)
    })


function addCard(arr) {
    arr.forEach(elem => {
        let html = `
            <div class="card">
                <div class="img">
                    <span class="close" onClick="removeCard()">x</span>
                    <img src="${elem}" alt="cats">
                </div>
                <div class="title">
                    <div class="date">
                        ${getRandomDate(new Date(2012, 0, 1), new Date())}
                    </div>
                    <div class="like"></div>
                </div>
            </div>
        `
        cards.insertAdjacentHTML('beforeend', html)
    });
}


function getRandomDate(start, end) {
    let newDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    let data = `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
    return data
}
