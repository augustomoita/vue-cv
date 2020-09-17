<template lang="html">
  <div class="card item" id="contacto">
      <div class="card-header"><i class="fa fa-info-circle"></i> Información</div>
      <div class="card-block">
          <table class="table">
              <tbody>
                  <contact-item icon="fas fa-home">
                      {{ contact.location }}
                  </contact-item>
                  <contact-item icon="fas fa-envelope">
                      {{ contact.email }}
                  </contact-item>
                  <contact-item icon="fab fa-github">
                      {{ contact.github }}
                  </contact-item>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import ContactItem from './ContactItem.vue';

export default {
  props: ["contact"],
  components: { ContactItem }
}
</script>
