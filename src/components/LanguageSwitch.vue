<template>
  <div class="absolute md:fixed l-switch">
    <button class="l-button" v-on:click="changeLang">{{lang}}</button>
  </div>
</template>

<script>

export default {
  name: "LanguageSwitch",
  data(){
    return{
      lang: 'EN'
    }
  },
  methods: {
    changeLang(){
      if(this.lang === 'EN'){
        this.lang = 'RU'
      }else{
        this.lang = 'EN'
      }
      localStorage.setItem('lang', this.lang);
      this.$i18n.locale = this.lang.toLowerCase();
    }
  },
  mounted() {
    this.lang = localStorage.getItem('lang') || 'EN';
    this.$i18n.locale = this.lang.toLowerCase();

    var userLang = navigator.language || navigator.userLanguage;

    if(userLang.toString() == 'ru' || userLang.toString() == 'en'){
      this.$i18n.locale = userLang;
    }else{
      this.$i18n.locale = 'en';
    }
    this.lang = this.$i18n.locale.toUpperCase();
  }
}
</script>

<style scoped>
.l-switch{
  @apply right-2 sm:right-5;
  top: 20px;
}
.l-button{
  @apply bg-transparent border-none text-gray font-bold font-rubik text-base;
  width: 40px;
  height: 40px;
}
.l-button:active{
  @apply bg-transparent border-none text-white font-bold font-rubik text-base;
}
</style>