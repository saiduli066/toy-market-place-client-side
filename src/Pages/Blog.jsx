/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  const QUESTIONS = [
    {
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "An access token is a credential used to access protected resources on behalf of a user. It is usually short-lived and contains information about the user's permissions. A refresh token is a credential used to obtain a new access token without prompting the user for authentication again. It is typically long-lived and is used to refresh expired access tokens. Access tokens should be stored securely on the client-side, usually in browser memory or a secure cookie, while refresh tokens should be stored securely on the server-side.",
    },
    {
      question: "Compare SQL and NoSQL databases?",
      answer:
        "SQL (Structured Query Language) databases are relational databases that use tables with predefined schemas to store data. They provide ACID (Atomicity, Consistency, Isolation, Durability) guarantees and are suitable for complex queries and transactions. NoSQL (Not Only SQL) databases are non-relational databases that store data in flexible formats like key-value pairs, documents, graphs, or columns. They are horizontally scalable, provide high performance, and are suitable for handling large amounts of unstructured or semi-structured data.",
    },
    {
      question: "What is Express.js? What is Nest.js?",
      answer:
        "Express.js is a minimalist web application framework for Node.js. It provides a simple and flexible way to build web applications and APIs using JavaScript. Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is heavily inspired by Angular's architecture and uses TypeScript as its primary language. Nest.js provides a modular and opinionated structure for developing enterprise-grade applications.",
    },
    {
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "MongoDB's aggregate function is used for performing advanced data processing and analysis operations on the data stored in a MongoDB database. It allows you to perform tasks such as filtering, grouping, sorting, joining, and transforming data in a flexible and efficient way. Aggregation pipelines consist of multiple stages, where each stage performs a specific operation on the data. The output of one stage becomes the input of the next stage, allowing you to create complex data pipelines to process and analyze your data.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-5 min-h-screen">
      <div className="w-full max-w-5xl px-4">
        <h1 className="text-xl md:text-4xl font-bold text-center mb-8">
          <div className="inline-block mr-2" />
          Blog Questions
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {QUESTIONS.map((q, i) => (
            <div
              key={i}
              className="border border-gray-300 shadow-md rounded-lg p-6 bg-white"
            >
              <h2 className="text-lg font-bold mb-2">{q.question}</h2>
              <p className="text-gray-700">{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
