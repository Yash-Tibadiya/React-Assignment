import useFetchComments from "../hooks/useFetchComments";

const CommentsPage = () => {
  const { comments, error, isLoading } = useFetchComments();

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-700 w-1/2 rounded-xl flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Comments</h1>

      {comments.length > 0 ? (
        <ul>
          <div className="flex flex-row gap-12">
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>
                  <strong className="text-lg">{comment.user.fullName}</strong>{" "}
                  <span className="text-slate-400">
                    (@
                    {comment.user.username})
                  </span>
                </p>
                <p>{comment.body}</p>
                <p>Likes: {comment.likes}</p>
              </li>
            ))}
          </div>
        </ul>
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  );
};

export default CommentsPage;
