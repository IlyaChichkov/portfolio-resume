<template>
  <h2>{{$t('titles.tech')}}</h2>
  <p>{{$t('tool-data.info')}}:</p>
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
</template>

<script>
export default {
  name: "MyToolsSection"
}
</script>

<style scoped>
.tool-icon{
  @apply mr-4;
  max-width: 42px;
}
.tool-icon:last-child{
  @apply mr-0;
}
</style>