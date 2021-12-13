<template>
   <main class="resume-contents">
        <section class="left-section">
            <div class="left-section-contents">
                <div class="profile">
                    <img class="profile_pic" src="images/profile-pic.png"/>
                    <p class="name">{{ name }}</p>
                    <p class="profession">{{ profession }}</p>
                    <p class="resume_content">
                        <a href="resume.pdf" class="resume">{{ download_resume }} </a>
                    </p>
                </div>
                <div class="skills">
                    <p class="left-title">{{ skills_title }}</p>
                    <ul>
                      <li v-for="item in skills" :key="item.skill">
                        {{ item.skill }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="right-section">
            <div class="right-section-contents">
              
                <section class="experience gap">
                    <div class="right-title">{{ experience_title }}</div>

                    <div class="experience-contents">
                        <div class="exp-left">
                            <p class="exp-company-name">{{ experience_one.item.company_name }}</p>
                            <p class="exp-time-period">{{ experience_one.item.time_period }}</p>
                        </div>
                        <div class="exp-right">
                            <p class="exp-position">{{ experience_one.item.position }}</p>
                            <p class="exp-desc">
                            <ol>
                                 <li v-for="item in experience_one.item.description" :key="item.data">
                                   {{ item.data }}
                        </li>
                            </ol>
                            </p>
                        </div>
                     
                    </div>
                     <div class="experience-contents">
                        <div class="exp-left">
                            <p class="exp-company-name">{{ experience_two.item.company_name }}</p>
                            <p class="exp-time-period">{{ experience_two.item.time_period }}</p>
                        </div>
                        <div class="exp-right">
                            <p class="exp-position">{{ experience_two.item.position }}</p>
                            <p class="exp-desc">
                            <ol>
                                 <li v-for="item in experience_two.item.description" :key="item.data">
                                   {{ item.data }}
                        </li>
                            </ol>
                            </p>
                        </div>
                     
                    </div>
                     <div class="experience-contents">
                        <div class="exp-left">
                            <p class="exp-company-name">{{ experience_three.item.company_name }}</p>
                            <p class="exp-time-period">{{ experience_three.item.time_period }}</p>
                        </div>
                        <div class="exp-right">
                            <p class="exp-position">{{ experience_three.item.position }}</p>
                            <p class="exp-desc">
                            <ol>
                                 <li v-for="item in experience_three.item.description" :key="item.data">
                                   {{ item.data }}
                        </li>
                            </ol>
                            </p>
                        </div>
                     
                    </div>
                     <div class="experience-contents">
                        <div class="exp-left">
                            <p class="exp-company-name">{{ experience_four.item.company_name }}</p>
                            <p class="exp-time-period">{{ experience_four.item.time_period }}</p>
                        </div>
                        <div class="exp-right">
                            <p class="exp-position">{{ experience_four.item.position }}</p>
                            <p class="exp-desc">
                            <ol>
                                 <li v-for="item in experience_four.item.description" :key="item.data">
                                   {{ item.data }}
                        </li>
                            </ol>
                            </p>
                        </div>
                     
                    </div>
                </section>

                <section class="education gap">
                    <div class="right-title">{{ education_title }}</div>
                    <div class="education-contents">
                        <div class="education-left">
                            <p class="education-school-name">{{ education_one.college_name }}</p>
                            <p class="educationp-time-period">{{ education_one.completed_date }}</p>
                        </div>
                        <div class="education-right">
                            <p class="education-subject">{{ education_one.degree }}</p>
                        </div>
                    </div>
                    <div class="education-contents">
                        <div class="education-left">
                            <p class="education-school-name">{{ education_two.college_name }}</p>
                            <p class="educationp-time-period">{{ education_two.completed_date }}</p>
                        </div>
                        <div class="education-right">
                            <p class="education-subject">{{ education_two.degree }}</p>
                        </div>
                    </div>
                </section>
                <section class="awards gap">
                    <div class="right-title">{{ awards_title }}</div>
                    <div class="awards-contents">
                        <div class="awards-left">
                            <p class="awards-company-name">{{ education_two.college_name }}</p>
                        </div>
                        <div class="awards-right">
                            <p class="awards-name">{{ deans_list }}</p>
                            <p class="awards-desc">
                               {{ award_description }}
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  data() {
    return {
      name: "Sandeep Agrawal",
      profession: "Android Developer",
      download_resume: "Download Resume",
      skills_title: "Skills",
      skills: [
        { skill: "Android Development" },
        { skill: "Debugging" },
        { skill: "JavaScript, Angular" },
        { skill: "Retrofitting" },
        { skill: "Java" },
        { skill: "Git & GitHub" },
        { skill: "Software Development" },
        { skill: "Testing and Maintenance" },
        { skill: "Data Structures & Algorithms" },
      ],
      experience_title: "Experience",
      experience_one: {
        item: {
          company_name: "Bank of America",
          time_period: "April 2019-Current",
          position: "Software Engineer II",
          description: [
            {
              data: "Worked on My Financial Picture feature for the Edge, Advisory and Pre-client apps.",
            },
            {
              data: "Implemented Sell Shares feature on the Benefits Online app from scratch. Use single activity and multiple fragments approach with MVVM design pattern for the feature.",
            },
            {
              data: "Tested application prior to final review to verify issue resolution.",
            },
            {
              data: "Worked on My Financial Picture feature for the Edge, Advisory and Pre-client apps.",
            },
            {
              data: "Provided estimates for new initiatives.",
            },
            {
              data: "Performed peer code reviews for immediate and related teams.",
            },
          ],
        },
      },
      experience_two: {
        item: {
          company_name: "Chick-Fil-A",
          time_period: "July 2020-Nov 2020",
          position: "Android Developer",
          description: [
            {
              data: "Used architecture component like navigation UI",
            },
            {
              data: "Implemented MVVM design pattern",
            },
            {
              data: "Encrypted username and password",
            },
            {
              data: "Shared preferences for storing user preferences.",
            },
            {
              data: "Created CI/CD pipeline for running automated tests and distribution using Github actions, Docker and Firebase.",
            },
            {
              data: "Used Koin for dependency injection.",
            },
          ],
        },
      },
      experience_three: {
        item: {
          company_name: "Redbox",
          time_period: "March 2017-April 2019",
          position: "Senior Android Developer",
          description: [
            {
              data: "Created UI and functional implementation of the loyalty program in the app.",
            },
            {
              data: "Worked on integrating Restful APIs into various parts of the app.",
            },
            {
              data: "Integrated Adobe Advertising SDK into the application to handle the analytics for the application.",
            },
            {
              data: "Provide demo to the product managers and stakeholders during the development phase and after development is completed.",
            },
            {
              data: "Used Jenkins to deploy the debug and release builds.",
            },
            {
              data: "Implemented Masterpass Checkout SDK in the physical checkout in the mobile app and tested in both sandbox and release environment.",
            },
            {
              data: "Implemented Localytics SDK and push notification for the mobile app.",
            },
          ],
        },
      },
      experience_four: {
        item: {
          company_name: "AudiobooksNow",
          time_period: "March 2017-April 2019",
          position: "Lead Android Developer",
          description: [
            {
              data: "Discussed and documented client requirements, prepared prototype and shared with the client.",
            },
            {
              data: "Identified critical defects in application and resolved before each release.",
            },
            {
              data: "Integrated AudiobooksNow Restful APIs.",
            },
            {
              data: "Created custom player to play Audiobooks.",
            },
            {
              data: "Implemented mechanism to read DRM Audiobooks.",
            },
            {
              data: "Implemented Bookmark functionality into the player and syncronize with server.",
            },
          ],
        },
      },
      education_title: "Education",
      education_one: {
        college_name: "Boston University",
        completed_date: "2020-2022",
        degree: "Master of Science in Software Development",
      },
      education_two: {
        college_name: "Strayer University",
        completed_date: "2012-2014",
        degree: "Bachelors of Science Information Systems",
      },
      awards_title: "Awards",
      deans_list: "Deans List",
      award_description: "Magna Cum Laude: GPA 3.7",
    };
  },
};
</script>

