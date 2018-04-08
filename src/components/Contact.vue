<template lang="html">
  <div class="card item" id="contacto">
      <div class="card-header"><i class="fa fa-inbox"></i> Contacto</div>
      <div class="card-block">
          <table class="table">
              <tbody>
                  <contact-item>
                    <template slot="icon">
                      <i class="fa fa-home"></i>
                    </template>
                    <template slot="contact">
                      {{ contact.address }}
                    </template>
                  </contact-item>
                  <contact-item>
                    <template slot="icon">
                      <i class="fa fa-envelope"></i>
                    </template>
                    <template slot="contact">
                      {{ contact.email }}
                    </template>
                  </contact-item>
                  <contact-item>
                    <template slot="icon">
                      <i class="fa fa-phone"></i>
                    </template>
                    <template slot="contact">
                      {{ contact.phone }}
                    </template>
                  </contact-item>
                  <contact-item>
                    <template slot="icon">
                      <i class="fa fa-github"></i>
                    </template>
                    <template slot="contact">
                      {{ contact.github }}
                    </template>
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
