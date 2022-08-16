<template>
  <div class="dark">
    <section>
      <div class="flex justify-evenly">
        <img class="avatar-icon" src="../assets/avatar.png">
        <div class="flex-col justify-between ml-6">
          <h1 class="font-bold mt-0">{{$t("profile.title")}}</h1>
          <p style="max-width: 95%">{{$t('profile.desc')}}</p>
          <div class="flex items-center">
            <svg viewBox="0 0 24 24" class="mr-1 stroke-red" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <p class="mr-4 my-0">{{$t('profile.moscow')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ul class="links">
        <li><a href="https://github.com/IlyaChichkov">Github</a></li>
        <li><a href="https://t.me/Ilya_Chichkov">Telegram</a></li>
        <li><a href="https://vk.com/chichkov_ilya">VK</a></li>
        <li><a href="https://twitter.com/RedEye_Games">Twitter</a></li>
      </ul>
    </section>
    <section class="mb-10">
      <h2>{{$t('titles.skills')}}</h2>
      <ul>
        <li>{{$t('skills.one')}}</li>
        <li>{{$t('skills.two')}}</li>
        <li>{{$t('skills.three')}}</li>
      </ul>
    </section>
    <hr>
    <section class="">
      <div class="flex-col sm:grid grid-cols-2 gap-6">
        <ProgressBar class="mb-2 sm:mb-0" :title="'C#'" :percent="90"/>
        <ProgressBar class="mb-2 sm:mb-0" :title="'C++'" :percent="60"/>
        <ProgressBar class="mb-2 sm:mb-0" :title="'Python'" :percent="20"/>
        <ProgressBar :title="'JS'" :percent="70"/>
      </div>
    </section>
    <hr>
    <section>
      <h2>{{$t('titles.tech')}}</h2>
      <h3>{{$t('titles.programmer')}}</h3>
      <div class="mb-4">
        <img class="tool-icon" src="../assets/icon_vs.svg">
        <img class="tool-icon" src="../assets/icon_ws.svg">
        <img class="tool-icon" src="../assets/icon_git.svg">
        <img class="tool-icon" src="../assets/icon_qt.svg">
        <img class="tool-icon" src="../assets/icon_unity.svg">
      </div>
      <h3>{{$t('titles.designer')}}</h3>
      <div>
        <img class="tool-icon" src="../assets/icon_ai.svg">
        <img class="tool-icon" src="../assets/icon_ps.svg">
        <img class="tool-icon" src="../assets/icon_figma.svg">
      </div>
    </section>
    <section>
      <h2>{{$t('titles.lang')}}</h2>
      <div class="flex justify-center sm:justify-start">
        <ProgressCircle :title="$t('languages.ru')" :percent="100" :size="80"/>
        <ProgressCircle :title="$t('languages.en')" :percent="70" :size="80"/>
        <ProgressCircle :title="$t('languages.ge')" :percent="10" :size="80"/>
      </div>
    </section>
    <section>
      <h2>{{$t('titles.proj')}}</h2>
      <div class="border-solid border-0 border-l-4 border-l-red pl-4">
        <p>{{$t('projects.one')}}</p>
        <p>{{$t('projects.two')}}</p>
        <p>{{$t('projects.three')}}</p>
      </div>
    </section>
    <section>
      <h2>{{$t('titles.email')}}</h2>
      <p>ilya.chichkov.dev@gmail.com</p>
      <button>
        <router-link :to="{name: 'contact'}">Contact Me</router-link>
      </button>
    </section>
    <footer class="block h-20"></footer>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import ProgressCircle from "@/components/ProgressCircle";

export default {
  name: "MainPage",
  components: {ProgressCircle, ProgressBar}
}
</script>

<style scoped>
.avatar-icon{
  @apply p-1 rounded-full border-solid border-red/[.75] border-2;
  width: 128px;
  height: 128px;
}

.tool-icon{
  @apply mr-4;
  max-width: 42px;
}
.tool-icon:last-child{
  @apply mr-0;
}
.links{
  @apply font-bold flex justify-around my-10 px-0;
}
</style>