<style scoped>
@import "../assets/css/mystyle.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.profile {
  width: 100%;
  border-bottom: 2px solid #1b2631;
}

.profile_pic {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.resume-contents {
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #fafafa;
}

.left-section {
  grid-column: span 2;
  height: 100%;
  background-color: #2b4aa5;
}

.right-section {
  grid-column: span 5;
  height: 100%;
  background-color: #fafafa;
}

.left-section-contents {
  padding: 2rem 2rem;
}

.name {
  color: lightgray;
  font-size: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  padding: 1rem 0;
}

.profession {
  color: lightgray;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  padding-bottom: 1rem;
}

.resume_content {
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 1rem;
}

.resume:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

.resume:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

.resume:visited {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

.left-title {
  color: lightgray;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding-top: 3rem;
}

.contact-info ul {
  padding-top: 1.5rem;
}

.contact-info ul li,
.references ul li {
  padding: 0.4rem 0;
  display: flex;
  align-items: center;
  color: lightgray;
  letter-spacing: 1px;
  font-size: 18px;
}

.skills ul {
  padding-top: 1.5rem;
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: white; /* Change the color */
}

.skills ul li {
  padding: 0.4rem 0.2rem;
  align-items: center;
  color: lightgray;
  letter-spacing: 1px;
  font-size: 18px;
  list-style-type: none;
}

.skills ul li p {
  padding: 0.4rem 0;
  color: lightgray;
  font-size: 18px;
  letter-spacing: 1px;
}

.right-section-contents {
  padding: 2rem 2rem;
}

.right-title {
  color: #2b4aa5;
  font-size: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 2rem 0;
  position: relative;
}

.gap {
  padding-bottom: 2rem;
}

.exp-right ol {
  list-style-type: none;
  text-align: left;
}

.exp-right ol li {
  position: relative;
  margin: 0;
  padding-bottom: 1em;
  padding-left: 20px;
}

.experience-contents,
.education-contents,
.awards-contents {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 2rem;
}

.exp-company-name,
.education-school-name,
.awards-company-name {
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #21638f;
  padding-bottom: 0.4rem;
}

.exp-time-period,
.education-time-period,
.awards-time-period {
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 2rem;
}

.exp-position,
.education-subject,
.awards-name {
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #2e86c1;
  padding-bottom: 0.4rem;
}

.exp-desc,
.education-desc,
.awards-desc {
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5rem;
  border-left: 3px solid #a5a3a3;
  padding-left: 5px;
}

/* Media queries */
@media screen and (max-width: 780px) {
  .experience-contents,
  .education-contents,
  .awards-contents {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 780px) {
  .left-section {
    grid-column: span 3;
  }

  .right-section {
    grid-column: span 4;
  }
}

@media screen and (max-width: 1200px) {
  .resume-contents {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 390px) {
  .resume-contents {
    width: 100%;
    margin: 0 auto;
  }

  .name {
    font-size: 20px;
  }

  .profession {
    font-size: 18px;
  }

  .left-title {
    font-size: 18px;
  }

  .right-title {
    font-size: 18px;
  }

  .skills ul li p {
    font-size: 12px;
  }

  .exp-company-name,
  .education-school-name,
  .awards-company-name {
    font-size: 18px;
  }

  .exp-time-period,
  .educationp-time-period {
    font-size: 16px;
  }

  .exp-position,
  .education-subject,
  .awards-name {
    font-size: 18px;
  }
}
</style>