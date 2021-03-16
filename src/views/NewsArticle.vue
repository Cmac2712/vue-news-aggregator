<template>
  <div>
    <h1 class="news-article-title">{{ newsArticle.title }}</h1>
    <div class="news-article-body">
      {{ newsArticle.body }}
    </div>
  </div>
</template>

<script>
import EventService from '../services/EventService'
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
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