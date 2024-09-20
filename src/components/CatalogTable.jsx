import "../styles/CatalogTable.scss"

export default function CatalogTable() {
    const columns = [[31122, "Dandelion", "A yellow flower"],[31312, "Dandelion", "A yellow flower"],[31122, "Dandelion", "A yellow flower"],[31312, "Dandelion", "A yellow flower"],[31122, "Dandelion", "A yellow flower"],[31312, "Dandelion", "A yellow flower"],[31122, "Dandelion", "A yellow flower"],[31312, "Dandelion", "A yellow flower"],[31312, "Dandelion", "This fresh Red Rose is a classic choice for gifting or decoration. It features deep red petals with a natural sheen and a long, sturdy stem. The rose is carefully harvested to ensure long-lasting freshness and vibrant color."],[33312, "Dandelion", "A yellow flower with something on its back"]]
    const rows = columns.map((row) => (
        <tr>
            <td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td>
        </tr>
    ))

    return (
        <table>
            <thead>
            <tr>
                <th className="id-collumn"><h3>ID</h3></th>
                <th className="name-collumn"><h3>Name</h3></th>
                <th className="description-collumn"><h3>Description</h3></th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}