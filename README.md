# Amazon Clone

A front-end Amazon-style storefront built with HTML, CSS, and vanilla JavaScript. The homepage mirrors the familiar dark navbar, secondary menu, category cards, and footer. Product data, search, filters, and cart logic live in `products.js` so you can browse a small catalog without a backend.

---

## Features

- **Homepage layout** inspired by amazon.com: logo, delivery location, search bar, country selector, account menu, cart, and a second nav (All, Today's Deals, Prime Video, and more)
- **Category cards** for school supplies, gaming, fashion deals, home under $50, and kitchen appliances
- **18 sample products** across School, Gaming, Fashion, Home, and Kitchen, with price, MRP, discount, rating, review count, Prime flag, and deal tags
- **Product detail page** (`product.html?id=`) with quantity, Add to Cart, and Buy Now
- **Client-side cart** stored in `localStorage` under the key `amz_cart`
- **Catalog helpers** in `products.js`: search, category, price range, rating, deals-only, and sort (price, rating, discount)
- **Font Awesome** icons for location, search, and cart

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS3 (`amazon_clone.css` for the main storefront) |
| Logic | Vanilla JavaScript (`products.js`) |
| Persistence | `localStorage` |
| Icons | [Font Awesome 7](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css) |

No build step, npm, or server-side database is required.

---


