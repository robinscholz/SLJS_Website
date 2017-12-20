<template>
  <div class="contact_text_wrapper">
      <h2 class="contact_text_headline">Education</h2>
      <div class="contact_text_entry">
        <span v-for="article in educationData" class="contact_text_line">
          {{article['from']}}&thinsp;–&thinsp;{{article['until']}}: {{article['school']}} <span class="nobr">({{article['city']}})</span>
        </span>
      </div>
      <h2 class="contact_text_headline">Selected Groupshows</h2>
      <div class="contact_text_entry">
        <span v-for="article in groupshowData" class="contact_text_line">
          {{article['year']}}: <em>{{article['showtitle']}}</em>, {{article['gallery']}} <span class="nobr">({{article['city']}})</span>
      </span>
      </div>
      <h2 class="contact_text_headline">Residencies</h2>
      <div class="contact_text_entry">
        <span v-for="article in residencyData" class="contact_text_line">
          {{article['year']}}: {{article['gallery']}} <span class="nobr">({{article['city']}})</span>
        </span>
      </div>
  </div>
</template>

<script>
  import _ from 'underscore'
  export default {
    name: 'ContactText',
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      contact () {
        return this.apidata['1-contact']
      },
      educationData () {
        return this.contact['education']
      },
      groupshowData () {
        return _.toArray(this.contact['groupshows']).reverse()
      },
      residencyData () {
        return _.toArray(this.contact['residencies']).reverse()
      }
    }
  }
</script>

<style lang="less">
  @import "../../less/global.less";
  .contact_text {
    &_wrapper {
      width: 100%;
      position: relative;
    }
    &_headline {
      .fs-m;
      font-weight: normal;
      padding-bottom: @mp-a;
    }
    &_entry {
      padding-bottom: @mp-c;
      .contact_text_line {
        display: block;
        padding: @mp-a 0;
        border-bottom: solid 1px @black;
        &:first-child {
          border-top: solid 1px @black;
        }
      }
      &:last-child {
        padding-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .contact_about {
      margin-bottom: @mp-c;
    }

    .contact_text_entry {
      padding-bottom: @mp-d;
    }
  }
  
</style>