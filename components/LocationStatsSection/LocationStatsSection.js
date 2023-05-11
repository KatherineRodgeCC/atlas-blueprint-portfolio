import React from 'react';
import { Heading } from 'components';
import className from 'classnames/bind';

import styles from './LocationStatsSection.module.scss';
const cx = className.bind(styles);
/**
 * A Project entry header component
 * @param {string} props.title The project content.
 * @returns {React.ReactElement} The PostInfo component
 */
function LocationStatsSection({ title }) {
  return (
      <section className='stats-info'> 
        <Heading level="h3">US Operations Impact Numbers</Heading>
        <div className="row row-center">
        <div className={cx('column')}> 
        <div>
          <p>1000</p>
          <p><strong>Employees</strong></p>
          <p>at {title}</p>
        </div>
        <div>
          <p>$91.4M</p>
          <p><strong>Taxable Wages</strong></p>
          <p>paid to {title} employees</p>
        </div>
      </div>
      <div className={cx('column')}> 
        <div>
          <p>$65M+</p>
          <p><strong>Invested</strong></p>
          <p>in {title}</p>
        </div>
        <div>
          <p>$905K+</p>
          <p><strong>Donated</strong></p>
          <p>to {title} area nonprofits</p>
        </div>
      </div>
      </div>
    </section>
  );
}


export default LocationStatsSection;
