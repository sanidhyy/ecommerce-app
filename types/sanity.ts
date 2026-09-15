export interface SanityImage {
  _type?: string;
  asset?: {
    _ref?: string;
    _type?: string;
  };
}

export interface Product {
  _id: string;
  _type?: "product";
  image: SanityImage[];
  name: string;
  slug: {
    current: string;
  };
  price: number;
  details?: string;
}

export interface Banner {
  _id: string;
  _type?: "banner";
  image: SanityImage;
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
}

export interface CartItem extends Product {
  quantity: number;
}
