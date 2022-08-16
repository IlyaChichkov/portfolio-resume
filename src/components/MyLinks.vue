<template>
  <ul class="links">
    <li><a href="https://github.com/IlyaChichkov">Github</a></li>
    <li><a href="https://t.me/Ilya_Chichkov">Telegram</a></li>
    <li><a href="https://vk.com/chichkov_ilya">VK</a></li>
    <li><a href="https://twitter.com/RedEye_Games">Twitter</a></li>
  </ul>
</template>

<script>
export default {
  name: "MyLinks"
}
</script>

<style scoped>
.links{
  @apply font-bold flex justify-around my-10 px-0;
}
</style>