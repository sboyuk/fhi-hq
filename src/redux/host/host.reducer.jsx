const INITIAL_STATE = {
  schedule: {
    purchaseOrders: {
      2341234: {
      carrier: "3",
      cases: "11",
      "department": "Grocery",
      dock_location: "4",
      item_count: "7",
      order_num: "2341234",
      pallets: "12",
      sched_date: "5",
      sched_time: "6",
      transportation_code: "10",
      vendor_name: "9",
      vendor_num: "8",
      weight: "13",
      whse_num: "106",
      }
    }
  },
  loads: {
    idle: [],
    inProgress: [],
    finished: [],
  }
}

const loadsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SCHEDULE' :
      return {
        ...state,
        schedule: action.payload
      }
    case 'ADD_TO_DOCKED_LOADS' :
      return {
        ...state,
        loads: action.payload
      }
    default: 
      return state
  }
}

export default loadsReducer;