import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    // Mensaje temporal del bot
    setMessages((prev) => [...prev, { role: "assistant", content: "", isStreaming: true }]);

    try {
      const response = await fetch("http://localhost:5000/chat", {
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

            // CORRECCIÓN: No hacer trim() ni agregar espacios artificiales
            // El servidor ya envía los tokens con los espacios correctos
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

      // Marcar como completado
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
          content: "❌ Error al conectar con el servidor. Por favor, intenta de nuevo.",
          isStreaming: false
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-green-700 text-center flex items-center justify-center gap-2">
          🌱 Chatbot EcoPulse
        </h2>

        <div className="bg-white rounded-2xl shadow-xl flex flex-col h-[600px]">
          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-20">
                <p className="text-lg">¡Hola! 👋</p>
                <p className="mt-2">Pregúntame lo que necesites sobre sostenibilidad</p>
              </div>
            )}
            
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 break-words ${
                    msg.role === "user"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-800"
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

          {/* Input área */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder={isLoading ? "Esperando respuesta..." : "Escribe tu consulta..."}
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
                {isLoading ? "..." : "Enviar"}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Presiona Enter para enviar • Shift+Enter para nueva línea
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}