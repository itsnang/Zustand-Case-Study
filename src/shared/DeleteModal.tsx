import React, { useState } from "react";
import { Modal } from "@/shared/Modal";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";

interface DeleteModalProps {
  show: boolean;
  onClose: () => void;
  onDelete?: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  onClose,
  show,
  onDelete,
}) => {
  return (
    <Modal className="text-2xl" onClose={onClose} title={"Delete"} show={show}>
      <div className="mt-6 space-y-6">
        <Typography>Are you sure want to delete this task?</Typography>
        <div className="flex gap-4 text-base">
          <Button className="flex-1 px-8" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="flex-1 px-8"
            variant="primary"
            onClick={onDelete}
            hasShadow
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};
