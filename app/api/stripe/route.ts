import { NextResponse } from "next/server";
import Stripe from "stripe";

import type { CartItem } from "../../../types/sanity";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  try {
    const cartItems = (await request.json()) as CartItem[];
    const origin = request.headers.get("origin") ?? "";

    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: process.env.STRIPE_SHIPPING_RATE_ID },
      ],
      line_items: cartItems.map((item) => {
        const img = item.image[0].asset?._ref ?? "";
        const newImage = img
          .replace(
            "image-",
            `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/`,
          )
          .replace("-webp", ".webp");

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${origin}/success`,
      cancel_url: `${origin}/?canceled=true`,
    });

    return NextResponse.json(session);
  } catch (err) {
    const error = err as { statusCode?: number; message?: string };
    return NextResponse.json(error.message ?? "Checkout failed", {
      status: error.statusCode ?? 500,
    });
  }
}
