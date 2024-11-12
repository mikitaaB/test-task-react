import { useRef } from "react";
import Button from "../../Button";


const ListItem = ({
	item,
	onRemove,
}: {
    item: string;
    onRemove: (item: string) => void;
}) => {
    const listItemRef = useRef<HTMLLIElement>(null);

    const onClick = () => {
        if (!listItemRef.current) {
            return;
        }
        listItemRef.current.style.animation = 'pulse-animation 1.5s';
    };

    const handleAnimationEnd = () => {
        if (!listItemRef.current) {
            return;
        }
        listItemRef.current.style.animation = 'none';
    };

    return (
        <li
			ref={listItemRef}
			onClick={onClick}
			className={`li-item`}
            onAnimationEnd={handleAnimationEnd}
		>
			{item}
			<Button
				onClick={() => onRemove(item)}
				label="x"
				className="btn-remove"
			/>
		</li>
	);
};

export default ListItem;
