const Button = ({
	onClick,
	label,
	className
}: {
	onClick: () => void;
	label: string;
	className?: string;
}) => {
	return (
		<button className={className} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;