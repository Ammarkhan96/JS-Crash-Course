//API: Jis par hit kar ke ap apna data mangwa saktay ho.


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data){
//         console.log(data);
//       })





// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data){
//         console.log(data);
//       })




// const imagesContainer = document.getElementById('images')

// fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(function (response) {
//         return response.json()
//       })
//       .then(function (data){
//         data.forEach(function (image){
//             const url = image.url
//             const imageEle = document.createElement("img")
//             imageEle.src = url;
//             imagesContainer.appendChild(imageEle)
//         })
//       })


//Get Request: like ke ap url me facebook.com likho gay to wo direct server par hit hogi ja kar.
//Post Request: data jo ja raha hota he wo hidden hota he sab ke samnay open ho kar nahi ja raha hota.




//headers: ye hamaray pass ki bhi request me additional information bhejnay ya samajhnay ke liye use hota he. 

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    description: 'This is an amazing pencil.'
  })
})
.then(res => res.json())
.then(console.log);