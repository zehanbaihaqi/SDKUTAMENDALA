import { useState } from "react";
import Date from './date';


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [author, setAuthor] = useState("Perempuan");
  const [alamat, setAlamat] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const blog = {name , email , author};
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2> Pendaftaran </h2>
        <label>Nama Lengkap</label>
        <input
          type="text"
          required
          value={name}
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

        <button className="createButton">Add Blog</button>
      </form>
    </div>
  );
};
export default Create;
