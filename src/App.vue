<template>
  <MainPage/>
</template>

<script>
import MainPage from "@/components/MainPage";

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;600;700&family=Rubik:wght@400;500;600;700&display=swap');

* {
  --background-col: #222831;
  --secondary-col: #4E596F;
  --secondary-text-col: #B3B8C0;
  --red-col: #F66663;
  --main-text-col: #FFFFFF;
}

h1, h2, h3, h4 {
  @apply text-black dark:text-white;
}

h1, h2 {
  @apply text-black dark:text-white font-rubik m-0 my-2;
}

h1 {
  @apply text-4xl font-bold;
}

h2 {
  @apply text-2xl font-medium;
}

h3 {
  @apply text-black dark:text-white font-rubik font-light text-base m-0 mt-1 mb-2;
}

p {
  @apply text-base font-sans text-gray;
}

li {
  list-style: none;
  font-family: 'Nunito', sans-serif;
  color: var(--secondary-text-col);
}

hr {
  @apply block my-8 bg-secondary border-2 border-solid border-secondary;
  width: 70%;
}

body {
  background-color: var(--background-col);
}

a {
  @apply no-underline text-red hover:underline;
}

#app {
  @apply flex flex-col mx-auto sm:w-11/12 md:w-2/3 lg:w-3/5 xl:w-2/5;
  margin-top: 60px;

}
</style>
