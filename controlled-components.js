## Controlled Component
Note that the value attribute is set on the <input> element. Our displayed value will always be the value in the component's state, making our state the - single source of truth.

Because it is React that ultimately controls the value of our input form element, we consider this component a Controlled Component.

##  Regular Expressions 💡
In the previous video, we created a Regular Expression object and used that to test the format of the contacts' names. Regular expressions are too complex to get into in this program, but they're incredibly valuable in programming to verify patterns.

Check out what MDN has to say about Regular Expressions. Also, check out how the String .match() method uses Regular expressions to verify patterns of text.

## Destructuring objects
At this point, our component is a bit unwieldy; the render() method accesses query from the state object (this.state.query) and contacts from the props object (this.props.contacts) quite often. Because props and state are just JavaScript objects, we can use an ES6 feature to unpack them into distinct variables rather than referencing them as this.state.query and this.props.contacts every time. This process of unpacking is called object destructuring.

All in all, destructuring our objects shouldn't change the return value of our code, but it can make things look a bit cleaner.

## Controlled Components Recap
Controlled components refer to components that render a form, but the "source of truth" for that form state lives inside of the component state rather than inside of the DOM. The benefits of Controlled Components are:

* instant input validation
* conditionally disable/enable buttons
* enforce input formats

In our ListContacts component, not only does the component render a form, but it also controls what happens in that form based on user input. In this case, event handlers update the component's state with the user's search query. And as we've learned: any changes to React state will cause a re-render on the page, effectively displaying our live search results.

## Putting it All Into Perspective
When it comes to keeping track of data in your app, think about what will be done with that data, and what that data will look like as your user interfaces with your app. If you want your component to store mutable local data, consider using state to hold this information. Many times, it is state that will be used to manage controlled form elements in your components.

On the other hand, if some information isn't expected to change over time, and is generally designed to be "read-only" throughout your app, consider using props instead. Both state and props will generally be in the form of an object, and changes in either will trigger a re-render of the component, but they each play very different roles in your app.

We covered a lot in this lesson, and you've made great progress. Here are some resources that may help solidify some of these concepts:

Thinking in React
Functional Components vs. Stateless Functional Components vs. Stateless Components
Controlled Components

## Lesson summary
To recap, lifecycle events are special methods that React provides that allow us to hook into different points in a component's life to run some code. Now there are a number of different lifecycle events and they will run at different points, but we can break them down into three distinct categories:

Adding to the DOM
These lifecycle events are called when a component is being added to the DOM:

constructor()
componentWillMount()
render()
componentDidMount()
Re-rendering
These lifecycle events are called when a component is re-rendered to the DOM

componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()
Removing from the DOM
This lifecycle event is called when a component is being removed from the DOM

componentWillUnmount()
It's easier to tell where all of these fit together with the following graphic:
_The React Lifecycle Events listed out where they fall in a component's life._
The React Lifecycle Events listed out where they fall in a component's life.
Starting from the top left of the image, everything starts when ReactDOM renders the component.

As you can see, between the list and this graphic there are a number of different lifecycle events. However, the most commonly used ones are componentDidMount(), componentWillMount(), componentWillUnmount(), and componentWillReceiveProps().

Further Research
componentWillMount() from the React Docs
componentDidMount() from the React Docs
componentWillUnmount() from the React Docs
componentWillReceiveProps() from the React Docs
Component Lifecycles from the React Docs
