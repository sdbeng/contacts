## Favor Composition Over Inheritance
You might have heard before that it’s better to “favor composition over inheritance”. This is a principle that I believe is difficult to learn today. Many of the most popular programming languages make extensive use of inheritance, and it has carried over into popular UI frameworks like the Android and iOS SDKs.

In contrast, React uses composition to build user interfaces. Yes, we extend React.Component, but we never extend it more than once. Instead of extending base components to add more UI or behavior, we compose elements in different ways using nesting and props. You ultimately want your UI components to be independent, focused, and reusable.

So if you’ve never understood what it means to “favor composition over inheritance” you’ll definitely learn using React!

## Pass Data with Props
We can think of passing in props to components just as we pass arguments into functions. Just as we can access arguments passed into a regular JavaScript function, we can access a component's props with this.props (or props in stateless functional components).

## Passing Data With Props Recap
A prop is any input that you pass to a React component. Just like an HTML attribute, a prop name and value are added to the Component.

// passing a prop to a component
<LogoutButton text='Wanna log out?' />
In the code above, text is the prop and the string 'Wanna log out?' is the value.

All props are stored on the this.props object. So to access this text prop from inside the component, we'd use this.props.text:

// access the prop inside the component
...
render() {
    return <div>{this.props.text}</div>
}

## Stateless Functional Components Recap
If your component does not keep track of internal state (i.e., all it really has is just a render() method), you can declare the component as a Stateless Functional Component.

Remember that at the end of the day, React components are really just JavaScript functions that return HTML for rendering. As such, the following two examples of a simple Email component are equivalent:

class Email extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
};
const Email = (props) => (
  <div>
    {props.text}
  </div>
);
In the latter example (written as an ES6 function with an implicit return), rather than accessing props from this.props, we can pass in props directly as an argument to the function itself. In turn, this regular JavaScript function can serve as the Email component's render() method.

### Further Research
* Creating Stateless Function Components from the React Enlightenment book
* Functional Components vs. Stateless Functional Components vs. Stateless Components from Tyler

## State
Earlier in this Lesson, we learned that props refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.

A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page. State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

## State Recap
By having a component manage its own state, any time there are changes made to that state, React will know and automatically make the necessary updates to the page.

This is one of the key benefits of using React to build UI components: when it comes to re-rendering the page, we just have to think about updating state. We don't have to keep track of exactly which parts of the page change each time there are updates. We don't need to decide how we will efficiently re-render the page. React compares the previous output and new output, determines what has changed, and makes these decisions for us. This process of determining what has changed in the previous and new outputs is called Reconciliation.

## Update state with setState
Earlier in this lesson, we saw how we can define a component's state at the time of initialization. Since state reflects mutable information that ultimately affects rendered output, a component may also update its state throughout its lifecycle using this.setState(). As we've learned, when local state changes, React will trigger a re-render of the component.

There are two ways to use setState(). The first is to merge state updates. Consider a snippet of the following component:

class Email extends React.Component {
  state = {
    subject: '',
    message: ''
  }
  // ...
});
Though the initial state of this component contains two properties (subject and message), they can be updated independently. For example:

this.setState({
  subject: 'Hello! This is a new subject'
})
This way, we can leave this.state.message as-is, but replace this.state.subject with a new value.

The second way we can use setState() is by passing in a function rather than an object. For example:

this.setState((prevState) => ({
  count: prevState.count + 1
}))
Here, the function passed in takes a single prevState argument. When a component's new state depends on the previous state (i.e., we are incrementing count in the previous state by 1), we want to use the functional setState().

## setState() Recap
While a component can set its state when it initializes, we expect that state to change over time, usually due to user input. The component is able to change its own internal state using this.setState(). Each time state is changed, React knows and will call render() to re-render the component. This allows for fast, efficient updates to your app's UI.

## Type checking a Component's Props with PropTypes
As we implement additional features into our app, we may soon find ourselves debugging our components more frequently. For example, what if the props that we pass to our components end up being an unintended data type (e.g. an object instead of an array)? PropTypes is a package that lets us define the data type we want to see right from the get-go and warn us during development if the prop that's passed to the component doesn't match what is expected.

### Note: Now propTypes is a separate package !!

To use PropTypes in our app, we need to install prop-types:

npm install --save prop-types
