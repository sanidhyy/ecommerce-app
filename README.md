# E-COMMERCE WEB APPLICATION USING NEXT JS

![E-commerce Web App using Next JS](https://user-images.githubusercontent.com/71302066/174431664-59ee8d85-ed57-4e74-a002-f3fe2d166966.png)

[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/Technical-Shubham-tech)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Technical-Shubham-tech/ecommerce-app/commits/main)
[![GitHub license](https://img.shields.io/github/license/Technical-Shubham-tech/ecommerce-app)](https://github.com/Technical-Shubham-tech/ecommerce-app/blob/main/LICENSE.md)
[![GitHub branches](https://badgen.net/github/branches/Technical-Shubham-tech/ecommerce-app/)](https://github.com/Technical-Shubham-tech/ecommerce-app/branches)
[![Github commits](https://badgen.net/github/commits/Technical-Shubham-tech/ecommerce-app/main)](https://github.com/Technical-Shubham-tech/ecommerce-app/commits/)
[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://ecommerce-app-next.vercel.app/)
[![GitHub issues](https://img.shields.io/github/issues/Technical-Shubham-tech/ecommerce-app)](https://github.com/Technical-Shubham-tech/ecommerce-app/issues)

## 📌 How to setup this App?

1. Make sure **Git** and **NodeJS** is installed
2. **Yarn** is faster than Npm. So use [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/).
3. To get started, create .env file in root folder.
4. Contents of `.env` file

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_SECRET_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

5. Clone this **repository** to your local computer.
6. Open **terminal** in root directory. Run `npm install` or `yarn install`
7. Now, `cd sanity-ecommerce-app`. Run `npm install` or `yarn install` again.
8. Now all required packages are installed, let's setup sanity.
9. Create an account in [sanity](https://www.sanity.io/)
10. In terminal, type `sanity init` to initialize our sanity project.
    ![sanity init output](https://user-images.githubusercontent.com/71302066/174443245-5508b29d-07e9-4078-b335-d014ab838831.png)

11. Type `sanity start` to start sanity studio on localhost. URL will be shown in terminal.
    ![sanity start output](https://user-images.githubusercontent.com/71302066/174443446-7f470faf-d256-4b37-807d-354a223bc715.png)
12. After going to localhost, login in with your account. Now, your account is connected with this project.
13. To get `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_TOKEN`, go to [sanity](https://www.sanity.io).
14. Copy your **project id** as shown below:
    ![copy project id](https://user-images.githubusercontent.com/71302066/174444494-5388b489-ebc2-4f0f-ac16-9b0b539a0ece.png)

15. Under **API Tab**, go to **tokens** section and create a token. You can name it whatever you want. Just Don't fotget
    to copy your project token. You will not be able to copy later.
    ![copy project token](https://user-images.githubusercontent.com/71302066/174444200-2c1b7b2c-32e2-4821-9078-d17f046839ce.png)

16. Now, you add products and banner from http://localhost:3333 to your project through sanity.
    ![add new products](https://user-images.githubusercontent.com/71302066/174444767-78dee70d-941c-4cc5-951d-c8adc09eedf6.png)

**NOTE:** If you want to use same images as mine, you can find all images in **public/assets** folder. You can use your own images as well, but make sure they are in .webp format or you have to define your own images format in **pages/api/stripe.js**
![change image format here](https://user-images.githubusercontent.com/71302066/174445034-2e279b6a-04eb-4003-841a-8aa9dd3566bf.png)

17. After sanity is setup successfully, it's time to setup online payments with stripe.
18. Create an account in [Stripe](https://stripe.com). Make sure **test mode** is enabled.
19. On account dashboard, you can simply get your `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `NEXT_PUBLIC_STRIPE_SECRET_KEY`.
    ![copy keys](https://user-images.githubusercontent.com/71302066/174445248-cce52da0-e172-433b-906f-88399750f93c.png)
    **NOTE:** Don't share these keys publicaly.
20. You can also create custom shipping rates, to create one, go to: **Products** > Shipping rates > Create shipping rate.

![Create shipping rate](https://user-images.githubusercontent.com/71302066/174445465-bc16148a-8c07-4a3e-9599-3ac6336867d7.png)

21. After creating shipping rate, you can copy **shipping rate id** and paste it in **pages/api/stripe.js**
    ![copy shipping rate id](https://user-images.githubusercontent.com/71302066/174445681-f7a4b6a8-2dc5-43b3-9a21-096ec71a39e3.png)

![paste shipping rate id](https://user-images.githubusercontent.com/71302066/174445828-1eeb8b09-d409-4f9a-b698-d199f1299cd1.png)

22. Now everything has been setup. You can start this app using `npm start` or `yarn start`.

## 📃 Built with

[<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" width="150" height="40" />](https://www.javascript.com/)

[<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" width="150" />](https://reactjs.org/)

[<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" width="150" />](https://nextjs.org/)

[<img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" width="150" />](https://stripe.com/)

## 🔧 Stats

![Stats for this App](https://user-images.githubusercontent.com/71302066/174447557-438e3ae9-241e-451c-91fa-a1e6d795d036.svg)

## 🙌🏼 Contribute

You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## Buy Me a Coffee 🍺

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## 🚀 Follow Me

[![GitHub followers](https://img.shields.io/github/followers/Technical-Shubham-tech?style=social&label=Follow&maxAge=2592000)](https://github.com/Technical-Shubham-tech)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FTechnicalShubam)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FTechnical-Shubham-tech%2Fmedical-chat-app)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCNAz_hUVBG2ZUN8TVm0bmYw)

## Give A Star ⭐

You can also give this repository a star to show more people and they can use this repository.
