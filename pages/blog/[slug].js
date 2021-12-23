import { client } from "../../utils/supabase";
import moment from "moment";
function SingleBlogArticle({ data }) {
  console.log(data);
  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="prose dark:prose-invert mt-6 prose-h1:m-0 p-0">
        <h1>{data?.title}</h1>
        <div className="flex items-center justify-between py-2 text-sm">
          <span>
            Hayrulla Huseynov /{" "}
            {moment(data?.created_at).format("DD MMM, YYYY")}
          </span>
          <span>12 min read • {data?.views} views</span>
        </div>
        <p>{data.content} </p>
      </div>
      <div className="flex flex-col p-6 bg-blue-50 dark:bg-gray-900 dark:text-white border dark:border-gray-900 border-blue-200 my-6">
        <h2 className="text-2xl font-bold">Add a comment</h2>
        <p>Share a message for a future visitor of my site.</p>
        {false ? (
          <button className="bg-gray-200 dark:bg-neutral-900 dark:text-white px-6 font-medium w-max py-1 rounded my-2">
            Login
          </button>
        ) : (
          <div className="flex items-center bg-white p-1 rounded  dark:bg-neutral-800 dark:border-neutral-900 my-2">
            <input
              type="text"
              className="flex-1 ml-2 bg-transparent"
              placeholder="Your comment"
            />
            <button className="bg-gray-50 dark:bg-gray-900 px-6 py-1 font-medium rounded">
              Sign
            </button>
          </div>
        )}

        <span className="text-sm">
          Your information is only used to display your name and reply by email.
        </span>
      </div>
    </div>
  );
}

export default SingleBlogArticle;

export async function getServerSideProps({ query }) {
  await client.rpc("increment", { slug_text: query.slug });
  const { data, error } = await client
    .from("posts")
    .select(
      `
    title,
    content,
    created_at,
    views,
    comments(
        id,
        created_at,
        comment,
        user_name
    )
    `
    )
    .eq("slug", query.slug).single();
  return {
    props: {
      data,
    },
  };
}
