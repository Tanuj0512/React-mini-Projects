import React from "react";
import { useState } from "react";
import "./style.css";
import SpeechRecognition, { useSpeechRecognition} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const TextSpeech = () => {
  const [copy, setCopy] = useState();
  const [isCopied, setCopied] = useClipboard();

const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div className="TS-container">
      <p>Speech to Text Converter</p>
      <div className="TS-main-content" onClick={() => setCopy(transcript)}>
        {transcript}
      </div>
      <div className="TS-Buttons">
        <button onClick={setCopied}>
          {isCopied ? "Copied" : "Copy to Clipboard"}
        </button>
        <button onClick={startListening}>
          Start Listening
        </button>
        <button onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>
      </div>
    </div>
  );
};

export default TextSpeech;
