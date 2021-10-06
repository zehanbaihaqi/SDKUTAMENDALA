import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

import Date from "./date";
//grara
const queryAnggota = gql`
  query MyQuery {
    pendaftar {
      domisili
      id
      nama
    }
  }
`;
const Edit = () => {

  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const [author, setAuthor] = useState("Perempuan");
  const [alamat, setAlamat] = useState("");
   const { data: datas, loading } = useQuery(queryAnggota);
  // useEffect(()=> {
  //   setName(datas.name)
  // } , [datas])

  const handleSubmit = (e) => {
    e.preventDefault();
    // const blog = {name , email , author};
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2> Edit Pendaftaran </h2>
        <label>Nama Lengkap</label>
        <input
          type="text"
          required
          value={nama}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Jenis Kelamin</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="laki-laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        <label>Tempat dan Tanggal Lahir</label>
        <br />
        <Date />
        <br />
        <label>Alamat Tinggal</label>

        <textarea
          required
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />

        <button className="editButton">Edit Data</button>
      </form>
    </div>
  );
};
export default Edit;
