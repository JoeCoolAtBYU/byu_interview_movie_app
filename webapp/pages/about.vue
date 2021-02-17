<template>
  <div>
    <h1>About MY_MOVIE_PROJECT</h1>
    <p>
      This is an app I've created to submit for the interview process for BYU's
      office of IT.
    </p>
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About The App',
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

<style scoped></style>
