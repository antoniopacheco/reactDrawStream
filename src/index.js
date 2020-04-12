import React, { useRef, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";

export const ReactDrawStream = ({ onGetStream }) => {
  let canvasRef = null;
  useEffect(() => {
    if (canvasRef) {
      const stream = canvasRef.canvas.drawing.captureStream(25);
      onGetStream && onGetStream(stream);
      //   tempStream = canvasRef.canvas.temp.captureStream(25);
      //   videoStreamRef.current.srcObject = stream;
      //   videoStream2.current.srcObject = tempStream;
    }
  }, [canvasRef]);

  return <CanvasDraw ref={(canvasDraw) => (canvasRef = canvasDraw)} />;
};
