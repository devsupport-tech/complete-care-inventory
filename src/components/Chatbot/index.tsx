
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      text: "Hi! How can we help you with contractor support, estimates, or packouts?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          text: "Thanks for your message! We'll get back to you soon or feel free to contact us directly.",
          isUser: false,
        },
      ]);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="w-14 h-14 rounded-full bg-[#1A2A3A] text-white shadow-lg hover:bg-[#1A2A3A]/90 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[450px] bg-white border rounded-xl shadow-xl flex flex-col z-40 max-w-[calc(100vw-3rem)] sm:max-w-80">
          <div className="p-3 bg-[#1A2A3A] text-white font-semibold rounded-t-xl flex items-center justify-between">
            <span>CBRS Chat Support</span>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`text-sm px-3 py-2 rounded-lg max-w-[75%] ${
                    msg.isUser
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-100 text-black rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t flex items-center gap-2">
            <input
              type="text"
              className="flex-1 text-sm px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#1A2A3A]/20"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <Button 
              onClick={handleSend} 
              className="rounded-full px-3 bg-[#1A2A3A] hover:bg-[#1A2A3A]/90" 
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
