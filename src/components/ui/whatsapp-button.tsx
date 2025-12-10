import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "966501234567"; // Replace with actual number
  const message = "Hello, I would like to inquire about your products.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in"
      size="icon"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
}
