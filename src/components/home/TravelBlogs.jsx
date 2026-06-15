import { memo } from "react";
import { BLOG_POSTS } from "../../data/mockData.js";
import SafeImage from "../common/SafeImage.jsx";

function TravelBlogs() {
  return (
    <section id="blogs" className="py-12 md:py-16 bg-white" aria-labelledby="blogs-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 id="blogs-heading" className="section-title">Travel Blogs</h2>
          <p className="section-subtitle">Tips, guides and inspiration for your next adventure</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="card-premium overflow-hidden !p-0 group">
              <div className="card-image card-image-hover">
                <SafeImage src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="p-5 space-y-2">
                <time className="text-xs text-slate-400">{post.date}</time>
                <h3 className="font-display font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-slate-400">By {post.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(TravelBlogs);
