import React from 'react';
import { Heading } from 'components';
import className from 'classnames/bind';

import styles from './ProjectHeader.module.scss';
const cx = className.bind(styles);
/**
 * A Project entry header component
 * @param {string} props.content The project summary.
 * @param {string} props.address The project summary.
 * @returns {React.ReactElement} The PostInfo component
 */
function LocationMainInformation({ content, address }) {
  return (
    <section className={cx('content-info')}>
      <div className="container">
        <div className="row row-center">
          <div className={cx('column')}> 
            <Heading level="h3">Location</Heading>
              <p>{address}</p>
              <p><a href="#">Map Link</a></p>
              <Heading level="h3">Facility</Heading>
              <p>Year:</p>
              <p>Size:</p>
              <p>Union:</p>
              <p>Social:</p>
             </div>
           <div className={cx('column')}>
            <Heading level="h3">What we Do</Heading>
            <p>{content}</p>
           </div>
          </div>
          </div>  
        </section>
  );
}



export default LocationMainInformation;
