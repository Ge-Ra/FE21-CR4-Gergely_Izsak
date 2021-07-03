let movieData = JSON.parse(movies);
let emptyString = "";

////////////////////////////////////////////////// LIKE BUTTON///////////////////////////////////////////////////

for (let val of movieData) {
    document.getElementById("movieCards").innerHTML += `

    <div class="card mb-5 border " style="max-width: 340px; background-color: rgb(250,89,28)">

        <div class="row g-0">

            <div class="col-sm-8 col-md-4">

            <img src="${val.image}" class=" d-flex img-fluid rounded-start" alt="Dragon Ball Movie">

        </div>

            <div class="col-md-8">

                <div class="card-body" style="font-size:calc(100%-1em)">

                    <h5 class="card-title" style="color:black">${val.movieName}</h5>

                    <p class="card-text">Released:<br>${val.release}</p>

                    <div class="d-flex justify-content-end align-items-end flex-row bd-highlight mb-3">

                        <span class="buttons p-2" style="color: rgb(254,186,81)"> ${val.likes}</span>

                        <button type="button" class="btn btn-danger likeSort" style="color:rgb(254,186,81)">LIKE<img src="Images/1200px-Dragonball_(4-Star).svg.png" style="width: 20px; height: 20px"></button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
`
}

var button = document.getElementsByClassName("likeSort");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        createOneLike(i)
    })
};

function createOneLike(num) {
    movieData[num].likes++;
    document.getElementsByClassName("buttons")[num].innerHTML = movieData[num].likes;
}


//////////////////////////////////////////////// SORT BUTTON//////////////////////////////////////////

document.getElementById("sort").addEventListener("click", sort)

function sort() {

    movieData.sort(function (a, b) {
        return b.likes - a.likes;
    });

    let emptyString = ""

    for (let val of movieData) {
        emptyString += `

    <div class="card mb-5 border" style="max-width: 340px; background-color: rgb(250,89,28)">

        <div class="row g-0">

            <div class="col-sm-8 col-md-4">

            <img src="${val.image}" class=" d-flex img-fluid rounded-start" alt="Dragon Ball Movie">

        </div>

            <div class="col-md-8">

                <div class="card-body" style="font-size:calc(100%-1em)">

                    <h5 class="card-title" style="color:black">${val.movieName}</h5>

                    <p class="card-text">Released:<br>${val.release}</p>

                    <div class="d-flex justify-content-end align-items-end flex-row bd-highlight mb-3">

                        <span class="buttons p-2" style="color: rgb(254,186,81)"> ${val.likes}</span>

                        <button type="button" class="btn btn-danger likeSort" style="color:rgb(254,186,81)">LIKE<img src="Images/1200px-Dragonball_(4-Star).svg.png" style="width: 20px; height: 20px"></button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
`
    }

    document.getElementById("movieCards").innerHTML = emptyString

    var button = document.getElementsByClassName("likeSort");

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function () {
            createOneLike(i)
        })
    };

    function createOneLike(num) {
        movieData[num].likes++;
        document.getElementsByClassName("buttons")[num].innerHTML = movieData[num].likes;
    }
    document.getElementById("sort").addEventListener("click", sort)
}