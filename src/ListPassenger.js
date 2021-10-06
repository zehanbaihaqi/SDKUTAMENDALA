import {gql, useQuery} from '@apollo/client';
const ListItem = (props) => {
  const { id, nama, domisili } = props.data;

  return (
    <tr>
      <td>{id}</td>
      <td>{nama}</td>
      <td>{domisili}</td>
    </tr>
  );
};
const queryPendaftaran = gql`
  query MyQuery {
    pendaftar {
      domisili
      id
      nama
    }
  }
`;
 
const ListPassenger = props => {
    const {data:datas, loading} = useQuery(queryPendaftaran);

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                <thead bgcolor="red">
                    <td>No</td>
                    <td>Nama</td>
                    <td>Domisili</td>
                   
                </thead>
                {datas?.anggota.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
            <br/>
        
        </div>
    )
  }

export default ListPassenger;