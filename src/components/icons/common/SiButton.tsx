import Image from 'next/image';

export default function SiButton({
  buttonTitle = 'Button',
  className,
  type,
  icon, // New prop for the image
  iconPosition = 'left', // Option to place the icon on the left or right
}: {
  buttonTitle?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: string;
  iconPosition?: 'left' | 'right';
}) {
  return (
    <button
      className={`flex items-center justify-center ${className}`}
      type={type}
    >
      {icon && iconPosition === 'left' && (
        <Image src={icon} alt="icon" className="mr-2" width={20} height={20} />
      )}
      <span>{buttonTitle}</span>
      {icon && iconPosition === 'right' && (
        <Image src={icon} alt="icon" className="ml-2" width={20} height={20} />
      )}
    </button>
  );
}
