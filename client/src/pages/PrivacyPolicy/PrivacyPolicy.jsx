import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mx-4 my-32">
        <h1 className="my-10 text-orange-400 font-bold text-3xl text-center">
          Privacy Policy
        </h1>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-400">
            Our privacy policy is designed to address concerns regarding the
            usage of Personally Identifiable Information (PII) online. PII
            refers to information that can be utilized, either alone or in
            conjunction with other data, to identify, contact, or locate an
            individual or to establish their identity within a particular
            context. It is important that you carefully read and understand our
            privacy policy to gain a clear understanding of how we collect, use,
            protect, and handle your Personally Identifiable Information in
            accordance with our website.
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Question: When do we collect information?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            We collect information from you when you place an order, subscribe
            to a newsletter, or enter information on our site.
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Question: How do we use your information?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            We may use the information mentioned above to improve your
            experience on the website, process your order or keep you updated on
            our latest deals.
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Question: How do we use user emails?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            We use them in the following ways:
            <ul className="list-disc ml-4">
              <li>
                Send information, respond to inquiries, and/or other requests or
                questions.
              </li>
              <li>
                Process orders and to send information and updates pertaining to
                orders.
              </li>
              <li>
                Send you additional information related to your product and/or
                service.
              </li>
              <li>
                Market to our mailing list or continue to send emails to our
                clients after the original transaction has occurred.
              </li>
            </ul>
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Question: How do we protect your information?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            We use regular malware scanning regularly to check for security
            holes and known vulnerabilities to make your visit to our site as
            safe as possible. Your personal information is contained behind
            secured networks and is only accessible by a limited number of
            persons who have special access rights to such systems and are
            required to keep the information confidential. Additionally, all
            sensitive/credit information you supply is encrypted via Secure
            Socket Layer (SSL) technology. We implement a variety of security
            measures when a user places an order enters, submits, or accesses
            their information to maintain the safety of your personal
            information. All transactions are processed through a gateway
            provider and are not stored or processed on our servers.
          </p>
        </div>
        <div className="lg:px-60 md:px-20 px-16 my-8">
          <p className="text-gray-500 font-bold text-lg mb-2">
            Question: Do we use cookies?
          </p>
          <p className="text-gray-400">
            <b className="text-gray-500">Answer: </b>
            Yes. Cookies are small files that a site or its service provider
            transfers to your computer’s hard drive through your Web browser (if
            you allow) that enables the site’s or service provider’s systems to
            recognize your browser and capture and remember certain information.
            We use cookies to:
            <ul className="list-disc">
              <li>
                To help us remember and process the items in your shopping cart.
              </li>
              <li>
                They are also used to help us understand your preferences based
                on previous or current site activity, which enables us to
                provide you with improved services.
              </li>
              <li>
                We also use cookies to help us compile aggregate data about site
                traffic and site interaction so that we can offer better site
                experiences and tools in the future.
              </li>
              You can choose to have your computer warn you each time a cookie
              is being sent, or you can choose to turn off all cookies. You do
              this through your browser settings. Since browser is a little
              different, look at your browser’s ‘Help Menu’ to learn the correct
              way to modify your cookies.
            </ul>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
