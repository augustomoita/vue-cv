<template lang="html">
  <div class="card item" id="info">
      <div class="card-header"><i class="fa fa-info"></i> Información</div>
      <div class="card-block">
          <table class="table">
              <tbody>
                  <personal-info-item icon="id-card-o">
                      {{ info.dni }}
                  </personal-info-item>
                  <personal-info-item icon="calendar">
                      {{ info.birthday|format }} - {{ age }} años
                  </personal-info-item>
                  <personal-info-item icon="male">
                      {{ info.civilStatus }}
                  </personal-info-item>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
import PersonalInfoItem from './PersonalInfoItem';
import moment from 'moment';

export default {
  props: ["info"],
  components: {
    PersonalInfoItem
  },

  computed: {
    age: function () {
      return moment().diff(this.info.birthday, 'years')
    }
  },

  filters: {
    format: function (date) {
      return moment(date).format("DD/MM/YYYY")
    }
  }
}
</script>
