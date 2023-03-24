import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_45naj24",
        "template_1q95ojc",
        form.current,
        "Ij4xt-4bSVpNliDL7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
    setSent(true);
  };

  return (
    <div id="contact" className="antialiased bg-black-300 px-[12.5%] py-5 ">
      <div className="flex w-full">
        <div className="flex flex-col lg:flex-row lg:space-x-10 lg:space-y-0 space-y-4  p-8 bg-[#fafbfc] rounded-xl max-w-[75vw] items-center justify-center">
          <div className="flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-black text-center ">
              Let's Connect!
            </h1>
            <p className="pt-2 text-black text-lg tracking-wide text-center">
              If you have a question or just want to say Hi &#128075;, use the
              form to send me a message and I will get back to you as soon as
              possible!
            </p>

            <div className="w-full text-black">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="text-gray-700 font-bold">
                      Enter Your Name
                    </label>
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                        setSent(false);
                      }}
                      value={name}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#0e0000] mt-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-gray-700 font-bold">
                      Enter Your Email
                    </label>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setSent(false);
                      }}
                      value={email}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#000303] mt-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-gray-700 font-bold"
                    >
                      Add Your Message
                    </label>
                    <textarea
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setSent(false);
                      }}
                      value={message}
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Your message"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#000708] mt-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-block self-end font-bold p-2 bg-[#080808] text-white rounded-md py-2"
                  >
                    Send Message
                  </button>
                  {sent ? (
                    <div
                      class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                      role="alert"
                    >
                      <span class="font-medium">Email Sent!</span> I will get
                      back to you as soon as I can. Thanks for connecting!
                    </div>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
