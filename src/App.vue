<template>
  <div id="app" class="container">
    <div class="row">
      <transition name="desde-izq" @after-enter="showDer = true">
        <div class="col-7" v-if="showIzq">
          <my-name :name="name"/>
          <studies-list :studies="studies"/>
          <experience-list :experiences="experience" />
          <skills-list :skills="skills" />
        </div>
      </transition>
      <transition name="desde-der">
        <div class="col-5" v-if="showDer">
          <profile-photo :photo="photo" />
          <personal-info :info="personalInfo" />
          <contact :contact="contact"/>
          <languages-list :languages="languages"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import cv from './data.js';
  import MyName from './components/MyName.vue';
  import StudiesList from './components/StudiesList.vue';
  import ExperienceList from './components/ExperienceList.vue';
  import SkillsList from './components/SkillsList.vue';
  import PersonalInfo from './components/PersonalInfo.vue';
  import Contact from './components/Contact.vue';
  import LanguagesList from './components/LanguagesList.vue';
  import ProfilePhoto from './components/ProfilePhoto.vue';

  cv.showIzq = false
  cv.showDer = false
  export default {
    name: 'app',
    data () {
      return cv
    },
    created: function () {
      let app = this
      setTimeout(function () {
        app.showIzq = true
      }, 0)
    },
    components: {
      MyName, StudiesList, ExperienceList, SkillsList,
      PersonalInfo, Contact, LanguagesList, ProfilePhoto
    }
  }
</script>

<style lang="scss">
  @import '~bootstrap/dist/css/bootstrap.min.css';
  @import '~font-awesome/css/font-awesome.min.css';
  @import './assets/css/app.css';
</style>
