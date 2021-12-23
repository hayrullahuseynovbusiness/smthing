import { client } from "../utils/supabase";
import { SearchIcon } from "@heroicons/react/solid";
import Article from "../components/Article";
function HomePage({ data }) {
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="prose dark:prose-invert mt-8 mb-3">
        <h1>Blog</h1>
        <p>
          Hi there, I'm hayrulla huseynov - web developer based in TM, enjoy
          helping people learn programming, if you're with me, read some of my
          articles and add a comment.
        </p>
      </div>
      <div className="w-full px-3 py-2.5 border rounded-lg bg-white dark:bg-neutral-800 dark:border-neutral-900 focus:ring focus:ring-gray-50 flex items-center border-gray-200">
        <input
          type="text"
          className="flex-1 h-full bg-transparent text-gray-900 dark:text-gray-50"
          placeholder="Search articles"
        />
        <SearchIcon className="w-5 h-5 text-gray-400" />
      </div>
      <div>
        <h1 className="text-4xl dark:text-white font-extrabold my-6">All Posts</h1>
        {data?.map((post) => (
          <Article
            link={`/blog/${post.slug}`}
            title={post.title}
            views={post.views}
            summary={post.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

export async function getServerSideProps({ query }) {
  const { data, error } = await client.from("posts").select();
  return {
    props: {
      data,
    },
  };
}
