<template>
  <q-page padding>
    <q-btn label="load"
     @click="loadData"/>

    {{ test }}
    {{ test1 }}

    <q-page class="q-pa-sm">
      <q-card>
        <q-table title="List of home devices"
                 :rows="deviceList.data"
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
import {defineComponent, reactive, ref, toRefs} from 'vue';

export default defineComponent ({
  // name: 'PageName',
  /*data () {
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
          this.deviceList = response.data
        })
        .catch((error) => {
          console.log('napaka')
          // console.dir(state.deviceList)
          console.dir(error)
        })
    }
  },*/
  setup() {
    let deviceList1 = ref([]);
    let deviceList = reactive<{data: MyDevice[]}>({ data: [] });
    console.log(deviceList.data);
    console.log(toRefs(deviceList));
    //let myDev: MyDevice = {id: '1', deviceName: 'device name'};
    //console.log(myDev)
    let test = 'bla';
    let test1 = reactive({test})
    // console.log(test1)


    const deviceTableColumns = [
      {
        label: 'deviceName', field: 'deviceName', name: 'deviceName', align: 'left'
      },
      {
        label: 'productNumber', field: 'productNumber', name: 'productNumber', align: 'left'
      },
      {
        label: 'deviceType', field: 'deviceType', name: 'deviceType', align: 'left'
      }
    ]

    function loadData(): void {
      console.log('Load data executed')
    }

    api.get('/device-repository', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        deviceList.data = response.data
      })
      .catch((error) => {
        console.log('napaka')
        // console.dir(state.deviceList)
        console.dir(error)
      })

    return {deviceTableColumns, test, test1, deviceList , loadData, deviceList1}
  }
})
</script>
