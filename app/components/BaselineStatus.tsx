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
      className={`${classes} min-h-[104px]`}
      dangerouslySetInnerHTML={{
        __html: `<baseline-status featureId="${featureId}"></baseline-status>`,
      }}
    />
  );
};

export default BaselineStatus;
