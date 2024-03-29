import { gql } from '@apollo/client';
import React from 'react';
import Link from 'next/link';
import { Heading, FeaturedImage } from 'components';
import className from 'classnames/bind';
import useFocusFirstNewResult from 'hooks/useFocusFirstNewResult';
import appConfig from 'app.config';

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
      {locations?.map((location, i) => {
        const isFirstNewResult = i === firstNewResultIndex;

        return (
          <div
            className="row"
            key={location.id ?? ''}
            id={`project-${location.id}`}
          >
            <div className={cx('list-item')}>
              <FeaturedImage
                className={cx('image')}
                image={location?.featuredImage?.node}
                priority={i < appConfig.projectsAboveTheFold}
              />
              <div className={cx('content')}>
                <Heading level="h3">
                  <Link href={location?.uri ?? '#'}>
                    <a ref={isFirstNewResult ? firstNewResultRef : null}>
                      {location.title}
                    </a>
                  </Link>
                </Heading>
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
    id
    title
    uri
    ...FeaturedImageFragment
  }
  `,
};

export default Locations;
