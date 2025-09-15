"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DropdownMenuProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const DropdownMenuContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export function DropdownMenu({
  children,
  trigger,
  className,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div ref={dropdownRef} className={cn("relative", className)}>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {trigger}
        </div>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuContent({
  children,
  className,
}: DropdownMenuContentProps) {
  const { isOpen } = React.useContext(DropdownMenuContext);

  return (
    <div
      className={cn(
        "absolute right-0 mt-2 w-56 origin-top-right transform transition-all duration-200 ease-in-out",
        isOpen
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-95 -translate-y-2 pointer-events-none",
        "bg-background border border-border rounded-md shadow-lg z-50",
        className
      )}
    >
      <div className="py-1">{children}</div>
    </div>
  );
}

export function DropdownMenuItem({
  children,
  onClick,
  className,
  icon,
}: DropdownMenuItemProps) {
  const { setIsOpen } = React.useContext(DropdownMenuContext);

  const handleClick = () => {
    onClick?.();
    setIsOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex items-center px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors duration-150",
        className
      )}
    >
      {icon && <span className="mr-3 flex-shrink-0">{icon}</span>}
      {children}
    </div>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-border" />;
}
