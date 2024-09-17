import {NavLink} from "react-router-dom";

export default function CatalogEntry({ entryId, entryName, entryShortDescription }) {
    return (
        <NavLink to={`/catalog/${entryId}`}>
            <td>{entryId}</td>
            <td>{entryName}</td>
            <td>{entryShortDescription}</td>
        </NavLink>
    )
}