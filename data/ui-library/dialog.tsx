"use client"
import React, { useEffect, useState } from 'react';
import Button from './button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  outSideDialogClassName?: string;
  dialogContainerClassName?: string;
  closeButtonClassName?: string;
  dialogContentClassName?: string;
}

const Dialog = ({
  isOpen,
  onClose,
  children,
  outSideDialogClassName,
  dialogContainerClassName,
  closeButtonClassName,
  dialogContentClassName,
}: DialogProps) => {

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
  if (!isOpen) return null;

  return (
    <div onClick={handleOverlayClick} className={cn("fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-40", outSideDialogClassName)}>
      <div className={cn("bg-background border border-foreground/30 p-4 sm:p-6 rounded-lg shadow-lg max-w-md w-3/4 sm:w-full", dialogContainerClassName)}>
        <div className="flex justify-end">
          <Button
            variant='link'
            size='icon'
            className={cn("text-muted-foreground bg-transparent opacity-40 hover:opacity-100 focus:outline-none", closeButtonClassName)}
            onClick={onClose}
          >
            <X className='size-5' />
          </Button>
        </div>
        <div className={cn("mt-2 text-muted-foreground", dialogContentClassName)}>{children}</div>
      </div>
    </div>
  )
}

/*  You can use the below code as boilerplate for your own card, otherwise it is absolutely unrequired */
export const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="flex justify-center items-center">
      <Button onClick={openDialog}>
        Open Dialog
      </Button>
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        <h2 className="text-lg text-primary font-semibold mb-4 ">Dialog Content</h2>
        <p>This is the content of the Dialog.</p>
      </Dialog>
    </div>
  )
}

export default Dialog;