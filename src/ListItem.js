const ListItem1 = (props) => {

    const { id, nama, domisili  } = props.data

    return (
        <tr>
            <td>{id}</td>
            <td>{nama}</td>
            <td>{domisili}</td>
            
        </tr>
    )
}

export default ListItem1;