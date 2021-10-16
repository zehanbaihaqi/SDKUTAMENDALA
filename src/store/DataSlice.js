import {createSlice} from "@reduxjs/toolkit"
import {gql,useQuery,useMutation,useLazyQuery} from "@apollo/client"





const InsertData=gql`
mutation MyMutation( $kelamin: String = "", $nama: name = "", $umur: Int = 10) {
  insert_todo(objects: {kelamin: $kelamin, nama: $nama, umur: $umur}) {
    returning {
      kelamin
      nama
      umur
      id
    }
  }
}
`


const initialValue=[ 
	  {
	   nama: "",
    umur: "",
    jenisKelamin: "pria",
    editing: true,
    edit:false,
	  },

  ]

export const DataSlice=createSlice({
	name:"data",
	initialState:{
		nama:"",
		umur:"",
		jenisKelamin:"pria",
		editing:true,
		dataNama:initialValue
	},

	reducers:{
		changeNama:(state,action)=>{
			state.nama=action.payload
		},
		changeUmur:(state,action)=>{
			state.umur=action.payload
		},
		changeKelamin:(state,action)=>{
			state.jenisKelamin=action.payload
		},


		handleBukaInput: (state,action) => {
   
     state.editing= false
    },
 


		handleTutupInput: (state,action) => {
     state.editing= true
     state.edit=false
     state.nama=""
				state.umur=""
		},
		edit:(state,action)=>{
				console.log(action.payload)
				state.editing=false
				state.nama=action.payload.nama
				state.umur=action.payload.umur
				state.jenisKelamin=action.payload.kelamin
				state.id=action.payload.id
				state.edit=true


		},
		kosong:(state,action)=>{
				state.nama=""
				state.umur=""
		}

	}
})



	


export const {handleBukaInput,handleTutupInput,changeNama,changeUmur,changeKelamin,edit,kosong} =DataSlice.actions

  export default DataSlice.reducer