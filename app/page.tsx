import { FooterBanner, HeroBanner, Product } from "../components";
import { client } from "../lib/client";
import type { Banner, Product as ProductType } from "../types/sanity";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const products = await client.fetch<ProductType[]>('*[_type == "product"]');
  const bannerData = await client.fetch<Banner[]>('*[_type == "banner"]');
  const banner = bannerData[0];

  return (
    <>
      {banner ? <HeroBanner heroBanner={banner} /> : null}
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of any variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {banner ? <FooterBanner footerBanner={banner} /> : null}
    </>
  );
}
