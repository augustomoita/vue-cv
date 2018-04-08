<template lang="html">
  <div>
    <hr>
      <p id="mi-nombre" class="text-center">
        {{ name }}
      </p>
    <hr>
  </div>
</template>

<script>
export default {
  props: ["name"]
}
</script>
