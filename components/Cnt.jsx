import React, { useState } from "react";

const Cnt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Contact Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <p>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Write your name here.."
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </p>
            <p>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Let us know how to contact you back.."
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </p>
            <p>
              <label>Message:</label>
              <textarea
                name="message"
                placeholder="What would you like to tell us.."
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </p>
            <button type="submit" style={styles.button}>
              Send Message
            </button>
          </form>
        ) : (
          <div style={styles.thankYou}>
            <h3>Thank you for reaching out!</h3>
            <p>We'll get back to you soon.</p>
          </div>
        )}
      </div>
      <div style={styles.contactInfo}>
        <h3>Contact Information</h3>
        <p>
          <span style={styles.icon}>📞</span> 001 1023 567
        </p>
        <p>
          <span style={styles.icon}>📧</span> contact@company.com
        </p>
        <p>
          <span style={styles.icon}>📍</span> 123 Business Lane, City, Country
        </p>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  formContainer: {
    width: "50%",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
    marginTop: "10px",
  },
  thankYou: {
    textAlign: "center",
    padding: "20px",
  },
  contactInfo: {
    width: "30%",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  icon: {
    marginRight: "8px",
  },
};

export default Cnt;
