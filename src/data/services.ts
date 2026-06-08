export interface Service {
  n: string;
  slug: string;
  title: string;
  desc: string;
  bullets: string[];
  longDesc: string;
}

export const services: Service[] = [
  {
    n: "01",
    slug: "digital-transformation",
    title: "Digital Transformation",
    desc: "TechXplo helps businesses modernize legacy systems with innovative digital transformation solutions that enhance efficiency and scalability.",
    bullets: ["LEGACY SYSTEM MODERNIZATION", "SCALABLE SOLUTIONS"],
    longDesc:
      "We partner with organizations to reimagine their technology landscape. From migrating legacy infrastructure to the cloud to redesigning digital workflows, our digital transformation services ensure your business stays competitive in a rapidly evolving market. Our team conducts thorough audits, develops roadmaps, and implements solutions that reduce operational overhead while improving agility and scalability.",
  },
  {
    n: "02",
    slug: "software-development",
    title: "Software Development",
    desc: "TechXplo delivers custom solutions tailored to business needs, streamlining workflows, optimizing customer experiences, and enabling agile decision-making.",
    bullets: ["CUSTOM SOFTWARE", "WORKFLOW OPTIMIZATION"],
    longDesc:
      "Our software development team builds robust, scalable applications tailored to your unique business requirements. We follow agile methodologies, ensuring transparent communication and rapid iteration. Whether you need a web platform, RESTful API, or internal tooling, we deliver clean, maintainable code backed by thorough testing and deployment pipelines.",
  },
  {
    n: "03",
    slug: "ai-enabled-services",
    title: "AI Enabled Services",
    desc: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications that drive business growth.",
    bullets: ["AI AUTOMATION", "INTELLIGENT APPS"],
    longDesc:
      "We help businesses integrate artificial intelligence into their operations. From chatbots and recommendation engines to predictive analytics and document processing, our AI solutions are designed to reduce manual effort and surface actionable insights. We work with leading platforms including OpenAI and Microsoft Azure to deliver production-ready AI systems.",
  },
  {
    n: "04",
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    desc: "Build powerful, user-friendly mobile applications for iOS and Android that engage users and extend your business reach.",
    bullets: ["iOS & ANDROID APPS", "USER-CENTRIC DESIGN"],
    longDesc:
      "We design and develop mobile applications that deliver exceptional user experiences across iOS and Android. Our process covers everything from UX research and prototyping to development, testing, and deployment on the App Store and Google Play. We build with React Native and native technologies to ensure performance, reliability, and a native look and feel.",
  },
  {
    n: "05",
    slug: "tech-supported-npo-projects",
    title: "Tech-supported NPO Projects",
    desc: "TechXplo offers web development and app solutions for NPOs at no cost or low-bono, helping to expand their impact and reach more communities.",
    bullets: ["PRO-BONO SOLUTIONS", "COMMUNITY IMPACT"],
    longDesc:
      "We believe technology should be a force for good. Through our NPO program, TechXplo provides pro-bono and low-bono web development, app solutions, and technical consulting to non-profit organizations. We help NPOs amplify their impact by building digital tools for fundraising, volunteer management, community outreach, and operational efficiency.",
  },
  {
    n: "06",
    slug: "automation-data-solutions",
    title: "Automation & Data Solutions",
    desc: "Streamline operations with intelligent automation and data-driven solutions that turn raw information into actionable business intelligence.",
    bullets: ["PROCESS AUTOMATION", "DATA INTELLIGENCE"],
    longDesc:
      "We design and deploy automation pipelines and data infrastructure that eliminate repetitive tasks and unlock insights. Our services include workflow automation, ETL pipelines, dashboard development, and data warehousing. We help you move from spreadsheets and manual processes to streamlined, data-driven operations.",
  },
];
