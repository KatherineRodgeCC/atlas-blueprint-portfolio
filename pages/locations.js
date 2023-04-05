import { gql } from "@apollo/client";

const GET_PROJECTS = gql`
  query getLocations {
    locations(first: 10, after: null) {
      nodes {
        facilityName
        address
        content
      }
    }
  }
`;

export default function Locations(props) {
  const { locations } = props;

  return (
    <div>
      <h1>Locations</h1>
      <ul className="locations-list">
        {locations.map((location) => (
          <li key={location.databaseId}>
            <article className="project-card">
              <h2>
                <Link href={`/locations/${location.databaseId}`}>
                  <a>{location.facilityName}</a>
                </Link>
              </h2>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const response = await client.query({
    query: GET_PROJECTS,
  });

  return {
    props: {
      projects: response.data.projects.nodes,
    },
  };
}