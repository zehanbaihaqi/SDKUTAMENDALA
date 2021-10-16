import {createSlice} from "@reduxjs/toolkit"
import {v4 as uuidv4} from "uuid"


const initialValue=[ 
	  {
	    id: uuidv4(),
	    nama: "Membuat Komponen",
	    completed: true,
	  },
	  {
	    id: uuidv4(),
	    nama: "Unit Testing",
	    completed: false,
	  },
	  {
	    id: uuidv4(),
	    nama: "Setup Development Environment",
	    completed: true,
	  }
  ]


  export const passengerSlice=createSlice({
  	name:"passenger",
  	initialState:{
  		passengers:initialValue
  	},

  		reducers:{
  			hapusPengunjung:(state,action)=>{
  				state.passengers=state.passengers.filter(item=>{
			return item.id!==action.payload
		})
			},
  			tambahPengunjung:(state,action)=>{
  				
  				const newData={
						id:uuidv4(),
						...action.payload,
  			}
  			state.passengers=[...state.passengers,newData]
  		}


  	}
  })

  export const {hapusPengunjung, tambahPengunjung}=passengerSlice.action
  export default passengerSlice.reducers