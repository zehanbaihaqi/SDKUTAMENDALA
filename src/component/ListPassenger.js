import ListItem from './ListItem';
const ListPassenger = props => {
    // console.log( "props loading",props.loading)
    
    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                { props.data?.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                        edit={props.edit}              
                    />
                ))}
            </table>
            {props.loading? <h4 className="loading">mengambil data.....</h4>:""}
        </div>
    )
  }

export default ListPassenger;