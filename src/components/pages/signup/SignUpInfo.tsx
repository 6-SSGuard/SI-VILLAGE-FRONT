"use client";
import React, { useState } from "react";
import DialogComponent from "@/components/dialog/DialogComponent";
import SignUpButtons from "@/components/pages/signup/SignUpButtons";
import MembershipInfo from "@/components/pages/signup/MembershipInfo";
import SimpleJoin from "@/components/pages/signup/SimpleJoin";

export default function SignUpInfo() {
  const [dialogContent, setDialogContent] = useState<{
    title: string;
    description?: string;
    contentComponent?: React.ReactNode;
  } | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (
    title: string,
    description?: string,
    contentComponent?: React.ReactNode
  ) => {
    setDialogContent({ title, description, contentComponent });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setDialogContent(null);
  };

  return (
    <div className="px-4 py-6">
      <div className="mb-8">
        <p className="text-lg font-semibold mb-4">
          신세계인터내셔날 통합 멤버십 가입
        </p>
        <SignUpButtons />
        <MembershipInfo handleOpenDialog={handleOpenDialog} />
        <SimpleJoin />
      </div>

      {/* Dialog Component */}
      {dialogContent && (
        <DialogComponent
          title={dialogContent.title}
          description={dialogContent.description}
          open={dialogOpen}
          onClose={handleCloseDialog}
        >
          {dialogContent.contentComponent}
        </DialogComponent>
      )}
    </div>
  );
}
