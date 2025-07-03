import DisclosureLayout from "@/sections/disclosures/DisclosureLayout";
import Link from "next/link";

export default function ComplaintsPage() {
  return (
    <DisclosureLayout title={"Complaints"} slug={"complaints"}>
      <p>
        You should contact us immediately if you are dissatisfied with any
        aspect of the AIF management services provided to you by Carrhae Capital
        LLP.
      </p>
      <p>Please write to:</p>

      <p>
        The Compliance Officer,
        <br />
        Carrhae Capital LLP
        <br />
        3rd Floor
        <br />
        112 Jermyn Street
        <br />
        London, SW1Y 6LS
        <br />
        United Kingdom
        <br />
        T: <Link href="tel:+442032054850">+44 (0) 203 205 4850</Link>
      </p>
      <p>
        We take every complaint seriously and your complaint will be handled in
        accordance with the relevant FCA rules, which may differ depending upon
        your status, although note that it is Carrhae Capital LLP’s policy to
        aim to resolve every complaint fairly and in a timely manner. Carrhae
        Capital LLP has a written internal complaints handling policy, as
        required by the FCA Rules. You can obtain a copy of this on request, and
        in the event you should have cause for complaint about the AIF
        management services which Carrhae Capital LLP provides to you, a copy of
        the policy will be sent to you.
      </p>
      <p>
        In the event we fail to resolve a complaint to your satisfaction, or if
        we fail to do so within eight weeks of receiving your complaint, you may
        also be entitled to refer your complaint to:
      </p>
      <p>
        The Financial Ombudsman Service
        <br />
        Exchange Tower
        <br />
        Harbour Exchange Square
        <br />
        London
        <br />
        E14 9SR.
        <br />
        Telephone: <Link href="tel:0800 023 4567">0800 023 4567</Link>
        <br />
        or at{" "}
        <Link href="https://www.financial-ombudsman.org.uk">
          www.financial-ombudsman.org.uk
        </Link>
        .
      </p>
      <p>
        You should contact us if there is any aspect of the provision of the
        MiFID investment services provided by Carrhae Capital LLP (“Carrhae”)
        that you are not satisfied with.
      </p>
      <p>
        We take every MiFID complaint seriously and your complaint will be
        handled in accordance with the relevant FCA rules. Carrhae has a written
        complaints handling policy, a copy of which is available upon request
        from Carrhae’s compliance department at the above address.
      </p>
    </DisclosureLayout>
  );
}
