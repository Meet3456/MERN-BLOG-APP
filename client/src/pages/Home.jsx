import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='container mx-auto py-16 px-4 lg:px-0'>
        <div className='max-w-3xl mx-auto text-center'>
          <h1 className='text-4xl lg:text-6xl font-bold text-teal-600 leading-tight mb-4'>
            Welcome to my Blog
          </h1>
          <p className='text-gray-700 dark:text-gray-300 text-lg lg:text-xl'>
            Explore a variety of articles and tutorials on web development,
            software engineering, and programming languages.
          </p>
          <Link
            to='/search'
            className='mt-6 inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300'
          >
            View all posts
          </Link>
        </div>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 justify-center'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap justify-center gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
