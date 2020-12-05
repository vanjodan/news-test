<template>
  <q-page class="flex flex-left">
    <news-list></news-list>
  </q-page>
</template>

<script>
import NewsList from "../components/NewsList.vue";
export default {
  name: "PageIndex",
  components: {
    "news-list": NewsList,
  },
};
</script>
