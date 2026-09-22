"use client";

import { useEffect } from "react";
import markerSDK from "@marker.io/browser";

export default function MarkerWidget() {
  useEffect(() => {
    let widget: any = null;

    const load = async () => {
      try {
        widget = await markerSDK.loadWidget({
          project: "6ab23eecbb7dd02652892863",
        });
      } catch (error) {
        console.error("Marker.io initialization error:", error);
      }
    };

    load();

    return () => {
      if (widget && typeof widget.unload === "function") {
        widget.unload();
      }
    };
  }, []);

  return null;
}
