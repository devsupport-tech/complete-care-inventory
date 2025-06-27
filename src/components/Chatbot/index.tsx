
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendChatMessage } from "@/utils/chatbotApi";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      text: input.trim(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      console.log('Sending message to chatbot API:', currentInput);
      const response = await sendChatMessage(currentInput);

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          text: response.reply,
          isUser: false,
        },
      ]);

      console.log('Chatbot response processed successfully');
      
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          text: "I'm having trouble with our chat system right now. Please contact us directly using the phone number on our website or schedule a service through our booking form. We're here to help!",
          isUser: false,
        },
      ]);
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
                {messages.length === 0 && (
                  <div className="space-y-3">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-black rounded-lg rounded-bl-none px-3 py-2 text-sm space-y-2">
                        <div className="flex flex-col gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs h-8 justify-start"
                            onClick={() => window.open('tel:+1234567890', '_self')}
                          >
                            <Phone className="h-3 w-3 mr-1" />
                            Call Us
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs h-8 justify-start"
                            onClick={() => window.location.href = '/schedule-service'}
                          >
                            <Calendar className="h-3 w-3 mr-1" />
                            Schedule Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
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
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
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
