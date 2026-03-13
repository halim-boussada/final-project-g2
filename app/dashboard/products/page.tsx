import Image from "next/image";
import "./products.css"
import Link from "next/link";

type Product = {
id : number;
  title: string;
  price: number;
  images: string[];
};

export default async function Products() {
  const { products } = await fetch("https://dummyjson.com/products").then(
    (res) => res.json(),
  );
  return (
    <div className="product-list">
      {products?.map((product: Product) => {
       return <div className="product-card" key={product.id}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={300}
            height={300}
            className="product-image"
          />
          <h3 className="product-name">{product.title}</h3>
          <h3 className="product-price">{product.price}</h3>
        <Link href={"/dashboard/products/" + product.id} className="product-link" >Go to details</Link>
        </div>;
      })}
    </div>
  );
}
