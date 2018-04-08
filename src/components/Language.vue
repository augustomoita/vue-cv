<template lang="html">
  <div>
    <h5>{{ language.language }}</h5>
    <p>
        <span class="subtitulo">{{ language.level }}</span>
        <span class="detalle"> {{ language.description }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["language"]
}
</script>
