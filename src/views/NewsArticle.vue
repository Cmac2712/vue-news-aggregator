<template>
  <div class="container mx-auto">
    <h1 class="news-article-title text-2xl text-center mb-10 font-bold">{{ newsArticle.title }}</h1>
    <img
      class="mx-auto mb-10 w-full"
      v-if="newsArticle.thumbnail"
      :src="newsArticle.thumbnail"
      :alt="newsArticle.title"
    >
    <div class="news-article-body" v-html="newsArticle.content">
    </div>
  </div>
</template>

<script>
import { stripTags } from '@/utils/index'
import EventService from '../services/EventService'
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    stripTags
  },
  data() {
    return {
      newsArticle: {}
    }
  },
  created() {
    EventService.getNewsArticle(this.id)
      .then(response => {
        console.log('response ', response)
        this.newsArticle = response;
      })
  }
}
</script>