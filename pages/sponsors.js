import axios from "axios";

export default function Sponsors({ gokartSponsors, evSponsors }) {
  return (
    <div className="d-md-flex flex-md-equal w-100">
      <div className="d-md-flex flex-md-equal w-100">
        <div className="px-3 py-md-5 px-md-5 text-center overflow-hidden">
          <h2 className="display-4">OUR SPONSORS</h2>
          {gokartSponsors.length ? (
            <div className="container">
              <h3 className="lead text-center mt-5">
                Our gokart team is supported by:
              </h3>
              <div className="row center-image my-5">
                {gokartSponsors.map((sponsor, index) => (
                  <div className="col-4" key={index}>
                    <div className="center-image">
                      <img
                        src={sponsor.image}
                        className="img-fluid"
                        alt={sponsor.brand}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {evSponsors.length ? (
            <div className="container">
              <h3 className="lead text-center mt-5">
                Our electric vehicle team is supported by:
              </h3>
              <div className="row center-image my-5">
                {evSponsors.map((sponsor, index) => (
                  <div className="col-4" key={index}>
                    <div className="center-image">
                      <img
                        src={sponsor.image}
                        className="img-fluid"
                        alt={sponsor.brand}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const gokartRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/sponsors/gokart`
    );
    const evRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/sponsors/ev`
    );
    return {
      props: {
        gokartSponsors: gokartRes.data,
        evSponsors: evRes.data,
      },
    };
  } catch (err) {
    return { props: { gokartSponsors: [], evSponsors: [] } };
  }
}
