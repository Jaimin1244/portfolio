import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="flex space-x-2">
          <span className="w-4 h-4 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-4 h-4 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-4 h-4 bg-primary rounded-full animate-bounce"></span>
        </div>
        <p className="text-muted-foreground text-sm tracking-wide">Just a moment...</p>
      </div>
    </div>
  );
};

export default Loader;
