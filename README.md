# E-COMMERCE WEB APPLICATION USING NEXT JS

![E-commerce Web App using Next JS](https://user-images.githubusercontent.com/71302066/174431664-59ee8d85-ed57-4e74-a002-f3fe2d166966.png)

[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/sanidhyy)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/sanidhyy/ecommerce-app/commits/main)
[![GitHub license](https://img.shields.io/github/license/sanidhyy/ecommerce-app)](https://github.com/sanidhyy/ecommerce-app/blob/main/LICENSE.md)
[![GitHub branches](https://badgen.net/github/branches/sanidhyy/ecommerce-app/)](https://github.com/sanidhyy/ecommerce-app/branches)
[![Github commits](https://badgen.net/github/commits/sanidhyy/ecommerce-app/main)](https://github.com/sanidhyy/ecommerce-app/commits/)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://ecommerce-app-next.vercel.app/)
[![GitHub issues](https://img.shields.io/github/issues/sanidhyy/ecommerce-app)](https://github.com/sanidhyy/ecommerce-app/issues)

## 📌 How to setup this App?

1. Make sure **Git** and **Node.js** are installed.
2. To get started, create a `.env` file in the root folder.
3. Contents of the `.env` file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
SANITY_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_SHIPPING_RATE_ID=shr_xxxxxxxxxxxxxxxxxxxxxxxx
```

4. Clone this **repository** to your local computer.
5. Open a **terminal** in the root directory. Run `npm install` or `pnpm install`. This installs dependencies for the Next.js app and Sanity Studio.
6. Now that all required packages are installed, let's set up Sanity.
7. Create an account on [Sanity](https://www.sanity.io/).
8. In the terminal, type `sanity init` to initialize your Sanity project.
   ![sanity init output](https://user-images.githubusercontent.com/71302066/174443245-5508b29d-07e9-4078-b335-d014ab838831.png)

9. Type `npm run studio` or `pnpm studio` to start Sanity Studio on localhost. The URL will be shown in the terminal.
   ![sanity start output](https://user-images.githubusercontent.com/71302066/174443446-7f470faf-d256-4b37-807d-354a223bc715.png)
10. After opening the local URL, log in with your account. Your account is now connected to this project.
11. To get `NEXT_PUBLIC_SANITY_PROJECT_ID` and `SANITY_TOKEN`, go to [Sanity](https://www.sanity.io).
12. Copy your **project ID** as shown below:
    ![copy project id](https://user-images.githubusercontent.com/71302066/174444494-5388b489-ebc2-4f0f-ac16-9b0b539a0ece.png)

13. Under the **API** tab, go to the **Tokens** section and create a token. You can name it whatever you want. Just don't forget
    to copy your project token. You will not be able to copy it later.
    ![copy project token](https://user-images.githubusercontent.com/71302066/174444200-2c1b7b2c-32e2-4821-9078-d17f046839ce.png)

14. Now add products and a banner to your project from http://localhost:3333 through Sanity.
    ![add new products](https://user-images.githubusercontent.com/71302066/174444767-78dee70d-941c-4cc5-951d-c8adc09eedf6.png)

**NOTE:** If you want to use the same images as mine, you can find them in the **public/assets** folder. You can use your own images as well, but make sure they are in `.webp` format, or you will have to define your own image format in **app/api/stripe/route.ts**.
![change image format here](https://user-images.githubusercontent.com/71302066/174445034-2e279b6a-04eb-4003-841a-8aa9dd3566bf.png)

15. After Sanity is set up successfully, it's time to set up online payments with Stripe.
16. Create an account on [Stripe](https://stripe.com). Make sure **test mode** is enabled.
17. On the account dashboard, you can get your `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY`.
    ![copy keys](https://user-images.githubusercontent.com/71302066/174445248-cce52da0-e172-433b-906f-88399750f93c.png)
    **NOTE:** Don't share these keys publicly.
18. You can also create custom shipping rates. To create one, go to **Products** > Shipping rates > Create shipping rate.

![Create shipping rate](https://user-images.githubusercontent.com/71302066/174445465-bc16148a-8c07-4a3e-9599-3ac6336867d7.png)

19. After creating a shipping rate, copy the **shipping rate ID** into `STRIPE_SHIPPING_RATE_ID` in your `.env` file.
    ![copy shipping rate id](https://user-images.githubusercontent.com/71302066/174445681-f7a4b6a8-2dc5-43b3-9a21-096ec71a39e3.png)

![paste shipping rate id](https://user-images.githubusercontent.com/71302066/174445828-1eeb8b09-d409-4f9a-b698-d199f1299cd1.png)

20. Now everything has been set up. You can start this app using `npm start` or `pnpm start`.

### Need Help?

If you run into issues during installation or setup:

- **GitHub Discussions** — [Open a Q&A discussion](https://github.com/sanidhyy/ecommerce-app/discussions/new?category=q-a) for setup and troubleshooting help.
- **Email** — [sanidhyyy@gmail.com](mailto:sanidhyyy@gmail.com)
- **Discord** — `@sanidhyy`

## 📃 Built with

[<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="150" height="40" />](https://www.javascript.com/)

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://reactjs.org/)

[<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" width="150" />](https://nextjs.org/)

[<img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" width="150" />](https://stripe.com/)

## 🔧 Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/174447557-438e3ae9-241e-451c-91fa-a1e6d795d036.svg)

## 🙌🏼 Contribute

You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow the community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## 🚀 Follow Me

[![GitHub followers](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%2Fmedical-chat-app)

## Give A Star ⭐

You can also give this repository a star so more people can find and use it.
