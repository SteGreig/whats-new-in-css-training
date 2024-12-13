"use client";

import React, { useEffect } from "react";

interface BaselineStatusProps {
  featureId: string;
  classes?: string;
}

const BaselineStatus: React.FC<BaselineStatusProps> = ({ featureId, classes }) => {
  useEffect(() => {
    import("baseline-status");
  }, []);

  // Render using dangerouslySetInnerHTML to avoid JSX conflicts
  return (
    <div
      className={`${classes}`}
      dangerouslySetInnerHTML={{
        __html: `<baseline-status featureId="${featureId}"></baseline-status>`,
      }}
    />
  );
};

export default BaselineStatus;
