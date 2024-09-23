import { cn } from "../lib/utils";

interface TooltipProps {
  tip: string;
  active?: boolean;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ tip, active, children }) => {
  return (
    <div className="relative inline-block group">
      <p
        style={{
          transition:
            "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out, margin-top 0.2s ease-in-out",
        }}
        className={cn(
          "font-normal font-jetbrains text-sm group-hover:opacity-100 group-hover:-mt-2 absolute inline-block whitespace-nowrap opacity-0 left-[50%] top-0 leading-normal translate-x-[-50%] translate-y-[-120%] py-[0.15rem] px-[.5rem] rounded-[6px] bg-card text-card-foreground text-[.9rem] tracking-[-.075em] after:border-solid after:border-transparent after:border-l-[10px] after:border-r-[10px] after:border-t-[10px] after:border-t-accent after:-bottom-2 after:content-[' '] after:h-0 after:w-0 after:left-[50%] after:ml-[-10px] after:absolute focus-visible:opacity-100 focus-visible:visible focus-visible:-mt-2",
          {
            "opacity-100 -mt-2": active,
          }
        )}
      >
        {tip}
      </p>
      {children}
    </div>
  );
};

export default Tooltip;
