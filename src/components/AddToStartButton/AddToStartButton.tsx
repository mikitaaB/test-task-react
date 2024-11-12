import { memo } from 'react';
import useRenderCounter from '../../hooks/useRenderCounter';
import Button from '../Button';
import RenderCountLabel from '../RenderCountLabel';

const AddToStartButton = memo(({
	onClick,
}: {
	onClick: () => void;
}) => {
	const counter = useRenderCounter();

	return (
		<div>
			<Button onClick={onClick} label="Add to start" />
			<RenderCountLabel label="Button" count={counter} />
		</div>
	);
});

export default AddToStartButton;