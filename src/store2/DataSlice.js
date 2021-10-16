import {createSlice} from "@reduxjs/toolkit"
import {v4 as uuidv4} from "uuid"
import Swal from 'sweetalert2'

const initialValue=[ 
	  {
	    id: uuidv4(),
	    name: "Belajar React Js",
	    completed: false,
	  },

  ]

export const DataSlice=createSlice({
	name:"data",
	initialState:{
		name:"",
		dataNama:initialValue
	},

	reducers:{
		change:(state,action)=>{
			state.name=action.payload
		},
		tambahData:(state,action)=>{
			if(state.name===""){
			Swal.fire({
			  title: 'Gomenasai Oni-Chan',
			  text: 'Textnya Harap Di Isi Ya!!',
			  
			
			  confirmButtonText: 'Click'
			})
		}else if (state.name>26){
			Swal.fire({
			  title: 'Bwaaaa !!!',
			  text: 'Textnya Lebih Dari 26 Karakter ',
			  
			  confirmButtonText: 'Click'
			})
		}else{
				state.name=action.payload
			state.dataNama=[...state.dataNama,{name:state.name,id:uuidv4(),completed:false}]
			state.name=""
			console.log(state.dataNama)
		}

		},
		hapusData:(state,action)=>{
			state.dataNama=state.dataNama.filter((todo)=>todo.id !==action.payload )
		},
		completed:(state,action)=>{
			state.dataNama= state.dataNama.map((item)=>{
				if(item.id===action.payload){
					
					return {...item,completed:!item.completed}
					
				}
				return item
			} )

		},
		submit:(state,action)=>{
			action.payload.preventDefault()
		}

	}
})

export const {tambahData,hapusData,change,completed,submit} =DataSlice.actions

  export default DataSlice.reducer