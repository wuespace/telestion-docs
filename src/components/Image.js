import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export function Image({
	src,
	invertible = false,
	center = false,
	alt = '',
	...args
}) {
	const mySrc = src.startsWith('/static') ? src.substr(7) : src;
	const realSrc = useBaseUrl(mySrc);
	return (
		<>
			<Link to={mySrc} style={{ display: 'none' }}>
				Link to {alt}
			</Link>
			<img
				src={realSrc}
				className={clsx(invertible && 'invertible', center && 'center')}
				alt={alt}
				{...args}
			/>
		</>
	);
}
