<template>
  <div class="template-wrapper">
    <div class="q-pa-md news-main-page">
      <q-list>
        <div class="text-h4">Actual Articles</div>
        <!-- итерируем по отфильтрованому массиву filteredArticles и на каждой
        итерации рендерим компонент NewsItem передавая в него собственный
        article -->
        <q-item v-for="article in filteredArticles" :key="article.id">
          <!-- рендерим импортированый NewsItem -->
          <news-item :article="article"></news-item>
        </q-item>
      </q-list>
      <div class="introduction">Welcome to the best news site ever</div>
    </div>
  </div>
</template>

<script>
// импортируем компонент NewsItem
import NewsItem from "components/NewsItem";
// импортируем мапперы гетеров и екшинов с vuex
import { mapGetters, mapActions } from "vuex";

export default {
  async mounted() {
    this.getNews();
  },
  components: {
    "news-item": NewsItem,
  },
  computed: {
    //получаем отфильтрованый массив из store-news.getters
    ...mapGetters("news", ["filteredArticles"]),
  },
  methods: {
    ...mapActions("news", ["getNews"]),
  },

  data() {
    return {
      showDialog: false,
    };
  },
};
</script>

<style lang="sass" scoped>
.template-wrapper
  width: 100%
.news-main-page
  display: flex
  width: 1280px
  margin: 0 auto
  justify-content: space-between
.introduction
  position: fixed
  left: calc(100vw / 2)
  max-width: calc(1280px / 2)
  margin-top: calc(50vh - 320px)
  font-family: 'Permanent Marker', cursive
  font-size: 100px
  text-align: center
.text-h4
  font-family: 'Permanent Marker', cursive
  text-align: center
</style>
