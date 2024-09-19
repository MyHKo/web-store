import "../styles/Filters.scss"

export default function Filters() {
    return (
        <div className="filterContainer">
            <form className="filterForm">Filter by:
                <label htmlFor="Name">Name</label>
                <input type="radio" name="Name"/>
                <label htmlFor="Name">Name</label>
                <input type="radio" name=""/>
            </form>
        </div>
    )
}