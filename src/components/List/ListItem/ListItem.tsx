import { useState } from "react";
import Button from "../../Button";


const ListItem = ({
	item,
	onRemove,
}: {
	item: string;
	onRemove: (item: string) => void;
}) => {
	const [keyValue, setKeyValue] = useState(0);

	const onClickLineItem = () => {
		setKeyValue((prevKeyValue) => prevKeyValue + 1);
	};

	return (
		<li
			key={keyValue}
			onClick={onClickLineItem}
			className={`li-item`}
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