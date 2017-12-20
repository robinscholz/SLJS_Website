<template>
</template>

<script>

export default {
  name: 'SiteHead',
  computed: {
    apidata () {
      return this.$store.state.apidata
    },
    contact () {
      return this.apidata['1-contact']
    }
  },
  metaInfo () {
    // Check if data is loaded
    if (this.apidata.length !== 0) {
      return {
        title: this.contact.title,
        meta: [
          { name: 'application-name', content: this.contact.title },
          { name: 'description', content: this.contact.about },
          { name: 'keywords', content: '' },
          { name: 'robots', content: 'index, follow' },
          // Google+ / Schema.org
          { itemprop: 'name', content: this.contact.title },
          { itemprop: 'description', content: this.contact.about },
          // Facebook / Open Graph
          { property: 'og:title', content: this.contact.title },
          { property: 'og:image', content: null },
          { property: 'og:description', content: this.contact.about }
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