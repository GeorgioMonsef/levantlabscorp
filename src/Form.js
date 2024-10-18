import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        availability: '',
        contactMethod: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            user_email: formData.email,
            phone_number: formData.phone,
            availability: formData.availability,
            message: formData.message,
            contact_method: formData.contactMethod,
        };

        emailjs.send('service_p0v4zi6', 'template_a7t6yc9', templateParams, 'vfN57rkWA-vSX1HNP')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitted(true);
            })
            .catch((error) => {
                console.log('FAILED...', error);
            });
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4 sm:p-8 bg-black rounded-lg m-4">
            <h2 className="text-3xl font-bold mb-6 text-white text-center">Book a Consultation</h2>

            {submitted ? (
                <p className="text-green-500 text-center">Thank you! Your message has been sent.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="firstName">First Name:</label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="lastName">Last Name:</label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="email">Email:</label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="phone">Phone Number:</label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="tel"
                            id="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="message">Description of Project:</label>
                        <textarea
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="message"
                            placeholder="Describe your project"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="availability">Time of Availability:</label>
                        <input
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="availability"
                            placeholder="Enter your available time"
                            value={formData.availability}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2 text-white" htmlFor="contactMethod">Preferred Contact Method:</label>
                        <select
                            className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="contactMethod"
                            value={formData.contactMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a contact method</option>
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                            <option value="text">Text message</option>
                        </select>
                    </div>

                    <button
                        className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default Form;
