# Managing SPAs with React Router

## Single-Page Apps
Single-page applications can work in different ways. One way a single-page app loads is by downloading the entire site's contents all at once. This way, when you're navigating around on the site, everything is already available to the browser, and it doesn't need to refresh the page. Another way single-page apps work is by downloading everything that's needed to render the page the user requested. Then when the user navigates to a new page, asynchronous JavaScript requests are made for just the content that was requested.

Another key factor in a good single-page app is that the URL controls the page content. Single-page applications are highly interactive, and users want to be able to get back to a certain state using just the URL. Why is this important? Bookmarkability! (pretty sure that's not a word...yet) When you bookmark a site, that bookmark is only a URL, it doesn't record the state of that page.

Have you noticed that any of the actions you perform in the app do not update the page's URL? We need to create React applications that offer bookmarkable pages!

## React Router
React Router turns React projects into single-page applications. It does this by providing a number of specialized components that manage the creation of links, manage the app's URL, provide transitions when navigating between different URL locations, and so much more.

According to the React Router website:

React Router is a collection of navigational components that compose declaratively with your application.
If you're interested, feel free to check out the website at https://reacttraining.com/.

In the next section, we'll dynamically render content to the page based on a value in the project's this.state object. We'll use this basic example as an idea of how React Router works by controlling what's being seen via state. Then we'll switch over to using React Router. We'll walk you through installing React Router, adding it to the project, and hooking everything together so it can manage your links and URLs.

## Dinamically rendering pages
As the app currently functions, there's no way to add new contacts! That's a shame because I really need to add Richard to my list of contacts. So let's create a form that'll let us create new contacts and save them to the server.

We don't want the form to display all of the time, so we'll start out by having the form show up only if a setting is enabled. We'll store this setting in this.state. Doing it this way will give us an idea of how React Router functions.

We created the CreateContact component that'll be in charge of the form to create new contacts. In staying with the general React theme of favoring composition, we created this as a standalone component and used composition by adding it to the render() method in the App component.

In an attempt to do an extremely simple recreation of how React Router works, we added a screen property to this.state, and used this property to control what content should display on the screen. If this.state.screen is list then we'll show the list of all existing contacts. If this.state.screen is create then we'll show the CreateContact component.
Short-circuit Evaluation Syntax
In this video and when we created the "Now showing" from earlier section, we used a somewhat odd looking syntax:

{this.state.screen === 'list' && (
  <ListContacts
    contacts={this.state.contacts}
    onDeleteContact={this.removeContact}
  />
)}
and

{this.state.screen === 'create' && (
  <CreateContact />
)}
This can be a little confusing with both the JSX code for a component and the code to run an expression. But this is really just the logical expression &&:

expression && expression
What we're using here is a JavaScript technique called short-circuit evaluation. If the first expression evaluates to true, then the second expression is run. However, if the first expression evaluates to false, then the second expression is skipped. We're using this as a guard to first verify the value of this.state.screen before displaying the correct component.

For a deeper dive into this, check out the short-circuit evaluation info on MDN.

## As we've just seen, when the user presses the 'back' button in the browser, they will probably have to refresh the page to see the proper content at that location. This isn't the best experience for our user! When we update location, we can update the app as well using JavaScript. This is where React Router comes in.

Install React Router
To use React Router in our app, we need to install react-router-dom.

npm install --save react-router-dom

## BrowserRouter
The first component we'll look at is BrowserRouter.

What's nice about React Router is that everything is just a component. This makes using it nice, but it also makes diving into the code more convenient as well. Let's take a look at what exactly BrowserRouter is doing under the hood.

Here is the code straight from the React Router repository.

class BrowserRouter extends React.Component {
  static propTypes = {
    basename: PropTypes.string,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
    keyLength: PropTypes.number,
    children: PropTypes.node
  }

  history = createHistory(this.props)

  render() {
    return <Router history={this.history} children={this.props.children}  />
  }
}
When you use BrowserRouter, what you're really doing is rendering a Router component and passing it a history prop. Wait, what is history? history comes from the history library (also built by React Training). The whole purpose of this library is it abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

So in a nutshell, when you use BrowserRouter, you're creating a history object which will listen to changes in the URL and make sure your app is made aware of those changes.
BrowserRouter Component Recap
In summary, for React Router to work properly, you need to wrap your whole app in a BrowserRouter component. Also, BrowserRouter wraps the history library which makes it possible for your app to be made aware of changes in the URL.

Further Research
history

## The Link Component
As you've seen, Link is a straightforward way to provide declarative, accessible navigation around your application. By passing a to property to the Link component, you tell your app which path to route to.

<Link to="/about">About</Link>
If you're experienced with routing on the web, you'll know that sometimes our links need to be a little more complex than just a string. For example, you can pass along query parameters or link to specific parts of a page. What if you wanted to pass state to the new route? To account for these scenarios, instead of passing a string to Links to prop, you can pass it an object like this,

<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}>
  Courses
</Link>
You won't need to use this feature all of the time, but it's good to know it exists. You can read more information about Link in the official docs.

## Link Recap
React Router provides a Link component which allows you to add declarative, accessible navigation around your application. You'll use it in place of anchor tags (a) as you're typically used to. React Router's <Link> component is a great way to make navigation through your app accessible for users. Passing a to prop to your link, for example, helps guide your users to an absolute path (e.g., /about):

<Link to="/about">About</Link>
Since the <Link> component fully renders a proper anchor tag (<a>) with the appropriate href, you can expect it to behave how a normal link on the web behaves.

Further Research
<Link> at React Training
Source Code
Additional props for the <Link> component

## Route Component Recap
The main takeaway from this section is that with a Route component if you want to be able to pass props to a specific component that the router is going to render, you'll need to use Route's render prop. As you saw, render puts you in charge of rendering the component which in turn allows you to pass any props to the rendered component as you'd like.

In summary, the Route component is a critical piece of building an application with React Router because it's the component which is going to decide which components are rendered based on the current URL path.
