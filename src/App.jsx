import { useState, useRef, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);
  const finalTranscriptRef = useRef("");

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    if (recognitionRef.current) {
      recognitionRef.current.start();
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event) => {
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptPiece = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscriptRef.current += transcriptPiece + " ";
        } else {
          interimTranscript += transcriptPiece;
        }
      }

      setText(finalTranscriptRef.current + interimTranscript);
    };

    recognition.onend = () => {
      if (listening) recognition.start();
    };

    recognition.start();
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const handleClear = () => {
    finalTranscriptRef.current = "";
    setText("");
  };

  useEffect(() => {
    return () => recognitionRef.current?.stop();
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎙️ AutoVoice</h1>
        <p style={styles.subtitle}>Speech to Text Converter</p>

        <button
          onClick={listening ? stopListening : startListening}
          style={{
            ...styles.mainButton,
            backgroundColor: listening ? "#ef4444" : "#22c55e",
          }}
        >
          {listening ? "Stop Listening" : "Start Listening"}
        </button>

        <div style={styles.outputBox}>
          {text || "Start speaking..."}
        </div>

        <button onClick={handleClear} style={styles.clearButton}>
          Clear Text
        </button>
      </div>
    </div>
  );
}

/* ===================== STYLES ===================== */

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "520px",
    padding: "30px",
    borderRadius: "18px",
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    boxShadow:
      "0 20px 40px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
  },

  title: {
    margin: 0,
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: "6px",
    marginBottom: "20px",
    fontSize: "14px",
    color: "#6b7280",
  },

  mainButton: {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    transition: "transform 0.2s ease",
  },

  outputBox: {
    marginTop: "20px",
    padding: "14px",
    minHeight: "150px",
    borderRadius: "10px",
    backgroundColor: "#f3f4f6",
    fontSize: "15px",
    textAlign: "left",
    whiteSpace: "pre-wrap",
    color: "#111827",
  },

  clearButton: {
    marginTop: "15px",
    background: "transparent",
    border: "none",
    color: "#ef4444",
    fontWeight: "600",
    cursor: "pointer",
  },
};
