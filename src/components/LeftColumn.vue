<template lang="html">
  <div class="col-7">
    <my-name :name="name"/>
    <experience-list :experiences="experiences" />
    <skills-list :skills="skills" />
    <studies-list :studies="studies"/>
  </div>
</template>

<script>
import MyName from './MyName.vue';
import StudiesList from './StudiesList.vue';
import ExperienceList from './ExperienceList.vue';
import SkillsList from './SkillsList.vue';

export default {
  props: ["name", "studies", "experiences", "skills"],
  components: {
    MyName, StudiesList, ExperienceList, SkillsList
  }
}
</script>
