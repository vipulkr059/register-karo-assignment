import { blogPosts } from "@/data";
import { BlogCard } from "../common/BlogCard";
import { ArrowRight } from "lucide-react";

export default function BlogListing() {
  return (
    <div className="container max-w-7xl mx-auto px-16 py-12">
      <div className="mb-12 text-center">
        <div className="text-sm  uppercase tracking-wider text-[#EB8D15]">
          EXPLORE OUR BLOGS
        </div>
        <h1 className="text-gray-800 mt-2 text-3xl font-bold md:text-4xl">
          Accelerate Digital Transformation
        </h1>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1C4670] px-6 py-4 text-sm font-medium text-white hover:bg-[#0E2A45]">
          Show more blogs <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
