import React, { Suspense } from "react";
import MediaPageClient from "./MediaPageClient";

export default function MediaPage() {
  return (
    <Suspense fallback={<div>Loading Media Page...</div>}>
      <MediaPageClient />
    </Suspense>
  );
}