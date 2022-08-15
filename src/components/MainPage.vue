<template>
  <div class="dark">
    <section>
      <div class="flex">
        <img class="avatar-icon" src="../assets/avatar.png">
        <div class="flex-col justify-between ml-6">
          <h1 class="font-bold mt-0">{{$t("profile.title")}}</h1>
          <p>{{$t('profile.desc')}}</p>
          <div class="flex">
            <p class="mr-2 my-0 font-bold text-white">{{$t('profile.city')}}</p>
            <p class="mr-4 my-0">{{$t('profile.moscow')}}</p>
            <p class="mr-2 my-0 font-bold text-white">{{$t('profile.age')}}</p>
            <p class="mr-2 my-0">19</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <ul class="flex justify-around links">
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
    <section class="pb-6">
      <div class="grid grid-cols-2 gap-6">
        <ProgressBar :title="'C#'" :percent="90"/>
        <ProgressBar :title="'C++'" :percent="60"/>
        <ProgressBar :title="'Python'" :percent="20"/>
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
      <div class="flex">
        <ProgressCircle :title="'Russian'" :percent="100" :size="80"/>
        <ProgressCircle :title="'English'" :percent="70" :size="80"/>
        <ProgressCircle :title="'German'" :percent="10" :size="80"/>
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
  @apply font-bold;
}
</style>