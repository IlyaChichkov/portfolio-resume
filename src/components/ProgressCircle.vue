<template>
  <div>
    <svg :width="size" :height="size" viewBox="0 0 80 80">
      <foreignObject x="0" y="11" width="80" height="80">
        <p class="text-red font-medium text-center align-baseline">{{percent}}%</p>
      </foreignObject>
      <circle
          class="bar"
          :stroke-width="border"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
      />
      <circle
          class="fill"
          :stroke-width="border"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="circumference - percent / 100 * circumference"
          stroke-linecap="round"
          stroke="red"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
          transform="rotate(-90) translate(-80, 0)"
      />
    </svg>
    <p class="text-white font-medium text-center my-1">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "ProgressCircle",
  props: {
    title: String,
    percent: Number,
    size: { type: Number, default: 42 },
    border: { type: Number, default: 8 }
  },
  data(){
    return{
      circumference: 30 * 2 * Math.PI,
    }
  }
}
</script>

<style scoped>
.bar{
  @apply stroke-secondary;
}
.fill{
  @apply stroke-red;
}
</style>