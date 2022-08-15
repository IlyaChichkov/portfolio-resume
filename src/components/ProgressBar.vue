<template>
  <div>
    <div class="flex flex-row justify-between">
      <p>{{title}}</p>
      <p>{{percent}}%</p>
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
</style>