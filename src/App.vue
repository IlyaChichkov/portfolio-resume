<template>
  <div class="dark">
    <router-view></router-view>
    <LanguageSwitch/>
  </div>
</template>

<script>
import LanguageSwitch from "@/components/LanguageSwitch";

export default {
  name: 'App',
  components: {
    LanguageSwitch
  }
}
</script>

<style>
</style>
