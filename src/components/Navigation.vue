<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link
          class="header"
          :to="{ name: 'Home' }"
        >
          FireBlogs
        </router-link>
      </div>
      <div class="nav-links">
        <ul>
          <router-links class="link" to="#">Home</router-links>
          <router-links class="link" to="#">Blogs</router-links>
          <router-links class="link" to="#">Create Post</router-links>
          <router-links class="link" to="#">Login/Register</router-links>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>