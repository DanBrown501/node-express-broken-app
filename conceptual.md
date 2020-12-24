### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
**Promise Chaining, Async and Await, and Parallel Requests**
- What is a Promise?
**A promise is a javascript object.**

- What are the differences between an async function and a regular function?
**When an await function is started, it will stop all code from running until we receive the results from the function**

- What is the difference between Node.js and Express.js?
**Express.js is the framework that runs from Node.js.**
- What is the error-first callback pattern?
**When calling a function, it will check for any errors before running any of the code.**
- What is middleware?
**Middleware runs in the middle of a request/response cycle.**

- What does the `next` function do?
**It will move onto the next function where one of the callbacks is next. This way, it will resolve the issue in the last function with next in it.**
- What does `RETURNING` do in SQL? When would you use it?
**Used to terminate a sql procedure**
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
**The issues that will be faced with the following is a very slow response. You can also instead of having 3 responses, you can write it all in one response. If no response comes back, you will have no information about it, so maybe a try and catch as well. For the name for each user, maybe write {data: elie} so it will only send the date of elie over instead of the whole object.**