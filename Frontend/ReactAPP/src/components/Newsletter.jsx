import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // În practică, aici s-ar trimite datele către un server
      console.log(`Email subscribed: ${email}`);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section
      id="newsletter"
      className="py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary bg-opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary bg-opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive content, upcoming events,
            and the latest news from the underground tekno scene.
          </p>

          {subscribed ? (
            <div className="bg-gray-900 border border-primary rounded-lg p-6 mb-8">
              <i className="ri-checkbox-circle-line text-primary text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">
                Thank You for Subscribing!
              </h3>
              <p className="text-gray-400">
                You're now part of the TeKSTROGEN network. Check your inbox for
                a confirmation email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-button focus:outline-none focus:border-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 !rounded-button glow-button whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}

          <div className="text-gray-500 text-sm">
            By subscribing, you agree to receive updates from TeKSTROGEN. We
            respect your privacy and will never share your information.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
