// READ the giphy API docs: https://developers.giphy.com/
var giphy_endpoint = 'http://api.giphy.com/v1'
var API_Key = 'zdVnqqRXCe80y3VKzVuGKl6mj2zrKnRc'
var searchForm = document.querySelector("#search-form")
var searchInput = document.querySelector("#search-form input")
var results = document.querySelector(".results")



//fun
function getGifs(term, path) {
    $.ajax({
        url: `${giphy_endpoint}/gifs/${path}?api_key=${API_Key}&q=${term}`,
        dataType: "json",
        success: function (data) {
            console.log(data.data[0].images.preview_gif.url)
            for(var i=0; i<data.data.length; i++){
            results.innerHTML += `
            <img class="image" src="${data.data[i].images.preview_gif.url}">
            `
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
}

//call
searchForm.addEventListener('submit', function (event) {
    event.preventDefault()
    results.innerHTML =''
    getGifs(searchInput.value, "search")
})