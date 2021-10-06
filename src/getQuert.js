import { gql, useQuery } from "@apollo/client";
import ListItem1 from "./ListItem";
const queryAnggota = gql`
  query MyQuery {
    pendaftar {
      domisili
      id
      nama
    }
  }
`;

const ListPassenger = (props) => {
  const { data: datas, loading } = useQuery(queryAnggota);

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead className="abuabu">
          <td>No</td>
          <td>Nama</td>
          <td>Domisili</td>
        </thead>
        {datas?.pendaftar.map((item) => (
          <ListItem1
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
      <br />
    </div>
  );
};

export default ListPassenger;
