
// function getCharacters(link)
// {
//     return fetch(link)
//         .then(res=>res.json)
// }

// async function toHtml()
// {
//     var link = `https://restcountries.com/v3.1/all`;
//     var response = await getCharacters(link); 
//     fillHTML(response);
//     console.log(response);
// }
// fetch("https://restcountries.com/v3.1/all")
//     .then(res=>res.json())
//     // .then(datas => {
//     //             datas.forEach(el => {
//     //                 console.log(el.flags.svg);
//     //             })
//     //             return datas;
//     //         })
//     //         console.log(datas)
// function fillHTML(datas){
//     var result = '';
//     const charList = document.getElementById('card1');
//     datas.forEach(el=>{
//         result += 
//         `<img src="${el.flags.svg}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${el.name.common}</h5>
//                 <p class="card-text"> lcghjm</p>
//                 <a href="#" class="btn btn-primary">Deetail</a>
//             </div>`
//     })
//     charList.innerHTML = result;
// }
// toHtml();

fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data => fillHTML(data))

function fillHTML(datas){
    const charList = document.getElementById('card1');
    var result = '';
    datas.forEach(el => 
        result += 
        `<img src="${el.flags.svg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${el.name.common}</h5>
                <p class="card-text"> lcghjm</p>
                <a href="#" class="btn btn-primary">Deetail</a>
            </div>`
    )
            charList.innerHTML = result;
        }


