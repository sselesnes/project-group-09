import Swiper from 'swiper';
import 'swiper/css';

const REVIEWS_LIST = document.querySelector('.reviews-list');
const REVIEWS_BTN_LEFT = document.querySelector('.reviews-btn-left');
const REVIEWS_BTN_RIGHT = document.querySelector('.reviews-btn-right');

const API_URL = 'https://portfolio-js.b.goit.study/api/reviews';
let swiper;
let reviewsData;

async function fetchReviews() {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    reviewsData = await response.json();
    if (!reviewsData.length) {
      throw new Error('No reviews');
    }
    renderReviews(reviewsData);
    initSwiper();
  } catch (error) {
    console.error('Failed to load reviews: ' + error.message);
    renderNotFound();
  }
}

function renderReviews(reviews) {
  REVIEWS_LIST.innerHTML = reviews
    .map(
      review => `
        <li class="swiper-slide reviews-list-item" >
        <p class="reviews-list-item-text">${review.review}</p>
        <div class="reviews-list-item-author">
        <img 
            class="reviews-list-item-img"
            src="${review.avatar_url}"
            alt="${review.author}"
            width="40"
            height="40"
            loading="lazy"
            decoding="async"/>
    
        <h4 class="reviews-list-item-name">${review.author}</h4>
        </div>
        </li>
        `
    )
    .join('');
}

function renderNotFound() {
  REVIEWS_LIST.innerHTML =
    '<li class = "reviews-not-found">Not found reviews</li>';
}

function initSwiper() {
  swiper = new Swiper('.reviews-swiper', {
    spaceBetween: 32,
    breakpoints: {
      1280: {
        slidesPerView: 2,
        width: 1216,
        768: {
          slidesPerView: 1,
          width: 704,
        },
        360: {
          slidesPerView: 1,
          width: 320,
        },
      },
    },
    keyboard: {
      enabled: true,
    },
    on: {
      init(swiper) {
        updateButtonState(swiper);
      },
      slideChange(swiper) {
        updateButtonState(swiper);
      },
    },
  });

  REVIEWS_BTN_LEFT.addEventListener('click', () => {
    swiper.slidePrev();
  });

  REVIEWS_BTN_RIGHT.addEventListener('click', () => {
    swiper.slideNext();
  });
}

function updateButtonState(swiper) {
  swiper.isBeginning
    ? disableButton(REVIEWS_BTN_LEFT)
    : enableButton(REVIEWS_BTN_LEFT);

  swiper.isEnd
    ? disableButton(REVIEWS_BTN_RIGHT)
    : enableButton(REVIEWS_BTN_RIGHT);
}

function enableButton(btn) {
  btn.disabled = false;
  btn.classList.remove('disabled');
}

function disableButton(btn) {
  btn.disabled = true;
  btn.classList.add('disabled');
}

fetchReviews();
