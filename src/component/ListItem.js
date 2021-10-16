import "./Home.css"
import  {handleBukaInput,handleTutupInput,changeNama,changeUmur,changeKelamin,edit} from '../store/DataSlice';
import { useSelector, useDispatch } from 'react-redux';

const ListItem = (props) => {
     console.log("update",props.lUpd,"delete",props.lDel)

    const dispatch = useDispatch();

    const { id, nama, umur, kelamin } = props.data
    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{kelamin}</td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
            <td className="removeBorder" onClick={() => dispatch(edit(props.data))}><button>Edit</button></td>
   

        </tr>
    )
}

export default ListItem;