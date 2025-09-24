import * as React from 'react';

const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    backgroundColor: "black",
    padding: "5em"
};

const formItem = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingBottom: "2rem",
    fontFamily: "Kulim Park, sans-serif"
};

const formTextArea = {
    width: "50em",
    height: "10em",
    marginTop: "0.4rem",
    padding: "0.75rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.95rem",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "Roboto, sans-serif"
};

const formInput = {
    width: "50em",
    height: "30px",
    marginTop: "0.4rem",
    padding: "0.75rem 1rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.95rem",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    fontFamily: "Roboto, sans-serif"
};

const formLabel = {
    fontFamily: "Roboto, sans-serif",
    color: "white"
};

const formTitle = {
    fontFamily: "Kulim Park, sans-serif",
    fontWeight: "600",
    fontSize: "40px",
    color: "white",
    marginBottom: "2em"
};

const buttonStyles = {
    fontFamily: "Kulim Park, sans-serif",
    fontSize: "16px",
    color: "white",
    padding: "12px 20px",
    borderRadius: "12px",
    backgroundColor: "#008CBA",
    border: "none",
    marginTop: "20px",
    marginBottom: "40px"
  };

export const ContactForm = () => {
        const [formData, setFormData] = React.useState({
          name: "",
          email: "",
          message: "",
        });
      
        const [status, setStatus] = React.useState("");
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          setStatus("Sending...");
      
          // Example POST request — replace URL with your backend or service
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });
      
            if (res.ok) {
              setStatus("Message sent successfully!");
              setFormData({ name: "", email: "", message: "" });
            } else {
              setStatus("Something went wrong. Please try again.");
            }
          } catch (err) {
            setStatus("Error sending message.");
          }
        };
      
    return (
        <>
        <div style={container}>
            <h1 style={formTitle}>Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
            <div style={formItem}>
            <label style={formLabel} className="block text-sm font-medium mb-1">Name</label>
            <input
                style={formInput}
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
            />
            </div>
            <div style={formItem}>
            <label style={formLabel} className="block text-sm font-medium mb-1">Email</label>
            <input
                style={formInput}
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
            />
            </div>
            <div style={formItem}>
            <label style={formLabel} className="block text-sm font-medium mb-1">Message</label>
            <textarea
                style={formTextArea}
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
            />
            </div>
            <button
            type="submit"
            style={buttonStyles}
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors"
            >
                Send Message
            </button>
        </form>
        </div>
        </>
    );
};