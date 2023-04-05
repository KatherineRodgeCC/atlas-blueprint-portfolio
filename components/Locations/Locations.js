import { gql } from '@apollo/client';
import React from 'react';
import className from 'classnames/bind';

import styles from './Projects.module.scss';
const cx = className.bind(styles);

/**
 * Renders a list of Project items
 * @param {Props} props The props object.
 * @param {Project[]} props.projects The array of project items.
 * @param {string} props.id The unique id for this component.
 * @param {string} props.emptyText Message to show when there are no projects.
 * @returns {React.ReactElement} The Projects component
 */
function Locations({ location, id }) {

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
        return (
          <div
            className="row"
            key={location.id ?? ''}
            id={`project-${location.id}`}
          >
            <div className={cx('list-item')}>
              <div className={cx('content')}>
                  {location.facilityName}
              </div>
            </div>
          </div>
        );      
    </section>
  );
}

Locations.fragments = {
  entry: gql`
  fragment LocationFields on Location {
    id
    headerImage {
      mediaItemId
      mediaItemUrl
      altText
      caption
      description
      mediaDetails {
        height
        width
        sizes {
          file
          fileSize
          height
          mimeType
          name
          sourceUrl
          width
        }
      }
    }
    facilityName
    address
    content
    size
    video {
      mediaItemId
      mediaItemUrl
      altText
      caption
      description
      mediaDetails {
        height
        width
        sizes {
          file
          fileSize
          height
          mimeType
          name
          sourceUrl
          width
        }
      }
    }
  }
  `,
};

export default Locations;
