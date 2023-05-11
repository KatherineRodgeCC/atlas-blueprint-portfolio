import React from 'react';
import { Heading } from 'components';

import styles from './VideoSection.module.scss';
const cx = className.bind(styles);

/**
 * A Project entry header component
 * @param {string} props.videolink The project content.
 * @returns {React.ReactElement} The PostInfo component
 */
function VideoSection({ videolink }) {
  return (
    <section className='video-section'>
      <Heading level="h3">Video & Photos</Heading>
        <div className="row row-center">
          <div className={cx('column')}>
            <video width="320" height="240" controls>
              <source src={videolink} type="video/mp4">
              </source>   
            </video>
          </div> 
        </div>
    </section>
  );
}



export default VideoSection;
