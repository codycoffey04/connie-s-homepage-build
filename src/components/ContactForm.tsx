import { useState } from "react";
import { Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (_error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please call us instead.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <Card className="border-2 border-primary">
        <CardContent className="py-12 text-center space-y-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h3 className="text-2xl font-bold">Thank You!</h3>
          <p className="text-foreground/80">
            We've received your message and will respond shortly.
          </p>
          <p className="text-foreground/70 text-sm">
            Need immediate help? Call us at{" "}
            <a href="tel:2566012041" className="text-primary font-semibold hover:underline">
              256-601-2041
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-3">
          <Send className="w-6 h-6 text-primary" />
          Send Us a Message
        </CardTitle>
        <p className="text-foreground/70">
          Can't call right now? Leave your info and we'll reach out.
        </p>
      </CardHeader>
      <CardContent>
        <form
          name="bonding-lead"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="bonding-lead" />
          <p className="hidden">
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Your Name <span className="text-primary">*</span>
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder="John Smith"
              className="h-12 text-base border-2 focus:border-primary"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-semibold">
              Phone Number <span className="text-primary">*</span>
            </Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(256) 555-1234"
              className="h-12 text-base border-2 focus:border-primary"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-semibold">
              Message <span className="text-foreground/50">(optional)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your situation..."
              rows={4}
              className="text-base border-2 focus:border-primary resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wide"
          >
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </Button>

          {/* Trust Signals */}
          <div className="pt-4 border-t border-border">
            <p className="text-center text-sm text-foreground/60">
              <Phone className="w-4 h-4 inline mr-1" />
              Need immediate help? <strong>Call is faster:</strong>{" "}
              <a href="tel:2566012041" className="text-primary font-semibold hover:underline">
                256-601-2041
              </a>
            </p>
            <p className="text-center text-xs text-foreground/50 mt-2">
              24/7 • Licensed Agents • Family-Owned Since 2019
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
