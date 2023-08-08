/* eslint-disable max-len */
import { FC, useEffect } from 'react'
import { classNames } from '../../components/classNames/classNames';
import cls from './ToS.module.scss'


interface MainPageProps {
    className?: string;
}

const ToS: FC<MainPageProps> = ({ className }) => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <main id='start3'  className={classNames("page-wrapper", {}, [className])}>
            <div className={cls.container}>
                <h1>Terms of Service</h1>
                <p>
                    Please read these Terms of Service (these “Terms”) carefully. These Terms govern Flaire’s provision of software and services, and Customer’s (as defined below) use thereof, as set forth in an Order Form (as defined below) executed between Flaire Software, Inc. (“Flaire” or “we”) and Customer.  TOGETHER, THESE TERMS AND ANY ORDER FORM(S) CONSTITUTE THE “AGREEMENT.” THE AGREEMENT IS EFFECTIVE AS OF THE ORDER FORM EFFECTIVE DATE (AS DEFINED AND SET FORTH IN THE INITIAL ORDER FORM).  CAPITALIZED TERMS USED BUT NOT DEFINED HEREIN SHALL HAVE THE MEANINGS GIVEN TO THEM IN THE ORDER FORM.<br /> <br />
                    BY EXECUTING AN ORDER FORM THAT INCORPORATES THESE TERMS BY REFERENCE AND/OR OTHERWISE USING THE SERVICES, THE INDIVIDUAL OR ENTITY OBTAINING THE RIGHT TO ACCESS SUCH SERVICES (“CUSTOMER” or “YOU”) IS AGREEING TO BE BOUND BY AND IS A PARTY TO THIS AGREEMENT. IF THE INDIVIDUAL SIGNING THE ORDER FORM FOR CUSTOMER IS SIGNING ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, SUCH INDIVIDUAL REPRESENTS THAT HE OR SHE HAS THE AUTHORITY TO BIND THAT COMPANY OR OTHER LEGAL ENTITY.  IF YOU DO NOT AGREE TO BE BOUND BY THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICES.<br /> <br />
                    CERTAIN ASPECTS OF THE SERVICES ARE PROVIDED WITH OR OTHERWISE COMPATIBLE WITH CERTAIN SERVICES OWNED OR CONTROLLED BY THIRD PARTIES.  YOUR USE OF THOSE THIRD-PARTY SERVICES WILL BE GOVERNED BY THOSE LICENSES, AND NOT THIS AGREEMENT.<br /> <br />
                    YOU MAY NOT ACCESS THE SERVICES IF YOU ARE A DIRECT COMPETITOR OF FLAIRE, EXCEPT WITH FLAIRE’S PRIOR WRITTEN CONSENT. IN ADDITION, YOU MAY NOT ACCESS THE SERVICES FOR PURPOSES OF MONITORING THEIR AVAILABILITY, PERFORMANCE OR FUNCTIONALITY, OR FOR ANY OTHER BENCHMARKING OR COMPETITIVE PURPOSES.<br /> <br />
                </p>
 
                <h2>1. Defenitions. </h2>
                <p>
                    Capitalized terms will have the meanings set forth in this section, or in the section where they are first used. <br /> <br />
                    “Access Protocols” means the passwords, access codes, technical specifications, connectivity standards or protocols, or other relevant procedures, as may be necessary to allow Customer or any Authorized Users to access the Flaire Solution. <br /> <br />
                    “Applicable Data Protection Laws” means any applicable US state laws, regulations, orders, or judgments issued by a governmental authority that govern the privacy, security, confidentiality, protection, Processing or transfer of Personal Data. <br /> <br />
                    “Authorized User” means each of Customer’s employees, agents, and independent contractors who are authorized to access the Flaire Solution pursuant to Customer’s rights under this Agreement. <br /> <br />
                    “Customer Content” means any content and information provided or submitted by, or on behalf of, Customer or its Authorized Users for use with the Services. <br /> <br />
                    “Documentation” means the technical materials provided by Flaire to Customer, if any, in hard copy or electronic form describing the use and operation of the Flaire Solution. <br /> <br />
                    “Intellectual Property Rights” means any and all now known or hereafter existing (a) rights associated with works of authorship, including copyrights, mask work rights, and moral rights; (b) trademark or service mark rights; (c) trade secret rights; (d) patents, patent rights, and industrial property rights; (e) layout design rights, design rights, and other proprietary rights of every kind and nature other than trademarks, service marks, trade dress, and similar rights; and (f) all registrations, applications, renewals, extensions, or reissues of the foregoing, in each case in any jurisdiction throughout the world. <br /> <br />
                    “Licensed Material” means results, reports, materials and documentation made available to Customer as part of the Services. <br /> <br />
                    “Order Form” means an order form that is signed by both parties and references this Agreement. <br /> <br />
                    “Personal Data” means any Customer Content, whether in electronic or paper-based form that constitutes “personal data,” “personal information,” or “personally identifiable information” or similar information governed by Applicable Data Protection Laws.  For clarity, Personal Data does not include information pertaining to Customer’s business contacts and/or representatives who are Customer personnel where Flaire has determined what information to collect and for what purposes. <br /> <br />
                    “Processing” (including “Process”, “Processes”, “Processed”, and other variants of the term) means any operation or set of operations that is performed upon Personal Data, whether or not by automatic means, such as collection, collation, recording, organization, storage, adaptation or alteration, retrieval, consultation, analysis, interpretation, compilation, aggregation, use, disclosure by transmission, dissemination, viewing, copying, deleting, or otherwise making available, alignment or combination, blocking or erasure, or destruction. <br /> <br />
                    “Professional Services” means professional services provided by Flaire to Customer as described in any Order Form (as may be further elaborated in any SOW), including services relating to the Flaire Solution and support, implementation, training, and on-boarding thereof. <br /> <br />
                    “Services” means any services provided by Flaire to Customer under this Agreement as set forth in an Order Form, including, but not limited to, provision of the Flaire Solution and Professional Services. <br /> <br />
                    “Flaire Platform” means the software-as-a-service application identified in any Order Form that allows Authorized Users to access certain features and functions through a web interface or mobile application. <br /> <br />
                </p>
                <h2>2. Provision of services</h2>
                <p>
                    <b>2.1 Access.</b> Subject to Customer’s payment of the fees set forth in the Order Form (“Fees”), Flaire will provide Customer with access to the Flaire Solution via a web browser. On or as soon as reasonably practicable after the Commencement Date, Flaire will provide to Customer the necessary passwords, security protocols and policies and network links or connections and Access Protocols to allow Customer and its Authorized Users to access the Flaire Solution in accordance with the Access Protocols; provided that nothing herein will be construed to require Flaire to provide, or bear any responsibility with respect to, any telecommunications or computer network hardware required by Customer or any Authorized User to access the Flaire Solution from the Internet. <br /> <br />
                    <b>2.2 Support Services.</b> Subject to the terms and conditions of this Agreement, Flaire will exercise commercially reasonable efforts to (a) provide support for the use of the Flaire Solution to Customer, and (b) keep the Flaire Solution operational and available to Customer, in each case in accordance with its then-current standard policies and procedures. <br /> <br />
                </p>
                <h2>3. Intellectual property.</h2>
                <p>
                    <b> 3.1 License Grant.</b> Subject to the terms and conditions of this Agreement, Flaire grants to Customer a non-exclusive, non-transferable (except as permitted under Section 13.5 (No Assignment)) license during the Term (as defined below), solely for Customer’s internal business purposes and in accordance with the limitations (if any) set forth in the Order Form, (a) to access and use the Flaire Solution and in accordance with the Documentation; and (b) to use and reproduce a reasonable number of copies of the Documentation solely to support Customer’s use of the Flaire Solution. Customer may permit any Authorized Users to access and use the features and functions of the Flaire Solution as contemplated by this Agreement; provided Customer will be solely responsible for all acts or omissions of its Authorized Users with respect to the use of the Flaire Solution.<br /> <br />
                    <b>3.2 Restrictions.</b> Customer will not, and will not permit any Authorized User or other party to: (a) allow any third party to access the Flaire Solution, Licensed Material or Documentation, except as expressly allowed herein; (b) modify, adapt, alter or translate the Flaire Solution, Licensed Material or Documentation; (c) sublicense, lease, sell, resell, rent, loan, distribute, transfer or otherwise allow the use of the Flaire Solution or Documentation for the benefit of any unauthorized third party; (d) reverse engineer, decompile, disassemble, or otherwise derive or determine or attempt to derive or determine the source code (or the underlying ideas, algorithms, structure or organization) of the Flaire Solution, except as permitted by law; (e) interfere in any manner with the operation of the Flaire Solution or the hardware and network used to operate the Flaire Solution; (f) modify, copy or make derivative works based on any part of the Flaire Solution or Documentation; (g) access or use the Flaire Solution to build a similar or competitive product or service; (h) attempt to access the Flaire Solution through any unapproved interface; or (i) otherwise use the Flaire Solution, Licensed Material, or Documentation in any manner that exceeds the scope of use permitted under Section 3 (License Grant) or in a manner inconsistent with applicable law (including, without limitation, Applicable Data Protection Laws), the Documentation, or this Agreement. Customer will not remove, alter, or obscure any proprietary notices (including copyright and trademark notices) of Flaire or its licensors on the Licensed Material or any copies thereof.<br /> <br />
                    <b>3.3 Ownership.</b> The Flaire Solution, Licensed Materials and Documentation, and all enhancements and improvements thereto, and worldwide Intellectual Property Rights in each of the foregoing, are the exclusive property of Flaire and its suppliers. All rights in and to the Flaire Solution and Documentation not expressly granted to Customer in this Agreement are reserved by Flaire and its suppliers. Except as expressly set forth herein, no express or implied license or right of any kind is granted to Customer regarding the Flaire Solution, Documentation, or any part thereof.<br /> <br />
                    <b>3.4 License to Licensed Material.</b>  Subject to the terms and conditions of this Agreement, Flaire grants Customer a perpetual, royalty-free, fully-paid, nonexclusive, non-transferable (except as permitted under Section 13.5 (No Assignment)), non-sublicensable license to use the Licensed Material solely for Customer’s internal business purposes.<br /> <br />
                    <b>3.5 Open Source Software.</b> Certain items of software may be provided to Customer with the Flaire Solution and are subject to “open source” or “free software” licenses (“Open Source Software”). Some of the Open Source Software is owned by third parties. The Open Source Software is not subject to the terms and conditions of Sections 3.3 (Ownership) or 11 (Indemnification). Instead, each item of Open Source Software is licensed under the terms of the end-user license that accompanies such Open Source Software. Nothing in this Agreement limits Customer’s rights under, or grants Customer rights that supersede, the terms and conditions of any applicable end user license for the Open Source Software. If required by any license for particular Open Source Software, Flaire makes such Open Source Software, and Flaire’s modifications to that Open Source Software, available by written request at the notice address specified below.<br /> <br />
                    <b>3.6 Feedback.</b> Customer hereby grants to Flaire a royalty-free, worldwide, transferable, sublicensable, irrevocable, perpetual license to use or incorporate into the Services any suggestions, enhancement requests, recommendations or other feedback provided by Customer, including Authorized Users, relating to the Services.  Flaire will not identify Customer as the source of any such feedback.<br /> <br />
                </p>
                <h2>4. Fees and expenses; Payments.</h2>
                <p>
                    <b>4.1 Fees.</b> In consideration for the access rights granted to Customer and the Services performed by Flaire under this Agreement, Customer will pay to Flaire the Fees. Except as otherwise provided in the Order Form, all Fees are billed monthly and due and payable within thirty (30) days of the date of the invoice.  Flaire reserves the right to modify the Fees payable hereunder upon written notice to Customer at least forty-five (45) days prior to the end of the then-current term.  Flaire will be reimbursed only for expenses that are expressly provided for in an Order Form or SOW or that have been approved in advance in writing by Customer, provided Flaire has furnished such documentation for authorized expenses as Customer may reasonably request.  Flaire reserves the right (in addition to any other rights or remedies Flaire may have) to discontinue the Flaire Solution and suspend all Authorized Users’ and Customer’s access to the Services if any Fees are more than thirty (30) days overdue until such amounts are paid in full. Customer will maintain complete, accurate and up-to-date Customer billing and contact information at all times.  Except as provided in an Order Form, fees are not refundable. <br /><br />
                    <b>4.2 Payment Processing.</b> From time to time Flaire may use certain third parties to provide payment services (e.g., card acceptance, merchant settlement and related services) (“Payment Processors”).  By selecting certain billing and/or payments features, Customer agrees to comply with the terms and conditions and policies of the Payment Processors used by Flaire, and hereby consents and authorizes Flaire to share any information and payment instructions provided herein with Payment Processors to the minimum extent required to complete Customer’s transactions hereunder. <br /><br />
                    <b>4.3 Taxes.</b> The Fees are exclusive of all applicable sales, use, value-added and other taxes, and all applicable duties, tariffs, assessments, export and import fees, or other similar charges, and Customer will be responsible for payment of all such taxes (other than taxes based on Flaire’s income), fees, duties, and charges and any related penalties and interest, arising from the payment of the fees, the provision of the Services, or the license of the Flaire Solution to Customer. Customer will make all payments of Fees to Flaire free and clear of, and without reduction for, any withholding taxes; any such taxes imposed on payments of Fees to Flaire will be Customer’s sole responsibility, and Customer will provide Flaire with official receipts issued by the appropriate taxing authority, or such other evidence as the Flaire may reasonably request, to establish that such taxes have been paid. <br /><br />
                    <b>4.4 Interest.</b> Any amounts not paid when due will bear interest at the rate of one and one half percent (1.5%) per month, or the maximum legal rate if less, from the due date until paid. <br /><br />
                </p>
                <h2>5. Customer content and responsibilities.</h2>
                <p>
                    <b>5.1 License; Ownership.</b> Customer is solely responsible for any and all obligations with respect to the accuracy, quality and legality of Customer Content.  Customer will obtain all third party licenses, consents and permissions needed for Flaire to collect, access, use, and otherwise Process the Customer Content to provide the Services.  Without limiting the foregoing, Customer will be solely responsible for providing all notices to, and obtaining from, third parties, including, without limitations its customers, all necessary rights and consents for Flaire to use the Customer Content for the purposes set forth in this Agreement (including, without limitation, all notices and consents required under Applicable Data Protection Laws). Customer grants Flaire a non-exclusive, worldwide, royalty-free and fully paid license during the Term (a) to use the Customer Content as necessary for purposes of providing and improving the Services, (b) to use the Customer trademarks, service marks, and logos as required to provide the Services, or in promotional materials marketing websites and the like, and (c) derive aggregated, de-identified and/or anonymized data from Customer Content (“Derived Data”). Flaire will be the sole owner of all such Derived Data and will have the right to use such Derived Data for any lawful business purpose. The Customer Content, and all worldwide Intellectual Property Rights in it, is the exclusive property of Customer. All rights in and to the Customer Content not expressly granted to Flaire in this Agreement are reserved by Customer. <br /><br />
                    <b>5.2 Customer Warranty.</b> Customer represents and warrants that any Customer Content will not (a) infringe any copyright, trademark, or patent; (b) misappropriate any trade secret; (c) be deceptive, defamatory, obscene, pornographic or unlawful; (d) contain any viruses, worms or other malicious computer programming codes intended to damage Flaire’s system or data; and (e) otherwise violate the rights of a third party. Flaire is not obligated to back up any Customer Content; the Customer is solely responsible for creating backup copies of any Customer Content at Customer’s sole cost and expense. Customer agrees that any use of the Flaire Solution contrary to or in violation of the representations and warranties of Customer in this Section 5.2 Customer Warranty) constitutes unauthorized and improper use of the Flaire Solution. <br /><br />
                    <b>5.3 Customer Responsibility for Data and Security</b>. Customer and its Authorized Users will have access to the Customer Content and will be responsible for all changes to and/or deletions of Customer Content and the security of all passwords and other Access Protocols required in order the access the Flaire Solution. Customer will have the ability to export its own Customer Content out of the Flaire Solution and is encouraged to make its own back-ups of the Customer Content. Customer will have the sole responsibility for the accuracy, quality, integrity, legality, reliability, and appropriateness of all Customer Content. <br /> <br />
                    <b>5.4 Customer Responsibility for Operating its Own Business.</b>  Customer acknowledges that it, and not Flaire, is responsible for operating Customer’s own business, including with respect to obtaining all licenses, permits and other governmental registrations to enable its use of the Services.  The Flaire Solution is not intended to be used as advice as to whether to engage in any particular transaction. <br /><br />
                </p>
                <h2>
                    6. Professional services.
                </h2>
                <p> 
                    Where the parties have agreed to Flaire’s provision of Professional Services, the details of such Professional Services will be set out in an Order Form or a mutually executed statement of work (“SOW”).  The Order Form or SOW, as applicable, will include: (a) a description of the Professional Services; (b) the schedule for the performance of the Professional Services; and (c) the Fees applicable for the performance of the Professional Services. Each Order Form or SOW, as applicable, will incorporate the terms and conditions of this Agreement.  To the extent that a conflict arises between the terms and conditions of an Order Form or SOW and the terms of this Agreement, the terms and conditions of this Agreement will govern, except to the extent that the Order Form or SOW, as applicable, expressly states that it supersedes specific language in the Agreement. <br /><br />
                </p>
                <h2>7. Data security; Privacy.</h2>
                <p>
                    <b>7.1 Data Security.</b> During the Term, Flaire will maintain commercially reasonable safeguards and procedures designed to prevent the unauthorized use or disclosure of Personal Data (“Data Safeguards”). During the Term, Flaire will maintain commercially reasonable physical, administrative and technical security measures designed to maintain the availability, integrity and confidentiality of Personal Data. <br /><br />
                    <b>7.2  Privacy.</b> Without limiting Customer’s obligations under Sections 2 (Provision of Services), and 2.1 (Intellectual Property), each party shall comply with all Applicable Data Protection Laws in the performance of their respective obligations under this Agreement with respect to the Processing of Personal Data. The sale, retention, use or disclosure of Personal Data shall be governed by this Agreement and, as applicable, Flaire’s Privacy Policy, as in effect from time to time. <br /><br />
                    <b>7.3 Additional Agreements.</b> To the extent that Flaire or Customer reasonably determine that Applicable Data Protection Laws require the parties to execute any additional agreements governing Personal Data, the parties agree to negotiate in good faith with respect to such additional agreements. <br /><br />
                </p>
                <h2>
                    8. Disclaimer.
                </h2>
                <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES, LICENSED MATERIAL AND DOCUMENTATION ARE PROVIDED “AS IS,” WITHOUT ANY CONDITION OR WARRANTY WHATSOEVER. THE ENTIRE RISK ASSOCIATED WITH THE USE OF THE SERVICES RESIDES WITH CUSTOMER. FLAIRE EXPRESSLY DISCLAIMS ALL OTHER REPRESENTATIONS OR WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF TITLE, NON-INFRINGEMENT, NON-INTERFERENCE AND/OR QUIET ENJOYMENT, SYSTEM INTEGRATION, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND DATA ACCURACY.  FLAIRE DOES NOT WARRANT THAT OPERATION OF THE FLAIRE SOLUTION WILL BE UNINTERRUPTED OR ERROR-FREE. <br /><br />
                </p>
                <h2>9. Limitations of liability.</h2>
                <p>
                    <b>9.1 Types of Damages.</b> IN NO EVENT WILL EITHER PARTY BE LIABLE TO THE OTHER PARTY FOR ANY INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, REGARDLESS OF THE NATURE OF THE CLAIM, INCLUDING, WITHOUT LIMITATION, LOST PROFITS, COSTS OF DELAY, ANY FAILURE OF DELIVERY, BUSINESS INTERRUPTION, COSTS OF LOST OR DAMAGED DATA OR DOCUMENTATION, OR LIABILITIES TO THIRD PARTIES ARISING FROM ANY SOURCE, EVEN IF A PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.  THIS LIMITATION UPON DAMAGES AND CLAIMS IS INTENDED TO APPLY WITHOUT REGARD TO WHETHER OTHER PROVISIONS OF THIS AGREEMENT HAVE BEEN BREACHED OR HAVE PROVEN INEFFECTIVE. <br /><br />
                    <b>9.2 Amount of Damages.</b> THE MAXIMUM LIABILITY OF EITHER PARTY ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT WILL NOT EXCEED THE FEES PAID BY CUSTOMER TO FLAIRE DURING THE TWELVE (12) MONTHS PRECEDING THE ACT, OMISSION OR OCCURRENCE GIVING RISE TO SUCH LIABILITY. IN NO EVENT WILL FLAIRE’S SUPPLIERS HAVE ANY LIABILITY ARISING OUT OF OR IN ANY WAY CONNECTED TO THIS AGREEMENT. <br /><br />
                    <b>9.3 Basis of the Bargain.</b> The parties agree that the limitations of liability set forth in this Section 9 (Limitation of Liability) will survive and continue in full force and effect despite any failure of consideration or of an exclusive remedy. The parties acknowledge that the prices have been set and the Agreement entered into in reliance upon these limitations of liability and that all such limitations form an essential basis of the bargain between the parties. <br /><br />
                </p>
                <h2>10. Confidentiality.</h2>
                <p>
                    <b>10.1 Confidential Information.</b> “Confidential Information” means any nonpublic information of a party (the “Disclosing Party”), whether disclosed orally or in written or digital media, that is identified as “confidential” or with a similar legend at the time of such disclosure or that the receiving party (the “Receiving Party”) knows or should have known is the confidential or proprietary information of the Disclosing Party. The Services, Documentation, and all enhancements and improvements thereto will be considered Confidential Information of Flaire. <br /><br />
                    <b>10.2 Protection of Confidential Information.</b> The Receiving Party agrees that it will not use or disclose to any third party any Confidential Information of the Disclosing Party, except as expressly permitted under this Agreement. The Receiving Party will limit access to the Confidential Information to Authorized Users (with respect to Customer) or to those employees who have a need to know, who have confidentiality obligations no less restrictive than those set forth herein, and who have been informed of the confidential nature of such information (with respect to Flaire). In addition, the Receiving Party will protect the Disclosing Party’s Confidential Information from unauthorized use, access, or disclosure in the same manner that it protects its own proprietary information of a similar nature, but in no event with less than reasonable care. At the Disclosing Party’s request or upon termination or expiration of this Agreement, the Receiving Party will return to the Disclosing Party or destroy (or permanently erase in the case of electronic files) all copies of the Confidential Information that the Receiving Party does not have a continuing right to use under this Agreement, and the Receiving Party will, upon request, certify to the Disclosing Party its compliance with this sentence. <br /><br />
                    <b>10.3 Exceptions.</b> The confidentiality obligations set forth in Section 10.2 (Protection of Confidential Information) will not apply to any information that (a) is at the time of disclosure or becomes generally available to the public through no fault of the Receiving Party; (b) is lawfully provided to the Receiving Party by a third party free of any confidentiality duties or obligations; (c) was already known to the Receiving Party at the time of disclosure free of any confidentiality duties or obligations; or (d) the Receiving Party can demonstrate, by clear and convincing evidence, was independently developed by employees and contractors of the Receiving Party who had no access to the Confidential Information. In addition, the Receiving Party may disclose Confidential Information to the extent that such disclosure is necessary for the Receiving Party to enforce its rights under this Agreement or is required by law or by the order of a court or similar judicial or administrative body, provided that (to the extent legally permissible) the Receiving Party promptly notifies the Disclosing Party in writing of such required disclosure and cooperates with the Disclosing Party if the Disclosing Party seeks an appropriate protective order. <br /><br />
                </p>
                <h2>11. Indemnification.</h2>
                <p>
                    <b>11.1 By Flaire.</b> Flaire will defend at its expense any suit brought against Customer, and will pay any settlement Flaire makes or approves, or any damages finally awarded in such suit, insofar as such suit is based on a claim by any third party alleging that the Flaire Solution infringes such third party’s patents, copyrights or trade secret rights under applicable laws of any jurisdiction within the United States of America. If any portion of the Flaire Solution becomes, or in the opinion of Flaire is likely to become, the subject of a claim of infringement, Flaire may, at the option of Flaire: (a) procure for Customer the right to continue using the Flaire Solution; (b) replace the Flaire Solution with non-infringing software or services which do not materially impair the functionality of the Flaire Solution; (c) modify the Flaire Solution so that it becomes non-infringing; or (d) terminate this Agreement and refund any unused prepaid Fees for the remainder of the term then in effect, and upon such termination, Customer will immediately cease all use of the Flaire Solution and Documentation. Notwithstanding the foregoing, Flaire will have no obligation under this section or otherwise with respect to any infringement claim based upon (i) any use of the Flaire Solution not in accordance with this Agreement or as specified in the Documentation; (ii) any use of the Flaire Solution in combination with other products, equipment, software or data not supplied by Flaire; or (iii) any modification of the Flaire Solution by any person other than Flaire or its authorized agents (collectively, the “Exclusions” and each, an “Exclusion”). This section states the sole and exclusive remedy of Customer and the entire liability of Flaire, or any of the officers, directors, employees, shareholders, contractors or representatives of the foregoing, for infringement claims and actions. <br /> <br />
                    <b>11.2 By Customer.</b> Customer will defend at its expense any suit brought against Flaire, and will pay any settlement Customer makes or approves, or any damages finally awarded in such suit, insofar as such suit is based on a claim arising out of or relating to (a) an Exclusion, (b) Customer’s breach or alleged breach of Sections 5.2 (Customer Warranty) or 14.6 (Compliance with Law); or (c) claims for bodily injury or damage to physical property, to the extent (i) alleged to be caused by Customer’s or any other party’s use of the Flaire Solution; or (ii) caused by the acts or omissions of Customer, its employees, officers or agents. This section states the sole and exclusive remedy of Flaire and the entire liability of Customer, or any of the officers, directors, employees, shareholders, contractors or representatives of the foregoing, for the claims and actions described herein. <br /> <br />
                    <b>11.3 Procedure.</b> The indemnifying party’s obligations as set forth above are expressly conditioned upon each of the foregoing: (a) the indemnified party will promptly notify the indemnifying party in writing of any threatened or actual claim or suit; (b) the indemnifying party will have sole control of the defense or settlement of any claim or suit; and (c) the indemnified party will cooperate with the indemnifying party to facilitate the settlement or defense of any claim or suit. <br /> <br />
                </p>
                <h2>12. Term and termination.</h2>
                <p>
                    <b>12.1 Term.</b> This Agreement will begin on the Order Form Effective Date and continue in full force and effect as long as any Order Form remains in effect, unless earlier terminated in accordance with this Agreement (the “Term”). Unless otherwise stated in the applicable Order Form, the term of an Order Form will begin on the Commencement Date set forth in the Order Form and continue in full force and effect for one (1) year, unless earlier terminated in accordance with this Agreement. Thereafter, the Order Form will automatically renew for additional terms of one (1) year unless either party gives written notice of non-renewal to the other party at least thirty (30) days prior to the expiration of the then-current term. <br /><br />
                    <b>12.2 Termination for Breach.</b> Either party may terminate this Agreement immediately upon notice to the other party if the other party materially breaches this Agreement, and such breach remains uncured more than thirty (30) days after receipt of written notice of such breach. <br /><br />
                    <b>12.3 Effect of Termination.</b> Upon termination or expiration of this Agreement for any reason: (a) all licenses granted hereunder will immediately terminate; (b) promptly after the effective date of termination or expiration, each party will comply with the obligations to return all Confidential Information of the other party, as set forth in Section 10 (Confidentiality); and (c) any amounts owed to Flaire under this Agreement will become immediately due and payable. Sections 1 (Definitions), 3.2 (Restrictions), 3.3 (Ownership), 3.5 (Open Source Software), 4 (Fees and Expenses; Payments), 8 (Disclaimer), 9 (Limitation of Liability), 10 (Confidentiality), 11 (Indemnification), 12.2 (Termination for Breach), 12.3 (Effect of Termination), and 13 (Miscellaneous) will survive expiration or termination of this Agreement for any reason. <br /><br />
                    <b>12.4 Data Extraction.</b>  For twenty (20) days after the end of the Term, as applicable, Flaire will make Customer Content available to Customer through the Flaire Solution on a limited basis solely for purposes of Customer retrieving Customer Content, unless Flaire is instructed by Customer to delete such data before that period expires. After such period, Flaire will discontinue all use of Customer Content and destroy all copies of Customer Content in its possession. <br /><br />
                </p>

                <h2>13. Miscellaneous.</h2>
                <p>
                    <b>13.1 Governing Law and Venue.</b> This Agreement and any action related thereto will be governed and interpreted by and under the laws of the State of Delaware, without giving effect to any conflicts of laws principles that require the application of the law of a different jurisdiction. Customer hereby expressly consents to the personal jurisdiction and venue in the state and federal courts for New Castle County, Delaware for any lawsuit filed there against Customer by Flaire arising from or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.<br /> <br />
                    <b>13.1 Export.</b> Customer agrees not to export, reexport, or transfer, directly or indirectly, any U.S. technical data acquired from Flaire, or any products utilizing such data, in violation of the United States export laws or regulations.<br /> <br />
                    <b>13.1 Severability.</b> If any provision of this Agreement is, for any reason, held to be invalid or unenforceable, the other provisions of this Agreement will remain enforceable and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.<br /> <br />
                    <b>13.1 Waiver.</b> Any waiver or failure to enforce any provision of this Agreement on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion. <br /> <br />
                    <b>13.1 No Assignment.</b> Neither party will assign, subcontract, delegate, or otherwise transfer this Agreement, or its rights and obligations herein, without obtaining the prior written consent of the other party, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void; provided, however, that either party may assign this Agreement in connection with a merger, acquisition, reorganization or sale of all or substantially all of its assets, or other operation of law, without any consent of the other party. The terms of this Agreement will be binding upon the parties and their respective successors and permitted assigns.<br /> <br />
                    <b>13.1 Compliance with Law.</b> Customer will, and will ensure that all Authorized Users, always comply with all foreign and domestic laws, ordinances, regulations, and statutes that are applicable to its and their purchase and use of the Services, Licensed Material and Documentation.<br /> <br />
                    <b>13.1 Force Majeure.</b> Any delay in the performance of any duties or obligations of either party (except the payment of Fees owed) will not be considered a breach of this Agreement if such delay is caused by a labor dispute, shortage of materials, fire, earthquake, flood, or any other event beyond the control of such party, provided that such party uses reasonable efforts, under the circumstances, to notify the other party of the cause of such delay and to resume performance as soon as possible.<br /> <br />
                    <b>13.1 Independent Contractors.</b> Customer’s relationship to Flaire is that of an independent contractor, and neither party is an agent or partner of the other. Customer will not have, and will not represent to any third party that it has, any authority to act on behalf of Flaire.<br /> <br />
                    <b>13.1 Notices.</b> All notices required or permitted under this agreement must be delivered in writing, if to Flaire, by emailing [reena@flairesoftware.com] and if to Customer by emailing the Customer Point of Contact email address listed on the Cover Page, provided, however, that with respect to any notices relating to breaches of this agreement or termination, a copy of such notice will also be sent in writing to the other party at the address listed on the Cover Page by courier, by certified or registered mail (postage prepaid and return receipt requested), or by a nationally-recognized express mail service. Each party may change its email address and/or address for receipt of notice by giving notice of such change to the other party.<br /> <br />
                    <b>13.1 Entire Agreement.</b> This Agreement is the final, complete and exclusive agreement of the parties with respect to the subject matters hereof and supersedes and merges all prior discussions between the parties with respect to such subject matters. No modification of or amendment to this Agreement, or any waiver of any rights under this Agreement, will be effective unless in writing and signed by an authorized signatory of Customer and the Flaire.<br /> <br />
                </p>
            </div>
        </main>
    )
}

export default ToS;