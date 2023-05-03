// reactive state
import { reactive, } from 'vue'

export const items = reactive({
    value: [
      {id: 0, title: "bins", description: "take them out", done: false, timestamp: 1213151516},
      {id: 1, title: "car", description: "clean", done: true, timestamp: 1213151517},
      {id: 2, title: "room", description: "tidy", done: false, timestamp: 1213151518},
    ]
  }
);

export const currIndex = reactive({
    num: 0
  }
);