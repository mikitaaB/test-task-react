import { memo } from 'react';
import useRenderCounter from '../../hooks/useRenderCounter';
import Button from '../Button';
import RenderCountLabel from '../RenderCountLabel';

type Mode = 'add' | 'remove';

const ChangeModeButton = memo(({
	action,
	onClick,
}: {
	action: Mode;
	onClick: () => void;
}) => {
	const counter = useRenderCounter();

	return (
		<div>
			<Button onClick={onClick} label={`change mode: ${action}`} />
			<RenderCountLabel label="Button" count={counter} />
		</div>
	);
});

export default ChangeModeButton;