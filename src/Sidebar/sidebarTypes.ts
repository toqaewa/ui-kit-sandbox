export type Tab = {
    id: string;
    label: string;
    content: React.ReactNode;
  };
  
  export type SidebarProps = {
    tabs: Tab[];
    initialTab?: string;
    className?: string;
  };