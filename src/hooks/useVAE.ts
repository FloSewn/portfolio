import * as ort from 'onnxruntime-web';
import { useEffect, useState } from 'react';

// Help the bundler find the WebAssembly files if needed
ort.env.wasm.wasmPaths = '/'; 

export function useVAE() {
  const [encoder, setEncoder] = useState<ort.InferenceSession | null>(null);
  const [decoder, setDecoder] = useState<ort.InferenceSession | null>(null);

  useEffect(() => {
    const initModels = async () => {
      // Load both exported models
      const encSession = await ort.InferenceSession.create('/encoder.onnx');
      const decSession = await ort.InferenceSession.create('/decoder.onnx');
      setEncoder(encSession);
      setDecoder(decSession);
    };
    initModels();
  }, []);

  return { encoder, decoder };
}