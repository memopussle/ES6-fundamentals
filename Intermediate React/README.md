# Intermediate React

- In traditional JS, when we want to render a list of items into the DOM, we have to write the HTML as strings, then find a target DOMnode to inject the items

- But with React,It's a lot simpler. React handles the conversion of an array of JSX

```
const letters = ['a', 'b','c', 'd']
const letterElements = letters.map(letter => <li>{letter}</li>); 
//render a list of li inside <ul>

ReactDOM.render(
    <ul>{letterElements}</ul>
      document.getElementById('root')
)
```

## Render each post with mapping method

```
r name.

js

const posts = [

  {
    id: '1',
    body: 'Love For All, Hatred For None.',
    user: 'Khalifatul Masih III'

  },{

    id: '2',
    body: 'Change the world by being yourself.',
    user: 'Amy Poehler'

  },{

    id: '3',
    body: 'Every moment is a fresh beginning.',
    user: 'T.S Eliot'

  },{

    id: '4',
    body: 'Never regret anything that made you smile.',
    user: 'Mark Twain'

  },

]

const Feed = (props) => {
    const posts = props.posts.map(post => <p>{post.body} - {post.user}</p>);
  return (
    <div>{posts}</div>
  )
}

ReactDOM.render(
  <Feed posts={posts} />,
  document.getElementById('root1')
)
```

## Keys

- If you check the console after the code above, you will see the following message.

    + ***Warning: Each child in a list should have a unique "key" prop. Check the render method of Feed. See https://fb.me/react-warning-keys for more information.***

- For list data, React identifies each item by a key attribute.And uses these key values to determine what has been added,removed or changed. 

- Without keys, updates can be very inefficient. It is recommended to use a piece of unique value for the item data as key, such as a unique ID.

```
const Feed = (props) => {
  const posts = props.posts.map(post => <p key={post.id}>{post.body} - {post.user}</p>);
  return (
    <div>{posts}</div>
  )
}
```

### Key placement

- Key should not be in the custom component, it should be place when we **extract each post into a Post component**


```
const Post = (props) => {
  const post = props.post;
//key should not be used here
  return <p>{post.body} - {post.user}</p>;

}

const Feed = (props) => {
  // key should be used here
  const posts = props.posts.map(post => <Post key={post.id} post={post}/>);
  return (
    <div>{posts}</div>
  )
}
```

## Rendering lists inline

- We can render lists diirectly inline without storing it in a variable

```
const Feed = (props) => {
  // key should be used here
  const posts = props.posts.map(post => <Post key={post.id} post={post}/>);
  return (
    <div>
      <p>First feed</p>
      {props.posts.map(post => <Post key={post.id} post={post}/>)}
      <hr/>
      <p>Second feed, same as first</p>
      {posts}
    </div>
  )
}
```

## ES6 destructuring

- Allows assignment of variables froman Object's properties with shorter syntax

```
// ES5

var obj = {
  foo: 'hello',
  bar: 'world',
  baz: 1,
};

var foo = obj.foo;
var bar = obj.bar;
var baz = obj.baz;

console.log(foo); // -> 'hello'
console.log(bar); // -> 'world'
console.log(baz); // -> 1

// ES6 destructuring assignment

const obj = {
  foo: 'hello',
  bar: 'world',
  baz: 1,
};

const { foo, bar, baz } = obj;
console.log(foo); // -> 'hello'
console.log(bar); // -> 'world'
console.log(baz); // -> 1
```

## Form elements

### Controlled elements
