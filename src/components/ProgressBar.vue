<template>
  <div class="bar-container p-3 border-red/[.6] border-solid border-0.5 rounded-lg">
    <div class="flex flex-row justify-between">
      <p class="text-white mt-0">{{title}}</p>
      <p class="mt-0">{{percent}}%</p>
    </div>
    <div class="bar">
      <div class="fill" :style="getProgress"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    title: String,
    percent: Number
  },
  computed: {
    getProgress(){
      return 'width: ' + this.percent + '%;';
    }
  }
}
</script>

<style scoped>
.bar{
  min-height: 12px;
  width: 100%;
  background-color: #4E596F;
  border-radius: 50px;
}
.fill{
  min-height: 12px;
  width: 100%;
  background-color: #F66663;
  border-radius: 50px;
}
.bar-container{
  transition: all 150ms ease-in-out;
  box-shadow: 0px 0px 0px 0px var(--red-col);
}
.bar-container:hover{
  box-shadow: 0px 0px 8px 1px var(--red-col);
}
</style>