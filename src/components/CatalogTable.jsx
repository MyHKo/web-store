import CatalogEntry from "./CatalogEntry"

export default function CatalogTable() {
    return (
        <table>
            <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Description</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <CatalogEntry entryId={121} entryName={"Rose"} entryShortDescription={"A flower with spikes"}/>
            </tr>
            <tr>
                <CatalogEntry entryId={312} entryName={"Dandelion"} entryShortDescription={"A yellow flower"}/>
            </tr>
            </tbody>
        </table>
    )
}