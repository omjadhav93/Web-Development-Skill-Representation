/* I had designed a API to provide a 'like products' option to user quickly.
  Here is the client side JS code to interact with that api to like and dislike the product.
  Note :- You can find the API code in 'NodeJS  > API Development' folder of same repository.*/

// Like Product
const addLike = () => {
  const modelNo = document.getElementById('model-number').textContent.trim();

  fetch('/api/addFav', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ modelNo: modelNo })
  })
    .then(response => response.json())
    .then(stats => {
      if (stats.msg == "Unsigned") {
        alert("You need to login to save the product you Favourites list.");
      } else if (stats.msg == "Success") {
        const likeBtn = document.getElementById('like-btn');
        likeBtn.setAttribute('onclick', 'removeLike()')
        likeBtn.style.color = 'red';
        likeBtn.innerHTML = '<ion-icon name="heart"></ion-icon>';
      } else {
        alert("Something went wrong to save the product in Favourite list.");
      }
    })
    .catch(error => console.error('Error adding favourite:', error));
}

const removeLike = () => {
  const modelNo = document.getElementById('model-number').textContent.trim();

  fetch('/api/removeFav', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ modelNo: modelNo })
  })
    .then(response => response.json())
    .then(stats => {
      if (stats.msg == "Success") {
        const likeBtn = document.getElementById('like-btn');
        likeBtn.setAttribute('onclick', 'addLike()')
        likeBtn.style.color = 'black';
        likeBtn.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
      } else {
        alert("Something went wrong to unlike the product in Favourite list.");
      }
    })
    .catch(error => console.error('Error adding favourite:', error));
}
