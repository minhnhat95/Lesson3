// import Img01 from "../assets/001.png";
import "./Card.css";
const Card = () => {
  const pokemonInformation = [
    {
      img: "./public/images/001.png",
      id: "#0001",
      name: "Bulbasaur",
      he1: "Grass",
      he2: "Poison",
    },
    {
      img: "./public/images/002.png",
      id: "#0002",
      name: "Ivysaur",
      he1: "Grass",
      he2: "Poison",
    },
    {
      img: "./public/images/003.png",
      id: "#0003",
      name: "Venusaur",
      he1: "Grass",
      he2: "Poison",
    },
    {
      img: "./public/images/004.png",
      id: "#0004",
      name: "Charmander",
      he1: "Fire",
    },
    {
      img: "./public/images/005.png",
      id: "#0005",
      name: "Charmeleon",
      he1: "Fire",
    },
    {
      img: "./public/images/006.png",
      id: "#0006",
      name: "Charizard",
      he1: "Fire",
      he2: "Flying",
    },
    {
      img: "./public/images/007.png",
      id: "#0007",
      name: "Squirtle",
      he1: "Water",
    },
    {
      img: "./public/images/008.png",
      id: "#0008",
      name: "Wartortle",
      he1: "Water",
    },
    {
      img: "./public/images/009.png",
      id: "#0009",
      name: "Blastoise",
      he1: "Water",
    },
    {
      img: "./public/images/010.png",
      id: "#0010",
      name: "Caterpie",
      he1: "Bug",
    },
    {
      img: "./public/images/011.png",
      id: "#0011",
      name: "Metapod",
      he1: "Bug",
    },
    {
      img: "./public/images/012.png",
      id: "#0012",
      name: "Butterfree",
      he1: "Bug",
      he2: "Flying",
    },
  ];
  return (
    <>
      <div className="cards">
        {pokemonInformation.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt="img" />
            <p className="pokemon_id">{item.id}</p>
            <p className="pokemon_name">{item.name}</p>
            <div className="pokemon_class_wrapper">
              <div
                style={{
                  color: "black",
                  backgroundColor: "#9CCC50",
                }}
              >
                {item.he1}
              </div>
              <div style={{ color: "white", backgroundColor: "#BA7FC9" }}>
                {item.he2}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
{
  /* <img src={Img01} alt="" />
        <p className="pokemon_id">#0001</p>
        <p className="pokemon_name">Bulbasaur</p>
        <div className="pokemon_class_wrapper">
          <div
            style={{
              color: "black",
              backgroundColor: "#9CCC50",
            }}
          >
            Grass
          </div>
          <div style={{ color: "white", backgroundColor: "#BA7FC9" }}>
            Poison
          </div>
        </div> */
}
