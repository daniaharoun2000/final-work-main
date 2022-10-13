import Itemcart from "./ItemCart";
import data from "./Data";

export default function Home() {
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="container py-4">
        <div className="row justify-content-center">
          {data.productData.map((items) => {
            return (
              <Itemcart
                key={items.id}
                Title={items.title}
            
                img={items.image}
                price={items.price}
                item={items}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

