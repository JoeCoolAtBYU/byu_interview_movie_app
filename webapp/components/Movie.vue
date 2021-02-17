<template>
  <div class="movie">
    <p>{{ movie }}</p>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  // eslint-disable-next-line vue/require-prop-types
  props: ['movieId', 'title', 'posterImageUrl', 'popularitySummary'],
}
</script>

<style scoped>
.movie {
  padding: 1rem;
  border: 3px solid #ccc;
  margin: 1rem 0;
}
</style>
