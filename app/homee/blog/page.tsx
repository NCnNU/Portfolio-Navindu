"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";

interface BlogProps {
  id?: string;
}

const Blog: React.FC<BlogProps> = ({ id }) => {
  const blogArticles = [
    {
      id: 1,
      title: "Building AI Knowledge Bases with Vector Databases and Amazon Bedrock",
      description:
        "Learn how to build powerful AI knowledge bases using vector databases and Amazon Bedrock for enhanced search and retrieval capabilities.",
      url: "https://medium.com/enlear-academy/building-ai-knowledgebases-with-vector-databases-and-amazon-bedrock-835ac264e5ac",
      date: "2025",
      category: "AI & Machine Learning",
    },
    {
      id: 2,
      title: "How to Build a Multi-Agent System with AWS Bedrock: A Practical Guide",
      description:
        "A comprehensive guide to building multi-agent systems using AWS Bedrock, covering architecture, implementation, and best practices.",
      url: "https://medium.com/enlear-academy/how-to-build-a-multi-agent-system-with-aws-bedrock-a-practical-guide-64c148dfc46b",
      date: "2025",
      category: "AWS & Cloud",
    },
    {
      id: 3,
      title: "What is AWS Lambda?",
      description:
        "An introduction to AWS Lambda, serverless computing, and how to leverage it for building scalable applications.",
      url: "https://medium.com/enlear-academy/what-is-a-aws-lambda-32029f9c8bf2",
      date: "2025",
      category: "AWS & Serverless",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id={id}
      className="w-full bg-white dark:bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-lg md:text-4xl mb-4 text-neutral-900 dark:text-neutral-900 max-w-4xl">
            Blog
          </h2>
          <p className="text-neutral-600 dark:text-neutral-600 text-sm md:text-base max-w-sm">
            Explore my latest articles on AI, cloud computing, and software
            development. Sharing knowledge and insights from my journey in tech.
          </p>
        </div>

        {/* Blog Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {blogArticles.map((article) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative bg-neutral-50 dark:bg-neutral-100 rounded-xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-400 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-neutral-700 dark:text-neutral-800 bg-neutral-200 dark:bg-neutral-300 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-700 text-sm md:text-base mb-6 line-clamp-3">
                {article.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-300">
                <span className="text-xs text-neutral-500 dark:text-neutral-600">
                  {article.date}
                </span>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-800 group-hover:text-neutral-900 transition-colors">
                  <span className="text-sm font-medium">Read on Medium</span>
                  <IconExternalLink className="h-4 w-4" />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neutral-100/0 to-neutral-200/0 group-hover:from-neutral-100/50 group-hover:to-neutral-200/50 transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://medium.com/@spynavindu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
          >
            <span>View All Articles on Medium</span>
            <IconExternalLink className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;

