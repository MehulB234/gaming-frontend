const ContactForm = () => {
    return (
        <form
            id="contact-form"
            className="contact-card"
            action="https://api.web3forms.com/submit"
            method="POST"
            noValidate
        >
            <input
                type="hidden"
                name="access_key"
                id="access_key"
                value="951a88a1-a86d-4f95-b5d4-8825308be317"
            />
            <input
                type="hidden"
                id="form-endpoint"
                value="https://api.web3forms.com/submit"
            />

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
                <button type="submit" id="submit-btn" className="btn">
                    Send Message
                </button>
                <div id="contact-result" className="result" aria-live="polite" />
            </div>
        </form>
    );
};

export default ContactForm;