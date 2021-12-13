<template>
  <!-- Home Section Start -->
  <section class="home" id="home">
    <div class="home-content">
      <div class="text">
        <div class="text-one">Hello,</div>
        <div class="text-two">I'm Sandeep</div>
        <div class="text-three">Android Developer</div>
      </div>
    </div>
  </section>

  <!-- About Section Start -->
  <section class="about" id="about">
    <div class="content">
      <div class="title"><span>About Me</span></div>
      <div class="about-details">
        <div class="left">
          <img src="images/profile-pic.png" alt="Sandeep Agrawal" />
        </div>
        <div class="right">
          <div class="topic">Mobile apps is my passion</div>
          <p>
            Over 7 years of experience in Android application development and
            Digital Strategies. Vast experience partnering with internal and
            external stakeholders to discover, build, improve and expand the
            user experience. Consistently recognized for outstanding
            contributions and solid reputation for resolving complex issues.
            Years of successful experience consulting on multifaceted projects
            and facilitating positive relationships with a wide range of
            clients, colleagues and key business partners.Commended for
            organization, efficiency, priority management and communication
            skills. Proven history of creating cutting edge interface designs
            and information for websites and mobile applications through a
            user-centered design process by constructing screen flows,
            prototypes and wireframes.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- My Services Section Start -->
  <section class="services" id="services">
    <div class="content">
      <div class="title"><span>My Services</span></div>
      <div class="boxes">
        <div class="box">
          <div class="icon">
            <i class="fab fa-android"></i>
          </div>
          <div class="topic">Android Development</div>
          <p>
            I know every corner of the Android platform, down to its core. I
            have the experience of working with every Android device type,
            brand, and custom ecosystem. I will give you a reliable product that
            appeals to the platform’s users.
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fab fa-chrome"></i>
          </div>
          <div class="topic">Web Development</div>
          <p>
            Client-focused, customer-centric, creating website solutions that
            deliver tangible business results, I help brands the ever-changing
            digital landscape.
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-tablet-alt"></i>
          </div>
          <div class="topic">Apps Development</div>
          <p>
            I have very high reputation on working on native mobile apps. I have
            Worked on several mobile apps like Audiobooks Now, Redbox, Bofa App,
            Chick-Fil-A. Most of the clients come back to add more functionality
            or with new projects.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  scroll-behavior: smooth;
}

.home {
  height: 100vh;
  width: 100%;
  background: url('../assets/images/hire-ban-android.jpeg') no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: 'Ubuntu', sans-serif;
}
.home .home-content {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home .text-one {
  font-size: 25px;
  color: white;
}
.home .text-two {
  color: lightyellow;
  font-size: 75px;
  font-weight: 600;
  margin-left: -3px;
}
.home .text-three {
  font-size: 40px;
  margin: 5px 0;
  color: lightblue;
}
.home .text-four {
  font-size: 23px;
  margin: 5px 0;
  color: lightcyan;
}

section {
  padding-top: 40px;
}
section .content {
  width: 80%;
  margin: 40px auto;
  font-family: 'Poppins', sans-serif;
}
.about .about-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
section .title {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
section .title span {
  color: #34495e;
  font-size: 30px;
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;
}
section .title span::before,
section .title span::after {
  content: '';
  position: absolute;
  height: 3px;
  width: 100%;
  background: #34495e;
  left: 0;
  bottom: 0;
}
section .title span::after {
  bottom: -7px;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
}
.about .about-details .left {
  width: 45%;
}
.about .left img {
  height: 400px;
  width: 400px;
  object-fit: cover;
  border-radius: 12px;
}
.about-details .right {
  width: 55%;
}
section .topic {
  color: #34495e;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
}
.about-details .right p {
  text-align: justify;
  color: #34495e;
}

/* My Services CSS */
.services .boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.services .boxes .box {
  margin: 20px 0;
  width: calc(100% / 3 - 20px);
  text-align: center;
  border-radius: 12px;
  padding: 30px 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  cursor: default;
  transition: all 0.4s ease;
}
.services .boxes .box:hover {
  background: #6c62d9;
  color: #fff;
}
.services .boxes .box .icon {
  height: 50px;
  width: 50px;
  background: #6c62d9;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: #fff;
  margin: 0 auto 10px auto;
  transition: all 0.4s ease;
}
.boxes .box:hover .icon {
  background-color: #fff;
  color: #6c62d9;
}
.services .boxes .box:hover .topic,
.services .boxes .box:hover p {
  color: #6c62d9;
  transition: all 0.4s ease;
}
.services .boxes .box:hover .topic,
.services .boxes .box:hover p {
  color: #fff;
}

/* Responsive Media Query */
@media (max-width: 1190px) {
  section .content {
    width: 85%;
  }
}
@media (max-width: 1000px) {
  .about .about-details {
    justify-content: center;
    flex-direction: column;
  }
  .about .about-details .left {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .about-details .right {
    width: 90%;
    margin: 40px 0;
  }
  .services .boxes .box {
    margin: 20px 0;
    width: calc(100% / 2 - 20px);
  }
}
@media (max-width: 900px) {
  .about .left img {
    height: 350px;
    width: 350px;
  }
}

@media (max-width: 750px) {
  .home .text-two {
    font-size: 65px;
  }
  .home .text-three {
    font-size: 35px;
  }
  .skills .skills-details {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .skills-details .text {
    width: 100%;
    margin-bottom: 50px;
  }
  .skills-details .boxes {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .services .boxes .box {
    margin: 20px 0;
    width: 100%;
  }
}

@media (max-width: 500px) {
  .home .text-two {
    font-size: 55px;
  }
  .home .text-three {
    font-size: 33px;
  }
  .skills-details .boxes .per {
    font-size: 50px;
    color: #4070f4;
  }
}
</style>
