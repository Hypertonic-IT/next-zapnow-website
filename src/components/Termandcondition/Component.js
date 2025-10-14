"use client";
import React, { useState } from "react";

export default function AepsForm() {
  const [transactionType, setTransactionType] = useState("Cash Withdrawal");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Biometric authentication initiated!");
  };

  return (
    <>
      <div id="termsandcondition" className="mt-5 mb-5">
        <header>
          {/* <h1>Terms &amp; Conditions</h1>
          <p className="small">of Lesus Innovations Private Limited (Zapnow Payments)</p> */}
        </header>

        <main>
          <section className="part-title">
            <h2>PART A: GENERAL TERMS AND CONDITIONS</h2>
          </section>

          <section id="introduction">
            <h3>1. Introduction</h3>
            <p className="intro">This Terms and Conditions document (“Agreement” / “Terms”) is an electronic record under the Information Technology Act, 2000 and applicable rules thereunder. It does not require any physical or digital signatures.</p>
            <p>These Terms govern the relationship between Lesus Innovations Private Limited, operating under the brand name <strong>Zapnow Payments</strong> (“Zapnow Payments”, “we”, “our”, “us”), and any individual, business, or entity (“Merchant”, “You”, “Your”) that uses the technology services provided by Zapnow Payments.</p>
            <p>Zapnow Payments operates exclusively as a <strong>Technology Service Provider (TSP)</strong>. Zapnow Payments is not a Payment Aggregator, Payment Gateway, or financial institution. Zapnow Payments does not:</p>
            <ul>
              <li>Hold, process, or settle funds,</li>
              <li>Operate an escrow account,</li>
              <li>Undertake settlement, refund, or chargeback obligations.</li>
            </ul>
            <p>All fund-handling obligations remain with the relevant Facility Providers (banks, licensed Payment Aggregators, NPCI, card networks, or other regulated entities).</p>
            <p>By accessing Zapnow Payments’s platform, website, APIs, SDKs, devices, or services (collectively, the “Platform”), You agree to be bound by these Terms.</p>
          </section>

          <section id="services">
            <h3>2. Services Provided by Zapnow Payments</h3>
            <p>Zapnow Payments provides Merchants with technology and infrastructure, including but not limited to:</p>
            <ul>
              <li>APIs, SDKs, and Integrations with Facility Providers (banks, NPCI, card networks, licensed PAs, etc.).</li>
              <li>Digital Invoicing &amp; Billing Tools, including receipt generation, campaign banners, ads on invoices, and analytics.</li>
              <li>Merchant Dashboard &amp; CRM Tools, for reporting, user management, and reconciliation.</li>
              <li>Payout Orchestration &amp; Routing Infrastructure, where Zapnow Payments only acts as a TSP connector to Facility Providers.</li>
              <li>Fraud Monitoring &amp; Compliance Tools as may be required by Facility Providers.</li>
            </ul>
            <p>Zapnow Payments’ Services are limited to technology enablement. Zapnow Payments shall not, under any circumstances, be considered to be providing regulated payment aggregation services.</p>
          </section>

          <section id="merchant-resp">
            <h3>3. Merchant Responsibilities</h3>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate KYC and compliance documentation as required by Facility Providers.</li>
              <li>Ensure that Your goods/services sold via the Platform comply with all Applicable Laws.</li>
              <li>Handle customer disputes, refunds, or claims directly with Your customers.</li>
              <li>Not use the Platform for unlawful, fraudulent, or restricted activities (including cryptocurrency or prohibited goods/services).</li>
            </ul>
          </section>

          <section id="fees">
            <h3>4. Fees</h3>
            <p>Zapnow Payments charges fees for the use of its technology and services. These fees are separate from MDR, settlement charges, or other Facility Provider fees.</p>
            <ul>
              <li>All applicable taxes (including GST) will be charged extra.</li>
              <li>Zapnow Payments reserves the right to revise its pricing with prior notice.</li>
            </ul>
          </section>

          <section id="ip">
            <h3>5. Intellectual Property</h3>
            <ul>
              <li>Zapnow Payments (and its licensors) retain ownership of all rights, titles, and interests in the Platform, software, and Services.</li>
              <li>Merchants are granted a limited, non-exclusive, non-transferable right to access and use the Platform for internal business purposes.</li>
              <li>By providing Your data, logos, and customer inputs, You grant Zapnow Payments a license to use them solely for delivering and improving the Services.</li>
            </ul>
          </section>

          <section id="privacy">
            <h3>6. Data Privacy</h3>
            <ul>
              <li>Zapnow Payments processes Merchant and Customer data strictly as per Applicable Laws and its Privacy Policy.</li>
              <li>Zapnow Payments may share limited data with Facility Providers for the purpose of enabling transactions.</li>
              <li>Zapnow Payments does not sell or misuse personal information.</li>
            </ul>
          </section>

          <section id="disclaimers">
            <h3>7. Disclaimers &amp; Limitation of Liability</h3>
            <ul>
              <li>Services are provided strictly on an “as is” and “as available” basis.</li>
              <li>Zapnow Payments disclaims all liability for delays in settlement, chargebacks, or refunds, since these are solely the responsibility of Facility Providers.</li>
              <li>Zapnow Payments’ liability shall in no event exceed one (1) month of fees paid by You for the specific service.</li>
            </ul>
          </section>

          <section id="indemnification">
            <h3>8. Indemnification</h3>
            <p>You agree to indemnify, defend, and hold harmless Zapnow Payments, its affiliates, officers, and employees against any claims, losses, or penalties arising from:</p>
            <ul>
              <li>Your breach of these Terms,</li>
              <li>Your non-compliance with Facility Provider requirements,</li>
              <li>Disputes between You and Your customers.</li>
            </ul>
          </section>

          <section id="suspension">
            <h3>9. Suspension &amp; Termination</h3>
            <p>Zapnow Payments may suspend or terminate Your access to Services if:</p>
            <ul>
              <li>You are found engaging in unlawful or non-compliant activities,</li>
              <li>You fail to provide accurate KYC or compliance documents,</li>
              <li>Regulatory or Facility Provider requirements restrict Zapnow Payments from continuing Services.</li>
            </ul>
            <p>Upon termination, Your right to access Zapnow Payments’ Services will immediately cease.</p>
          </section>

          <section id="law">
            <h3>10. Governing Law &amp; Dispute Resolution</h3>
            <ul>
              <li>These Terms are governed by the laws of India.</li>
              <li>Any disputes shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka, India.</li>
            </ul>
          </section>

          <section className="part-title">
            <h2>PART B: SPECIFIC TERMS (Illustrative Services)</h2>
          </section>

          <section id="digital-invoicing">
            <h3>1. Digital Invoicing &amp; CRM</h3>
            <ul>
              <li>Zapnow Payments provides tools for generating invoices, collecting customer data, displaying banners/ads, and running SMS/email campaigns.</li>
              <li>Zapnow Payments does not guarantee delivery of SMS/email campaigns, as these depend on third-party telecom operators.</li>
            </ul>
          </section>

          <section id="device-software">
            <h3>2. Device &amp; Software Usage</h3>
            <ul>
              <li>Devices (if provided) remain the property of Zapnow Payments unless purchased outright.</li>
              <li>Merchants are responsible for safeguarding devices and using them only for legitimate business purposes.</li>
              <li>Any damage or misuse of devices will be chargeable.</li>
            </ul>
          </section>

          <section id="chargebacks-refunds">
            <h3>3. Chargebacks &amp; Refunds</h3>
            <ul>
              <li>Chargebacks and refunds are between the Merchant, Customer, and Facility Provider.</li>
              <li>Zapnow Payments is not responsible for initiating, approving, or funding chargebacks or refunds.</li>
              <li>Zapnow Payments may, at the request of a Facility Provider, provide data or logs to assist in dispute resolution.</li>
            </ul>
          </section>

          <section className="part-title">
            <h2>PART C: MISCELLANEOUS</h2>
          </section>

          <section id="misc">
            <ul>
              <li><strong>Force Majeure:</strong> Zapnow Payments shall not be liable for events beyond its control (natural disasters, regulatory restrictions, etc.).</li>
              <li><strong>Assignment:</strong> Zapnow Payments may assign its rights or obligations without prior notice.</li>
              <li><strong>Confidentiality:</strong> Both parties agree to maintain confidentiality of business and customer information.</li>
            </ul>
          </section>

          <section className="part-title">
            <h2>ANNEXURES</h2>
          </section>

          <section id="annexure-i" className="annex">
            <h3>ANNEXURE – I: DEFINITIONS</h3>
            <p>For the purposes of this Agreement:</p>
            <ol>
              <li><strong>“Applicable Law”</strong> means all laws, regulations, guidelines, and directions issued by the Reserve Bank of India (“RBI”), Government of India, NPCI, card networks, and any other competent authority from time to time.</li>
              <li><strong>“Customer”</strong> means the end-user who purchases goods/services from the Merchant.</li>
              <li><strong>“Facility Providers”</strong> means banks, licensed payment aggregators, NPCI, card networks, or other regulated financial institutions that enable the flow of funds.</li>
              <li><strong>“Merchant”</strong> means any person, business, or entity that uses Zapnow Payments’ technology services.</li>
              <li><strong>“Services”</strong> means the technology, APIs, SDKs, software, dashboards, and devices provided by Zapnow Payments.</li>
              <li><strong>“TSP”</strong> means Technology Service Provider, i.e., Zapnow Payments’ role of providing digital infrastructure and technology services without handling, holding, or settling funds.</li>
              <li><strong>“Chargeback”</strong> means a reversal of a Customer transaction initiated by the Facility Provider or card network.</li>
              <li><strong>“Refund”</strong> means any repayment made by the Merchant to a Customer, processed via the Facility Provider.</li>
              <li><strong>“Escrow Account”</strong> means the account maintained by the Facility Provider (and not by Zapnow Payments) for settlement purposes, where applicable.</li>
            </ol>
          </section>

          <section id="annexure-ii" className="annex">
            <h3>ANNEXURE – II: ESCROW &amp; SETTLEMENT</h3>
            <ol>
              <li>Zapnow Payments does not maintain or operate any Escrow Account.</li>
              <li>All funds collected from Customers are routed directly through Facility Providers.</li>
              <li>Settlement timelines, reconciliation, and fund disbursements are strictly between the Merchant and the Facility Provider.</li>
              <li>Zapnow Payments may provide dashboard access, reports, and reconciliation files to assist Merchants in monitoring settlements, but Zapnow Payments has no liability for delays, short settlements, or failures.</li>
            </ol>
          </section>

          <section id="annexure-iii" className="annex">
            <h3>ANNEXURE – III: REFUNDS</h3>
            <ol>
              <li>Refunds, whether full or partial, are the sole responsibility of the Merchant and are to be executed through the respective Facility Provider.</li>
              <li>Zapnow Payments shall not be liable for initiating, approving, or funding refunds.</li>
              <li>Zapnow Payments’ role, if required, is limited to passing Refund API calls or providing technology assistance to connect Merchant systems with Facility Providers.</li>
              <li>Any dispute in refund processing must be raised directly with the Facility Provider.</li>
            </ol>
          </section>

          <section id="annexure-iv" className="annex">
            <h3>ANNEXURE – IV: CHARGEBACKS</h3>
            <ol>
              <li>Chargebacks are initiated and governed entirely by Facility Providers and card networks.</li>
              <li>Zapnow Payments shall not be liable for the outcome of any chargeback.</li>
              <li>Zapnow Payments may provide transaction logs, API records, or device-level data to assist the Facility Provider or Merchant in resolving chargeback disputes.</li>
              <li>The Merchant shall remain liable for providing supporting documents and evidence to the Facility Provider in case of a chargeback.</li>
            </ol>
          </section>

          <section id="annexure-v" className="annex">
            <h3>ANNEXURE – V: COMPLIANCE &amp; RESTRICTIONS</h3>
            <ol>
              <li>Merchants must comply with all Applicable Laws, including those prescribed by RBI, NPCI, card networks, and other regulatory authorities.</li>
              <li>Zapnow Payments strictly prohibits usage of its Platform for:
                <ul>
                  <li>Money laundering, cryptocurrency, gambling, or prohibited goods/services.</li>
                  <li>Sale of counterfeit, stolen, or restricted items.</li>
                  <li>Activities that may expose Zapnow Payments or Facility Providers to reputational or regulatory risks.</li>
                </ul>
              </li>
              <li>Zapnow Payments may suspend Services immediately if a Merchant is found in violation.</li>
            </ol>
          </section>

          <section id="annexure-vi" className="annex">
            <h3>ANNEXURE – VI: DEVICE &amp; SOFTWARE TERMS</h3>
            <ol>
              <li>Devices and software provided by Zapnow Payments are licensed, not sold.</li>
              <li>Merchants are responsible for safeguarding devices, preventing tampering, and using them solely for lawful business purposes.</li>
              <li>Zapnow Payments may remotely deactivate devices or software if the Merchant breaches these Terms.</li>
            </ol>
          </section>

          <section id="annexure-vii" className="annex">
            <h3>ANNEXURE – VII: LIABILITY FRAMEWORK</h3>
            <ol>
              <li>Zapnow Payments’ role is limited to technology enablement.</li>
              <li>Zapnow Payments shall not be liable for:
                <ul>
                  <li>Settlement delays, failed refunds, or chargebacks (all handled by Facility Providers).</li>
                  <li>Failures of telecom operators, internet providers, NPCI switches, or bank systems.</li>
                  <li>Any indirect, incidental, or consequential losses.</li>
                </ul>
              </li>
              <li>Zapnow Payments’ total liability under this Agreement shall not exceed one (1) month of technology service fees paid by the Merchant.</li>
            </ol>
          </section>

          <section id="annexure-viii" className="annex">
            <h3>ANNEXURE – VIII: DISPUTE RESOLUTION</h3>
            <ol>
              <li>Any disputes between Customers and Merchants shall be resolved directly between them.</li>
              <li>Zapnow Payments may assist with technology logs but is not a party to Customer disputes.</li>
              <li>Any disputes involving Facility Providers shall be governed by the Facility Provider’s terms.</li>
              <li>Disputes between Zapnow Payments and the Merchant under these Terms shall be subject to arbitration under the Arbitration and Conciliation Act, 1996, seated in Bengaluru, Karnataka.</li>
            </ol>
          </section>

          <section id="annexure-ix" className="annex">
            <h3>ANNEXURE – IX: MERCHANT ONBOARDING ADDENDUM</h3>

            <h4>1. Merchant Due Diligence &amp; KYC</h4>
            <ol>
              <li>As part of onboarding, the Merchant must submit valid KYC documents, including but not limited to:
                <ul>
                  <li>Certificate of Incorporation / Partnership Deed / Proprietorship Proof,</li>
                  <li>PAN, GST registration, Shops &amp; Establishment certificate (where applicable),</li>
                  <li>Identity &amp; Address proof of Authorized Signatories,</li>
                  <li>Bank Account details for settlement (directly with Facility Provider).</li>
                </ul>
              </li>
              <li>Zapnow Payments shall only act as a TSP facilitator in the onboarding process by:
                <ul>
                  <li>Providing an online platform for KYC document collection,</li>
                  <li>Running preliminary technology-enabled checks (OCR, liveness, duplication checks),</li>
                  <li>Forwarding such documents and reports to the relevant Facility Provider.</li>
                </ul>
              </li>
              <li>Final approval or rejection of Merchant onboarding shall be at the sole discretion of the Facility Provider.</li>
            </ol>

            <h4>2. Merchant Categories</h4>
            <ol>
              <li>Merchants are classNameified as per risk categories mandated by Facility Providers (Low, Medium, High Risk).</li>
              <li>Zapnow Payments may assign a risk label in its dashboard for monitoring purposes, but such classNameification shall not be deemed a regulatory underwriting decision.</li>
              <li>Facility Providers retain sole authority to impose additional requirements, hold settlements, or terminate a Merchant relationship based on risk category.</li>
            </ol>

            <h4>3. Prohibited &amp; Restricted Merchants</h4>
            <ol>
              <li>The Merchant agrees not to use the Platform for activities prohibited under Applicable Law or Facility Provider policy, including but not limited to:
                <ul>
                  <li>Gambling, betting, lottery, sweepstakes, games of chance, and fantasy sports (unless specifically permitted by law),</li>
                  <li>Sale of cryptocurrency, NFTs, or other virtual assets,</li>
                  <li>Firearms, ammunition, explosives, or weaponry,</li>
                  <li>Adult content, escort services, or pornography,</li>
                  <li>Counterfeit, stolen, or illegal goods,</li>
                  <li>Pyramid schemes, MLM, or get-rich-quick schemes,</li>
                  <li>Drugs, narcotics, e-cigarettes, and restricted substances,</li>
                  <li>Donations, crowdfunding, or NGOs without requisite licenses.</li>
                </ul>
              </li>
              <li>Zapnow Payments may suspend technology access to Merchants engaging in restricted activities, and shall notify the Facility Provider.</li>
            </ol>

            <h4>4. Merchant Responsibilities During Onboarding</h4>
            <ul>
              <li>The Merchant must ensure that all submitted information is true, accurate, and complete.</li>
              <li>Any false or misleading documentation may lead to immediate suspension of services.</li>
              <li>The Merchant must promptly update Zapnow Payments and the Facility Provider in case of any changes to ownership, business activity, or compliance status.</li>
            </ul>

            <h4>5. Onboarding Timeline &amp; Activation</h4>
            <ul>
              <li>Zapnow Payments shall make best efforts to process onboarding documentation and forward it to the Facility Provider within the agreed timeline.</li>
              <li>Merchant accounts will be activated only upon Facility Provider’s approval.</li>
              <li>Zapnow Payments shall not be liable for delays caused by incomplete documents, regulatory queries, or Facility Provider due diligence.</li>
            </ul>

            <h4>6. Ongoing Monitoring</h4>
            <ul>
              <li>Zapnow Payments may run periodic checks (via automated systems) on Merchant websites, apps, or stores to flag prohibited content.</li>
              <li>Zapnow Payments may share such monitoring results with Facility Providers for compliance review.</li>
              <li>Zapnow Payments may suspend or disable Merchant access to the Platform in case of repeated or high-risk violations.</li>
            </ul>

            <p className="small">This makes it clear and audit-compliant that:</p>
            <ul>
              <li>Zapnow Payments collects, digitizes, and routes KYC,</li>
              <li>Zapnow Payments does not “approve” or “underwrite” merchants (Facility Provider does),</li>
              <li>Prohibited merchants are listed (like Razorpay’s), but Zapnow Payments’ role is to restrict access to its tech services and escalate to Facility Providers.</li>
            </ul>
          </section>

          <section id="annexure-x" className="annex">
            <h3>ANNEXURE – X: RISK &amp; COMPLIANCE FRAMEWORK</h3>

            <h4>1. General Principles</h4>
            <ol>
              <li>Zapnow Payments operates strictly as a Technology Service Provider (TSP) and is not a regulated entity under RBI.</li>
              <li>All statutory obligations relating to Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), Suspicious Transaction Reporting (STR), and Cash Transaction Reporting (CTR) rest with the respective Facility Providers.</li>
              <li>Zapnow Payments supports Facility Providers by providing technology infrastructure, monitoring tools, and alerts to assist in compliance.</li>
            </ol>

            <h4>2. Know Your Customer (KYC)</h4>
            <ol>
              <li>Zapnow Payments collects Merchant KYC documents through its platform and shares them securely with Facility Providers.</li>
              <li>Zapnow Payments may perform preliminary validations (OCR checks, deduplication, liveness verification, etc.), but the final verification rests with Facility Providers.</li>
              <li>Any request for updated documents from regulators or Facility Providers shall be communicated to Merchants via Zapnow Payments’ platform.</li>
            </ol>

            <h4>3. Transaction Monitoring</h4>
            <ol>
              <li>Zapnow Payments may implement automated monitoring tools to identify unusual or potentially suspicious Merchant activity, including:
                <ul>
                  <li>Sudden spikes in transaction volumes,</li>
                  <li>Repeated failed transactions,</li>
                  <li>High chargeback/refund ratios,</li>
                  <li>Use of restricted MCC codes or unusual payment patterns.</li>
                </ul>
              </li>
              <li>Such alerts shall be shared with Facility Providers for review and further regulatory action.</li>
              <li>Zapnow Payments does not file STRs/CTRs directly with FIU-IND or RBI — this obligation lies with Facility Providers.</li>
            </ol>

            <h4>4. Prohibited &amp; High-Risk Activities</h4>
            <ol>
              <li>Merchants must not engage in activities prohibited under Applicable Law (as listed in Annexure IX).</li>
              <li>Zapnow Payments may classNameify certain Merchant categories as “High Risk” based on Facility Provider or regulator guidance, e.g., gaming, forex, remittances, etc.</li>
              <li>Zapnow Payments may suspend or restrict Platform access of such Merchants and escalate findings to Facility Providers.</li>
            </ol>

            <h4>5. Record Keeping &amp; Audit Support</h4>
            <ol>
              <li>Zapnow Payments shall maintain records of:
                <ul>
                  <li>Merchant onboarding documents,</li>
                  <li>API logs, transaction metadata,</li>
                  <li>Monitoring alerts and Merchant correspondence.</li>
                </ul>
              </li>
              <li>These records shall be retained for a minimum of 5 years or longer if required by Facility Providers.</li>
              <li>Zapnow Payments shall provide such records to Facility Providers, auditors, or regulators upon lawful request routed through the Facility Provider.</li>
            </ol>

            <h4>6. Reporting &amp; Escalation</h4>
            <ol>
              <li>Zapnow Payments shall:
                <ul>
                  <li>Escalate suspicious activity alerts to the relevant Facility Provider within agreed SLAs.</li>
                  <li>Cooperate with Facility Providers in case of regulatory inspections or audits.</li>
                  <li>Immediately suspend Merchant access to Services if instructed by Facility Providers or regulators.</li>
                </ul>
              </li>
              <li>Zapnow Payments shall not be liable for regulatory penalties or enforcement arising out of the Merchant’s non-compliance.</li>
            </ol>

            <h4>7. Regulatory Cooperation</h4>
            <ol>
              <li>Zapnow Payments will extend full cooperation to Facility Providers during regulatory audits, inspections, or compliance reviews.</li>
              <li>Any regulator communication received by Zapnow Payments shall be forwarded to the relevant Facility Provider without delay.</li>
            </ol>
          </section>

          <div className="footer">
            {/* <p className="small">End of document.</p> */}
          </div>

        </main>
      </div>

    </>
  );
}
