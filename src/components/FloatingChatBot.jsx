import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function FloatingChatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: "assistant", content: "", isStreaming: true }]);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage,
          history: newMessages
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let botMessage = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.replace("data: ", "");
            if (data.trim() === "[DONE]") break;

            botMessage += data;

            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                role: "assistant",
                content: botMessage,
                isStreaming: true
              };
              return updated;
            });
          }
        }
      }

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].isStreaming = false;
        return updated;
      });
    } catch (error) {
      console.error("Error en streaming:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "❌ Error connecting to server. Please try again.",
          isStreaming: false
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-6 rounded-l-xl shadow-lg hover:bg-green-700 transition-all duration-300 z-40 flex items-center gap-2"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="text-sm font-medium">
          {isChatOpen ? "✕ Close" : "🌱 EcoPulse Chat"}
        </span>
      </button>

      {/* Chat panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isChatOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌱</span>
              <div>
                <h3 className="font-bold text-lg">EcoPulse Assistant</h3>
                <p className="text-xs text-green-100">Ask me about sustainability</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-green-700 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-20">
                <p className="text-lg">Hello! 👋</p>
                <p className="mt-2">Ask me anything about sustainability, climate, or vegetation</p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 break-words ${
                    msg.role === "user"
                      ? "bg-green-600 text-white"
                      : "bg-white text-gray-800 shadow-md"
                  }`}
                >
                  <div className="prose prose-sm max-w-none">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({children}) => <p className="mb-2 last:mb-0 break-words">{children}</p>,
                        ul: ({children}) => <ul className="mb-2 ml-4 list-disc">{children}</ul>,
                        ol: ({children}) => <ol className="mb-2 ml-4 list-decimal">{children}</ol>,
                        li: ({children}) => <li className="mb-1 break-words">{children}</li>,
                        code: ({inline, children}) => 
                          inline 
                            ? <code className="bg-gray-200 px-1 rounded break-words">{children}</code>
                            : <code className="block bg-gray-200 p-2 rounded my-2 overflow-x-auto whitespace-pre-wrap break-words">{children}</code>,
                        strong: ({children}) => <strong className="font-bold">{children}</strong>,
                        em: ({children}) => <em className="italic">{children}</em>
                      }}
                    >
                      {msg.content.replace(/\\n/g, '\n')}
                    </ReactMarkdown>
                  </div>
                  {msg.isStreaming && (
                    <span className="inline-block w-2 h-4 bg-green-600 animate-pulse ml-1"></span>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                placeholder={isLoading ? "Waiting for response..." : "Type your question..."}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? "..." : "📤"}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>

      {/* Overlay when chat is open (mobile only) */}
      {isChatOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsChatOpen(false)}
        />
      )}
    </>
  );
}
//End of the file