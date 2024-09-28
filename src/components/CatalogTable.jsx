import "../styles/CatalogTable.scss"
import {useEffect, useState} from "react"

export default function CatalogTable({ productIdList }) {
    const [columns, setColumns] = useState([])

    async function createCollumns(productIdList) {
        for(let i = 0; i < productIdList.length; i++) {
            const data = await fetch(`/database/${productIdList[i]}/${productIdList[i]}.json`)
            const dataJson = await data.json()
            const row = []
            row.push(productIdList[i])
            row.push(dataJson.name)
            row.push(dataJson.shortDescription)
            await setColumns(prevColumns => [...prevColumns, row])
        }
    }

    useEffect(() => {
        createCollumns(productIdList)
    }, [])


    const rows = columns.map((row) => (
        <tr key={row[0]}>
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