import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  fullName: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

interface CommentsResponse {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
}

export default function useFetchComments() {
  // State for fetching comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // fetches comments
  useEffect(() => {
    const handleFetchComments = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://dummyjson.com/posts/1/comments");
        const data: CommentsResponse = await response.json();
        setComments(data.comments); // Set the comments array from the response
      } catch {
        setError("Error in fetching comments");
      } finally {
        setIsLoading(false);
      }
    };

    handleFetchComments();
  }, []);

  return { comments, error, isLoading };
}
