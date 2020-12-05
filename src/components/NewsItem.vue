<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <!-- при нажатии на q-card должен всплывать диалог -->
      <q-card
        clickable
        class="news-card"
        style="max-width: 350px"
        @click="showDialog = true"
      >
        <q-card-section>
          <!-- рендерим автора статьи -->
          <div class="text-caption">{{ article.author }}</div>
        </q-card-section>
        <q-card-section>
          <!-- рендерим оглавление статьи -->
          <div class="text-caption2">{{ article.title }}</div>
        </q-card-section>

        <q-card-section>
          <!-- тут я сделал так чтоб пока картинка не загрузится шла анимация скелетона волна  -->
          <q-skeleton
            v-if="!getUrlToImage"
            class="image-wrapper-skeleton"
            animation="wave"
          >
          </q-skeleton>
          <!-- рендерим картинку статьи -->
          <img class="article-image" :src="`${getUrlToImage()}`" />
        </q-card-section>
      </q-card>
    </div>
    <!-- при нажатии на q-card рендеритя даный диалог -->
    <q-dialog v-model="showDialog" no-esc-dismiss
      ><news-dialog :article="article" class="news-dialog"></news-dialog
    ></q-dialog>
  </div>
</template>

<script>
import NewsDialog from "components/NewsDialog";

export default {
  components: {
    "news-dialog": NewsDialog,
  },
  // в props принимаем переданый с компонента NewsList article
  // и дальше в соответствующих тегах рендерим то что нам надо иметь в елементе списка
  props: ["article"],
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    getUrlToImage: function () {
      return this.article.urlToImage;
    },
  },
};
</script>

<style lang="sass" scoped>
.image-wrapper-skeleton
  max-height: 150px
  border-radius: 10px
.article-image
  max-width: 315px
  margin-top: -20px
  border-radius: 10px

.news-dialog
  margin-left: 32%
.news-card
  background-color: #90EE90
  border-radius: 10px
.news-card:hover
  background-color: rgba(46,49,49,0.2)
  cursor: pointer
</style>
