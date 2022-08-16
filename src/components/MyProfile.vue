<template>
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
</template>

<script>
export default {
  name: "MyProfile"
}
</script>

<style scoped>
.avatar-icon{
  @apply p-1 rounded-full border-solid border-red/[.75] border-2;
  width: 128px;
  height: 128px;
}
</style>