// src/components/layouts/DialogComponent.tsx
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface DialogComponentProps {
  title: string | undefined;
  description?: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
export default function DialogComponent({
  title,
  description,
  open,
  onClose,
  children,
}: DialogComponentProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title || "Default Title"}</DialogTitle>
        </DialogHeader>
        <div
          style={{
            overflowY: "auto", // 내용이 길어지면 스크롤이 생기도록 합니다.
          }}
        >
          {<DialogDescription>{description}</DialogDescription>}
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
