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

<script>
import {api} from '../boot/axios';

export default {
  // name: 'PageName',
  data () {
    return { deviceList: [],
      // selectedDevice: ref([]),
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
    loadData () {
      api.get('/device-repository', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          // commit('loadDeviceDataMutation', response.data)
          console.log(response.data)
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          this.deviceList = response.data
          // Object.assign(state.deviceList, response.data)
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
}
</script>
