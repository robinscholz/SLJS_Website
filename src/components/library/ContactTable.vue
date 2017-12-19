<template>
  <div class="contact_table_wrapper">
        <vue-good-table
          title="Education"
          :columns="educationColumns"
          :rows="educationData"
          :paginate="false"
          :lineNumbers="false"
        >
        </vue-good-table>
        <vue-good-table
          title="Selected Group Exhibitions"
          :columns="groupshowColumns"
          :rows="groupshowData"
          :paginate="false"
          :lineNumbers="false"
        >
        </vue-good-table>
        <vue-good-table
          title="Residencies"
          :columns="residencyColumns"
          :rows="residencyData"
          :paginate="false"
          :lineNumbers="false"
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
    &_wrapper {
      width: 100%;
      position: relative;
    }
    &_head {
      background: @blue!important;
      font-weight: normal;
      padding: @mp-a/2!important;
      border: 1px solid @primary!important;
      color: @yellow;
      cursor: pointer;
    }
    &_entry {
      background: @yellow;
      padding: @mp-a/2!important;
      border: 1px solid @primary!important;
      color: @blue;
      min-width: 100px;
    }
  }

  .table {
    &-title {
      font-weight: normal;
      .fs-m;
      .white;
    }
    &-header {
      padding: @mp-a 0!important;
    }
  }

  .good-table {
    margin-bottom: @mp-c;
    max-width: 1440px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  table th.sorting-asc, table th.sorting-desc {
    color: @yellow!important;
  }

  table th.sorting:hover:after, table th.sorting-asc:after, table th.sorting-desc:after, table th.sorting-desc:hover:after {
    border: none!important;
    margin-top: 0!important;
    font-family: inherit!important;
  }

  table th.sorting:hover {
    // background: @primary!important;
    // color: @blue!important;
    text-decoration: underline;
    text-decoration-skip: ink;
  }

  table th.sorting-asc:after {
    content: "↓"!important;
  }

  table th.sorting-desc:after {
    content: "↑"!important;
  }

</style>