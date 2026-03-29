import { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "951a88a1-a86d-4f95-b5d4-8825308be317",
                    ...payload,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus("Thanks — your message was sent. We will reply to your email shortly.");
                form.reset();
            } else {
                setStatus(data.message || "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form id="contact-form" className="contact-card" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">
                Name <span className="required">*</span>
            </label>
            <input
                type="text"
                id="contact-name"
                name="name"
                required
                minLength={2}
                placeholder="Your full name"
            />

            <label htmlFor="contact-email">
                Email <span className="required">*</span>
            </label>
            <input
                type="email"
                id="contact-email"
                name="email"
                required
                placeholder="you@example.com"
            />

            <label htmlFor="contact-subject">Subject</label>
            <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="Short subject (optional)"
            />

            <label htmlFor="contact-message">
                Message <span className="required">*</span>
            </label>
            <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                minLength={8}
                placeholder="Write your message"
            />

            <div className="form-row">
                <button type="submit" id="submit-btn" className="btn" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <div
                    id="contact-result"
                    className={`result${status ? " visible" : ""}`}
                    aria-live="polite"
                >
                    {status}
                </div>
            </div>
        </form>
    );
};

export default ContactForm;