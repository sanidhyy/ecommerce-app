import Link from "next/link";

import { urlFor } from "../lib/client";
import type { Product as ProductType } from "../types/sanity";

const Product = ({
  product: { image, name, slug, price },
}: {
  product: ProductType;
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image[0]).url()}
            alt={name}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
