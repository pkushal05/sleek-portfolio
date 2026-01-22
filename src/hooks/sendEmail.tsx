import emailjs from "@emailjs/browser";
import { useState } from "react";

export type TemplateParams = {
    name: string;
    email: string;
    message: string;
};

export const useSendEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const options = {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
    };

    const sendEmail = async (templateParams: TemplateParams) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        try {
            const res = await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                templateParams,
                options,
            );
            if (res.status !== 200) {
                throw new Error("Failed to send email");
            }
            setSuccess(true);
        } catch (err) {
            setError("Failed to send email. Please try again later.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading, error, success };
};
