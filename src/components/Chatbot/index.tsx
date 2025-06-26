
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const WEBHOOK_URL = "https://n8n2.team-workspace.us/webhook-test/279dac00-cf5d-4e83-b047-99c8cba9230b";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input.trim(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      console.log('Sending message to webhook:', currentInput);
      
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          timestamp: new Date().toISOString(),
          source: "cbrs-chatbot",
          user_id: `user_${Date.now()}` // Simple user identification
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Webhook response:', data);
        
        // Add bot response from webhook
        const botResponse = data.response || data.message || "Thanks for your message! We'll get back to you soon or feel free to contact us directly.";
        
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-bot`,
            text: botResponse,
            isUser: false,
          },
        ]);
      } else {
        throw new Error(`Webhook responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      
      // Fallback response
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          text: "Thanks for your message! We're experiencing some technical issues but we'll get back to you soon. Feel free to contact us directly if this is urgent.",
          isUser: false,
        },
      ]);

      toast({
        title: "Connection Issue",
        description: "Your message was received but we're having trouble connecting to our system. We'll still help you!",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
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
        <div className="fixed bottom-24 right-6 z-40">
          <div className="w-80 max-w-[calc(100vw-3rem)] bg-white border rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col h-[420px]">
              {/* Header */}
              <div className="flex-shrink-0 p-3 bg-[#1A2A3A] text-white font-semibold rounded-t-xl flex items-center justify-between">
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

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0">
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
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-black rounded-lg rounded-bl-none px-3 py-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Container */}
              <div className="flex-shrink-0 border-t bg-white rounded-b-xl">
                <div className="p-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="flex-1 text-sm px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#1A2A3A]/20"
                      placeholder="Type your message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !isLoading) handleSend();
                      }}
                      disabled={isLoading}
                    />
                    <Button 
                      onClick={handleSend} 
                      className="rounded-full w-8 h-8 bg-[#1A2A3A] hover:bg-[#1A2A3A]/90 flex-shrink-0 p-0" 
                      size="sm"
                      disabled={isLoading || !input.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
