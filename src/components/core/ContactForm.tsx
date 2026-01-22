import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import map from "@/assets/images/map.png";
import { Map } from "@/components/ui/map";
import { useTheme } from "@/hooks/useTheme";
import { Tooltip, TooltipTrigger, TooltipPopup } from "@/components/ui/tooltip";
import { useSendEmail } from "@/hooks/sendEmail";
import { useEffect, useState } from "react";
import type { TemplateParams } from "@/hooks/sendEmail";
import { toastManager } from "@/components/ui/toast";

const ContactForm = ({ className }: { className?: string }) => {
    const { theme } = useTheme();

    const { sendEmail, loading, error, success } = useSendEmail();
    const [formData, setFormData] = useState<TemplateParams>({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        if (error) {
            toastManager.add({
                type: "error",
                description: error,
                title: "Error",
                timeout: 3000,
            });
        }
    }, [error]);

    useEffect(() => {
        if (success) {
            toastManager.add({
                type: "success",
                description: "Your message has been sent successfully!",
                title: "Success",
                timeout: 3000,
            });
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    }, [success]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.name.trim().length < 2) {
            alert("Name must be at least 2 characters");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Invalid email format");
            return;
        }

        if (formData.message.trim().length < 10) {
            alert("Message must be at least 10 characters");
            return;
        }
        await sendEmail(formData);
    };

    return (
        <section
            id="contact-section"
            className={`max-w-2xl lg:max-w-3xl mx-auto scroll-mt-20 ${className}`}
        >
            <div>
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                        Get in Touch
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-lg">
                        Let's work together!
                    </p>
                </div>
                <div className="w-full flex gap-3">
                    <Form
                        className="w-full md:w-1/2 mt-10"
                        onSubmit={handleSubmit}
                    >
                        <Field name="name">
                            <FieldLabel className="text-xl">
                                <span className="text-xl">Name</span>
                            </FieldLabel>
                            <Input
                                placeholder="Tony Stark"
                                required
                                type="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <FieldError>Please enter your name</FieldError>
                        </Field>
                        <Field name="email" className="">
                            <FieldLabel className="text-xl">
                                <span className="text-xl">Email</span>
                            </FieldLabel>
                            <Input
                                placeholder="stark@industries.com"
                                required
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <FieldError>Please enter your email</FieldError>
                        </Field>
                        <Field name="message" className="">
                            <FieldLabel className="text-xl">
                                <span className="text-xl">Message</span>
                            </FieldLabel>
                            <Textarea
                                placeholder="Write a message"
                                required
                                size="sm"
                                className="h-48 resize-none"
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <FieldError>Please enter some message</FieldError>
                        </Field>
                        <Button
                            type="submit"
                            className="mt-4"
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <span className="h-4 w-4 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin inline-block"></span>
                                    Loading
                                </span>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </Form>
                    <div className="hidden md:flex w-1/2 items-center justify-center rounded-lg overflow-hidden relative mask-[linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
                        <Map
                            center={[-78.87, 43.9]}
                            zoom={12}
                            theme={theme}
                        ></Map>
                        <Tooltip>
                            <TooltipTrigger
                                delay={50}
                                render={
                                    <div className="absolute z-15 right-35 top-55 bg-green-400 rounded-full h-2.5 w-2.5 cursor-pointer">
                                        <div className="absolute inset-0 bg-green-400 animate-ping rounded-full"></div>
                                    </div>
                                }
                            ></TooltipTrigger>
                            <TooltipPopup className="bg-[oklch(0.269_0_0)] text-[oklch(0.922_0_0)]">
                                Available for Work
                            </TooltipPopup>
                        </Tooltip>
                        <div className="absolute inset-0 z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;