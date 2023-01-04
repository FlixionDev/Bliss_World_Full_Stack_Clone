# Bliss_World_Full_Stack_Clone
We have successfully created the full-stack clone of <a href='https://www.blissworld.com/'>Blissworld.com</a> in our backed construct week. Where we created the full backend of `Blissworld.com` in a week with a team of **4 developers**..

### Check project and code

* [Checkout Website Clone](https://blissworld-fullstack-clone.netlify.app/)
    
* [Code on GitHub](https://github.com/FlixionDev/Bliss_World_Full_Stack_Clone)
    

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

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672835772814/d60ffbc7-bc54-454d-834a-ec715e2fc4c3.jpeg align="center")

## Login & Signup

You have to log in if u want to add a product to your cart, and if u enter the wrong email or password don't worry it will give an error message to make it correct. If you are not registered yet and trying to log in it will not log u in and suggest to register first.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672835950178/9d4cebfb-b01d-435c-96b7-966dfabf0f4c.jpeg align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672835959060/54d8cae7-3412-4e01-aabb-7709f63466ea.jpeg align="center")

## Product Page

Here are all the products if you want to sort according to salary ascending or desc you are able to from the top right corner, we have applied all filter and sorting properties inside our backed code using mongoose.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672836431003/1a2a5167-7c7a-47f7-aac6-b983f6fa9f73.jpeg align="center")

## Product Detail Page

You can check out the full description of the selected product and also able to check the description video of the product which we are embedded from youtube. If you press add to cart button u are able to move to the cart.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672836569983/3520be0d-1f0f-4000-9b76-874460053aa3.jpeg align="center")

## Cart Page

Here all the cart products will be displayed which you have added under your login id, you can increase the quantity and get the cart total on your own, and want to delete it is easy just click remove. Now, let's move to checkout by clicking the checkout button.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672836768201/a0d344fb-5560-4231-a1cf-8248ed6b0a0d.jpeg align="center")

### Check the cart backed using postman

Since you have added 3 products to the cart you can get the overview of the database using postman as we fetch the cart detail using userId we get 3 the same products as listed on UI.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672836816160/3eaf82c9-06a8-48e1-83ad-83797304e5db.png align="center")

## Checkout Page

If you are adding a product to the cart collection when added to cart the same products from the cart collection are displayed here to reverify and update the payment details. You can place an order by clicking on place order.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672837143300/ac41d17a-a73b-4ac9-b4f3-c40a2948967f.jpeg align="center")

## Order Page

You have placed the order and you got all 3+1 prior ordered projects on your order page. Since you have placed the order you cart collection got empty.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672837497177/8fff7e68-cb18-41be-af95-08dfe5429227.jpeg align="center")

### Order placed and cart collection got empty

Product moded from cart collection to order collection under similar userId.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1672837812257/93800f44-82d3-4dc4-944e-5561ec75ee92.png align="center")

### Difficulties we faced-

* Getting the userId from the JSON web token and further sending an API call to our database is a little become complicated for us where we faced difficulty but the issue we created because we have not fetched the userId as the user logged in but did it by repeating the code again and again to fetch userId.
    
* We also faced difficulty in coordinating with other person code because it's always challenging to modify and work on others' code.
    

## Team members-

1. [Ritik Kumar Singh](https://www.linkedin.com/in/ritik-kumar-singh-161618208/)
    
2. [Aditya Singh](https://www.linkedin.com/in/aditya-singh-80b55823b/)
    
3. [Krishna Chaturvedi](https://www.linkedin.com/in/krishna-chaturvedi-765026231/)
    
4. [Harsh Anand](https://github.com/Harsh1518)
