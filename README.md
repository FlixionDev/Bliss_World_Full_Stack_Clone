# Bliss_World_Full_Stack_Clone
We have successfully created the full-stack clone of <a href='https://www.blissworld.com/'>Blissworld.com</a> in our backed construct week. Where we created the full backend of `Blissworld.com` in a week with a team of **4 developers**..

![](https://i.imgur.com/be3sd9Y.jpg)

### Check project and code

* [Checkout Website Clone](https://blissworld-fullstack-clone.netlify.app/)
    
* [Code on GitHub](https://github.com/FlixionDev/Bliss_World_Full_Stack_Clone)

* [Blog](https://blissworld-mern-fullstack-clone.hashnode.dev/mern-full-stack-clone)
    

### We used the following tech stack in this clone -

* React.js
    
* Chakra-UI
    
* Redux
    
* React-router-dom
    
* Node.js
    
* Express for server
    
* Mongoose
    
* MongoDB for database
    
* Glitch for deployment
    

## Home Page

Created the home page and added a dropdown navbar, when u check our bestsellers you can go to the product page.

![](https://i.imgur.com/qzZ86v4.jpg)

## Login & Signup

You have to log in if u want to add a product to your cart, and if u enter the wrong email or password don't worry it will give an error message to make it correct. If you are not registered yet and trying to log in it will not log u in and suggest to register first.

![](https://i.imgur.com/HtP6sgU.jpg)

![](https://i.imgur.com/HXV1LsH.jpg)

## Product Page

Here are all the products if you want to sort according to salary ascending or desc you are able to from the top right corner, we have applied all filter and sorting properties inside our backed code using mongoose.

![](https://i.imgur.com/5DWJ8yj.jpg)

## Product Detail Page

You can check out the full description of the selected product and also able to check the description video of the product which we are embedded from youtube. If you press add to cart button u are able to move to the cart.

![](https://i.imgur.com/Q8Pq9qY.jpg)

## Cart Page

Here all the cart products will be displayed which you have added under your login id, you can increase the quantity and get the cart total on your own, and want to delete it is easy just click remove. Now, let's move to checkout by clicking the checkout button.

![](https://i.imgur.com/AzcDrPj.jpg)

### Check the cart backed using postman

Since you have added 3 products to the cart you can get the overview of the database using postman as we fetch the cart detail using userId we get 3 the same products as listed on UI.

![](https://i.imgur.com/QA41UAE.png)

## Checkout Page

If you are adding a product to the cart collection when added to cart the same products from the cart collection are displayed here to reverify and update the payment details. You can place an order by clicking on place order.

![](https://i.imgur.com/3dSE9GO.jpg)

## Order Page

You have placed the order and you got all 3+1 prior ordered projects on your order page. Since you have placed the order you cart collection got empty.

![](https://i.imgur.com/vxMwDfc.jpg)

### Order placed and cart collection got empty

Product moded from cart collection to order collection under similar userId.

![](https://i.imgur.com/AYqStEV.png)

### Difficulties we faced-

* Getting the userId from the JSON web token and further sending an API call to our database is a little become complicated for us where we faced difficulty but the issue we created because we have not fetched the userId as the user logged in but did it by repeating the code again and again to fetch userId.
    
* We also faced difficulty in coordinating with other person code because it's always challenging to modify and work on others' code.
    

## Team members-

1. [Ritik Kumar Singh](https://www.linkedin.com/in/ritik-kumar-singh-161618208/)
    
2. [Aditya Singh](https://www.linkedin.com/in/aditya-singh-80b55823b/)
    
3. [Krishna Chaturvedi](https://www.linkedin.com/in/krishna-chaturvedi-765026231/)
    
4. [Harsh Anand](https://github.com/Harsh1518)

## 
- **Editor-** [Krishna Chaturvedi](https://www.linkedin.com/in/krishna-chaturvedi-765026231/)
