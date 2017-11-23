<template>
</template>

<script>

export default {
  name: 'SiteHead',
  computed: {
    apidata () {
      return null
    }
  },
  metaInfo () {
    // Check if data is loaded
    if (this.apidata.length !== 0) {
      return {
        title: null,
        meta: [
          { name: 'application-name', content: null },
          { name: 'description', content: null },
          { name: 'keywords', content: '' },
          { name: 'robots', content: 'index, follow' },
          // Google+ / Schema.org
          { itemprop: 'name', content: null },
          { itemprop: 'description', content: null },
          // Facebook / Open Graph
          { property: 'og:title', content: null },
          { property: 'og:image', content: null },
          { property: 'og:description', content: null }
        ],
        link: [
          { rel: 'image_src', href: null }
        ]
      }
    } else {
      return {
        title: ''
      }
    }
  }
}
</script>

<style lang="less">
</style>