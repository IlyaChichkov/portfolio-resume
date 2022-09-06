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
        <div class="flex flex-row justify-center mt-6">
          <svg class="fill-red" width="48" height="48" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.72 6.79L8.43001 11.09L6.78 9.44C6.69036 9.33532 6.58004 9.2503 6.45597 9.19027C6.33191 9.13025 6.19678 9.09652 6.05906 9.0912C5.92134 9.08588 5.78401 9.10909 5.65568 9.15936C5.52736 9.20964 5.41081 9.28589 5.31335 9.38335C5.2159 9.4808 5.13964 9.59735 5.08937 9.72568C5.03909 9.854 5.01589 9.99133 5.02121 10.1291C5.02653 10.2668 5.06026 10.4019 5.12028 10.526C5.1803 10.65 5.26532 10.7604 5.37 10.85L7.72 13.21C7.81344 13.3027 7.92426 13.376 8.0461 13.4258C8.16794 13.4755 8.2984 13.5008 8.43001 13.5C8.69234 13.4989 8.94374 13.3947 9.13 13.21L14.13 8.21C14.2237 8.11704 14.2981 8.00644 14.3489 7.88458C14.3997 7.76272 14.4258 7.63201 14.4258 7.5C14.4258 7.36799 14.3997 7.23728 14.3489 7.11542C14.2981 6.99356 14.2237 6.88296 14.13 6.79C13.9426 6.60375 13.6892 6.49921 13.425 6.49921C13.1608 6.49921 12.9074 6.60375 12.72 6.79ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"/>
          </svg>
        </div>
        <p class="text-white">{{modalMessage}}</p>
        <button @click="showModal = false" class="btn-primary z-10 my-4">OK</button>
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
  min-h-[14%] sm:min-h-[164px] shadow-3xl shadow-red-200 flex flex-col justify-center
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