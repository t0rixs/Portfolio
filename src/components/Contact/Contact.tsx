import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import RotateThings from "../shared/RotateThings";
import "./Contact.css";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

        const SERVICE_ID = "t0rixs";
        const TEMPLATE_ID = "template_1xs6uua";
        const PUBLIC_KEY = "zW5BfPsT1UBqvxMTr";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
            publicKey: PUBLIC_KEY,
        })
            .then(
                () => {
                    setStatus('success');
                    if (form.current) form.current.reset();
                },
                (error) => {
                    setStatus('error');
                    console.error('FAILED...', error.text);
                },
            );
    };

    return (
        <motion.main
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="container contact-page"
            style={{ flex: 1, paddingTop: 'calc(var(--nav-height) + 2rem)', paddingBottom: '4rem', minHeight: '100vh', position: 'relative' }}
        >
            <RotateThings
                id="contact-bg"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                    opacity: 0.3,
                    pointerEvents: "none",
                }}
            />

            <div className="contact-content" style={{ position: 'relative', zIndex: 1, maxWidth: '600px', margin: '0 auto', color: 'var(--text-primary)' }}>
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        インターンのご相談や、技術・経営に関するカジュアルな面談も大歓迎です。<br />下記のSNSまたはメールより、ぜひご連絡ください。
                    </p>
                </div>

                <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="user_name">Name</label>
                        <input id="user_name" type="text" name="user_name" required className="form-input" placeholder="山田 太郎" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="company_name">Company</label>
                        <input id="company_name" type="text" name="company_name" className="form-input" placeholder="株式会社〇〇 (任意)" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="user_email">Email</label>
                        <input id="user_email" type="email" name="user_email" required className="form-input" placeholder="email@example.com" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="subject">Subject</label>
                        <input id="subject" type="text" name="subject" required className="form-input" placeholder="件名" />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea id="message" name="message" required className="form-textarea" rows={6} placeholder="お問い合わせ内容"></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={status === 'sending' || status === 'success'}>
                        {status === 'sending' ? '送信中...' : status === 'success' ? '送信完了' : '送信する'}
                    </button>

                    {status === 'error' && (
                        <div className="status-message status-error">
                            送信に失敗しました。もう一度お試しください。
                        </div>
                    )}
                    {status === 'success' && (
                        <div className="status-message status-success">
                            お問い合わせありがとうございます。<br />内容を確認次第、ご連絡させていただきます。
                        </div>
                    )}
                </form>
            </div>
        </motion.main>
    )
}
