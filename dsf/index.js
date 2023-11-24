let row = document.querySelector(".container .row")
fetch("https://api.tvmaze.com/shows")
.then(res => res.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        row.innerHTML += `
        <div class="col">
        <div class="card h-100">
          <img src=${data[i].image.medium} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">IMDB: ${data[i].rating.average}</p>
            </div>
            <a href="./detail.html?id=${data[i].id}" class="btn btn-custom">See more details</a>
        </div>
    </div>`
    }

    const detailButton = document.querySelectorAll(".btn-custom");
    detailButton.forEach((button, index) => {
      button.addEventListener("click", () => showDetails(data[index]));
    })
})