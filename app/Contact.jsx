export default function Contact({ sectionControl }) {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "da7e5f1f-671a-4277-bce6-61bfaba0dcbd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Message sent successfully!");
    } else {
      console.error("Submission failed:", res);
      alert("Something went wrong.");
    }
  };

  return (
    <div ref={sectionControl} className="h-[50vw] w-[100vw]">
      <section id="contact" className="py-16 sm:px-5">
        <form
          onSubmit={onSubmit} // ✅ attach handler to form, not button
          className="rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-white font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border text-white border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border text-white border-gray-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-2 border text-white border-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white font-medium px-6 py-2 hover:bg-white hover:text-black border border-white transition-all"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
