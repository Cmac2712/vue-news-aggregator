<template>
  <div class="news-list-page">
    <h1 class="text-center mb-5">Latest</h1>
    <ul
    >
      <li
        v-for="newsItem in news"
        :key="newsItem.title"
        class="container mx-auto bg-white overflow-hidden"
      >
        <router-link
          :to="{ name: 'NewsArticle', params: { id: newsItem.id } }"
        >

        <div class="md:flex p-2">
          <div
            v-if="newsItem.thumbnail"
            class="md:flex-shrink-0"
          >
            <img
              :src="newsItem.thumbnail"
              class="object-cover md:w-48 mr-4"
              :alt="newsItem.title"
            >
          </div>
          <div class="tracking-wide text-sm text-indigo-500 font-semibold py-2">
            <h3 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ newsItem.title }}</h3>
            <p
              class="mt-2 text-gray-500"
              v-if="newsItem.content"
            >

            {{ truncate( stripTags(newsItem.content) ) }}
            
            </p>

          </div>
        </div>

        </router-link>
      </li>
    </ul>
  </div>  
</template>

<script>
import EventService from '@/services/EventService'
import { truncate, stripTags } from '@/utils/index'
export default {
  data() {
    return {
      news: null
    }
  },
  methods: {
    truncate,
    stripTags
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
