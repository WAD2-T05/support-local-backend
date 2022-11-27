![Nobackgroundlogo](https://user-images.githubusercontent.com/86020207/200137672-672cdcfc-91a6-44f5-8f9f-429660f25143.png)

# Support Local Backend

Support Local is THE one-stop shop for all things local. It compiles all local businesses, and services in an easy-to-use portal and allows them to offer their products and services to customers through the platform.

Main App Link: https://supportlocal.netlify.app/

Frontend Repository: https://github.com/xavierkoo/support-local-frontend

## Backend Tech Stack 
* Express
* Node.js
* MongoDB

## Project setup

### Download project repository to your local directory:
```
git clone git@github.com:WAD2-T05/support-local-backend.git
```

### Open your terminal in local project, and execute:
```
npm install
``` 

### Add `.env` file and configure database connection
```
MONGODB_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
PORT=3001
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Lints and fixes files
```
npm run lint
```

You may make API calls to the server locally via `localhost:3001`.

## Database Entity-Relationship Diagram
<img width="909" alt="Screenshot 2022-11-10 at 8 58 20 AM" src="https://user-images.githubusercontent.com/86020207/200974440-d8cb04be-0674-47a6-a615-6e0baed0e140.png">

# API Documentation

## Base API URL
https://support-local.herokuapp.com/api/

## User Related APIs

### Merchants

##### Get all merchants
**GET:** https://support-local.herokuapp.com/api/merchants<br>
**Send:** NIL<br>
**Receive:** All Merchant Objects || Response Code - 404

##### Get specific merchant
**GET:** https://support-local.herokuapp.com/api/merchants/:id<br>
**Send:** merchantId (ObjectId)<br>
**Receive:** Specific Merchant Object || Response Code - 404

##### Update merchant products
**PATCH:** https://support-local.herokuapp.com/api/merchants/:id<br>
**Send:** merchantId (ObjectId), productId (ObjectId Array)<br>
**Receive:** Updated Merchant Object,  Response Code - 204|| Exception

### Orders

##### Get all orders
**GET:** https://support-local.herokuapp.com/api/orders<br>
**Send:** NIL<br>
**Receive:** All Order Objects || Response Code - 404

##### Get specific order
**GET:** https://support-local.herokuapp.com/api/orders/:id<br>
**Send:** orderId (ObjectId)<br>
**Receive:** Specific Order Object || Response Code - 404

##### Add new order
**POST:** https://support-local.herokuapp.com/api/orders<br>
**Send:** user (ObjectId), orderDate (String), orderStatus (String), products (ObjectId Array), delivaryDate (String)<br>
**Receive:** New Order Object Response Code - 201 || Exception

##### Update order status
**PATCH:** https://support-local.herokuapp.com/api/orders/:id<br>
**Send:** orderStatus (String)<br>
**Receive:** Updated Order Object,  Response Code - 204 || Exception

### Products

##### Get all products
**GET:** https://support-local.herokuapp.com/api/products<br>
**Send:** NIL<br>
**Receive:** All Product Objects || Response Code - 404

##### Get specific product
**GET:** https://support-local.herokuapp.com/api/products/:id<br>
**Send:** productId (ObjectId)<br>
**Receive:** Specific Product Object || Response Code - 404

##### Add new product
**POST:** https://support-local.herokuapp.com/api/products<br>
**Send:** name (String), price (Number), specialPrice (Number), category (String), rating (Number), imgUrl (String), numberSold (Number), productDesc (String), productSpec (String Array), merchant (ObjectId), reviews (ObjectId Array)<br>
**Receive:** New Product Object, Response Code - 201 || Exception

##### Delete specific product
**GET:** https://support-local.herokuapp.com/api/products/:id<br>
**Send:** productId (ObjectId)<br>
**Receive:** Specific Product Object, Response Code - 204 || Exception

##### Update product fields
**PATCH:** https://support-local.herokuapp.com/api/products/:id<br>
**Send:** name (String), price (Number), specialPrice (Number), category (String), rating (Number), imgUrl (String), numberSold (Number), productDesc (String), productSpec (String Array), merchant (ObjectId), reviews (ObjectId Array)<br>
**Receive:** Updated Order Object,  Response Code - 204 || Exception

##### Update product with new review
**PATCH:** https://support-local.herokuapp.com/api/products/:id<br>
**Send:** reviews (ObjectId Array)<br>
**Receive:** Updated Order Object,  Response Code - 204 || Exception

### Reviews

##### Get all reviews
**GET:** https://support-local.herokuapp.com/api/reviews<br>
**Send:** NIL<br>
**Receive:** All Review Objects || Response Code - 404

##### Get specific review
**GET:** https://support-local.herokuapp.com/api/reviews/:id<br>
**Send:** reviewId (ObjectId)<br>
**Receive:** Specific Review Object || Response Code - 404

##### Add new review
**POST:** https://support-local.herokuapp.com/api/reviews<br>
**Send:** user (ObjectId), product (ObjectId), rating (Number), orderDetails (String)<br>
**Receive:** New Review Object, Response Code - 201 || Exception

### Users

##### Get all users
**GET:** https://support-local.herokuapp.com/api/users<br>
**Send:** NIL<br>
**Receive:** All User Objects || Response Code - 404

##### Get specific user
**GET:** https://support-local.herokuapp.com/api/users/:id<br>
**Send:** userId (ObjectId)<br>
**Receive:** Specific User Object || Response Code - 404

##### Add new user
**POST:** https://support-local.herokuapp.com/api/users<br>
**Send:** email (String), password (String), profImageUrl (String), reviews (ObjectId Array), orderDetails (ObjectId Array)<br>
**Receive:** New User Object, Response Code - 201 || Exception

##### Update user with new order
**PATCH:** https://support-local.herokuapp.com/api/users/:id<br>
**Send:** orderDetails (ObjectId Array)<br>
**Receive:** Updated User Object,  Response Code - 204 || Exception

##### Update user with new review
**PATCH:** https://support-local.herokuapp.com/api/users/:id<br>
**Send:** reviews (ObjectId Array)<br>
**Receive:** Updated User Object,  Response Code - 204 || Exception

