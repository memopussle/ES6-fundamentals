//const letters = ["a", "b", "c", "d"];
//const letterElements = letters.map((letter) => <li>{letter}</li>); //render a list ofli inside map
// ReactDOM.render(
//   <ul>{letterElements}</ul>,
//   document.getElementById("root")
// );

// feed and posts
// const posts = [

//   {
//     id: '1',
//     body: 'Love For All, Hatred For None.',
//     user: 'Khalifatul Masih III'

//   },{

//     id: '2',
//     body: 'Change the world by being yourself.',
//     user: 'Amy Poehler'

//   },{

//     id: '3',
//     body: 'Every moment is a fresh beginning.',
//     user: 'T.S Eliot'

//   },{

//     id: '4',
//     body: 'Never regret anything that made you smile.',
//     user: 'Mark Twain'

//     },
// ]

// //feed component to render each post by looping/mapping through it
// const Feed = (props) => {
//   const posts = props.posts.map(post =>
//     <p key={post.id}>
//       {post.body} - {post.user}
//     </p>
//   );
//   return <div>{posts}</div>;
// };

// ReactDOM.render(
//   <Feed posts={posts} />,
//   document.getElementById("root1")
// );



//Rendering post comments

const posts = [
  {
    id: "1",
    body: "Love For All, Hatred For None.",
    user: "Khalifatul Masih III",
    comments: [
      {
        id: "1",
        body: "Word.",
        user: "John Doe",
      },
    ],
  },
  {
    id: "2",
    body: "Change the world by being yourself.",
    user: "Amy Poehler",
    comments: [
      {
        id: "2",
        body: "I am always myself, how come the world no change?",
        user: "John Doe",
      },
      {
        id: "3",
        body: "Then change yourself.",
        user: "Amy Poehler",
      },
    ],
  },
  {
    id: "3",
    body: "Every moment is a fresh beginning.",
    user: "T.S Eliot",
    comments: [],
  },
  {
    id: "4",
    body: "Never regret anything that made you smile.",
    user: "Mark Twain",
    comments: [
      {
        id: "4",
        body: "Like tipping that glass of milk over?",
        user: "John Doe",
      },
      {
        id: "5",
        body: "Please stop trolling sir.",
        user: "Amy Poehler",
      },
    ],
  },
];

console.log(posts)


 //   Feed - render a list of posts
 //  Post - render a post and its comments
 //   Comment - render a comment
const Comment = (props) => {
  const { comment } = props;

  return (
    <p className="ml-3">
      {comment.body} - {comment.user}
    </p>
  );
};

const Post = (props) => {
  const { post } = props;

  const { comments } = post;

  return (
    <div>
      <p>
        {post.body} - {post.user}
      </p>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

const Feed = (props) => {
  return (
    <div>
      <p>Feed</p>

      {props.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
