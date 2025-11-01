"use client";
import React from "react";

export default function ResourcesPage() {
  return (
    <section id="onresourcesone">


      {/* hero */}
      <div className="r-hero">
        <div className="r-hero-left">
          <h1>Chargebacks: Understanding and Resolution Process</h1>
          <p className="r-lead">
            Complete guide on chargebacks — what they are, why they happen, how to
            resolve them and how to reduce their impact on your business.
          </p>
          {/* <a href="#pdfcontent" className="r-cta">Read full resource</a> */}
        </div>
        <div className="r-hero-right">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
            alt="payments"
          />
        </div>
      </div>

      {/* full PDF content */}
      <main id="pdfcontent" className="r-content">
        <div className="r-card">

          <article className="r-article">
            <header className="r-article-head">
              <h2>RESOURCES</h2>
              {/* <h3>⚡ Chargebacks: Understanding and Resolution Process</h3> */}
            </header>

            <section className="r-section">
              <h4>What is a Chargeback?</h4>

              <p>
                In simple words, a chargeback is a dispute against a particular transaction raised by the
                cardholder (end-user) and reported to their card issuing bank.1
              </p>

              <p>
                A chargeback is a provision by banks and card networks such as Visa & MasterCard to protect
                buyers from unauthorized or fraudulent payments.2
              </p>

              <p>
                Once the cardholder files a complaint3, their bank reports the same to our Payment Gateway
                (PG) Partner, which initiates an investigative procedure.
              </p>
            </section>

            <section className="r-section">
              <h4>Why Chargeback?</h4>

              <p>
                There could be several reasons for a chargeback against a particular transaction. A list of the
                most common reasons for a chargeback is listed [here].
              </p>

              <p>
                Generally, chargebacks can be associated with unsatisfactory customer service/product or
                poor service delivery experience. Chargebacks can also be filed if the customer suspects
                fraudulent activity on their card.
              </p>
            </section>

            <section className="r-section">
              <h4>Why Avoid Chargebacks?</h4>

              <p>
                It is best to avoid any kind of chargeback, as banks and card networks can label your business
                as a fraudulent/high-risk business, hampering your image. A customer has a timeframe of 120
                days to file a chargeback, which means your sales are reversible for that time period.4
              </p>

              <p>
                A high number of chargebacks can lead to the banks holding remittances for the business as
                well. The worst-case scenario could be a ban of online payment services imposed upon the
                business.
              </p>
            </section>

            <section className="r-section">
              <h4>What’s the Process to Resolve a Chargeback?</h4>

              <p>
                Chargebacks should be considered high-priority issues due to the involvement of risk teams
                of both the customer’s bank as well as our partner banks. As a merchant utilizing Zapnow
                Payments as your TSP, here is the process to resolve disputes/chargebacks:
              </p>

              <h5>Notification about the Dispute</h5>
              <p>
                Our PG Partner will notify you by email/dashboard about the dispute, mentioning the
                payment ID and the reasons for the chargeback, if provided by the bank. To help ensure these
                emails are successfully delivered, please refrain from marking them as spam. Additionally, we
                recommend checking the merchant dashboard daily to action on chargebacks that may be
                missed via emails.
              </p>

              <h5>Review the Chargeback</h5>
              <p>
                In order to represent the chargeback, review the chargeback and explain to us the chain of
                events that took place.6
              </p>

              <p>
                In case the goods/services have not been provided, review the issue and let us know if
                the customer is willing to accept the goods/services.7
              </p>

              <p>
                In case the goods/services have been provided, share the proof of deliveries, invoices,
                any other author8ized proof of product/service delivery.
              </p>

              <p>
                In case of a duplicate payment made, let us know so we can ask the bank to refund the
                amount back to the cardholder.
              </p>

              <h5>Dispute Resolution and Bank Association</h5>
              <p>
                Upon receiving your documentation, we initiate the dispute resolution process. Since we may
                be associated with multiple co-operative banks, the dispute will be raised to the specific
                bank associated with your merchant account to resolve the query. We will represent the
                dispute on your behalf to the respective bank.
              </p>
            </section>

            <section className="r-section">
              <h4>Chargeback Phases and Turnaround Time (TAT)</h4>

              <p><strong>Phase Timeframe</strong></p>

              <div className="table-responsive r-table-wrap">
                <table className="r-table">
                  <thead>
                    <tr>
                      <th>Phase</th>
                      <th>Timeframe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chargeback</td>
                      <td>T+3 Business days</td>
                    </tr>
                    <tr>
                      <td>Pre-Arbitration</td>
                      <td>T+2 Business days</td>
                    </tr>
                    <tr>
                      <td>Arbitration</td>
                      <td>T+1 Business day</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5>Chargeback Documents</h5>
              <p>
                For the chargeback you have received, share all documents as per the requirement of the
                bank with us. Banks generally provide a window of 3 Business days to represent the
                chargebacks. Failure to do so within the specified window will increase the number of
                chargebacks lost by you.9
              </p>

              <p>Click here to view the list of documents10</p>
            </section>

            <section className="r-section">
              <h4>💻 Responding to Disputes via Dashboard</h4>

              <p>
                How to Respond to Disputes/Chargebacks via the Dispute Dashboard?
              </p>

              <p>
                To provide you a seamless experience, all dispute management correspondence has been
                moved to the merchant dashboard. Henceforth, responses received via email will not be
                considered.
              </p>

              <p>Click here to know how to respond to chargebacks on the Dispute Dashboard.</p>

              <p>You can click on the below to perform the following actions:</p>
              <ul>
                <li>View Disputes</li>
                <li>Accept Disputes</li>
                <li>Contest Disputes Using Dashboard</li>
              </ul>

              <h5>Features and Benefits of the Dispute Dashboard</h5>
              <ul>
                <li>Comprehensive Management: Merchants can view, accept, and contest disputes and
                  chargebacks directly from the dashboard.</li>
                <li>Real-time Notifications: Merchants receive real-time notifications for chargebacks and
                  disputes.</li>
                <li>One-Stop Solution: A centralized platform simplifies the process of managing disputes by
                  providing all necessary information in one place.</li>
                <li>Elimination of Email: The need for managing disputes via email is eliminated.</li>
                <li>Faster Resolution: Enables faster resolution on the TAT for closing the chargebacks.</li>
                <li>Easy Review: Allows merchants to easily review the status of chargeback reversals and helps
                  in resolving reconciliation issues.</li>
              </ul>

              <p>
                For a seamless chargeback experience, merchants can integrate the dashboard with their
                systems by using the Dispute APIs provided by our PG Partner.
              </p>
            </section>

            <section className="r-section">
              <h4>🚫 How to Avoid Chargebacks?</h4>

              <p>
                As mentioned above, most of the chargeback cases come up due to miscommunication
                between the buyer and the seller.
              </p>

              <p>Here are a few tips that you can keep in mind to avoid chargebacks:</p>

              <ul>
                <li>Transparent Return Policy: Make sure the return policies are clearly mentioned on the
                  website.11</li>
                <li>Constant &amp; Clear Communication: Keep customers updated regarding the status of their
                  order.12</li>
                <li>Proofs of Delivery: Share tracking numbers, invoices, and all other order-related docs
                  and references with your custo13mers.</li>
              </ul>
            </section>

            <section className="r-section">
              <h4>🌐 Chargebacks on International Transactions</h4>

              <p>
                Cross-border e-commerce comes with risks related to transaction fraud, identity theft fraud, and misuse of policies. Businesses must be aware of the following:
              </p>

              <ol>
                <li>
                  <strong>Type of Authentications for International Transactions (3DS vs. Non-3DS):</strong>
                  <p>
                    3D Secure (3DS) is an additional security step for authentication of the card and cardholder
                    during a Card-Not-Present (CNP)/online transaction. Non-3DS transactions, where the
                    card/cardholder is not verified with 3DS, carry a heightened risk of being reported as
                    fraudulent or charged back. Merchants engaging in cross-border card transactions, especially
                    non-3DS ones, should be diligent, as defending against chargebacks on non-3DS fraud
                    transactions is limited.
                  </p>
                </li>

                <li>
                  <strong>What is a Cross-Border Transaction Chargeback?</strong>
                  <p>
                    An international chargeback is a request to reverse a transaction made using a card issued
                    outside of India (International issuance) because the cardholder disputes the transaction
                    (e.g., unauthorized, or dissatisfied with goods/services).
                  </p>
                </li>

                <li>
                  <strong>How Does a Cross-Border Transaction Differ from a Domestic Transaction Chargeback?</strong>
                  <p>
                    An international chargeback is more complex than a domestic one because it involves a
                    transaction in a different country than the issuing bank, necessitating currency conversion
                    and potentially different laws and regulations.
                  </p>
                </li>

                <li>
                  <strong>How Do I Prevent International Payment Transaction Chargebacks?</strong>
                  <p>
                    Clear Communication: Clearly communicate the terms &amp; conditions of the transaction
                    and refunds/returns in a concise way, including the price, fees, and taxes.
                  </p>
                  <p>
                    Authorization: Ensure that the cardholder has authorized the transaction.
                  </p>
                  <p>
                    Quality: Provide high-quality goods or services that meet the expectations of the
                    cardholder.
                  </p>
                  <p>
                    Prompt Response: Respond promptly to any customer complaints or disputes.
                  </p>
                </li>

                <li>
                  <strong>How Can a Merchant Resolve an International Transaction Chargeback?</strong>
                  <p>
                    Respond promptly and provide relevant documentation to support your case, including (but
                    not limited to):
                  </p>
                  <ul>
                    <li>Proof of cross-border delivery</li>
                    <li>Customs clearance copy</li>
                    <li>Proof of authorization by the customer</li>
                    <li>A copy of the terms and conditions of the transaction</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="r-section">
              <h4>💰 Financial Impact</h4>

              <p>
                In the event that chargebacks remain unaddressed within the stipulated deadline or if
                insufficient documentation results in a chargeback loss, a corresponding amount will be
                deducted or adjusted from the merchant. Additionally, any fees and penalties imposed by the
                networks relevant to the chargeback stage will be recovered from the merchant.
              </p>

              <p>Fees &amp; Penalties for Dispute Stages</p>

              <div className="table-responsive r-table-wrap">
                <table className="r-table detailed">
                  <thead>
                    <tr>
                      <th>Dispute Stages</th>
                      <th>Mastercard</th>
                      <th>Visa</th>
                      <th>Rupay</th>
                      <th>UPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Chargeback</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>NA</td>
                    </tr>
                    <tr>
                      <td>Pre Arbitration</td>
                      <td>USD 15.00</td>
                      <td>USD 0.75</td>
                      <td>NA</td>
                      <td>NA</td>
                    </tr>
                    <tr>
                      <td>Arbitration</td>
                      <td>USD 675.00</td>
                      <td>USD 600.00</td>
                      <td>Rs 3000.00 Arbitration acceptance / NRP Fees of 500 + GST & PRD Fees of 3,000 + GST per arbitration.</td>
                      <td>NA</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                *Note- Visa has updated the Arbitration Penalty fees from $500 to $600. The change in
                arbitration fee will be effective from 01st October 24 onwards.
              </p>

              <p>Click here to view the in-detail Pre-Arbitration and Arbitration Network Fee Breakup</p>
            </section>

            <section className="r-section">
              <h4>Deduct at Onset (DAO)</h4>

              <p>
                When the dispute is initiated, our PG Partner will deduct the disputed amount along with any
                associated fees from the merchant’s account. This deduction covers future liabilities until the
                chargeback is resolved, a process usually followed to guarantee sufficient funds to cover any
                disputed transactions. The funds that are/were withheld are returned to the merchant’s
                account after the chargeback concludes in the merchant’s favor.
              </p>

              <h4>Chargeback Clause</h4>

              <p>
                Debit Reversal: If the decision results in the merchant's favor, our PG Partner will credit
                the previously debited amount back to the merchant’s account. Due to the involvement
                of multiple stakeholders, the debit reversal may take up to 30 days from the date of
                dispute representation.
              </p>

              <p>
                Chargeback Acceptance: When a merchant accepts a chargeback, our PG Partner notifies
                the customer’s bank (issuing bank) through the partner acquiring bank. The network
                association and the issuing bank will determine the refund amount and the timelines. This
                is beyond the scope of visibility or control of our PG Partner. You, as the merchant
                partner, are requested to guide your customers to reach out to their respective banks for
                all updates regarding refunds.
              </p>
            </section>
            <div className="r-accent">
              <img
                src="img/contact.jpg"
                alt="accent"
              />
            </div>
            <section className="r-section" id="contact">
              <h4>📞 Contact Information</h4>

              <p>
                You can reach out to the Chargebacks Team via email at <a href="mailto:chargebacks@zapnowpayments.com">chargebacks@zapnowpayments.com</a> (or the designated email provided by your PG Partner) for any chargeback-related queries. To ensure important information is not flagged as junk or spam, kindly whitelist this email ID.
              </p>

              <p>
                Do you need me to adjust the generic contact email placeholder, or would you like to review the section on Dispute Resolution and Bank Association?
              </p>
            </section>

          </article>
        </div>

        {/* accent image (kept minimal) */}

      </main>

    </section>
  );
}
