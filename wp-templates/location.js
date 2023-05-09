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
          <div class="row">
            <div class="column">
              <div><h3>Location</h3>
              <p>{address}</p></div>
              <div><h3>Facility Information</h3>
              <p><strong>Year Opened:</strong></p>
              <p><strong>Size:</strong></p>
              <p><strong>Union:</strong></p>
              <p><strong>Social:</strong></p>
              </div>
              </div>
            <div class="column">
             <h3>What We do</h3> 
             <ContentWrapper content={content} />
            </div>  
         </div> 
         <div class="row">
            <h3>US Operations Impact Numbers</h3>
            <div class="column">   
              <div class="impact-section">
                <p><strong>Employees</strong></p> 
                <p>at Facility</p> 
              </div> 
              <hr />  
              <div class="impact-section">
                <p><strong>Taxable Wages</strong></p> 
                <p>paid to Company Employees</p> 
              </div> 
              <hr />     
            </div>
            <div class="column">
              <div class="impact-section">
                <p><strong>Invested</strong></p> 
                <p>in Facility</p> 
              </div> 
              <hr /> 
              <div class="impact-section">
                <p><strong>Donated</strong></p> 
                <p>to local area nonprofits since</p> 
              </div> 
              <hr /> 
            </div>  
         </div> 
        <div class="row" id="virtual-tour">
        <h3>Photos & Video</h3>  
        <video width="320" height="240" controls>
          <source src={`${videolink}`} type="video/mp4">
           </source>   
        </video>
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