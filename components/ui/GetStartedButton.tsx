import { Button } from '@/components/ui/button';

interface GetStartedButtonProps {
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  href?: string;
}

export function GetStartedButton({
  className,
  variant = 'default',
  size = 'default',
  href,
}: GetStartedButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    // If href is provided, don't prevent default navigation
    if (!href) {
      e.preventDefault();
      console.log("Thank you for your interest! This feature is still a work in progress.");
    }
  };

  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      onClick={handleClick}
      {...(href ? { href } : {})}
    >
      Get Started
    </Button>
  );
}
