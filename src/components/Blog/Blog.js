import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

const Blog = () => {
    return (

        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h1 className='black'>What is the purpose of react router?</h1> </Accordion.Header>
                    <Accordion.Body>
                        Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.

                        React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h1>How does context api work ?</h1> </Accordion.Header>
                    <Accordion.Body>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h1>What is useRef in react?</h1></Accordion.Header>
                    <Accordion.Body>
                        The useRef Hook allows you to persist values between renders.

                        It can be used to store a mutable value that does not cause a re-render when updated.

                        It can be used to access a DOM element directly.
                        <h4> Does Not Cause Re-renders</h4>
                        If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

                        To avoid this, we can use the useRef Hook.
                        <h4>Accessing DOM Elements</h4>
                        In general, we want to let React handle all DOM manipulation.

                        But there are some instances where useRef can be used without causing issues.

                        In React, we can add a ref attribute to an element to access it directly in the DOM.
                        <h4>Tracking State Changes</h4>
                        The useRef Hook can also be used to keep track of previous state values.

                        This is because we are able to persist useRef values between renders.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;