<template>
  <q-page padding>
    Debug content
    <q-input label="set title"></q-input>
    <q-btn
      label="klikni"
    />
    {{ someText }}
    <q-space></q-space>
    {{ someText1 }}
    <q-space>
    </q-space>
    {{ nvaLink }}
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue'
import {NavigationLink} from 'components/models';
export default {
  // name: 'PageName',
  // define local data to bind
  data() {
    return { someText: 'tekst iz bla'
    }
  },
  // bind variable in setup
  setup() {
    const someText1 = ref('tekst iz setup')
    const nvaLink = ref<NavigationLink>({
      name: 'navigacija',
      icon: 'nav',
      routeTo: 'to sout'
    })
    console.dir(someText1)
    console.log('From setup text:' + someText1.value)
    return {
      someText1,
      nvaLink
    }
  }
}
/*import  { Vue } from 'vuex-module-decorators'
export default class HelloWorld extends Vue {

}*/
</script>
