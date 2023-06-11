import { Paragraph } from "@/components/Typography";
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="loadingscreen">
      <div class="spinner-grow" role="status"></div>
      <Paragraph level={1} className={"mt-2"}>
        Updating information...
      </Paragraph>
    </div>
  );
}
