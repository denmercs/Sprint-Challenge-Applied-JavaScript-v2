/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    // 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    this.rightBtn = this.carousel.querySelector('.right-button');
    this.leftBtn = this.carousel.querySelector('.left-button');

    // 2. You will need to grab a reference to all of the images
    this.images = this.carousel.querySelectorAll('img');

    // 3. Create a current index
    this.index = 0;
    this.images[0].classList.add('img-show');

    // 4. Those buttons are gonna need some click handlers.
    this.leftBtn.addEventListener('click', () => this.moveLeft());
    this.rightBtn.addEventListener('click', () => this.moveRight());

  }

  moveLeft() {
    this.images.forEach(img => img.classList.remove('img-show'));
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.images[this.index].classList.add('img-show');
    this.index--;
  }

  moveRight() {
    this.images.forEach(img => img.classList.remove("img-show"));
    if (this.index > this.images.length - 1) {
      this.index = 0;
    }
    this.images[this.index].classList.add("img-show");
    this.index++;
  }

  animate() {

  }
}

let carousel = document.querySelector('.carousel-container');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
  
  
  3. Create a current index
  4. Those buttons are gonna need some click handlers.
  5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
  6. Have fun!
*/