"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function Toast() {
  const { toast } = useToast();
  const onToast = () => {
    toast({
      title: "Scheduled: Catch up xx",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  return (
    // <div>sdfdf</div>
    <Button variant="outline" onClick={onToast}>
      Add to calendar
    </Button>
  );
}
