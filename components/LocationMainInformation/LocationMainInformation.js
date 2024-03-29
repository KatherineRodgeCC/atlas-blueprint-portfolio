import React from 'react';
import { Heading, ContentWrapper } from 'components';
import className from 'classnames/bind';

import styles from './LocationMainInformation.module.scss';
const cx = className.bind(styles);
/**
 * A Project entry header component
 * @param {string} props.content The project content.
 * @param {string} props.address The project address.
 * @returns {React.ReactElement} The PostInfo component
 */
function LocationMainInformation({ content, address }) {
  return (
    <section className='content-info'>
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
              <Heading level="h3">What We Do</Heading>
              <ContentWrapper content={content} />
          </div>
          </div>
    </section>
  );
}



export default LocationMainInformation;
