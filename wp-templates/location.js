import * as MENUS from 'constants/menus';

import { gql } from '@apollo/client';
import {
  Header,
  LocationHeader,
  Footer,
  ContentWrapper,
  NavigationMenu,
  FeaturedImage,
  Main,
  SEO,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }
  const { title: siteTitle } = props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, summary, content, featuredImage, address, videolink } = props.data.location;
  return (
    <>
      <SEO
        title={`${title} - ${props?.data?.generalSettings?.title}`}
        imageUrl={featuredImage?.node?.sourceUrl}
      />

      <Header menuItems={primaryMenu} />

      <Main>
        <LocationHeader 
          image={featuredImage?.node}
          summary={summary}
          title={title}
          />
        <div className="container location-information">
          <p>Test</p>
        </div>
      </Main>

      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetPost(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    location(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title: facilityName
      content
      address
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};