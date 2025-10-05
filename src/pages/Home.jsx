import { useEffect, useState, useRef } from "react";
import NasaMap from "../components/NasaMap";
import { Link } from "react-router-dom";
import Timeline from "../components/TimeLine";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const dates = [
    "2023-01-01",
    "2023-04-01",
    "2023-07-01",
    "2023-10-01",
    "2024-01-01",
    "2024-04-01",
    "2024-07-01",
    "2024-10-01",
    "2025-01-01",
    "2025-04-01",
    "2025-07-01",
    "2025-10-01"
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dates[dates.length - 1]);
  
  // Estados del chatbot
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

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
    <div className="min-h-screen bg-gray-50 relative">
      {/* Banner */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/ba/f2/07/baf207b32472727522012586467ac168.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-green-300 mb-4">
            EcoPulse
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Tracking Blooming with NASA Satellite Data
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed">
            EcoPulse is an application developed within the framework of the 
            <span className="text-green-400 font-bold"> NASA Space Apps Challenge 2025</span>, 
            focused on monitoring global blooming phenology. 
            We use Earth observation data to visualize when and where plants bloom, 
            providing crucial insights into ecosystems, agriculture, pollination, 
            biodiversity, and the impacts of climate change.
            <br/><br/>
            Our mission is to bring science closer to society through an interactive 
            and accessible map that helps people understand the relationship between 
            climate and plant life cycles.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{
          title: "Vegetation & Climate",
          text: "Explore how vegetation cycles reflect the relationship between seasonal changes and climate. Discover how ecosystems adapt across different biomes.",
          img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          link: "/vegetation"
        },{
          title: "Agriculture & Crops",
          text: "Understand how crop growth patterns shift with changing seasons. Learn how climate change influences agriculture and food security worldwide.",
          img: "https://cdn2-group.bureauveritas.com/sites/g/files/zypfnx196/files/2020-10/shutterstock_612566915_compressed.jpg",
          link: "/agriculture"
        },{
          title: "Phenology in Plants",
          text: "Dive into plant phenology: the science of how seasonal changes impact plant life cycles, from flowering to pollination, and its vital role in biodiversity.",
          img: "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          link: "/phenology"
        }].map((card, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-700 ease-out 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${i * 200}ms` }}
          >
            <Link to={card.link}>
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105" />
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Map + Timeline */}
      <div className="p-6">
        <NasaMap date={selectedDate} />
        <Timeline dates={dates} onDateChange={(date) => setSelectedDate(date)} />
      </div>

      {/* Botón flotante para abrir chat */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-6 rounded-l-xl shadow-lg hover:bg-green-700 transition-all duration-300 z-40 flex items-center gap-2"
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="text-sm font-medium">
          {isChatOpen ? "✕ Cerrar" : "🌱 EcoPulse Chat"}
        </span>
      </button>

      {/* Panel del chatbot */}
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
                <p className="text-xs text-green-100">Pregúntame sobre sostenibilidad</p>
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

          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center text-gray-400 mt-20">
                <p className="text-lg">¡Hola! 👋</p>
                <p className="mt-2">Pregúntame sobre sostenibilidad, clima o vegetación</p>
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

          {/* Input área */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
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
                {isLoading ? "..." : "📤"}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Enter para enviar • Shift+Enter para nueva línea
            </p>
          </div>
        </div>
      </div>

      {/* Overlay cuando el chat está abierto (solo en móvil) */}
      {isChatOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsChatOpen(false)}
        />
      )}
    </div>
  );
}