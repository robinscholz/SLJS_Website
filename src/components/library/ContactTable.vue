<template>
  <div class="contact_table_wrapper">
        <vue-good-table
          title="Education"
          :columns="educationColumns"
          :rows="educationData"
          :paginate="false"
          :lineNumbers="false"
          styleClass="contact_table"
        >
        </vue-good-table>
        <vue-good-table
          title="Selected Group Exhibitions"
          :columns="groupshowColumns"
          :rows="groupshowData"
          :paginate="false"
          :lineNumbers="false"
          styleClass="contact_table"
        >
        </vue-good-table>
        <vue-good-table
          title="Residencies"
          :columns="residencyColumns"
          :rows="residencyData"
          :paginate="false"
          :lineNumbers="false"
          styleClass="contact_table"
        >
        </vue-good-table>
  </div>
</template>

<script>
  import _ from 'underscore'
  export default {
    name: 'ContactTable',
    computed: {
      apidata () {
        return this.$store.state.apidata
      },
      contact () {
        return this.apidata['1-contact']
      },
      educationData () {
        return _.toArray(this.contact['education'])
      },
      groupshowData () {
        return _.toArray(this.contact['groupshows']).reverse()
      },
      residencyData () {
        return _.toArray(this.contact['residencies']).reverse()
      }
    },
    data () {
      return {
        educationColumns: [
          {
            label: 'From',
            field: 'from',
            inputFormat: 'YYYY',
            outputFormat: 'YYYY',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'Until',
            field: 'until',
            inputFormat: 'YYYY',
            outputFormat: 'YYYY',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'School',
            field: 'school',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'City, Country',
            field: 'city',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          }
        ],
        groupshowColumns: [
          {
            label: 'Year',
            field: 'year',
            inputFormat: 'YYYY',
            outputFormat: 'YYYY',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'Title',
            field: 'showtitle',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'Gallery/Institution',
            field: 'gallery',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'City, Country',
            field: 'city',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          }
        ],
        residencyColumns: [
          {
            label: 'Year',
            field: 'year',
            inputFormat: 'YYYY',
            outputFormat: 'YYYY',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'Institution',
            field: 'gallery',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          },
          {
            label: 'City, Country',
            field: 'city',
            tdClass: 'contact_table_entry',
            thClass: 'contact_table_head'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
  @import "../../less/global.less";
  .contact_table {
    width: 100%;
    max-width: 1440px;
    border-bottom: solid 1px @black;
    &_wrapper {
      width: 100%;
      position: relative;
    }
    &_head {
      background: @primary;
      font-weight: normal;
      padding: @mp-a/2;
      border-top: 1px solid @black;
      cursor: pointer;
      text-transform: uppercase;
    }
    &_entry {
      background: @primary;
      padding: @mp-a/2;
      border-top: 1px solid @black;
      min-width: 100px;
    }
    th.sorting-asc, th.sorting-desc {
      color: @black!important;
      background: @primary;
    }
    th.sorting:hover:after, th.sorting-asc:after, th.sorting-desc:after, th.sorting-desc:hover:after {
      border: none!important;
      margin-top: 0!important;
      font-family: inherit!important;
    }
    th.sorting:hover {
      text-decoration: underline;
      text-decoration-skip: ink;
      // background: @white;
    }
    th.sorting-asc:after {
      content: "↓"!important;
    }
    th.sorting-desc:after {
      content: "↑"!important;
    }
  }

  .table {
    &-title {
      font-weight: normal;
      .fs-m!important;
      text-transform: uppercase; 
    }
    &-header {
      padding: @mp-a 0!important;
    }
  }

  .good-table {
    margin-bottom: @mp-c;
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>