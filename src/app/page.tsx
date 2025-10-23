import Link from "next/link";

export const metadata = {
  title: "Lohith Muttamsetty — Java & Cloud-Native Engineer",
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium text-gray-700/90 dark:text-gray-100/90">
      {children}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border p-5 shadow-sm transition-transform hover:-translate-y-0.5">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      {/* Hero */}
      <section className="mb-10 md:mb-12">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          Java & Cloud-Native Engineer
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
          I build high-throughput microservices and real-time platforms on AWS/Kubernetes—secure by default,
          observable, and fast.
        </p>

        <p className="mt-3 text-sm font-medium text-gray-900 dark:text-gray-100">
          99.9% uptime · ↓40% latency · 2× faster releases
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#projects"
            className="rounded-xl bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
          >
            View Projects
          </Link>
          <a
            href="mailto:lmuttamsetty@gmail.com"
            className="rounded-xl border px-4 py-2"
          >
            Email Me
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Boca Raton, FL • Open to Remote/Hybrid
        </p>
      </section>

      {/* About */}
      <section id="about" className="mb-12 md:mb-14">
        <h2 className="text-xl font-semibold md:text-2xl">About</h2>
        <p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300">
          Pragmatic, data-driven, and product-minded. I design resilient services that turn complex workflows
          into fast, delightful experiences. Recent wins include 35–40% latency reductions, 99.9% uptime, and
          CI/CD that halves release overhead.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mb-12 md:mb-14">
        <h2 className="text-xl font-semibold md:text-2xl">Skills</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Breadth across the stack; depth in Java & cloud
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-sm font-semibold">Backend</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Java 8/11/17</Chip><Chip>Spring Boot/Cloud</Chip><Chip>Hibernate/JPA</Chip>
              <Chip>Kotlin</Chip><Chip>Python</Chip>
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold">Frontend</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>React</Chip><Chip>Next.js</Chip><Chip>Angular</Chip>
              <Chip>TypeScript</Chip><Chip>Redux</Chip><Chip>Tailwind</Chip>
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold">Cloud / DevOps</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>AWS (EKS/Lambda/CFN)</Chip><Chip>Docker</Chip><Chip>Kubernetes</Chip>
              <Chip>Terraform</Chip><Chip>GitHub Actions</Chip><Chip>Jenkins</Chip><Chip>GitLab CI</Chip>
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold">Data / Streams</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Kafka</Chip><Chip>Redis</Chip><Chip>PostgreSQL</Chip>
              <Chip>DynamoDB</Chip><Chip>Elasticsearch</Chip>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold">Security / Observability</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>OAuth2/OIDC</Chip><Chip>SAML</Chip><Chip>SSL automation</Chip>
                <Chip>Prometheus</Chip><Chip>Grafana</Chip><Chip>Splunk</Chip>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-12 md:mb-14">
        <h2 className="text-xl font-semibold md:text-2xl">Projects</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Deployed, documented, and testable
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* Healthcare Credentialing Automation */}
          <Card>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">Healthcare Credentialing Automation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Java 17 • Spring Boot • React • Kafka • AWS EKS • Terraform
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Automates clinician onboarding, verification, and compliance with event-driven microservices.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>99.9% uptime (multi-AZ EKS)</li>
                <li>~70% fewer manual checks (Kafka pipelines)</li>
                <li>Azure AD (OIDC) + SSL auto-rotation</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="https://healthcare-credentialing.vercel.app/">
                  Live Demo
                </a>
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="https://github.com/MUTTAMSETTYLOHITH/Healthcare-Credentialing-Automation">
                  Source
                </a>
              </div>
            </div>
          </Card>

          {/* Claims Elite */}
          <Card>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">Claims Elite</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AWS Lambda • API Gateway • DynamoDB • SQS • React/Next.js
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Serverless claims intake/adjudication with real-time status UI and IaC provisioning.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Near-zero ops with serverless</li>
                <li>Idempotent workflows & DLQs</li>
                <li>p95 API &lt; 200 ms</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="#">
                  Live Demo
                </a>
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="#">
                  Source
                </a>
              </div>
            </div>
          </Card>

          {/* FinTech Transaction Monitor */}
          <Card>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">FinTech Transaction Monitor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Spring Boot • Redis • PostgreSQL • Angular • Grafana
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Real-time anomaly detection and fraud flagging with dashboards and alerting.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Stream rules via Redis pub/sub</li>
                <li>Grafana SLO/SLA dashboards</li>
                <li>CI/CD via Jenkins & GitHub Actions</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="#">
                  Live Demo
                </a>
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="#">
                  Source
                </a>
              </div>
            </div>
          </Card>

          {/* Chat Analytics (Real-time) */}
          <Card>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">Chat Analytics (Real-time)</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Python FastAPI • Kafka • Elasticsearch • React • GKE
              </p>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                Streaming sentiment & topic detection with search and visualization.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>Kafka streams & windowed metrics</li>
                <li>Full-text search with Elasticsearch</li>
                <li>GKE autoscaling</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="#">
                  Live Demo
                </a>
                <a className="rounded-xl border px-3 py-1.5 text-sm" target="_blank" href="#">
                  Source
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-12 md:mb-14">
        <h2 className="text-xl font-semibold md:text-2xl">Experience</h2>
        <div className="mt-5 grid gap-4">
          <Card>
            <h3 className="text-sm font-semibold">Arthrex (Med-Tech) • 2025 — Java 17 • AWS EKS • React • IAM</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li><strong>99.9% uptime</strong> via autoscaling & SLO alerts; <strong>↓35–40% latency</strong> with profiling, caching, query tuning.</li>
              <li>Automated SSL lifecycle and Azure AD federation across services.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold">Tower Hill Insurance • 2024 — React/Angular • SQL • CI/CD</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li><strong>+45% claims throughput</strong>, <strong>−30% UI/SQL load times</strong>.</li>
              <li>Release overhead halved with GitLab & Azure DevOps.</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold">Kotak Mahindra Bank • 2020–2022 — Spring Boot • Kafka • PostgreSQL</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li><strong>~30% p95 reduction</strong> via caching & SQL tuning; idempotent workflows + DLQs eliminated duplicates.</li>
              <li>OAuth2/OIDC hardening; standardized logging/metrics (Prometheus/Grafana, ELK).</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold">Exotel • 2018–2020 — Spring • MySQL • Redis • React</h3>
            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
              <li>High-throughput voice/messaging with multi-AZ failover & rate limits.</li>
              <li>↓20–25% delivery failures via retries/backoff & DLQs; built ops dashboards to improve MTTR.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mb-6 md:mb-10">
        <h2 className="text-xl font-semibold md:text-2xl">Contact</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a className="rounded-xl border px-4 py-2" href="mailto:lmuttamsetty@gmail.com">Email</a>
          <a className="rounded-xl border px-4 py-2" target="_blank" href="https://www.linkedin.com/in/lohith-muttamsetty-70a39b184">LinkedIn</a>
          <a className="rounded-xl border px-4 py-2" target="_blank" href="https://github.com/MUTTAMSETTYLOHITH">GitHub</a>
          <a className="rounded-xl border px-4 py-2" target="_blank" href="/Lohith-Muttamsetty-Resume.pdf">Download Resume</a>
        </div>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          © 2025 Lohith Muttamsetty • Built with React, Tailwind, and shadcn/ui
        </p>
      </section>
    </main>
  );
}