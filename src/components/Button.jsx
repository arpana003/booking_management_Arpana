import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  fullWidth = false,
  icon,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${fullWidth ? 'btn--full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
