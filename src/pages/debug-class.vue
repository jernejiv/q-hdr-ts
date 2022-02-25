<template>
  <q-page padding>
    HELLO debug class
    <q-space></q-space>
    {{ syncedTitle }}
    <q-space></q-space>
    {{ soreTitle }}
  </q-page>
</template>

<script lang="ts">
/*import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  // Data property
 title: string = 'From default defined string property'
 */
// ekvivaletn
// import  { useStore } from './global-store'
// import  { useStore } from '../store/simple-store'
import {useStore} from 'src/store';

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
      get(): string {
        return 'this.title'
      }
    }
  },
  setup() {
    const $myStore = useStore();
    console.log($myStore.state);

    //const str = this.$store.state['globalModule/title'] as string;

    //const soreTitle = myStore.state.example.title;
    //console.log(soreTitle)

    return {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      // soreTitle
    }
  }
}
</script>
