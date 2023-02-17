import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>Какие книги вам нравятся??</h1>
            {["ИРОНИЧЕСКИЙ ДЕТЕКТИВ", "ЛЮБОВНЫЙ РОМАН", "ФАНТАСТИКА", "ИСТОРИЧЕСКИЙ РОМАН", "ВСЕ"]
            .map((category, index) => <Filter key={index} category = {category}/>
            )}
           
        </div>
        )
}

export default AllCategories;