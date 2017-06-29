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
