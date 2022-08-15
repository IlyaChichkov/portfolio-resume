<template>
  <div>
    <svg :width="size" :height="size" viewBox="0 0 80 80">
      <foreignObject x="0" y="0" >
        <p>{{percent}}%</p>
      </foreignObject>
      <circle
          class="text-gray-300"
          stroke-width="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
      />
      <circle
          class="red"
          stroke-width="5"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - percent / 100 * circumference"
          stroke-linecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
      />
    </svg>
    <p class="text-center my-1">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "ProgressCircle",
  props: {
    title: String,
    percent: Number,
    size: { type: Number, default: 42 }
  },
  data(){
    return{
      circumference: 30 * 2 * Math.PI,
    }
  }
}
</script>

<style scoped>
.fill{

}
</style>