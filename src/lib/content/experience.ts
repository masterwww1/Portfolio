import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'EMURGO',
      companyUrl: 'https://www.emurgo.io/',
      role: 'Principal Backend Engineer',
      started: 'Jun 2023',
      upto: 'Jan 2025',
      tasks: [
        'Led the development of a secure financial platform, improving performance by 40% through code optimization and caching strategies and handling 100K+ transactions daily, ensuring compliance with PCI-DSS and SOC 2 standards.',
        'Developed the advanced social media platform focused on content, community and connections built on Cardano',
        'Designed and implemented a secure authentication system using OAuth 2.0 and JWT, AWS Cognito, or IAM roles, enforcing role-based access control (RBAC), automatic token renewal, while conducting penetration testing and security audits to mitigate vulnerabilities.',
        'Optimized banking transaction APIs, implemented Kafka-based event-driven architecture, reducing latency by 45% and improving transaction traceability.',
        'Built and deployed microservices with AWS CDK, reducing infrastructure provisioning time by 50%.',
        'Integrated Kafka or RabbitMQ for handling high-throughput data streaming.',
        'Implement Redis or Memcached for caching frequently accessed data, reducing API response times.',
        'Developed comprehensive API documentation using Swagger/OpenAPI, ensuring clear endpoint specifications for frontend and third-party integrations, while writing unit and integration tests, achieving 90%+ test coverage and improving system reliability.',
        'Mentored and led a team of 5+ engineers, conducting security reviews and best practice sessions.',
      ],
    },
    {
      company: 'MAGICPORT LTD',
      companyUrl: 'https://magicport.ai/',
      role: 'Senior Full Stack Engineer',
      started: 'Jan 2022',
      upto: 'May 2023',
      tasks: [
        'Architectured and built the Casino Gaming Platform, reducing page load times by 35%',
        'Implemented secure authentication (OAuth 2.0, JWT), fraud detection algorithms, and end-to-end encryption to protect user data and transactions, ensuring compliance with gaming security standards and preventing cheating and unauthorized access.',
        'Implemented real-time gaming features such as leaderboards and multiplayer capabilities',
        'Developed a secure and scalable payment system for a casino gaming platform, integrating Stripe, PayPal, and blockchain payments, implementing fraud detection algorithms, PCI-DSS compliance, and 3D Secure authentication, reducing transaction failures by 40% and enhancing user trust.',
        'Implemented unit tests and integration tests, covering critical user flows and API interactions, boosting code coverage from 60% to 90% and reducing production bugs by 30%.',
        'Deploy and manage applications on AWS (EC2, Lambda, S3, RDS, DynamoDB, API Gateway, CloudFront).',
        'Collaborated closely with designers and product managers to enhance UI/UX, leading to a 15% boost in user engagement.',
      ],
    },
    {
      company: 'Amazon Web Services (AWS)',
      companyUrl: 'https://aws.amazon.com/',
      role: 'Full Stack Engineer',
      started: 'May 2019',
      upto: 'Dec 2021',
      tasks: [
        'Developed and maintained backend services, handling 100K+ requests per day with optimized database queries.',
        'Develop real-time chat, notifications, or game logic, AWS AppSync, or GraphQL subscriptions.',
        'Use Amazon RDS (PostgreSQL/MySQL) and DynamoDB for structured and NoSQL data storage.',
        'Utilize AWS SQS, SNS, and EventBridge for message queuing and event-driven microservices.',
        'Participated in Agile development, attending daily stand-ups and sprint planning to ensure timely feature delivery.',
      ],
    },
    {
      company: 'Geek Solutions',
      companyUrl: 'https://geeksolutions.co/',
      role: 'Full Stack Developer',
      started: 'Feb 2015',
      upto: 'Apr 2019',
      tasks: [
        'Assisted in developing web services, gaining hands-on experience in server-side development.',
        'Wrote SQL queries and optimized database performance, reducing slow query execution time by 20%.',
        'Contributed to debugging and troubleshooting issues, decreasing bug resolution time by 30%.',
        'Built internal tools for data monitoring, improving team efficiency.',
        'Learned and applied best practices in Git version control, CI/CD pipelines, and software deployment',
      ],
    },
  ],
};
