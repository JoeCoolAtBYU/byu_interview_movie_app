<template>
  <form @submit.prevent="onSubmit">
    <label>
      <input v-model="text" type="text" placeholder="Search Movies..." />
    </label>
    <input type="submit" value="Search Movies" />
  </form>
</template>

<script>
export default {
  name: 'SearchMovies',
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search-text', this.text)
      this.text = ''
    },
  },
}
</script>

<style></style>
