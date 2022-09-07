<template>
  <div class="projects">
    <h2>{{ $t('titles.proj') }}</h2>
    <div class="">
      <ul class="projects-list">
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('prj-web.password-generator') }}</p>
          <div class="relative">
            <img class="image" src="../assets/screenshots/password-generator.png"
                 alt="password-generator screenshot">
            <a class="project-link" href="https://github.com/IlyaChichkov/password-generator" target="_blank" >
              <svg class="link-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 6 L 27 5 L 26 5 L 18 5 z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 L 5 9 z"/>
              </svg>
            </a>
          </div>
        </li>
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('prj-web.todo-app') }}</p>
          <img class="image" src="../assets/screenshots/todo-app.png"
               alt="todo-app screenshot">
        </li>
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('prj-web.bank-card') }}</p>
          <img class="image" src="../assets/screenshots/bank-card.png"
               alt="bank-card screenshot">
        </li>
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('prj-web.tip-calc') }}</p>
          <img class="image" src="../assets/screenshots/tip-calc.png"
               alt="tip-calc screenshot">
        </li>
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('prj-web.tutor-site') }}</p>
          <img class="image" src="../assets/screenshots/tutor-site.png"
               alt="tutor-site screenshot">
        </li>
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('prj-web.storage-layout') }}</p>
          <img class="image" src="../assets/screenshots/storage-layout.png"
               alt="storage-layout screenshot">
        </li>
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('projects.one') }}</p>
          <img class="image" src="../assets/space-front.png"
               alt="space front screenshot">
        </li>
        <li @click="openImgPreview" class="project-block">
          <p class="project-desc">{{ $t('projects.two') }}</p>
          <img class="image" src="../assets/dawn-of-white.jpg">
        </li>
      </ul>
    </div>
    <transition>
      <div v-if="showImgPreview" @click="closeImgPreview" class="img-preview-bg">
        <div class="flex flex-col justify-center items-center">
          <img class="img-preview" :src="imgPreviewSrc" alt="preview screenshot"/>
          <div>
            <p class="preview-desc">{{previewDesc}}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyProjectsSection",
  data() {
    return {
      showImgPreview: false,
      previewDesc: '',
      imgPreviewSrc: ''
    }
  },
  methods: {
    openImgPreview: function (e) {
      this.previewDesc = e.target.getElementsByClassName('project-desc')[0].innerHTML;
      this.imgPreviewSrc = e.target.getElementsByClassName('image')[0].src;
      console.log(this.imgPreviewSrc)

      if(this.imgPreviewSrc)
        this.showImgPreview = true;
    },
    closeImgPreview: function () {
      this.showImgPreview = false;
    }
  }
}
</script>

<style scoped>
.image {
  @apply -z-20  outline outline-offset-2 outline-1 outline-red p-1 max-w-[94%] sm:max-w-[452px];
}

.image:hover {
  @apply outline-red-100 lg:outline-none opacity-75;
}

.image:active {
  @apply brightness-110;
}
.project-block {
  @apply relative border-solid border-0 border-l-4 border-l-red pl-4 ;
  transition: opacity 0.2s ease-in;

}

.project-block:hover {
  @apply border-l-white;
}
.preview-desc{
  @apply text-xl text-white;
  text-shadow: #020b13 2px 3px 5px;
}

.img-preview-bg {
  @apply fixed top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-90 flex flex-row justify-center;
}
.img-preview {
  @apply border-solid border-2 border-secondary max-h-[70%] max-w-[98%] sm:max-w-[90%];
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.52s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.projects-list{
  @apply grid grid-cols-1 border-solid
  border-0 border-l-0 border-l-red pl-0;
}
.project-link{
  @apply absolute top-2 right-8 fill-red;
  background-image: url("../assets/link-icon.svg");
  width: 32px;
  height: 32px;
  transition: all .2s ease-in;
}

.project-link:hover{
  @apply fill-white scale-110;
}
div.projects {
  @apply  md:w-[110%] lg:w-[130%];
}
@screen md{
  .projects-list{
    @apply gap-2 border-none grid-cols-2 auto-rows-auto justify-items-stretch auto-cols-max;
  }
  div.projects{
    @apply flex flex-col justify-center items-center;
  }
  .project-block {
    @apply block w-auto h-auto border-[1px] border-solid border-red
    p-0 overflow-hidden m-0 flex flex-col justify-center rounded;
  }
  .image {
    @apply p-0 mx-auto w-full bg-cover w-full h-full border-none outline-none content-center;
  }
  .image:hover {
    @apply brightness-0 opacity-100;
  }
  .project-desc{
    @apply hidden;
  }
  .project-desc:hover{

  }
  .project-block:hover>p {
    @apply absolute block -z-10 p-2 top-1/2 left-0 right-0 text-center text-white font-bold text-lg;
    transform: translateY(-70%);
  }
  .project-block:hover>img {
    @apply brightness-50 blur-sm;
  }
}
</style>