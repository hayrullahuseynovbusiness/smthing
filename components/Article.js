import Link from "next/link";
function Article({ link, title, views, summary }) {
  return (
    <Link href={link}>
      <a>
        <div className="mb-6">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-xl font-medium dark:text-white">{title}</h2>
            <p className="text-gray-600 w-32 text-right">{views} views</p>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            {summary}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default Article;
