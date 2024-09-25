import React from 'react';
import { Button } from '@/components/ui/button';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <section className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-semibold">등록 확인</h2>
        <p className="mt-2">정말로 등록하시겠습니까?</p>
        <div className="flex justify-end mt-4">
          <Button className="mr-2" onClick={onClose}>
            취소
          </Button>
          <Button className="bg-si-131922 text-white" onClick={onConfirm}>
            확인
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InfoModal;
