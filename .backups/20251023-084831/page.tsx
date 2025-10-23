"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Server,
  ShieldCheck,
  Cloud,
  Cpu,
} from "lucide-react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const projects = [
  {
    title: "Healthcare Credentialing Automation",
    subtitle: "Java 17 • Spring Boot • React • Kafka • AWS EKS • Terraform",
    description:
      "Cloud-native platform that automates clinician onboarding, verification, and compliance workflows with event-driven microservices.",
    highlights: [
      "99.9% uptime via EKS & multi-AZ",
      "70% fewer manual checks (Kafka pipelines)",
      "Azure AD (OIDC) + SSL auto-rotation",
    ],
    links: {
      demo: "https://healthcred-console.vercel.app/",
      repo: "https://github.com/MUTTAMSETTYLOHITH/healthcare-credentialing",
    },
  },
  {
    title: "Claims Elite",
    subtitle: "AWS Lambda • API Gateway • DynamoDB • SQS • React/Next.js",
    description:
      "Event-driven claims intake, adjudication, and notifications with a real-time status UI and IaC provisioning.",
    highlights: [
      "Near-zero ops with serverless",
      "Idempotent workflows & DLQs",
      "<200ms p95 API latency",
    ],
    links: {
      demo: "https://claims-elite-advanced.vercel.app",
      repo: "https://github.com/MUTTAMSETTYLOHITH/serverless-insurance-claims",
    },
  },
  {
    title: "FinTech Transaction Monitor",
    subtitle: "Spring Boot • Redis • PostgreSQL • Angular • Grafana",
    description:
      "Real-time anomaly detection and fraud flagging with dashboards and alerting.",
    highlights: [
      "Stream rules with Redis pub/sub",
      "Grafana SLO/SLA dashboards",
      "CI/CD via Jenkins & GitHub Actions",
    ],
    links: {
      demo: "https://fintech-transaction-monitor-b9yqtd52c.vercel.app",
      repo: "https://github.com/MUTTAMSETTYLOHITH/fintech-transaction-monitor",
    },
  },
  {
    title: "Chat Analytics (Real-time)",
    subtitle: "Python FastAPI • Kafka • ElasticSearch • React • GKE",
    description:
      "Streaming sentiment and topic detection with search and visualization.",
    highlights: [
      "Kafka streams & windowed metrics",
      "Full-text search w/ Elastic",
      "GKE autoscaling",
    ],
    links: {
      demo:
        "https://chat-analytics-rc21afowt-lohith-muttamsettys-projects.vercel.app/",
      repo: "https://github.com/MUTTAMSETTYLOHITH/chat-analytics",
    },
  },
] as const;

const skills = {
  Backend: ["Java 8/11/17", "Spring Boot", "Spring Cloud", "Hibernate/JPA", "Python", "Kotlin"],
  Frontend: ["React", "Angular", "Next.js", "TypeScript", "Redux", "Tailwind"],
  Cloud_DevOps: [
    "AWS (EKS/Lambda/CFN)",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Terraform",
    "GitHub Actions/Jenkins/GitLab",
  ],
  Data_Stream: ["Kafka", "Redis", "PostgreSQL", "DynamoDB", "ElasticSearch"],
  Security_Observability: ["OAuth2/OIDC", "SAML", "SSL automation", "Prometheus", "Grafana", "Splunk"],
} as const;

