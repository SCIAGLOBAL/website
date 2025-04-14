import { motion } from 'framer-motion';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Modern Risk Management",
      excerpt: "Explore the latest trends and best practices in enterprise risk management...",
      date: "2024-01-15",
      author: "Sarah Johnson",
      category: "Risk Management",
      readTime: "5 min read"
    },
    {
      title: "Compliance in the Digital Age",
      excerpt: "Navigate the complexities of regulatory compliance in today's digital landscape...",
      date: "2024-01-10",
      author: "Michael Chen",
      category: "Compliance",
      readTime: "4 min read"
    },
    {
      title: "The Future of Corporate Governance",
      excerpt: "Discover how AI and automation are reshaping corporate governance frameworks...",
      date: "2024-01-05",
      author: "Emily Williams",
      category: "Governance",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl text-black mb-4">Latest Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest thoughts on governance, risk, and compliance
          </p>
        </motion.div>

        <div className="grid gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Tag size={16} className="mr-1" />
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                    Read More
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;