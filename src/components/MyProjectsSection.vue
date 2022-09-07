<template>
  <div class="projects">
    <h2>{{ $t('titles.proj') }}</h2>
    <div class="">
      <ul class="projects-list">
        <li @click="openImgPreview(proj)" v-for="proj in myProjects" v-bind:key="proj.id" class="project-block">
          <p class="project-desc">{{ this.$t(proj.descTextId) }}</p>
          <img class="image" :src="proj.previewSrc"
               :alt="proj.altText">
        </li>
      </ul>
    </div>
    <transition>
      <div v-if="showImgPreview" @click="closeImgPreview" class="img-preview-bg">
        <div class="flex flex-col justify-center items-center">
          <img class="img-preview" :src="imgPreviewSrc" alt="preview screenshot"/>
          <div>
            <p class="preview-desc">{{ this.$t(previewDesc) }}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {portfolioProjects} from "@/app/projects.data";

export default {
  name: "MyProjectsSection",
  data() {
    return {
      showImgPreview: false,
      previewDesc: '',
      imgPreviewSrc: '',
      myProjects: portfolioProjects
    }
  },
  methods: {
    openImgPreview: function (project) {
      this.previewDesc = project.descTextId;
      this.imgPreviewSrc = project.previewSrc;
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
  @apply text-xl text-white px-2;
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
  .project-block:hover {
    @apply border-l-red;
  }
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