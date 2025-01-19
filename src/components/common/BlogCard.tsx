import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export function BlogCard({ post }: { post: BlogPost }) {
  const tagColors = ["red", "blue", "green", "yellow", "purple", "orange"];
  return (
    <div className="group flex flex-col space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2 text-md text-gray-500 font-medium">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <a
          href="#"
          className="group flex items-center justify-between space-x-2"
        >
          <h3 className="text-2xl font-bold">{post.title}</h3>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <p className="text-gray-600">{post.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {post.tags.map((tag, index) => {
            const bgColor = `bg-${tagColors[index % tagColors.length]}-100`; // Light background
            const textColor = `text-${tagColors[index % tagColors.length]}-700`; // Darker text

            return (
              <span
                key={tag}
                className={clsx(
                  `inline-flex items-center rounded-full px-4 py-2 text-xs font-medium bg-purple-200 text-purple-700`,
                  bgColor,
                  textColor
                )}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
