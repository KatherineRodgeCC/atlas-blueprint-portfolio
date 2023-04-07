import React from 'react';
import { FeaturedImage, Heading } from 'components';
import className from 'classnames/bind';

import styles from './LocationHeader.module.scss';
const cx = className.bind(styles);
/**
 * A Project entry header component
 * @param {MediaItem} props.image The project image node.
 * @param {string} props.title The project title.
 * @param {string} props.summary The project summary.
 * @returns {React.ReactElement} The PostInfo component
 */
function LocationHeader({ image, title, summary }) {
  return (
    <section className={cx('header')}>
      <div className="container location-header">
        <div className="row">
          <FeaturedImage className="background-image" image={image} />
        </div>  
          <div className="row">
            <Heading level="h2">{title}</Heading>
            <p>{summary}</p>
          </div>
        </div>
    </section>
  );
}

export default LocationHeader;
