<template lang="html">
  <div class="col-5">
    <profile-photo :photo="photo" />
    <contact :contact="contact"/>
    <languages-list :languages="languages"/>
  </div>
</template>

<script>
import Contact from './Contact.vue';
import LanguagesList from './LanguagesList.vue';
import ProfilePhoto from './ProfilePhoto.vue';

export default {
  props: ["photo", "info", "contact", "languages"],
  components: {
    Contact, LanguagesList, ProfilePhoto
  }
}
</script>
