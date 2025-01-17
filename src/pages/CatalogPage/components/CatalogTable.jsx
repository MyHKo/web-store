import style from "@catalogPage/styles/CatalogTable.module.scss"
import {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {NavLink} from "react-router-dom";

export default function CatalogTable() {
    const [rows, setRows] = useState([])
    const { filteredProducts } = useSelector((state) => state.globalStateSlice);

    async function createRows(productIdAndNameList) {
        const newRows = [];
        for(let i = 0; i < productIdAndNameList.length; i++) {
            const data = await fetch(`/database/${productIdAndNameList[i][0]}/${productIdAndNameList[i][0]}.json`);
            const dataJson = await data.json();
            const row = [
                productIdAndNameList[i][0],
                dataJson.name,
                dataJson.shortDescription
            ];
            newRows.push(row);
        }
        setRows(newRows);
    }

    function sortRows(column) {
        setRows(prevRows => {
            const newRows = [...prevRows];
            if (column === 1) {
                return newRows.sort((a, b) => a[0] - b[0]);
            } else if (column === 2) {
                return newRows.sort((a, b) => a[1].localeCompare(b[1]));
            } else {
                return newRows.sort((a, b) => a[2].localeCompare(b[2]));
            }
        });
    }

    useEffect(() => {
        createRows(filteredProducts)
    }, [filteredProducts])
    

    const tableRows = rows.map((row) => (
        <tr key={row[0]}>
            <td>{row[0]}</td><td><NavLink to={`/catalog/${row[0]}`}>{row[1]}</NavLink></td><td>{row[2]}</td>
        </tr>
    ))

    return (
        <table>
            <thead>
            <tr>
                <th className={style.idCollumn}><h3 onClick={() => {sortRows(1)}}>ID</h3></th>
                <th className={style.nameCollumn}><h3 onClick={() => {sortRows(2)}}>Name</h3></th>
                <th className={style.descriptionCollumn}><h3 onClick={() => {sortRows(3)}}>Description</h3></th>
            </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </table>
    )
}