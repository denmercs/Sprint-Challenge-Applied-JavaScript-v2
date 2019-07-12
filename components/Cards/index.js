// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(request => {
        console.log('Article', request);

        const cardsContainer = document.querySelector('.cards-container');

        let articlesArray = request.data.articles;

        for (articles in articlesArray) {
            articlesArray[articles].forEach(article => {
                cardsContainer.appendChild(createCard(article));
            })
        }
    })
    .catch(error => {
        console.log('Error', error);
    });

function createCard(list) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //card
    card.classList.add('card');

    //headline
    headline.classList.add('headline');
    headline.textContent = list.headline;
    card.appendChild(headline);

    //author container
    author.classList.add('author');
    card.appendChild(author);


    //image container
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    // image
    img.src = list.authorPhoto;
    imgContainer.appendChild(img);

    //author name
    authorName.textContent = `By: ${list.authorName}`;
    author.appendChild(authorName);

    return card;
}