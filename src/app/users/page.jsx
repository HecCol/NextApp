import axios from "axios";
import Link from "next/link"
async function getUsuarios(){
    const url = "https://jsonplaceholder.typicode.com/users";
    const usuarios = await axios.get(url);
    return usuarios.data;
}

//noticias();
export default async function usuarioes(){
    const usuarios = await getUsuarios();
    return(
        <>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>
                                <Link href={`/users/${usuario.id}`}>
                                    {usuario.name}
                                </Link>
                            </td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}