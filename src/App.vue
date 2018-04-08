<template>
  <div id="app" class="container">
        <div class="row">
            <div class="col-7">
                <my-name :name="name"/>
                <studies-list :studies="studies"/>
                <experience-list :experiences="experience" />
                <skills-list :skills="skills" />
            </div>
            <div class="col-5">
                <div class="text-center item" id="foto-container">
                    <img :src="'./src/assets/'+photo" width="53%" id="foto" class="rounded-circle">
                </div>
                <personal-info :info="personalInfo" />
                <contact :contact="contact"/>
                <languages-list :languages="languages"/>
            </div>
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

export default {
  name: 'app',
  data () {
    return cv
  },

  components: {
    MyName, StudiesList, ExperienceList, SkillsList,
    PersonalInfo, Contact, LanguagesList
  }
}
</script>

<style lang="scss">
  @import '~bootstrap/dist/css/bootstrap.min.css';
  @import '~font-awesome/css/font-awesome.min.css';
  @import './assets/css/app.css';
</style>
