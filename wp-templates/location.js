import * as MENUS from 'constants/menus';

import { gql } from '@apollo/client';
import {
  Header,
  Footer,
  EntryHeader,
  LocationHeader,
  LocationMainInformation,
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
  const { title, summary, featuredImage, address, videolink, content } = props.data.location;
  return (
    <>
      <SEO
        title={`${title} - ${props?.data?.generalSettings?.title}`}
        imageUrl={featuredImage?.node?.sourceUrl}
      />

      <Header menuItems={primaryMenu} />

      <Main>
        <EntryHeader title={title} />
        <LocationHeader
            image={featuredImage?.node}
            summary={summary}
            title={title}
          />
        <LocationMainInformation 
             address={address}
             content={content}
             title={title}
        />
        <div className="container">
          <div className="row">
            <div className="column"> 
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
           <div className="column"> 
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
      videolink
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
