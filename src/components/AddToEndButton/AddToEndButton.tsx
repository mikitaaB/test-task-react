import { memo } from 'react';
import useRenderCounter from '../../hooks/useRenderCounter';
import Button from '../Button';
import RenderCountLabel from '../RenderCountLabel';

const AddToEndButton = memo(({
	onClick,
}: {
	onClick: () => void;
}) => {
	const counter = useRenderCounter();

	return (
		<div>
			<Button onClick={onClick} label="Add to end" />
			<RenderCountLabel label="Button" count={counter} />
		</div>
	);
});

export default AddToEndButton;