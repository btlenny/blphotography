import {useRef} from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";


export default function ContactForm() {
  const form = useRef()
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_yh38fil', 'template_fhv493s', form.current, '6Y1WBFZrB1YI-byHq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      event.target.reset()
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <img
          src="/images/Photo24.jpg" // Replace "your-image-url.jpg" with the actual URL of your image
          alt="Contact Us"
          className="mb-4 mx-auto max-w-full h-auto"
        />
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-6 font-light text-center text-gray-500 dark:text-gray-400 xs:text-xs">
         
        </p>
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="name"
              name="user_name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                Your Email
            </label>
            <input
              type="email"
              name="user_email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@abc.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Message
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-4 w-full text-xs text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Let me know a few dates and locations you'd like to take your photos"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-3 text-sm font-medium text-center text-gray-900 rounded-lg bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-500 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
