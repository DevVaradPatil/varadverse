import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import toast, { Toaster } from 'react-hot-toast'
import GlobeComponent from '../components/GlobeComponent'

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})

  };

  const [loading, setLoading] = useState(false) // Loading state

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true) // Set loading to true when sending starts

    const toastId = toast.loading("Sending message...") // Show loading toast

    emailjs.send(
      'service_au6hpde',     // Replace with your EmailJS Service ID
      'template_qrurobu',    // Replace with your EmailJS Template ID
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      'gPSVXRIE5XamWG-UM'    // Replace with your EmailJS Public Key
    )
    .then(
      (result) => {
        console.log(result.text)
        setLoading(false)
        toast.success("Message sent successfully!", { id: toastId }) // Show success message
        e.target.reset() // Clear form after submission
      },
      (error) => {
        console.error(error.text)
        setLoading(false)
        toast.error("Failed to send message. Please try again.", { id: toastId }) // Show error message
      }
    )
  }
  return (
    <div className="flex flex-col md:flex-row bg-tomato p-0 md:p-10 min-h-screen w-full items-center justify-center">
      <Toaster/>
      <div className="w-full md:w-1/2 flex justify-center p-3 items-center flex-col">
        <h1 className="text-5xl w-full text-center text-white font-arima font-bold mb-6">
          Contact Me
        </h1>
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-md">
          <label className="flex flex-col">
            <span className="text-lg text-neutral-50 font-medium mb-1">Name</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-md outline-none focus:border-black"
              placeholder="Your Name"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-lg text-neutral-50 font-medium mb-1">Email</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              className="border border-gray-400 p-2 rounded-md outline-none focus:border-black"
              placeholder="Your Email"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-lg text-neutral-50 font-medium mb-1">Message</span>
            <textarea
            value={form.message}
            onChange={handleChange}
            name='message'
              className="border border-gray-400 p-2 rounded-md outline-none focus:border-black"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center h-full">
        <GlobeComponent />
      </div>
    </div>
  )
}

export default ContactPage
