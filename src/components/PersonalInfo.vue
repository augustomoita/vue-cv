<template lang="html">
  <div class="card item" id="info">
      <div class="card-header"><i class="fa fa-info"></i> Información</div>
      <div class="card-block">
          <table class="table">
              <tbody>
                  <personal-info-item>
                    <template slot="icon">
                        <i class="fa fa-id-card-o"></i>
                    </template>
                    <template slot="info">
                      {{ info.dni }}
                    </template>
                  </personal-info-item>
                  <personal-info-item>
                    <template slot="icon">
                        <i class="fa fa-calendar"></i>
                    </template>
                    <template slot="info">
                      {{ info.birthday|format }} - {{ age }} años
                    </template>
                  </personal-info-item>
                  <personal-info-item>
                    <template slot="icon">
                        <i class="fa fa-male"></i>
                    </template>
                    <template slot="info">
                      {{ info.civilStatus }}
                    </template>
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
