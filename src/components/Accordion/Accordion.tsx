import { cn } from "@/lib/utils";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import React, { useState, ReactNode } from "react";

interface AccordionItemProps {
  id: string;
  trigger: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  children: ReactNode;
  allowMultiple?: boolean;
  className?: string;
}

interface AccordionContextType {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  allowMultiple: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({
  children,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, allowMultiple }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id,
  trigger,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion component");
  }

  const { openItems, toggleItem } = context;
  const isOpen = openItems.has(id);

  React.useEffect(() => {
    if (defaultOpen && !isOpen) {
      toggleItem(id);
    }
  }, [id]);

  return (
    <>
      <div
        className="flex justify-between items-center"
        onClick={() => toggleItem(id)}
        style={{ cursor: "pointer" }}
      >
        <div className="flex-1">{trigger}</div>
        <div className="transition-transform duration-300 ease-out">
          {isOpen ? (
            <ChevronsDownUp className="size-4 rotate-180" />
          ) : (
            <ChevronsUpDown className="size-4" />
          )}
        </div>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0" }} // Fallback for unsupported browsers
      >
        <div>{children}</div>
      </div>
    </>
  );
}
