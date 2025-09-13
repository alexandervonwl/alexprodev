import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendEmail } from "../network/api";

export function Contact() {
  const [verified, setVerified] = useState(false);
  const [success, setSuccess] = useState(false);
  const [verifyHumanError, setVerifyHumanError] = useState(false);
  const [fillAllFieldsError, setFillAllFieldsError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleVerify = (token: string | null) => {
    if (token) {
      setVerified(true);
      setVerifyHumanError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.debug("Starting submit");
    e.preventDefault();
    if (!verified) {
      setVerifyHumanError(true);
      return;
    }

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      firstName: formData.get("firstName")?.valueOf() as string,
      lastName: formData.get("lastName")?.valueOf() as string,
      email: formData.get("email")?.valueOf() as string,
      subject: formData.get("subject")?.valueOf() as string,
      message: formData.get("message")?.valueOf() as string,
    };

    // Check if any field is empty
    if (
      !data.firstName.trim() ||
      !data.lastName.trim() ||
      !data.email.trim() ||
      !data.subject.trim() ||
      !data.message.trim()
    ) {
      setFillAllFieldsError(true);
      return;
    }
    setFillAllFieldsError(false);
    console.debug("Form data:", data);

    await sendEmail(data);
    // proceed with form submission
    setSuccess(true); // Show success message
    if (formRef.current) {
      formRef.current.reset(); // Clear form fields
    }

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Let's
            discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">Contact Information</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>hello@alexprodev.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p>+40 (788) 223 909</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p>Iasi, Romania</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/alexandervonwl"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alexandru-lupusoru/"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <Card className="p-6">
              {success && (
                <div className="mb-4 text-green-600 text-center font-semibold">
                  Message sent successfully!
                </div>
              )}
              {verifyHumanError && (
                <div className="mb-4 text-red-600 text-center font-semibold">
                  Please verify you are human!
                </div>
              )}
              {fillAllFieldsError && (
                <div className="mb-4 text-red-600 text-center font-semibold">
                  Please fill all fields!
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </Button>

                <ReCAPTCHA
                  sitekey="6LdCorErAAAAANVPpaJjkJ2BDlpHJfpRV7EHuYik"
                  onChange={handleVerify}
                />
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
