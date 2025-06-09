import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Budget Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="contactSection">
        <h1 className="contactSectionTitle">Contact Us</h1>

        <form className="formContainer" onSubmit={(e) => e.preventDefault()}>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
          />

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            required
          />

          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            className="textarea"
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>

          <button className="button" type="submit">
            Send Message
          </button>
        </form>

        <div className="info">
          <p>We typically respond within 1-2 business days.</p>
        </div>
      </main>

      <style jsx>{`
        .contactSection {
          max-width: 600px;
          margin: 4rem auto;
          padding: 2rem;
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.05);
          font-family: 'Inter', sans-serif;
          animation: slideUp 1s ease-in-out;
        }

        .contactSectionTitle {
          text-align: center;
          font-size: 2.4rem;
          color: #4f46e5; /* Indigo-600 */
          margin-bottom: 2rem;
          font-weight: 600;
        }

        .formContainer {
          display: flex;
          flex-direction: column;
        }

        .label {
          margin-top: 1rem;
          font-weight: 600;
          color: #333;
        }

        .input,
        .textarea {
          padding: 0.8rem;
          margin-top: 0.4rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .input:focus,
        .textarea:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 5px #c7d2fe;
        }

        .textarea {
          resize: vertical;
          min-height: 120px;
        }

        .button {
          margin-top: 2rem;
          background-color: #4f46e5;
          color: white;
          padding: 1rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #4338ca;
        }

        .info {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.95rem;
          color: #555;
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
