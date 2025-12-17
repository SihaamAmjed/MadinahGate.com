import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    console.log(data);
    toast({
      title: t("toast_success_title"),
      description: t("toast_success_desc"),
    });
    form.reset();
  };

  return (
    <div className="container px-4 md:px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-3xl font-bold text-primary mb-4">
          {t("contact_title")}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t("contact_desc")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t("form_title")}</CardTitle>
            <CardDescription>{t("form_desc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("name")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("name_placeholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("email_placeholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("subject")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t("subject_placeholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("message_placeholder")}
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  {t("send")}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-primary mb-6">
              {t("contact_info")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("location")}</h4>
                  <p className="text-muted-foreground">
                    {t("location_address")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("phone")}</h4>
                  <p className="text-muted-foreground">
                    {t("phone_value")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("email_address")}</h4>
                  <p className="text-muted-foreground">
                    {t("email_value")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{t("working_hours")}</h4>
                  <p className="text-muted-foreground">
                    {t("working_hours_value")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground border-none">
            <CardContent className="pt-6">
              <h3 className="font-serif text-xl font-bold mb-2">
                {t("visit_showroom")}
              </h3>
              <p className="opacity-90">
                {t("visit_showroom_desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
