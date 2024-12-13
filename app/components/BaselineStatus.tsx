"use client";

import React, { useEffect } from "react";

interface BaselineStatusProps {
  featureId: string;
}

const BaselineStatus: React.FC<BaselineStatusProps> = ({ featureId }) => {
  useEffect(() => {
    import("baseline-status");
  }, []);

  // Render using dangerouslySetInnerHTML to avoid JSX conflicts
  return (
    <div
      className="w-full bg-red flex justify-center text-left text-base"
      dangerouslySetInnerHTML={{
        __html: `<baseline-status featureId="${featureId}"></baseline-status>`,
      }}
    />
  );
};

export default BaselineStatus;
