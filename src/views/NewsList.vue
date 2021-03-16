<template>
  <div class="news-list-page">
    <h1>News</h1>
    <ul
      class="news-list"
      v-for="newsItem in news"
      :key="newsItem.title"
    >
      <li>
        <router-link :to="{ name: 'NewsArticle', params: { id: newsItem.id } }" >
          {{ newsItem.title }}
        </router-link>
      </li>
    </ul>
  </div>  
</template>

<script>
import EventService from '../services/EventService'
export default {
  data() {
    return {
      news: null
    }
  },
  created() {
    EventService.getNewsList()
      .then(response => {
        this.news = response.data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
