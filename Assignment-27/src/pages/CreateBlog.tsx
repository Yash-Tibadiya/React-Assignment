import { useState } from "react";

export interface IBlogEntry {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const CreateBlog = () => {
  // State to manage form inputs
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 1. Read existing entries from localStorage
    const storedEntriesRaw = localStorage.getItem("blogEntries");
    let existingEntries: IBlogEntry[] = [];

    // If there are stored entries, attempt to parse them
    if (storedEntriesRaw) {
      try {
        // Parse the stored entries into a JavaScript object
        const parsedEntries = JSON.parse(storedEntriesRaw);
        existingEntries = parsedEntries;
      } catch (error) {
        // If parsing fails, log the error and clear invalid data
        console.error("Error parsing blog entries from localStorage:", error);
        localStorage.removeItem("blogEntries");
      }
    }

    // 2. Create the new entry with a unique ID
    const newEntry: IBlogEntry = {
      id: Date.now().toString(),
      title,
      content,
      imageUrl,
    };

    // 3. Add the new entry to the existing list
    const updatedEntries = [...existingEntries, newEntry];

    // 4. Save the updated list back to localStorage
    localStorage.setItem("blogEntries", JSON.stringify(updatedEntries));

    setTitle("");
    setContent("");
    setImageUrl("");
  };

  return (
    <div className="bg-gray-900 text-white flex justify-center py-12 px-4">
      <div className="max-w-md w-full h-full space-y-8 bg-gray-800 p-10 mt-20 rounded-xl shadow-lg mb-[69px]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create a new blog
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Create a new Blog to share with the world
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Title Field */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-700 text-white"
                placeholder="Title"
              />
            </div>
          </div>

          {/* Content Field */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-300"
            >
              Content
            </label>
            <div className="mt-1">
              <textarea
                id="content"
                name="content"
                rows={4}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-700 text-white"
                placeholder="Content"
              />
            </div>
          </div>

          {/* Image URL Field */}
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-300"
            >
              Image URL
            </label>
            <div className="mt-1">
              <input
                id="imageUrl"
                name="imageUrl"
                type="url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm bg-gray-700 text-white"
                placeholder="Image URL"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
