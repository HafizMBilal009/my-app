# Introduction to React

## React is a very popular **JavaScript** library for building user interfaces

### Prerequisites

Basic knowledge of :

- HTML
- Javascript

## Why React?

React is introduced by Facebook in 2013. Due to its readable syntax & code reusability, It has become one of the most popular & most used libararies for front-end development.
React has a very strong community on internet world so mostly issues during development are solved quickly.
React is easy to learn as its JSX (Javascript XML) syntax is very close to HTML and enhance confidence of a novice developer.

## Basic Concepts of React

We will discuss some basic fundamental concepts of React :

### 1. Components

Components are building blocks of a React app. A component has one or more than one elemnts of HTML to re-use it wherever needed. With the use of components, we get rid of writing redundant code. There are two types of components i.e Class Components and Functional Components

### 2. JSX

JSX is a way to write React code. As from it's name we can understand it's a mixture of Javascript and XML as a result of a syntax which is easy to understand.

For example :

```javascript
const element = <h1>Welcome to React World!</h1>`
```

### 3. Props

Props are arguments we can pass into React components. Basically props are used for connecting different components by passing some as an attribute to a React component.
One component pass a value to the other one and other component use this value in it.

### 4. State

State is the heart of a React app. Basically, state is used to store data which is required in our React component. Using state, changes in data can be seen in real-time without refreshing webpage.

## Enough Talk, Let's Code

We will build a simple React app which shows a list of quotes with their authors. We can add a quote and see live update in quotes table.

Let's start by creating a simple React app by running this command :

```bash
yarn create react-app my-app
```

This creates a React app named my-app with a built-in folder structure. In project folder, run :

```bash
yarn start
```

This starts your app at http://localhost:3000/
A simple React app has been created but we will customize it!

Open this folder in your favourite code editor.

Remove everything from return statement of `App.js` and refactor code as :

```javascript
import React, { useState } from 'react';
import AddQuoteForm from './components/AddQuoteForm';
import { data } from './components/Data';
import QoutesTable from './components/QoutesTable';
import './App.css';
function App() {
  const [quotesList, setQuotesList] = useState(data);
  const addQuote = (quote, author) => {
    const quoteObject = { quote: quote, author: author };
    setQuotesList([...quotesList, quoteObject]);
  };
  return (
    <div>
      <QoutesTable quotesList={quotesList} />
      <AddQuoteForm addQuote={addQuote} />
    </div>
  );
}

export default App;
```

`App.js` returns a div containting two React components. Let's create these components.

Inside `src` directory, create a folder `components`. Inside it, create a file named `QuotesTable.js` and add following code:

```javascript
import React from 'react';
function QoutesTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Quote</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {props.quotesList.map((quote) => (
          <tr>
            <td>{quote.quote}</td>
            <td>{quote.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default QoutesTable;
```

This component will render quotes table. `map` function itrerates each element of `quotesList` array and returns a `tr` containing quote and its author.

Residing in components directory, create a file named `Data.js` and add some dummy data in it :

```javascript
export const data = [
  {
    quote:
      'Start writing, no matter what. The water does not flow until the faucet is turned on.',
    author: 'Louis L’Amour',
  },
  {
    quote:
      "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    author: 'William Faulkner',
  },
  {
    quote: 'The first draft is just you telling yourself the story.',
    author: 'Terry Pratchett',
  },
];
```

Now create a component named `AddQuote.js` and write following code :

```javascript
import React, { useState } from 'react';
function AddQuoteForm(props) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleClick = () => {
    props.addQuote(quote, author);

    setQuote('');
    setAuthor('');
  };
  return (
    <div className='add-quote-form'>
      <div>
        <label>Quote</label>
        <input
          type='text'
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>ADD</button>
    </div>
  );
}
export default AddQuoteForm;
```

This componnet will create a form to take quote and author as inputs and on button click, quote will be appended to quotes table. This update will be real-time.

This is the beauty of React!

Remove everything from `App.css` and add following code for better representation.

```css
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 1rem;
}
table {
  border-spacing: 5px;
  width: 50%;
  margin-left: 25%;
  margin-top: 1rem;
}
.add-quote-form {
  width: 50%;
  margin-left: 25%;
  margin-top: 1.5rem;
}
.add-quote-form input {
  width: 100%;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  height: 1.5rem;
}
```

You can get this code on [Github](https://github.com/HafizMBilal009/my-app.git)
