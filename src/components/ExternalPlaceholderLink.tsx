import { Button, ButtonProps } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { isPlaceholder, getPlaceholderLabel } from "@/lib/links";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ExternalPlaceholderLinkProps extends ButtonProps {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
}

export default function ExternalPlaceholderLink({
  href,
  children,
  showIcon = true,
  ...props
}: ExternalPlaceholderLinkProps) {
  if (!isPlaceholder(href)) {
    return (
      <Button asChild {...props}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
          {showIcon && <ExternalLink className="ml-2 h-4 w-4" />}
        </a>
      </Button>
    );
  }

  const label = getPlaceholderLabel(href);
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button disabled {...props} className={`${props.className} opacity-60 cursor-not-allowed`}>
          {children}
          {showIcon && <ExternalLink className="ml-2 h-4 w-4" />}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-sm">Link placeholder: "{label}"</p>
        <p className="text-xs mt-1">Add real link later</p>
      </TooltipContent>
    </Tooltip>
  );
}
