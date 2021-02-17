<template>
  <div>
    <h2>Welcome to my app to search The Movie Database.</h2>
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {},
  head() {
    return {
      title: 'Welcome to MY_MOVIE_PROJECT',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My app for BYU interview process',
        },
      ],
    }
  },
}
</script>
