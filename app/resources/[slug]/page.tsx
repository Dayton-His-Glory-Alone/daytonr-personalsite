"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Article {
  title: string;
  date: string;
  content: string[];
  image?: string;
}

const articles: Record<string, Article> = {
  "business-cost-audit-checklist": {
    title: "Business Cost Audit Checklist",
    date: "October 2025",
    image: "/images/business-cost.png",
    content: [
      "### Discover Hidden Savings & Revenue Opportunities in Your Business",
      "",
      "✅ A cost audit isn’t about cutting corners but about finding efficiencies. Run this every 6–12 months to stay lean and profitable.",
      "",
      "## Technology & Software Costs",
      "- [ ] **Website Hosting** — Compare current provider rates vs. competitors (potential 30–70% savings)",
      "- [ ] **Software Subscriptions** — Audit all SaaS tools for unused licenses or overlapping functionality",
      "- [ ] **Cloud Storage** — Review storage plans and optimize based on actual usage",
      "- [ ] **Communication Tools** — Consolidate messaging, video, and phone solutions",
      "- [ ] **Security Software** — Bundle antivirus, backup, and security tools for better rates",
      "- [ ] **Email Marketing Platforms** — Compare per-contact pricing across providers",
      "",
      "## Employee & HR Costs",
      "- [ ] **Health Insurance** — Explore wellness apps/programs for premium reductions (10–15% typical savings)",
      "- [ ] **Workers Compensation** — Review safety programs and claim history for rate adjustments",
      "- [ ] **Payroll Processing** — Compare automated vs. manual processing costs",
      "- [ ] **Training & Development** — Shift to digital learning platforms vs. in-person training",
      "- [ ] **Remote Work Tools** — Optimize home office stipends and collaboration software",
      "",
      "## Customer Acquisition & Retention",
      "- [ ] **Marketing Automation** — Implement email sequences to reduce manual outreach time",
      "- [ ] **Customer Support Tools** — Add chatbots or FAQ systems to reduce support tickets",
      "- [ ] **CRM Integration** — Automate lead scoring and follow-up processes",
      "- [ ] **Referral Programs** — Create systematic referral tracking to reduce acquisition costs",
      "- [ ] **Customer Feedback Apps** — Implement rating/review systems to improve retention",
      "",
      "## Operations & Efficiency",
      "- [ ] **Inventory Management** — Implement just-in-time ordering systems",
      "- [ ] **Appointment Scheduling** — Automate booking to reduce administrative time",
      "- [ ] **Document Management** — Digitize paper processes and automate approvals",
      "- [ ] **Financial Reporting** — Automate monthly reporting and expense tracking",
      "- [ ] **Vendor Management** — Renegotiate contracts and explore bulk purchasing",
      "",
      "## ⚡ Quick Wins (Implement First)",
      "- [ ] **Website Hosting Audit** — Often 30–50% savings available immediately",
      "- [ ] **Software License Review** — Cancel unused subscriptions this month",
      "- [ ] **Insurance Review** — Get quotes from 3 providers for immediate comparison",
      "- [ ] **Employee Health Programs** — Research wellness apps for insurance discounts",
      "",
      "## 📈 ROI Tracking",
      "For each implemented change, track:",
      "- **Initial cost/time investment:** $_______",
      "- **Monthly savings achieved:** $_______",
      "- **Payback period:** _______ months",
      "- **Annual impact:** $_______",
      "",
      "### Ready to implement these changes but need help with the technical side?",
      "Many businesses save **$2,000–$10,000+ annually** just from the first few items on this list.",
      "If you'd like assistance implementing any of these solutions or creating custom apps to streamline your operations, let's discuss how we can optimize your business together."
    ],
  },
  "top-10-automation-tools": {
    title: "Top 10 Automation Tools for Small Businesses",
    date: "October 2025",
    image: "/images/automation-tools.jpg",
    content: [
      "Are you stuck doing the same tasks over and over again?",
      "Automation can help you reclaim hours of time in day-to-day operations. Here are 10 powerful tools worth checking out:",
      "1️⃣ **Zapier** – Connects thousands of apps for no-code automation.",
      "2️⃣ **Power Automate** – Native to Microsoft and connects lots of your data into one place.",
      "3️⃣ **ClickUp** – Manage tasks, projects, and automation triggers in one place.",
      "4️⃣ **HubSpot** – Marketing, sales, and service automation built in.",
      "5️⃣ **ActiveCampaign** – Email and customer journey automation for growing lists.",
      "6️⃣ **Calendly** – Automatically schedule meetings and reminders.",
      "7️⃣ **QuickBooks Online** – Automates accounting, invoicing, and tax prep.",
      "8️⃣ **Slack Workflows** – Simplify internal communications with automated messages.",
      "9️⃣ **Trello with Butler** – Use automation to organize project boards.",
      "🔟 **ChatGPT (via API)** – Generate reports, summaries, or ideas automatically.",
      "💡 Small wins with automation compound fast — start with one workflow that saves you 10 minutes a day and scale up from there.",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main className="max-w-3xl mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn’t find the article you’re looking for.
        </p>
        <Link href="/resources" className="text-blue-600 hover:underline">
          ← Back to Resources
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#fafafa] min-h-screen">
      {/* 🖼️ Hero Header */}
      {article.image && (
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-b from-black/40 to-black/10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 drop-shadow-md">
              {article.title}
            </h1>
            <p className="text-gray-200 text-lg">{article.date}</p>
          </div>
        </div>
      )}

      {/* 📝 Article Body */}
      <article className="max-w-3xl mx-auto px-6 md:px-0 py-16">
        <Link
          href="/resources"
          className="text-sm text-blue-600 hover:underline mb-10 inline-block"
        >
          ← Back to Resources
        </Link>

        <div
          className="prose prose-lg md:prose-xl prose-gray max-w-none 
          prose-headings:font-semibold prose-headings:text-gray-900 
          prose-p:text-gray-700 prose-p:leading-relaxed 
          prose-li:marker:text-gray-400 prose-li:text-gray-700
          prose-strong:text-gray-900 prose-a:text-blue-600 
          prose-a:no-underline hover:prose-a:underline 
          prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:text-gray-500
          prose-img:rounded-xl prose-hr:border-gray-200"
        >
          {article.content.map((para, idx) => (
            <ReactMarkdown key={idx}>{para}</ReactMarkdown>
          ))}
        </div>
      </article>
    </main>
  );
}
