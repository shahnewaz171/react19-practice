import { Suspense, use } from "react";
import "./App.css";
// import Signup from "./Signup";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  return res.json();
};

const Posts = ({ getData }: { getData: () => Promise<[]> }) => {
  const posts = use(getData());

  return posts.map((post) => <p className="mt-1">{post.title}</p>);
};

function App() {
  return (
    <div className="flex flex-col items-center my-10">
      <p className="text-xl">Posts</p>

      <Suspense
        fallback={<p className="text-center mt-4 text-2xl">loading...</p>}
      >
        <Posts getData={fetchData} />
      </Suspense>

      {/* <Signup /> */}
    </div>
  );
}

export default App;
