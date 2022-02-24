<template>
  <q-page padding>
    HELLO debug class
    <q-space></q-space>
    {{ syncedTitle }}
  </q-page>
</template>

<script>
/*import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  // Data property
 title: string = 'From default defined string property'
 */
// ekvivaletn
export default {
  // name: 'PageName',
  props: {
    title: {
      type: String,
      default: 'From default defined string property'
    }
  },
  computed: {
    syncedTitle: {
      get() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return this.title
      }
    }
  }
}
</script>
