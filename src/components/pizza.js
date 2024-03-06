import Listing from "./listing";
const New_page = () => {
const  pizzaCon = [
    {
        name:"chicken 65 pizza",
        price: 10000,
        discerption: "best pizza very tasty come eat"

    },
    {
        name:"maottuon 64",
        price: 1000,
        discerption: "mutton pizza"
    }
]
return(
    pizzaCon.map((item) => <Listing 
    name = {item.name}
    >
        hello
    </Listing>)
);
}

export default New_page