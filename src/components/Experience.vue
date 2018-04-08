<template lang="html">
  <div>
    <p>{{ experience.period }}</p>
    <h5>{{ experience.place }}</h5>
    <p class="subtitulo">{{ experience.position }}</p>
    <p class="detalle">{{ experience.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["experience"]
}
</script>
