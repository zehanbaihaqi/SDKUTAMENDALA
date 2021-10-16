import { useState } from "react"
import "./Home.css"
import {gql,useQuery,useMutation,useLazyQuery} from "@apollo/client"
import ListItem from './ListItem';
import  {handleBukaInput,handleTutupInput,changeNama,changeUmur,changeKelamin,kosong} from '../store/DataSlice';
import { useSelector, useDispatch } from 'react-redux';








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
const UpdateData=gql`
  mutation MyMutation($id: Int!, $umur: Int, $nama: name, $kelamin: String) {
  update_todo_by_pk(pk_columns: {id: $id}, _set: {kelamin: $kelamin, nama: $nama, umur: $umur}) {
    id
    nama
    kelamin
    umur
  }
}
`



function PassengerInput(props) {

    const nama = useSelector((state) => state.data.nama);
    const umur = useSelector((state) => state.data.umur);
    const jenisKelamin = useSelector((state) => state.data.jenisKelamin);
     const editing = useSelector((state) => state.data.editing);
   const edit = useSelector((state) => state.data.edit);
    const id = useSelector((state) => state.data.id);

    
    const dispatch = useDispatch();



const [insertData,{data:inserts,loading:lInsert}]=useMutation(InsertData,{refetchQueries:[props.GetData]})
const [updateDatas,{data:dataUpdate,loading:lUpdate}]=useMutation(UpdateData,{refetchQueries:[props.GetData]})

  
  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  })



  const handleEdit=(e)=>{
    updateDatas({variables:{
          "id":id,
          "umur": umur,
          "nama":nama,
          "kelamin":jenisKelamin
        }})
     dispatch(kosong())

  }



  const handleSubmit = (e) => {
    if (nama.trim() && umur &&jenisKelamin) {
      const umur2 = umur
      if (umur2 >= 75 || umur2 <= 12) {
        alert("Umur tidak sesuai")
      } else {
         insertData({variables:{
          "umur": umur,
          "nama":nama,
          "kelamin":jenisKelamin
        }})
         dispatch(kosong())
 
      }
    } else {
      alert("Data masih ada yang kosong")
    }
    // console.log("inserts: ",lInsert,inserts)
  }

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }
// console.log(id,nama,umur,jenisKelamin)
  return (
    <div className="add">
      <div onSubmit={edit ? handleEdit:handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input type="text" className="input-text" placeholder="Nama anda ..." value={nama} name="nama" onChange={(e)=>dispatch(changeNama(e.target.value))}/>
        <p>Masukkan Umur Anda</p>
        <input type="number" className="input-text" placeholder="Umur anda ..." value={umur} name="umur" onChange={(e)=>dispatch(changeUmur(e.target.value))} />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={(e)=>dispatch(changeKelamin(e.target.value))} name="jenisKelamin">
          <option value="pria" selected={jenisKelamin=="pria"} > Pria</option>
          <option value="wanita" selected={jenisKelamin=="wanita"}>Wanita</option>
        </select>
        <p></p>
        <button onClick={edit ? handleEdit:handleSubmit}>{edit ? "Edit":"Submit"}</button>
        <button onClick={()=>dispatch(handleTutupInput())} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={()=>dispatch(handleBukaInput())} style={editMode}>
        Masukkan Nama Pelanggan
      </button>
    </div>
  )
}

export default PassengerInput
