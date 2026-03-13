import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;
  const product = await fetch("https://dummyjson.com/products/" + id).then(
    (res) => res.json(),
  );
  return (
    <div className="product-card">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={300}
        height={300}
        className="product-image"
      />
      <h3 className="product-name">{product.title}</h3>
      <h3 className="product-price">{product.price}</h3>
      <Link href={"/dashboard/products"} className="product-link" >Go to all products</Link>
    </div>
  );
}
