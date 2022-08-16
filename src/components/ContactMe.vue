<template>
  <div>
    <button class="btn-empty p-0 m-0">
      <svg class="stroke-red hover:stroke-white px-2 py-1" width="12" height="22" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.41089 0.693329L0.909912 5.19431L5.41089 9.69529" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <h2>Contact Me</h2>
    <form class="grid grid-cols-2 gap-2">
      <div class="flex flex-col">
        <label>Name</label>
        <input type="text" placeholder="Name">
      </div>
      <div class="flex flex-col">
        <label>Email</label>
        <input type="email" placeholder="name@email.com" required>
      </div>
      <textarea class="col-span-2 resize-none mb-2 h-28" placeholder="Message" required></textarea>
      <button class="btn-primary col-span-2">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
}
</script>

<style scoped>

</style>