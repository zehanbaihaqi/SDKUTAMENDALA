import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import Fill from "./Fill"
import {useState} from "react"
import {gql,useQuery,useMutation,useLazyQuery} from "@apollo/client"

const initialValue= [
                {
                    id: uuidv4(),
                    nama: 'Yoga',
                    umur: 22,
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Ria',
                    umur: 19,
                    jenisKelamin: 'Wanita'
                },
                {
                    id: uuidv4(),
                    nama: 'Fahmi',
                    umur: 25,
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Lala',
                    umur: 21,
                    jenisKelamin: 'Wanita'
                },
                {
                    id: uuidv4(),
                    nama: 'Ivan',
                    umur: 25,
                    jenisKelamin: 'Pria'
                }
            ]

const GetData=gql`
   query MyQuery {
  todo {
    id
    nama
    kelamin
    umur
  }
}
`

const byId=gql`
query MyQuery($_eq: Int) {
  todo(where: {id: {_eq: $_eq}}) {
    id
    nama
    umur
    kelamin
  }
}
`

const byKelamin=gql`
query MyQuery($_eq: String) {
  todo(where: {kelamin: {_eq: $_eq}}) {
    id
    nama
    umur
    kelamin
  }
}
`
const updateData=gql`
mutation MyMutation($id: Int!, $umur: Int ) {
  update_todo_by_pk(pk_columns: {id: $id}, _set: {umur: $umur}) {
    nama
    kelamin
    umur
  }
}
`

const DeleteDatas=gql`
mutation MyMutation($_eq: Int) {
  delete_todo(where: {id: {_eq: $_eq}}) {
    returning {
      nama
    }
  }
}
`



//======================================================================


function Home()  {
 const [data,setData]=useState(initialValue)


  const {data:datas,loading,error,refetch}=useQuery(GetData)
  const [getData,{data:dataFill,loading:tunggu}]=useLazyQuery(byId)
  const [getDataKelamin,{data:dataKelamin,loading:sabar}]=useLazyQuery(byKelamin)

  const [updateName,{data:update,loading:lodding}]=useMutation(updateData,{refetchQueries:[GetData]})
  const [deleteData,{data:deletes,loading:lDel}]=useMutation(DeleteDatas,{refetchQueries:[GetData]})

  const [nameFill,setNameFill]=useState("Semua")
  const [id,setId]=useState("")
  const [fill,setFill]=useState("")
  const [kelamin,setKelamin]=useState("")


    // console.log("fill",tunggu,dataFill?.todo)



// =======================[HANDLE]============================================


  const  hapusPengunjung = id2 => {
        deleteData({variables:{"_eq":id2 }})              
        console.log("ini id : ",id2,deletes)
    };
    


     const input=(e)=>{
    setNameFill(e.target.value)
  }

     const inputKelamin=(e)=>{
    setKelamin(e.target.value)
    GetDataKelamin()
 
  }

   const project = () => {
      if(nameFill=="Id"){
        return <Fill setId={setId} getDataId={getDataId} nameFill={nameFill}/>;
      }else if(nameFill=="Kelamin"){
        return <Fill setKelamin={setKelamin} GetDataKelamin={GetDataKelamin} nameFill={nameFill}/>;
      }    
    }

  const  getDataId=()=>{
    getData({variables:{"_eq":id }})
  }
  const GetDataKelamin=()=>{
    getDataKelamin({variables:{"_eq":kelamin}})
  }


const edit=(id,nama,umur,kelamin)=>{
    console.log(id,nama,umur,kelamin)    
}




 const fillInput= () => {
      if(nameFill=="Id"){
        return   <ListPassenger 
                    data={dataFill?.todo}
                    loading={tunggu}
                    hapusPengunjung={hapusPengunjung}
                    edit={edit}
                    lDel={lDel}
                    lUpd={lodding}

                />;
      } 
      if(nameFill=="Kelamin"){
        return   <ListPassenger 
                    data={dataKelamin?.todo}
                    loading={sabar}
                    hapusPengunjung={hapusPengunjung}
                    edit={edit}
                     lDel={lDel}
                    lUpd={lodding}

                />;
      } 

       if(nameFill=="Semua"){
        return   <ListPassenger 
                    data={datas?.todo}
                    loading={loading}
                    hapusPengunjung={hapusPengunjung}
                    edit={edit}
                    lDel={lDel}
                    lUpd={lodding}
                />;
      }      
    }
   // console.log("update",lodding,id,update)

//=================================[RETRUN]====================================================
        return (
            <div>
      

           <Header/>

                {fillInput()}

                <PassengerInput
              
                    GetData={GetData}
                    edit={edit}
                />


                <div className="select" >
                   <h6>Fillter : </h6> 
                        <select  onChange={input}  name="cars" id="cars">
                    <option selected value="Semua">Semua</option>
                  <option value="Id">Id</option>
                  <option value="Kelamin">Kelamin</option>
                </select>
                </div>


               {project()}
            </div>
        )

}

export default Home;