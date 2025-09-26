"use client";

import DisclosureLayout from "@/sections/disclosures/DisclosureLayout";

export const dynamic = "force-dynamic";

export default function ShareholderRightsDirectivePage() {
  return (
    <DisclosureLayout
      title={"Data Protection & Privacy"}
      slug={"data-protection-privacy"}
    >
      <p className="italic">
        <strong>Data Protection and Privacy Compliance</strong>
      </p>
      <p>
        Quality Projects People and Solutions (Pty) Ltd ("QPPS") operates in
        compliance with South African data protection laws, including the
        Protection of Personal Information Act (POPIA) of 2013. As a technology
        services company, we are committed to maintaining the highest standards
        of data security and privacy protection for all our clients and
        partners.
      </p>
      <p>
        <strong>QPPS Data Protection Policy</strong>
      </p>
      <p>
        QPPS is committed to protecting the personal information of our clients,
        employees, and partners in accordance with South African data protection
        laws. We implement comprehensive data security measures and maintain
        strict confidentiality standards across all our digital transformation
        and cybersecurity services.
      </p>
      <p>
        Our data protection practices include regular security audits, employee
        training on data protection principles, and implementation of
        appropriate technical and organizational measures to safeguard personal
        information. We are committed to transparency in our data processing
        activities and maintaining the trust of our clients through responsible
        data handling.
      </p>
    </DisclosureLayout>
  );
}
