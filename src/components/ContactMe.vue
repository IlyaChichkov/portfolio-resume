<template>
  <MyProfile/>
  <MyLinks/>
  <div>
    <div class="flex flex-row items-center">
      <button class="btn-empty p-0 m-0 mt-3">
        <router-link :to="{name: 'main'}">
          <svg class="stroke-red hover:stroke-white px-2 py-1" width="12" height="22" viewBox="0 0 6 11" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M5.41089 0.693329L0.909912 5.19431L5.41089 9.69529" stroke-width="1.00189" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </router-link>
      </button>
      <h2 class="ml-8">{{$t('titles.contact')}}</h2>
    </div>
    <form class="grid grid-cols-2 gap-2" v-on:submit.prevent="sendEmail">
      <div class="flex flex-col">
        <label>{{$t('contact-form.name')}}</label>
        <input v-model="name" type="text" :placeholder="$t('contact-form.name')" required>
      </div>
      <div class="flex flex-col">
        <label>{{$t('contact-form.email')}}</label>
        <input v-model="email" type="email" placeholder="name@email.com" required>
      </div>
      <textarea v-model="message" class="col-span-2 resize-none mb-2 h-28" :placeholder="$t('contact-form.message')" required></textarea>
      <button type="submit" value="Send" class="btn-primary col-span-2">{{ submitBtnText }}</button>
    </form>
    <p v-if="sent">{{$t('other.return-warning')}}... {{ returnCooldown }}</p>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import MyProfile from "@/components/MyProfile";
import MyLinks from "@/components/MyLinks";

export default {
  name: "ContactMe",
  components: {MyLinks, MyProfile},
  data() {
    return {
      name: '',
      email: '',
      message: '',
      sent: false,
      returnUser: false,
      returnCooldown: 10
    }
  },
  computed: {
    submitBtnText() {
      return this.sent === true ? this.$t('contact-form.btn-s') : this.$t('contact-form.btn')
    }
  },
  methods: {
    sendEmail() {
      try {
        emailjs.send(
            'service_aaekk2l',
            'template_vkdg067',
            {
              name: this.name,
              email: this.email,
              message: this.message
            },
            'KLYARxpdpMpP8pTOW'
        )
      } catch (error) {
        console.log({error})
      } finally {
        this.sent = true;
        this.returnUser = true;

      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  },
  watch: {
    returnUser(value) {
      if (value === true) {
        this.returnCooldown = 7;
        this.returnCooldown = 6;
        console.log(this.returnCooldown)
      }
    },
    returnCooldown(value){
      if (value > 0) {
        console.log(this.returnCooldown)
        setTimeout(() => {
          this.returnCooldown--;
          if (this.returnCooldown < 1) {
            console.log('return')
            this.$router.push({name: 'main'})
          }
        }, 1000);
      }
    }
  }
}
</script>

<style scoped>

</style>