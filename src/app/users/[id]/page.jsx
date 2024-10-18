import axios from "axios";

// Obtener información del usuario con su ID
async function getUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

// Componente que recibe el ID del usuario desde los params de la URL
export default async function Usuario({ params }) {
    const usuario = await getUsuario(params.id);

    return (
        <>
            <h1>Información del Usuario</h1>
            <h2>Dirección</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Calle</th>
                        <th>Suite</th>
                        <th>Ciudad</th>
                        <th>Código ZIP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.address.street}</td>
                        <td>{usuario.address.suite}</td>
                        <td>{usuario.address.city}</td>
                        <td>{usuario.address.zipcode}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Información Adicional</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Teléfono</th>
                        <th>Sitio Web</th>
                        <th>Compañía</th>
                        <th>Frase de la Compañía</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.phone}</td>
                        <td>{usuario.website}</td>
                        <td>{usuario.company.name}</td>
                        <td>{usuario.company.catchPhrase}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}