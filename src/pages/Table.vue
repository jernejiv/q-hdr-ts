<template>
  <q-page padding>
    <q-btn label="load"
     @click="loadData"/>

    <q-page class="q-pa-sm">
      <q-card>
        <q-table title="List of home devices"
                 :rows="deviceList"
                 :columns="deviceTableColumns"
                 row-key="deviceName"
                 selection="single"
        >
        </q-table>
      </q-card>
    </q-page>
  </q-page>
</template>

<script lang="ts">
import {api} from '../boot/axios';
import {MyDevice} from '../components/types';
import {defineComponent, ref} from 'vue';

export default defineComponent ({
  // name: 'PageName',
  data () {
    return { deviceList: ref([{} as MyDevice]),
      selectedDevice: ref([{} as MyDevice]),
      deviceTableColumns: [
        {
          label: 'deviceName', field: 'deviceName', name: 'deviceName', align: 'left'
        },
        {
          label: 'productNumber', field: 'productNumber', name: 'productNumber', align: 'left'
        },
        {
          label: 'deviceType', field: 'deviceType', name: 'deviceType', align: 'left'
        }
      ]}
  },
  methods: {
    loadData (): void {
      api.get('/device-repository', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const result: MyDevice[] = response.data
          this.deviceList = result
        })
        .catch((error) => {
          console.log('napaka')
          // console.dir(state.deviceList)
          console.dir(error)
        })
    }
  },
  setup() {
    // const selectedDevice = ref([])
  }
})
</script>
