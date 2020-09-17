<template lang="html">
  <div class="text-center item" id="foto-container">
    <img :src="require('@/assets/'+photo)" id="foto" class="rounded-circle">
  </div>
</template>

<script>
export default {
  props: ["photo"]
}
</script>
