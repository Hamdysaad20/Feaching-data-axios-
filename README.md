---
title: The simplest way to fetch data from APIs in NextJS
published: true
description: 
tags: 
//cover_image: https://direct_url_to_image.jpg
---
![1_ycqhUTo1LqydeC355iHRoA.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1650859005614/KTnyWjTdl.jpeg)

## Before We Begin

- this is very important and simple too , but if you pay attention to it , you will understand how to use it.
- you need abit of react knowledge to understand this.

---

### First Download axios

```
npm i axios
```

# what is axios ?

- axios is a library that helps you make HTTP requests from the browser.
- it is a promise based library.
- it is a tool that helps you make HTTP requests from the browser.
- so we will use it cuz it's the simplest way to get data from the API .

## NextJS and Fetch

in NextJS , we use the fetch api to get data from the API .
but notice that in server side rendering , we can't use the data in the component directly, we need to manage the status by useState & useEffect.

# Let's Go ?

first get the url of the api then sace it .

```
  const url = "https://catfact.ninja/fact";

```

then let's begin to fetch the data from the api .(YOU HAVE TO INSTALL AXIOS 😬 !!)

```
##  fetch data
 // fetch data .
  function getData() {
    axios
      .get(url)
      .then((res) => {
       //put the resulted data in the console for testing purposes
        console.log(res.data);
        setRepo(res.data);
      })
      //handle the error
      .catch((err) => {
        console.log(err);
      });
  }
```

- Now you have the data in the console (the clint), Now how we could put it inside a component ??!

## Put it in a component .

- Let's say you builtin a page to display a fact every 5 seconds how could you do that ?
- Here is an example of what we will do [GO THERE !](https://feaching-data-axios.vercel.app/).

### was nice ha ? 😏

- any way, we will do this exactly but the logical part, you can see the full repo here [GO THERE !](https://github.com/Hamdysaad20/Feaching-data-axios-).

### this is an empty component

```
  export default function Home() {


       return (
       <div>
           <h1></h1>
       </div>
       );
   };
```

## create the status that will manage the data

    - we will use the useState hook to manage the data.
    - we will use the useEffect hook to manage the status.
    - why tho ? cuz it's a server side rendering you can't handle a client side operations there .
    or you will face errors like :

     ```
     Hydration failed because the initial UI does not match what was rendered on the server.
     ```

or

```
Text content does not match server-rendered HTML.
```

- so be aware of the status.

```
useEffect(() => {
    let interval = setInterval(() => {
      getData();
      setLoading(!loading);
      setDot(dota);
      setEmoji(emojia);
    }, 5000);

```

here we used interval to get the data every 5 seconds.
the put every function that we want to update it's status and return it.(but there is no return yet)

### the functions

```
// to get a rendom number of dots
 function dot() {
    return dots[Math.floor(Math.random() * dots.length)];
  }
  // to get a rendom number of emojis
    function emoji() {
    return emojiArray[Math.floor((Math.random() * emoji.length) / 2)];
  }
  // and we have setLoading state to display a simple text when the data is not loaded yet.
  // and of course we have getData .(the data itself)
```

so put it all together and you will get the result 😍 .


# have a wonderful day 🥰 .
