import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


import useAlert from '../hooks/Alert';
import Alert from '../components/Alert';


function Contact() {

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isLodading, setIsLodading] = useState(false)

    const { alert, showAlert, hideAlert } = useAlert();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLodading(true);
        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Sabir Akhtar',
                from_email: form.email,
                to_email: 'demonplay.0123@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,



        ).then(() => {
            setIsLodading(false)
            setForm({ name: "", email: "", message: "" });
            showAlert({ show: true, text: 'Message sent successfully!', type: 'success' })

            setTimeout(() => {
                hideAlert();
            }, [3000])
            // TODO ; show succes messaage
        }).catch((err) => {
            setIsLodading(false);
            console.error(err);
            showAlert({ show: true, text: 'Message not sent', type: 'danger' })
            // show err message 

        })


    }
    function handlechange(e) {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <section className="flex flex-col items-center text-center mt-4  w-full h-screen">
            {alert.show && <Alert {...alert} />}
            {/* <Alert {...alert}/> */}
            <div className="max-w-md flex flex-col gap-7 mt-10 border px-4 py-10 rounded-2xl font-bold  text-white bg-[url('./src/assets/bluefabric.png')]">
                <h1 className="text-white  font-bold text-5xl mb-4">Get in Touch</h1>

                <form className="" onSubmit={handleSubmit}>
                    <label className=" font-semibold">
                        Name
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="input"
                            value={form.name}
                            onChange={handlechange}
                        />
                    </label>
                    <label className=" font-semibold">
                        Email
                        <input
                            type="email"
                            placeholder="Your email"
                            name="email"
                            className="input"
                            value={form.email}
                            onChange={handlechange}
                        />
                    </label>
                    <label className=" font-semibold">
                        Message
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Hey, wanted to..."
                            className="text-black w-full rounded-2xl mt-2 px-2 py-2"
                            value={form.message}
                            onChange={handlechange}
                        />
                    </label>

                    <button type="submit" className="bg-primary px-4 py-3 mt-4 rounded-lg" disabled={isLodading}>
                        {isLodading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>



        </section>
    )
}

export default Contact