const SectionTitle: React.FC<{
  icon: IconType;
  title: string;
  subtitle?: string;
}> = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="p-3 rounded-2xl shadow bg-white/70 backdrop-blur">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  </div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-lg">
            Lohith Muttamsetty
          </a>
          <nav className="hidden md:flex items-center gap-2">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Experience", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href as string}
                className="px-3 py-2 rounded-xl hover:bg-slate-100 text-sm"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="rounded-2xl">
              <a href="/resume.pdf">
                <Download className="h-4 w-4 mr-2" /> Resume
              </a>
            </Button>
            <Button asChild className="rounded-2xl">
              <a
                href="https://github.com/MUTTAMSETTYLOHITH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-10 md:pt-16 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Java / Cloud-Native Engineer
              <span className="block text-slate-500 text-xl md:text-2xl mt-2">
                Building Intelligent Microservices & Cloud Platforms
              </span>
            </h1>
            <p className="mt-4 text-slate-600">
              Spring Boot • React • AWS • Kubernetes • Kafka • Identity (OIDC/SAML). Focused on performance,
              automation, and secure-by-default delivery.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge className="rounded-full">99.9% Uptime</Badge>
              <Badge className="rounded-full">-40% Latency</Badge>
              <Badge className="rounded-full">+50% Deploy Speed</Badge>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl">
                <a href="#projects">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Projects
                </a>
              </Button>
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="mailto:lmuttamsetty@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Me
                </a>
              </Button>
            </div>
            <div className="mt-4 flex items-center gap-3 text-slate-600">
              <MapPin className="h-4 w-4" /> Boca Raton, FL • Open to Remote/Hybrid
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:justify-self-end"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-sky-200 via-emerald-200 to-indigo-200 blur" />
              <Card className="relative rounded-3xl shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5" /> Cloud-Native Engineer
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4" /> Microservices on EKS & Lambda
                  </div>
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4" /> Real-time streams with Kafka
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4" /> IAM: OAuth2/OIDC • SAML • SSL Automation
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle icon={Cloud} title="About" subtitle="Pragmatic, data-driven, and product-minded" />
        <Card className="rounded-3xl">
          <CardContent className="p-6 text-slate-700 leading-relaxed">
            I design and ship resilient, observable services that turn complex domain workflows into fast, delightful
            experiences. Recent wins include 35–40% latency reductions, 99.9% uptime, and CI/CD pipelines that halve
            release overhead.
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle icon={Cpu} title="Skills" subtitle="Breadth across the stack; depth in Java & cloud" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([group, list]) => (
            <Card key={group} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-base">{group.replaceAll("_", " / ")}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-full">
                    {s}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle icon={Server} title="Projects" subtitle="Deployed, documented, and testable" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title} className="rounded-3xl hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <p className="text-xs text-muted-foreground mt-1">{p.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-slate-700">{p.description}</p>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="flex gap-3 pt-2">
                  <Button asChild size="sm" className="rounded-xl">
                    <a href={p.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="secondary" className="rounded-xl">
                    <a href={p.links.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle icon={ShieldCheck} title="Experience" subtitle="Impact over titles" />
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Arthrex (Med-Tech) • 2025</CardTitle>
              <p className="text-xs text-muted-foreground">Java 17 • AWS EKS • React • IAM</p>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-1">
              <p>• 99.9% uptime with autoscaling & SLO alerts</p>
              <p>• 35–40% latency reduction via profiling & caching</p>
              <p>• SSL lifecycle automation + Azure AD federation</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Tower Hill Insurance • 2024</CardTitle>
              <p className="text-xs text-muted-foreground">React/Angular • SQL tuning • CI/CD</p>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-1">
              <p>• +45% claims throughput; -30% UI/SQL load times</p>
              <p>• Release overhead halved with GitLab & Azure DevOps</p>
            </CardContent>
          </Card>

          {/* Kotak */}
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Kotak Mahindra Bank (Banking) • Sep 2020 – Nov 2022</CardTitle>
              <p className="text-xs text-muted-foreground">Java 11 • Spring Boot • Kafka • PostgreSQL • Redis</p>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-1">
              <p>• Event-driven microservices for payments & compliance; cut p95 latency ~30% via caching & SQL tuning</p>
              <p>• Idempotent workflows + DLQs on Kafka; eliminated duplicate processing</p>
              <p>• OAuth2/OIDC hardening; standardized logging/metrics (Prometheus/Grafana, ELK)</p>
              <p>• CI/CD with Jenkins & GitLab; trunk-based releases</p>
            </CardContent>
          </Card>

          {/* Exotel */}
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle className="text-lg">Exotel (Cloud Telephony) • Jun 2018 – Aug 2020</CardTitle>
              <p className="text-xs text-muted-foreground">Java • Spring • REST APIs • MySQL • Redis • React</p>
            </CardHeader>
            <CardContent className="text-sm text-slate-700 space-y-1">
              <p>• High-throughput messaging/voice APIs with multi-AZ failover & rate limits</p>
              <p>• Reduced delivery failures ~20–25% via retries/backoff and dead-letter queues</p>
              <p>• Built internal ops dashboards; improved incident MTTR with better observability</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-8">
        <SectionTitle icon={Mail} title="Contact" subtitle="Let’s build something valuable" />
        <Card className="rounded-3xl">
          <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1 text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />{" "}
                <a className="underline" href="mailto:lmuttamsetty@gmail.com">
                  lmuttamsetty@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />{" "}
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/lohith-muttamsetty-70a39b184/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/lohith-muttamsetty-70a39b184
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />{" "}
                <a
                  className="underline"
                  href="https://github.com/MUTTAMSETTYLOHITH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/MUTTAMSETTYLOHITH
                </a>
              </div>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="secondary" className="rounded-2xl">
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <Button asChild className="rounded-2xl">
                <a href="mailto:lmuttamsetty@gmail.com?subject=Interview%20Opportunity">
                  Hire Me
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Lohith Muttamsetty • Built with React, Tailwind, and shadcn/ui
        <div className="mt-2 flex items-center justify-center gap-4">
          <a
            className="underline"
            href="https://github.com/MUTTAMSETTYLOHITH"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="underline"
            href="https://www.linkedin.com/in/lohith-muttamsetty-70a39b184/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="underline" href="mailto:lmuttamsetty@gmail.com">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
