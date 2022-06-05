import "./Search.css";

function Search(props) {

  const handleChange = (e)=>{
      props.callback(e.target.value);
  }

  return (
    <nav className="Search">
      <form className="SearchBar">
        <input className="form-control" type="search" placeholder="Digite para filtrar equipes..." aria-label="Search" onChange={handleChange}/>
      </form>
    </nav>
  );
}

export default Search;
