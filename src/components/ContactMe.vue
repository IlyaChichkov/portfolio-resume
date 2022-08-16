<template>
  <div>
    <button class="btn-empty p-0 m-0">
      <router-link :to="{name: 'main'}">
        <svg class="stroke-red hover:stroke-white px-2 py-1" width="12" height="22" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.41089 0.693329L0.909912 5.19431L5.41089 9.69529" stroke-width="1.00189" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </router-link>
    </button>
    <h2>Contact Me</h2>
    <form class="grid grid-cols-2 gap-2" v-on:submit.prevent="sendEmail">
      <div class="flex flex-col">
        <label>Name</label>
        <input v-model="name" type="text" placeholder="Name" required>
      </div>
      <div class="flex flex-col">
        <label>Email</label>
        <input v-model="email" type="email" placeholder="name@email.com" required>
      </div>
      <textarea v-model="message" class="col-span-2 resize-none mb-2 h-28" placeholder="Message" required></textarea>
      <button type="submit" value="Send" class="btn-primary col-span-2">Submit</button>
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: "ContactMe",
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail() {
      try {
        emailjs.sendForm('service_aaekk2l', 'template_vkdg067',{
              name: this.name,
              email: this.email,
              message: this.message
            })

      } catch(error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>

</style>