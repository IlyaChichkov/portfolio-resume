<template>
  <h2>{{$t('titles.proj')}}</h2>
  <div class="">
    <ul class="grid grid-cols-1 sm:grid-cols-1 border-solid border-0 border-l-1 border-l-red pl-0">
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('prj-web.password-generator')}}</p>
        <img class="image" src="../assets/screenshots/password-generator.png"
             alt="password-generator screenshot">
      </li>
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('prj-web.todo-app')}}</p>
        <img class="image" src="../assets/screenshots/todo-app.png"
             alt="todo-app screenshot">
      </li>
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('prj-web.bank-card')}}</p>
        <img class="image" src="../assets/screenshots/bank-card.png"
             alt="bank-card screenshot">
      </li>
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('prj-web.tip-calc')}}</p>
        <img class="image" src="../assets/screenshots/tip-calc.png"
             alt="tip-calc screenshot">
      </li>
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('prj-web.tutor-site')}}</p>
        <img class="image" src="../assets/screenshots/tutor-site.png"
             alt="tutor-site screenshot">
      </li>
      <li class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('prj-web.storage-layout')}}</p>
        <img class="image" src="../assets/screenshots/storage-layout.png"
             alt="storage-layout screenshot">
      </li>
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