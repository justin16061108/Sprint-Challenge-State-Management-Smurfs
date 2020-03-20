1. What problem does the context API help solve?
  It solves the issue with only giving state to certain components instead of needing it on all the components to accomplish the goals.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are objects with two different keys. The type and payload that need to be returned to the switch statement.
Reducers reduce code so that it is easier to read and understand.
Stores connect state to all the components using connect.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
 Application state is where you pass props down from the parent component. It is useful for smaller components. Component state is when it is spread through a store and is like a spiderweb between all the components in a application. It is good for when you can't feed the props to other components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk allows us to dispatch using functions. Action-creators are now functions that return action.type and action.payload.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux, because once I finally got it down it was the most useful tool.
