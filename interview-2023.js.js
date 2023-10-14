
Question: What is CSS and what is it used for?

Answer: CSS stands for Cascading Style Sheets. It's used for styling web pages and making them visually appealing.

Question: Explain the difference between margin and padding.

Answer: Margin is the space outside the border of an element, whereas padding is the space inside the border of an element.

Question: What is the CSS box model?

Answer: The CSS box model consists of content, padding, border, and margin for each HTML element.

Question: Describe the different CSS selectors.

Answer: CSS selectors are patterns used to select and style HTML elements. Common selectors include element selectors, class selectors, ID selectors, and descendant selectors.

Question: What is the difference between display: none and visibility: hidden?

Answer: display: none completely hides the element and removes it from the layout, while visibility: hidden hides the element but still occupies space in the layout.

Question: Explain the difference between position: absolute, relative, fixed, and static.

Answer:

static: Default value, elements are positioned according to the normal flow of the document.
relative: Positioned relative to its normal position.
absolute: Positioned relative to the nearest positioned ancestor (if any), otherwise relative to the initial containing block.
fixed: Positioned relative to the browser window.
Question: What are pseudo-classes in CSS?

Answer: Pseudo-classes are used to define the special state of an HTML element. For example, :hover targets an element when the user hovers over it.

Question: Describe the difference between em and rem units.

Answer: em is relative to the font size of its closest or parent element, while rem is relative to the root element (html).

Question: How can you center an element horizontally and vertically in CSS?

Answer: To center an element horizontally, use margin: 0 auto. To center vertically, use a combination of display: flex, align-items, and justify-content.

Question: How can you clear floats in CSS?

Answer: To clear floats, use clear: both or create a clearfix class with the ::after pseudo-element.

Question: What is the purpose of z-index in CSS?

Answer: z-index controls the stacking order of elements. Elements with a higher z-index appear above elements with a lower z-index.

Question: Explain the purpose of media queries in CSS.

Answer: Media queries allow styles to be applied based on the characteristics of the device, such as screen width, height, or orientation.

Question: What is the CSS box-sizing property and its values?

Answer: box-sizing determines how the total width and height of an element are calculated. Values include content-box, border-box, and padding-box.

Question: Explain the difference between flex and grid layout.

Answer: Flexbox is a one-dimensional layout method for laying out items in rows or columns, while CSS Grid Layout is a two-dimensional layout method.

Question: What is the purpose of @keyframes in CSS?

Answer: @keyframes defines the animation sequence and properties at various points in time during the animation.

Question: How do you vertically center text within an element?

Answer: Use line-height equal to the element's height or use Flexbox with align-items: center.

Question: Explain the CSS overflow property and its values.

Answer: overflow controls what happens if the content overflows the box. Values include visible, hidden, scroll, and auto.

Question: Describe the CSS specificity rules.

Answer: Specificity determines which CSS rule is applied when multiple rules target the same element. Inline styles have the highest specificity, followed by IDs, classes, and elements.

Question: How can you load CSS asynchronously?

Answer: Use the preload attribute in the link tag or dynamically load styles using JavaScript.


const findFirstNonRepeatingChar = (str) => {
  const charCount = {}; // Object to store character counts

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // Return null if no non-repeating character found
};

// Example usage
const str = 'aabbccdeeffg';
const firstNonRepeatingChar = findFirstNonRepeatingChar(str);
console.log(firstNonRepeatingChar); // Output: 'd'



const findIntersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));

// Example usage
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const intersection = findIntersection(arr1, arr2);
console.log(intersection); // Output: [3, 4]







Explain Virtual DOM in ReactJS and how it improves performance.
 What are React hooks? Can you name a few and explain their purpose?
 What is the significance of the key attribute in React and when would you use it?
 Explain the concept of lifting state up in React. Provide an example where this would be beneficial.
 How does React handle forms and form input elements? Explain controlled and uncontrolled components.
Explain the concept of higher-order components (HOCs) in React. Provide a use case and a simple example.
 What are React fragments and why are they useful?
 What is the significance of React PropTypes? How do you use them to enforce component prop types?
 Explain the purpose of React's Context API and when would you use it?
 What are the differences between controlled and uncontrolled components in React?


Explain the React component lifecycle methods and when you would use each one.

Discuss the differences between functional components and class components in React. When would you use one over the other?

What are React hooks? Describe the useState and useEffect hooks and how they can be used.

Explain server-side rendering (SSR) and its benefits in React. How would you implement SSR in a React application?

Discuss the importance of code splitting in React applications and how you can achieve it.
JavaScript Questions:
Explain the difference between var, let, and const in JavaScript. When would you use each?

What is closure in JavaScript? Provide an example.

Describe the event delegation pattern in JavaScript and why it's useful.

Explain asynchronous JavaScript and how it's handled using callbacks, promises, and async/await.

What is a higher-order function in JavaScript? Provide an example.
HTML/CSS Questions:
Explain the CSS box model.

What is the purpose of CSS preprocessors like Sass or Less, and what advantages do they offer?

Explain the difference between inline, inline-block, block, and none display properties in CSS.

What is responsive web design, and how is it achieved using CSS?

Describe the purpose and usage of CSS Flexbox and CSS Grid. Provide examples.

Front-End Development:
What is the role of Web Accessibility in front-end development? How would you ensure your web application is accessible?

Explain the importance of lazy loading in web development. How would you implement it in an application?

What are Progressive Web Apps (PWAs), and how do they enhance user experience in web development?

Coding Questions:
Question: Write a function to flatten a nested object.
Question: Create a responsive navbar using HTML and CSS.
Question: Implement a function to validate an email address in JavaScript.
Question: Implement a debounce function in JavaScript. Explain its use and provide an example where it would be beneficial.
Question: Given an array of objects, write a function to sort the array by a specific property.
Question: Create a simple React component that displays a loading spinner while data is being fetched.

import React, { useEffect, useState } from 'react';

const SequentialAPICalls = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
        const response2 = fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
        const response3 = fetch('https://jsonplaceholder.typicode.com/users/1');

        const [postData, commentsData, userData] = await Promise.all([response1, response2, response3].map(response => response.then(res => res.json())));

        setData1(postData);
        setData2(commentsData);
        setData3(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from API 1:</h2>
      <pre>{JSON.stringify(data1, null, 2)}</pre>

      <h2>Data from API 2:</h2>
      <pre>{JSON.stringify(data2, null, 2)}</pre>

      <h2>Data from API 3:</h2>
      <pre>{JSON.stringify(data3, null, 2)}</pre>
    </div>
  );
};

export default SequentialAPICalls;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SequentialAPICalls = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setData1(response1.data);

        const postId = response1.data.id;

        // Make multiple API calls in sequence using axios.all
        const [response2, response3] = await axios.all([
          axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`),
          axios.get(`https://jsonplaceholder.typicode.com/users/${postId}`)
        ]);

        setData2(response2.data);
        setData3(response3.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from API 1:</h2>
      <pre>{JSON.stringify(data1, null, 2)}</pre>

      <h2>Data from API 2:</h2>
      <pre>{JSON.stringify(data2, null, 2)}</pre>

      <h2>Data from API 3:</h2>
      <pre>{JSON.stringify(data3, null, 2)}</pre>
    </div>
  );
};

export default SequentialAPICalls;


