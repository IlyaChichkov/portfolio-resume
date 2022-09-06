<template>
  <div class="dark">
    <section>
      <MyProfile/>
    </section>
    <section>
      <MyLinks/>
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
      <MyToolsSection/>
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
      <MyProjectsSection/>
    </section>
    <section class="flex flex-row justify-center">
      <button class="btn-primary mt-8 px-5 py-5">
        <router-link class="text-white" :to="{name: 'contact'}">Contact Me</router-link>
      </button>
    </section>
    <footer class="block h-20"></footer>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import ProgressCircle from "@/components/ProgressCircle";
import MyProjectsSection from "@/components/MyProjectsSection";
import MyToolsSection from "@/components/MyToolsSection";
import MyProfile from "@/components/MyProfile";
import MyLinks from "@/components/MyLinks";

export default {
  name: "MainPage",
  components: {MyLinks, MyProfile, MyToolsSection, MyProjectsSection, ProgressCircle, ProgressBar}
}
</script>

<style scoped>
</style>