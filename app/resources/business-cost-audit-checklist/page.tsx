"use client";

import Image from "next/image";
import React from "react";

export default function BusinessCostAuditChecklist() {
  return (
    <main className="flex flex-col items-center justify-center px-6 lg:px-20 py-12 bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-md mb-12">
        <Image
          src="images/business-cost.png"
          alt="Business cost audit checklist"
          width={1200}
          height={600}
          className="object-cover w-full h-80 brightness-75"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
            The Ultimate Business Cost Audit Checklist
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="prose prose-lg lg:prose-xl max-w-3xl prose-headings:font-semibold prose-h2:mt-10 prose-h2:text-gray-800 prose-p:text-gray-700 prose-li:text-gray-700 leading-relaxed">
        <p className="text-lg text-gray-600">
          Running a business means juggling a thousand moving parts and costs
          can creep up in unexpected places. A business cost audit helps you
          identify inefficiencies, eliminate waste, and unlock more profit.
        </p>

        <h2>1. Review Your Recurring Expenses</h2>
        <p>
          Start with subscriptions and contracts. Check for software tools,
          marketing services, and vendor agreements you may no longer need or
          can renegotiate. Even small recurring charges can add up to thousands
          over time.
        </p>

        <h2>2. Analyze Payroll and Benefits</h2>
        <p>
          Payroll often makes up the largest expense category. Ensure roles are
          aligned with output and review overtime trends. Reevaluate benefit
          packages to balance employee satisfaction with financial sustainability.
        </p>

        <h2>3. Evaluate Office and Utility Costs</h2>
        <p>
          Hybrid work models have made it easier to cut down on physical office
          space. Audit rent, utilities, and maintenance costs — or consider
          remote-friendly alternatives that reduce overhead.
        </p>

        <h2>4. Review Marketing Spend</h2>
        <p>
          Track your ROI on paid ads, sponsorships, and campaigns. Redirect
          resources to what’s measurable and proven to convert, like organic SEO
          or referral programs.
        </p>

        <h2>5. Check Supply Chain Efficiency</h2>
        <p>
          Negotiate with suppliers, consolidate shipments, or explore new
          logistics partners. A small tweak here can lead to major savings over
          a fiscal year.
        </p>

        <h2>6. Audit Your Technology Stack</h2>
        <p>
          Are you paying for multiple apps that do the same thing? Simplify your
          tech stack by consolidating tools and removing redundancy.
        </p>

        <h2>7. Review Financial Fees and Interest</h2>
        <p>
          Examine credit card processing fees, loan interest, and banking
          charges. Switching institutions or restructuring debt can save
          thousands annually.
        </p>

        <h2>8. Build a Culture of Cost Awareness</h2>
        <p>
          Encourage every team member to think like an owner. Small cost-saving
          ideas at the employee level can lead to large-scale impact across the
          company.
        </p>

        <blockquote>
          “A dollar saved in operations is a dollar earned in profit.”
        </blockquote>

        <h2>Final Thoughts</h2>
        <p>
          Performing a business cost audit isn’t just about cutting — it’s about
          realigning resources with your company’s purpose. When you know where
          your money goes, you can make smarter decisions and scale
          sustainably.
        </p>
      </article>

      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-16 mb-8"></div>

      {/* Footer */}
      <p className="text-sm text-gray-500 text-center">
        Written by <span className="font-semibold">The Stand Out Team</span> · Last updated October 2025
      </p>
    </main>
  );
}
