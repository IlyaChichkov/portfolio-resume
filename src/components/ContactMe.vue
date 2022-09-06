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
    <form class="grid grid-cols-2 gap-2" v-on:submit.prevent="formHandler($event)">
      <div class="flex flex-col">
        <input v-model="name" type="text" :placeholder="$t('contact-form.name')" required>
      </div>
      <div class="flex flex-col">
        <input v-model="email" type="email" :placeholder="$t('contact-form.email')" required>
      </div>
      <textarea v-model="message" class="col-span-2 resize-none mb-2 h-28" :placeholder="$t('contact-form.message')" required></textarea>
      <select class="w-full sm:w-3/5 focus-visible:outline-red focus-visible:border-none" name="messageType">
        <option selected>Telegram</option>
        <option >Email</option>
      </select>
      <div class="flex flex-row justify-end">
        <button type="submit" value="Send" class="w-full sm:w-3/5 btn-primary col-span-1">{{ submitBtnText }}</button>
      </div>
    </form>
  </div>
  <transition>
    <div v-if="showModal">
      <div @click="showModal = false" class="modal-w">
        <p class="text-white">{{modalMessage}}</p>
        <button @click="showModal = false" class="btn-primary z-10">OK</button>
      </div>
      <div class="modal-bg" @click="showModal = false"></div>
    </div>
  </transition>
</template>

<script>
import emailjs from 'emailjs-com';
import MyProfile from "@/components/MyProfile";
import MyLinks from "@/components/MyLinks";
import axios from "axios";

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
      returnCooldown: 10,
      showModal: false,
      modalMessage: null
    }
  },
  computed: {
    submitBtnText() {
      return this.sent === true ? this.$t('contact-form.btn-s') : this.$t('contact-form.btn')
    }
  },
  methods: {
    formHandler(e){
      const messageType = e.target.elements.messageType.value;
      if(messageType === 'Email'){
        this.sendEmail();
      }else if(messageType === 'Telegram'){
        this.sendTelegramMessage();
      }
      console.log(e.target.elements.messageType.value)
    },
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
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
    async sendTelegramMessage(){
      const botToken = '5310635683:AAH-1wxOAWm7qo0a21cV6aORKoEWJN8R7PE';
      const chatId = '-1001502195289';
      let message = `✉️Новое сообщение!%0A<b>Имя:</b> ${this.name}%0A<b>Почта:</b> ${this.email}%0A"${this.message.toString()}"`;
      message = message.replaceAll('\n', '%0A');
      message = message.replaceAll(' ', '+');

      await axios.get(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`)
          .then((responce) => {
            if(responce.status.toString() === '200') {
              console.log('Success!');
              this.modalMessage = this.$t('contact-form.message-send-success');
              this.showModal = true;
            }
          })
          .catch((error) => {
            console.log('Error!' + error);
            this.modalMessage = this.$t('contact-form.message-send-error') + ' ' +
                error.code + '; ' + error;
            this.showModal = true;
          })
    }
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
select{
  @apply bg-red border-none rounded text-white font-sans px-3;
}

.modal-w{
  @apply absolute bg-primary rounded-lg px-4 py-2 w-[56%] sm:w-[410px]
  h-[14%] sm:h-[164px] shadow-3xl shadow-red-200 flex flex-col justify-center
  min-w-[300px] z-20 opacity-80;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms ease-in;
}

.modal-bg{
  content: '';
  @apply fixed z-10 top-0 bottom-0 left-0 right-0 bg-primary opacity-80 backdrop-blur-xl;
  transition: all 200ms ease-in;
}

.modal-w:active{
  @apply brightness-110;
}

.modal-bg:active{
  @apply brightness-110;
}

.modal-w>p{
  @apply text-2xl text-center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.52s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>