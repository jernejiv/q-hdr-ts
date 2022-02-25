export interface MyDevice {
  id: {
    type: string
    required: true
  },
  deviceName: {
    type: string
  },
  productNumber: {
    type: string
  },
  deviceType: {
    type: string
  }
}
