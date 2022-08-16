<template>
  <h2>{{$t('titles.proj')}}</h2>
  <div>
    <ul class="border-solid border-0 border-l-1 border-l-red pl-0">
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('projects.one')}}</p>
        <img class="image" src="../assets/space-front.png"
             alt="space front screenshot">
      </li>
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('projects.two')}}</p>
        <img class="image" src="../assets/dawn-of-white.jpg">
      </li>
    </ul>
    <p>{{$t('projects.three')}}</p>
  </div>
</template>

<script>
export default {
  name: "MyProjectsSection"
}
</script>

<style scoped>
.image{
  @apply outline outline-offset-2 outline-1 outline-red p-1 max-w-[94%] sm:max-w-[452px];
}
</style>