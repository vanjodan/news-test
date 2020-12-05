<template>
  <div class="q-pa-md q-gutter-sm article-card-wrapper">
    <q-card class="article-card">
      <img :src="`${article.urlToImage}`" />

      <q-card-section>
        <div class="text-h6">{{ article.title }}</div>
        <div class="text-subtitle2">{{ article.description }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <a :href="`${article.url}`"> Read whole article </a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style lang="sass" scoped>
.article-card-wrapper
  max-width: 750px

.article-card
  width: 100%
  margin: 0
</style>
