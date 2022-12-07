
const Products = ({baslik,plist}) => {
    let renderList = plist.map(p => {
        return (
            <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
            </tr>
        )
    })
    return (
        <>
            {/* div yerine böyle yazabiliriz */}
            <h4>{baslik}</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList}
                </tbody>
            </table>
        </>

    )
}
export default Products