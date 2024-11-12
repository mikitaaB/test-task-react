import { useCallback, useEffect, useRef, useState } from 'react';
import useRenderCounter from '../../hooks/useRenderCounter';
import RenderCountLabel from '../RenderCountLabel';
import ChangeModeButton from '../ChangeModeButton';
import AddToStartButton from '../AddToStartButton';
import AddToEndButton from '../AddToEndButton';
import ListItem from './ListItem';

type Mode = 'add' | 'remove';

const List = () => {
    const counter = useRenderCounter();
    const [items, setItems] = useState<string[]>([]);
    const [action, setAction] = useState<Mode>('add');
	const indexRef = useRef<number>(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

	const handleChangeAction = useCallback(() => {
		setAction((prev) => (prev === 'add' ? 'remove' : 'add'));
	}, []);

	const handleRemoveItems = () => {
		setItems((prev) => {
			if (prev.length === 1) {
				clearInterval(timerRef.current);
			}
			return prev.slice(0, prev.length - 1);
		});
	};

	const handleRemoveItem = useCallback((item: string) => {
		setItems((prev) => prev.filter((i) => i !== item));
	}, []);

	const handleAddItem = useCallback(() => {
        indexRef.current++;
        setItems((prev) => prev.concat(`${indexRef.current}-item`));
	}, []);

	const handleAddToStart = useCallback(() => {
		indexRef.current++;
		setItems((prev) => [`${indexRef.current}-item`].concat(prev));
	}, []);

	const handleListMode = (action: Mode) => {
		action === 'add'
			? handleAddItem()
			: handleRemoveItems();
	};

    useEffect(() => {
        handleListMode(action);

        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            handleListMode(action);
        }, 1000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [action]);

	return (
		<>
			<RenderCountLabel label="List" count={counter} />
			<br />
			<ChangeModeButton action={action} onClick={handleChangeAction} />
			<br />
			<div className="btn-actions">
				<AddToStartButton onClick={handleAddToStart} />
				<AddToEndButton onClick={handleAddItem} />
			</div>
			<ul className="list">
				{items.map((item) => (
					<ListItem key={item} item={item} onRemove={handleRemoveItem} />
				))}
			</ul>
		</>
	);
};

export default List;