import moment from "moment";
function Comment({ user_name, comment, created_at }) {
  return (
    <div className="">
      <p className="dark:text-white">{comment}</p>
      <p className="text-sm text-gray-400">
        {user_name} / {moment(created_at).format("DD MMM YYYY at HH:mm")}
      </p>
    </div>
  );
}

export default Comment;
