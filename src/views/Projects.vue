<template>
  <main>
    <ul id="cards">
      <li class="card" id="card_1">
        <div class="card__content">
          <div>
            <h2>{{ project_one.project_name }}</h2>
            <p>
              {{ project_one.project_desc }}
            </p>
            <p>
              <a v-bind:href="project_one.project_link" class="btn btn--accent">
                Read more
              </a>
            </p>
          </div>
          <figure>
            <img src="images/audiobooks.png" alt="Audiobooks Now" />
          </figure>
        </div>
      </li>
      <li class="card" id="card_2">
        <div class="card__content">
          <div>
            <h2>{{ project_two.project_name }}</h2>
            <p>
              {{ project_two.project_desc }}
            </p>
            <p>
              <a v-bind:href="project_two.project_link" class="btn btn--accent">
                Read more
              </a>
            </p>
          </div>
          <figure>
            <img src="images/benefits.png" alt="Benefits OnLine" />
          </figure>
        </div>
      </li>
      <li class="card" id="card_3">
        <div class="card__content">
          <div>
            <h2>{{ project_three.project_name }}</h2>
            <p>{{ project_three.project_desc }}</p>
            <p>
              <a
                v-bind:href="project_three.project_link"
                class="btn btn--accent"
              >
                Read more
              </a>
            </p>
          </div>
          <figure>
            <img src="images/redbox.png" alt="Redbox" />
          </figure>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      project_one: {
        project_name: 'Android Development',
        project_desc:
          'AudioBooksNow is a next-generation innovative book reading platform for users who love reading digital books. The AudioBooksNow is a whole new way to enjoy reading while road trips or long commutes. Developed both Android and Nook app versions of AudioBooksNow with custom Audio Player and Book Narrator that make a story come alive to provide enjoyable book reading facilities. AudioBooksNow comes with a large selection of bestselling and classic titles of famous digital books.',
        project_link:
          'https://play.google.com/store/apps/details?id=com.audiobooksnow.app&hl=en_IN&gl=US'
      },
      project_two: {
        project_name: 'Benefits OnLine',
        project_desc:
          'The Benefits OnLine® app for Android is available to clients who have access to the benefits.ml.com website. Some of the features and services available on benefits.ml.com are not available within this app.',
        project_link:
          'https://play.google.com/store/apps/details?id=com.ml.mobile.bol&hl=en_IN&gl=US'
      },
      project_three: {
        project_name: 'Redbox',
        project_desc:
          'Built an amazing rental solution for Redbox. This app provides a whole new experience to explore DVDs, Blu-Ray and Games available on rent in your nearby area. Whether you want to watch the complete details of a box or search the nearest store location, we have incorporated a complete solution in one platform. You can stay updated with the latest arrival, new movies and watch movie trailers based upon your history and interest. We have incorporated AI engine and ML Engine to under the user’s behavior and deliver the relevant content.',
        project_link:
          'https://play.google.com/store/apps/details?id=com.redbox.android.activity&hl=en_IN&gl=US'
      }
    }
  }
}
</script>

<style scoped>
:root {
  --card-height: 40vw;
  --card-margin: 4vw;
  --card-top-offset: 1em;
  --numcards: 3;
  --outline-width: 0px;
}

#cards {
  padding-bottom: calc(var(--numcards) * var(--card-top-offset));
  margin-bottom: var(--card-margin);
}

#card_1 {
  --index: 1;
}

#card_2 {
  --index: 2;
}

#card_3 {
  --index: 3;
}

.card {
  position: sticky;
  top: 0;
  padding-top: calc(var(--index) * var(--card-top-offset));
}

@supports (animation-timeline: works) {
  @scroll-timeline cards-element-scrolls-in-body {
    source: selector(body);
    scroll-offsets:
			/* Start when the start edge touches the top of the scrollport */ selector(
          #cards
        )
        start 1,
      /* End when the start edge touches the start of the scrollport */
        selector(#cards) start 0;
    start: selector(#cards) start 1; /* Start when the start edge touches the top of the scrollport */
    end: selector(#cards) start 0; /* End when the start edge touches the start of the scrollport */
    time-range: 4s;
  }

  .card {
    --index0: calc(var(--index) - 1); /* 0-based index */
    --reverse-index: calc(var(--numcards) - var(--index0)); /* reverse index */
    --reverse-index0: calc(
      var(--reverse-index) - 1
    ); /* 0-based reverse index */
  }

  .card__content {
    transform-origin: 50% 0%;
    will-change: transform;

    --duration: calc(var(--reverse-index0) * 1s);
    --delay: calc(var(--index0) * 1s);

    animation: var(--duration) linear scale var(--delay) forwards;
    animation-timeline: cards-element-scrolls-in-body;
  }

  @keyframes scale {
    to {
      transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index))));
    }
  }
}

/** PAGE STYLING **/

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: rgb(58 29 43);
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: calc(1em + 0.5vw);
}

main {
  width: 80vw;
  margin: 0 auto;
}

#cards {
  list-style: none;
  outline: calc(var(--outline-width) * 10) solid blue;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(var(--numcards), var(--card-height));
  gap: var(--card-margin);
}

.card {
  outline: var(--outline-width) solid hotpink;
}

.card__content {
  box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
  background: rgb(255, 255, 255);
  color: rgb(10, 5, 7);
  border-radius: 1em;
  overflow: hidden;
  display: grid;
  grid-template-areas: 'text img';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: stretch;
  outline: var(--outline-width) solid lime;
}

.card__content > div {
  grid-area: text;
  width: 80%;
  place-self: center;
  text-align: left;
  display: grid;
  gap: 1em;
  place-items: start;
}

.card__content > figure {
  grid-area: img;
  overflow: hidden;
}

.card__content > figure > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-weight: 300;
  font-size: 3.5em;
}

h2 {
  font-weight: 300;
  font-size: 2.5em;
}

p {
  font-family: sans-serif;
  font-weight: 300;
  line-height: 1.42;
}

.btn {
  background: rgb(188 87 36);
  color: rgb(255 255 255);
  text-decoration: none;
  display: inline-block;
  padding: 0.5em;
  border-radius: 0.25em;
}
</style>
