import Link from 'next/link';
import Image from 'next/image';

export default function SiButton({
  buttonTitle = 'Button',
  className,
  type,
  icon, // New prop for the image
  iconPosition = 'left', // Option to place the icon on the left or right
  href, // New prop for the link
}: {
  buttonTitle?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  iconPosition?: 'left' | 'right';
  href?: string;
}) {
  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && (
        <Image src={icon} alt="icon" className="mr-2" width={20} height={20} />
      )}
      <span>{buttonTitle}</span>
      {icon && iconPosition === 'right' && (
        <Image src={icon} alt="icon" className="ml-2" width={20} height={20} />
      )}
    </>
  );

  // If href is provided, use Link component directly
  if (href) {
    return (
      <Link
        href={href}
        className={`flex items-center justify-center ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={`flex items-center justify-center ${className}`}
      type={type}
    >
      {buttonContent}
    </button>
  );
}
