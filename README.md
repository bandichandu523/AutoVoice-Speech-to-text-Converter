🎙️ AutoVoice – Speech to Text Converter

AutoVoice is a real-time speech-to-text web application  built using React.js and the Browser Web Speech API.  
It converts spoken words into text instantly without using any paid APIs or backend services.

🚀 Live Demo

🔗 Live Project:  
👉 https://bandichandu523.github.io/AutoVoice-Speech-to-text-Converter/



✨ Features

🎤 Real-time voice recognition
▶️ Start / ⏹ Stop listening
📝 Live transcription with pause handling
🧹 Clear text functionality
🎨 Modern glassmorphism UI
💯 100% free (no API key required)



🛠️ Tech Stack

-> Frontend: React.js
-> Language: JavaScript (ES6)
-> Speech Engine:Web Speech API (Browser built-in)
-> Styling: Inline CSS (Glassmorphism design)
-> Hosting: GitHub Pages



How It Works

1. The browser captures voice input using the microphone.
2. Web Speech API processes the audio.
3. Speech is converted into:
   - Interim results (temporary speech)
   - Final results (confirmed speech)
4. React `useState` and `useRef` manage live updates.
5. Text is displayed smoothly without disappearing during pauses.



Key Concepts Used

- React Hooks (`useState`, `useRef`, `useEffect`)
- Browser Speech Recognition API
- Continuous listening with auto restart
- Handling interim vs final transcripts
- Proper cleanup to avoid memory leaks



Browser Support

-> Google Chrome 
-> Edge (Chromium) 




->API Key Requirement

 No API key required  
 No backend server  
 

This project uses the built-in Web Speech API, which is completely free and runs inside the browser.



-> Installation & Setup

 Clone the repository

bash: git clone https://github.com/bandichandu523/AutoVoice-Speech-to-text-Converter
