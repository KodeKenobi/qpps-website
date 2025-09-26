"use client";

import DisclosureLayout from "@/sections/disclosures/DisclosureLayout";

export default function LegalRegulatoryPage() {
  return (
    <DisclosureLayout
      title={"Legal & Regulatory"}
      slug={"legal-regulatory"}
    >
      <p className="italic">
        <strong>Legal and Regulatory Compliance</strong>
      </p>
      <p>
        Quality Projects People and Solutions (Pty) Ltd ("QPPS") operates in full
        compliance with South African laws and regulations. As a technology
        services company providing digital transformation solutions, we are
        committed to maintaining the highest standards of legal and regulatory
        compliance across all our operations.
      </p>
      <p>
        <strong>Regulatory Framework</strong>
      </p>
      <p>
        QPPS operates under the regulatory framework established by South African
        legislation, including but not limited to:
      </p>
      <ul className="list-disc pl-8">
        <li>Companies Act, 2008 (Act No. 71 of 2008)</li>
        <li>Protection of Personal Information Act, 2013 (POPIA)</li>
        <li>Electronic Communications and Transactions Act, 2002</li>
        <li>Cybercrimes Act, 2020</li>
        <li>Broad-Based Black Economic Empowerment Act, 2003</li>
        <li>Labour Relations Act, 1995</li>
        <li>Employment Equity Act, 1998</li>
      </ul>
      <p>
        <strong>Licensing and Certifications</strong>
      </p>
      <p>
        QPPS maintains all necessary business licenses and registrations required
        for operation in South Africa. Our team holds internationally recognized
        certifications including ITIL v3, Cisco, Microsoft Certified Solutions
        Associate, Fortinet NSE 4, VMware, and AWS certifications, ensuring
        compliance with industry standards and best practices.
      </p>
      <p>
        <strong>Data Protection Compliance</strong>
      </p>
      <p>
        In accordance with POPIA, QPPS implements comprehensive data protection
        measures to safeguard personal information. We maintain strict data
        security protocols, conduct regular privacy impact assessments, and ensure
        all data processing activities comply with South African data protection
        requirements.
      </p>
      <p>
        <strong>Cybersecurity Compliance</strong>
      </p>
      <p>
        Our cybersecurity services are delivered in compliance with the
        Cybercrimes Act and international cybersecurity standards. We maintain
        robust security frameworks and incident response procedures to protect
        client data and systems from cyber threats.
      </p>
      <p>
        <strong>B-BBEE Compliance</strong>
      </p>
      <p>
        QPPS is committed to contributing to South Africa's transformation agenda
        through our B-BBEE initiatives. We actively support local economic
        development, skills transfer, and empowerment programs that align with
        national transformation objectives.
      </p>
      <p>
        <strong>Professional Standards</strong>
      </p>
      <p>
        All QPPS services are delivered in accordance with professional standards
        and ethical guidelines. We maintain professional indemnity insurance and
        adhere to industry best practices in project delivery, client
        confidentiality, and service quality.
      </p>
      <p>
        <strong>Regulatory Updates</strong>
      </p>
      <p>
        QPPS maintains awareness of regulatory changes and updates our compliance
        procedures accordingly. We conduct regular compliance reviews and training
        to ensure continued adherence to all applicable laws and regulations.
      </p>
      <p>
        For specific regulatory inquiries or compliance documentation, please
        contact our legal and compliance team at{" "}
        <a href="mailto:abongile@qpp.co.za" className="text-gold underline">
          abongile@qpp.co.za
        </a>
        .
      </p>
    </DisclosureLayout>
  );
}
