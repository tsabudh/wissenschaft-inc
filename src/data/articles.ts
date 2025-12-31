// src/data/articles.ts

export interface Article {
  name: string;
  description: string;
  imageUrl?: string;
  link: string;
}

export const pythonArticles: Article[] = [
  // {
  //   name: "Fast APIs with Flask and FastAPI",
  //   description: "Learn how Python frameworks enable rapid API development.",
  //   link: "/blog/python-fastapi-best-practices",
  // },
  // {
  //   name: "Scaling Python Microservices",
  //   description: "Strategies for scaling Python services with Kafka and Redis.",
  //   link: "/blog/python-fastapi-best-practices",
  // },
];

export const typescriptArticles: Article[] = [
  // {
  //   name: "Type Safety in Large-Scale Apps",
  //   description: "Why TypeScript improves maintainability and developer velocity.",
  //   imageUrl: "/images/articles/ts-large-scale.jpg",
  //   link: "/blog/python-typescript-best-practices",
  // },
];

export const rustArticles: Article[] = [
  // {
  //   name: "Type Safety in Large-Scale Apps",
  //   description: "Why Rust improves maintainability and developer velocity.",
  //   imageUrl: "/images/articles/ts-large-scale.jpg",
  //   link: "/blog/python-rust-best-practices",
  // },
];
export const aiMlArticles: Article[] = [
  // {
  //   name: "Type Safety in Large-Scale Apps",
  //   description: "Why Rust improves maintainability and developer velocity.",
  //   imageUrl: "/images/articles/ts-large-scale.jpg",
  //   link: "/blog/python-rust-best-practices",
  // },
];

export const gcpArticles: Article[] = [
  // {
  //   name: "Optimizing Costs on Google Cloud Run",
  //   description: "A practical guide to managing workloads efficiently using Cloud Run and Pub/Sub.",
  //   imageUrl: "/images/articles/gcp-cost.jpg",
  //   link: "/blog/gcp-cost-optimization",
  // },
  // {
  //   name: "Deploying Kubernetes Apps with GKE",
  //   description:
  //     "How to manage and scale containerized applications using Google Kubernetes Engine.",
  //   imageUrl: "/images/articles/gke-deploy.jpg",
  //   link: "/blog/gcp-gke-deployments",
  // },
];

export const awsArticles: Article[] = [
  // {
  //   name: "Optimizing Infrastructure with AWS CDK",
  //   description:
  //     "Leverage AWS Cloud Development Kit for faster and more maintainable infrastructure as code.",
  //   imageUrl: "/images/articles/aws-cdk.jpg",
  //   link: "/blog/aws-cdk-infrastructure-best-practices",
  // },
  // {
  //   name: "Scaling Microservices with AWS ECS and Fargate",
  //   description:
  //     "Deploy and manage containerized microservices effortlessly with AWS ECS and Fargate.",
  //   imageUrl: "/images/articles/aws-ecs.jpg",
  //   link: "/blog/aws-ecs-fargate-scaling-guide",
  // },
  // {
  //   name: "Serverless Architectures with AWS Lambda",
  //   description:
  //     "Harness the power of serverless computing to reduce cost and operational overhead.",
  //   imageUrl: "/images/articles/aws-lambda.jpg",
  //   link: "/blog/aws-lambda-serverless-architecture",
  // },
];

export const devopsArticles: Article[] = [];
export const dataEngineeringArticles: Article[] = [];
