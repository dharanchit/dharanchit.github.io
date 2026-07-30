export const experience = [
  {
    company: "JPMorgan Chase",
    role: "Applied AI Engineer II (Software Engineer, AI/ML)",
    start: "Sept 2024",
    end: "Present",
    bullets: [
      "Architected a multi-agent AI orchestration framework enabling domain-specific workflow routing across complex enterprise queries, adopted across multiple internal teams.",
      "Designed a hybrid intent detection system combining LLMs with classical ML (SVM, neural networks, fuzzy matching), significantly reducing query misclassification rates in production.",
      "Built a real-time AI monitoring dashboard (React, DynamoDB, ElasticSearch) to track agent decisions, workflow execution, and system health, cutting average incident response time.",
      "Optimized LLM pipeline performance through prompt engineering, response caching, and fallback strategies, reducing redundant API calls and improving cost efficiency and latency.",
      "Implemented LLM evaluation frameworks tracking accuracy, latency, and failure cases, enabling systematic model improvement and RAG integration for reduced hallucinations.",
    ],
  },
  {
    company: "Fyers Securities",
    role: "Senior Software Engineer",
    start: "May 2024",
    end: "Sept 2024",
    bullets: [
      "Led a team of 3 engineers to redesign the onboarding platform, improving concurrency handling and delivering a ~20% reduction in onboarding time under high-traffic conditions.",
    ],
  },
  {
    company: "Tifin Financial Services",
    role: "Software Engineer",
    start: "Feb 2022",
    end: "May 2024",
    bullets: [
      "Built a data-driven investment recommendation engine for asset managers, improving portfolio personalization and reducing manual advisory overhead.",
      "Developed and owned a back-office trading dashboard used daily by trade operations teams, reducing manual intervention in trade workflows.",
      "Led frontend development of the core real-time trading module in React, delivering a responsive interface handling live market data.",
      "Designed and implemented backend services in Golang, Node.js, and Python supporting high-performance trading and analytics pipelines.",
      "Built CI/CD pipelines (GitHub Actions) and managed GCP deployments, reducing release cycle time and improving deployment reliability across 5+ services.",
    ],
  },
  {
    company: "1st Main (acquired by Tifin)",
    role: "Full Stack Engineer",
    start: "Jun 2020",
    end: "Feb 2022",
    bullets: [
      "Led migration of a monolithic e-commerce platform to microservices architecture, enabling independent deployments and improving system scalability.",
      "Implemented async event-driven communication via GCP Pub/Sub, decoupling services and improving system resilience under load.",
      "Designed MongoDB schemas for high-volume transactional and catalog data, optimizing read/write performance for distributed storage.",
      "Architected an event-driven system using Kafka to handle high-throughput traffic during peak campaigns, improving pipeline throughput by ~2x with low-latency processing.",
      "Tuned Kafka event pipelines (partitioning, batching, consumer group scaling) to sustain peak load without degradation in processing latency.",
      "Designed fault-tolerant, low-latency backend services in Golang with reliability and graceful failure handling as core design constraints.",
    ],
  },
]

export const education = {
  degree: "Bachelor of Engineering",
  school: "VIT, Vellore, India",
  start: "2014",
  end: "2018",
}
