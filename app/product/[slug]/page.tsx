import { notFound } from "next/navigation";

import { client } from "../../../lib/client";
import type { Product } from "../../../types/sanity";
import ProductDetails from "./product-details";

export async function generateStaticParams() {
  const products = await client.fetch<{ slug: { current: string } }[]>(
    `*[_type == "product"] { slug { current } }`,
  );

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await client.fetch<Product | null>(
    `*[_type == "product" && slug.current == $slug][0]`,
    { slug },
  );

  if (!product) {
    notFound();
  }

  const products = await client.fetch<Product[]>('*[_type == "product"]');

  return <ProductDetails product={product} products={products} />;
}
