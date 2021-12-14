<template>
  <!-- This is a section with other elements -->
  <section class="card">
    <figure>
      <img src="images/audiobooks.png" alt="Audiobooks Now" />
    </figure>
    <p><b>{{ project_one.project_name }}</b></p>
    <p>{{ project_one.project_desc }}</p>
    <p>
      <a
        v-bind:href="project_one.project_link"
        class="btn btn--accent"
        target="_blank"
        >Read more</a
      >
    </p>
  </section>

  <section class="card">
    <figure>
      <img src="images/redbox.png" alt="Redbox" />
    </figure>
    <p><b>{{ project_three.project_name }}</b></p>
    <p>{{ project_three.project_desc }}</p>
    <p><a
        v-bind:href="project_three.project_link"
        class="btn btn--accent"
        target="_blank"
        >Read more</a
>
    </p>
  </section>

  <section class="card">
    <figure>
      <img src="images/benefits.png" alt="Benefits OnLine" />
    </figure>
    <p><b>{{ project_two.project_name }}</b></p>
    <p>{{ project_two.project_desc }}</p>
    <p>
      <a
        v-bind:href="project_two.project_link"
        class="btn btn--accent"
        target="_blank"
        >Read more</a
      >
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      project_one: {
        project_name: "AudioBooks Now",
        project_desc:
          "AudioBooksNow is a next-generation innovative book reading platform for users who love reading digital books. The AudioBooksNow is a whole new way to enjoy reading while road trips or long commutes. Developed both Android and Nook app versions of AudioBooksNow with custom Audio Player and Book Narrator that make a story come alive to provide enjoyable book reading facilities. AudioBooksNow comes with a large selection of bestselling and classic titles of famous digital books.",
        project_link:
          "https://play.google.com/store/apps/details?id=com.audiobooksnow.app&hl=en_IN&gl=US",
      },
      project_two: {
        project_name: "Benefits OnLine",
        project_desc:
          "The Benefits OnLine® app for Android is available to clients who have access to the benefits.ml.com website. Some of the features and services available on benefits.ml.com are not available within this app.",
        project_link:
          "https://play.google.com/store/apps/details?id=com.ml.mobile.bol&hl=en_IN&gl=US",
      },
      project_three: {
        project_name: "Redbox",
        project_desc:
          "Built an amazing rental solution for Redbox. This app provides a whole new experience to explore DVDs, Blu-Ray and Games available on rent in your nearby area. Whether you want to watch the complete details of a box or search the nearest store location, we have incorporated a complete solution in one platform. You can stay updated with the latest arrival, new movies and watch movie trailers based upon your history and interest. We have incorporated AI engine and ML Engine to under the user’s behavior and deliver the relevant content.",
        project_link:
          "https://play.google.com/store/apps/details?id=com.redbox.android.activity&hl=en_IN&gl=US",
      },
    };
  },
};
</script>

<style scoped>
@import "../assets/css/mystyle.css";

* {
  box-sizing: border-box;
  margin: 20px;
}

p{
  text-align: center;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: inline-block;
  flex-wrap: wrap;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.projects {
  border-radius: 50%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
}


</style>
