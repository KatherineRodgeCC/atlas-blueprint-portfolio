import { gql } from '@apollo/client';
import React from 'react';
import className from 'classnames/bind';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';

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
function Locations({ locations, id, emptyText = 'No projects found.' }) {
  const { firstNewResultRef, firstNewResultIndex } =
    useFocusFirstNewResult(locations);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
      {locations?.map((project, i) => {
        const isFirstNewResult = i === firstNewResultIndex;

        return (
          <div
            className="row"
            key={location.id ?? ''}
            id={`project-${location.id}`}
          >
            <div className={cx('list-item')}>
              <div className={cx('content')}>
                <div>{location.facilityName}</div>
              </div>
            </div>
          </div>
        );
      })}
      {locations && locations?.length < 1 && <p>{emptyText}</p>}
    </section>
  );
}

Locations.fragments = {
  entry: gql`
  fragment LocationFields on Location {
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
