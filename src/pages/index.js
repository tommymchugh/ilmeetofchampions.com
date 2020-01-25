import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LogoImage from "../components/image"
import SEO from "../components/seo"
import backgroundImage from "../images/bg.jpg"
import illinoisFeature from "../images/illinois-feature.svg"
import runnerImage from "../images/runner.jpg"
import underArmourLogo from "../images/under-armour.svg"
import underArmourLogoSolo from "../images/under-armour-solo.svg"
import hurdlesImage from "../images/sprinters.jpg"
import fleetFeetLogo from "../images/fleet-feet.png"
import chicagoSpeedLogo from "../images/chicagospeed.svg"
import dtcLogo from "../images/dtc.png"
import northBack from "../images/loop.jpg"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const defaultMapOptions = {
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false
};

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 41.872377, lng: -87.692387 }}
    defaultOptions={defaultMapOptions}
  >
    {props.isMarkerShown && <Marker position={{ lat: 41.872377, lng: -87.692387 }} />}
  </GoogleMap>
))

const IndexPage = () => (
  <Layout>
    <SEO title="Illinois Meet of Champions" />
    <section className="wall" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: `cover`,
      backgroundPosition: `center center`,
      position: `relative`
    }}>
      <div className="logo">
        <h1>
          June 6, 2020 <span>Hope Academy Stadium</span>
        </h1>
        <LogoImage />
      </div>
      
      <img src={`${underArmourLogo}`}/>
    
      <div className="cover" style={{
        zIndex: `1`
      }}>
        <div style={{
          width: `100%`,
          height: `100%`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `right top`,
          backgroundImage: `url(${illinoisFeature})`
        }}></div>
      </div>
    </section>
    
    <section className="header-info">
      <h1>We are assembling the top athletes from every class to compete to be the true champion of Illinois Track & Field.</h1>
    </section>
    
    <section id="venue" className="venue-info">
      <h1 className="header-text">Venue</h1>
      <MyMapComponent
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAOvdmUMPPWVCWwF0rWiKlWRBG7SdeVcKE"
        loadingElement={<div style={{ height: `300px`, width: `100%`, maxWidth: `430px`, paddingLeft: `20px`, paddingRight: `20px`, margin: `0 auto` }} />}
        containerElement={<div style={{ height: `300px`, width: `100%`, maxWidth: `430px`, paddingLeft: `20px`, paddingRight: `20px`, margin: `0 auto` }} />}
        mapElement={<div style={{ height: `300px`,
                                  width: `100%`,
                                  maxWidth: `430px`,
                                  margin: `0 auto`,
                                  borderRadius: `120%`,
                                  overflow: `hidden`,
                                  marginTop: `14px`,
                                  marginBottom: `30px` }} />}
      />
      <h2>
        We are excited to host this championship at the Hope Academy Track Stadium on a PROTRAXX™ Premier IAAF track certified by Connor Sports. 
        This is an unrivaled surface and venue, making it prime conditions for your new PR.
      </h2>
      <a href="https://www.google.com/maps/dir//2661+W+Lexington+St,+Chicago,+IL+60612/@41.8719394,-87.6912627,824m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x880e2d66aa81ed2b:0xb4c79e3a6390147f!2m2!1d-87.692488!2d41.871737!3e0">Get Directions</a>
    </section>
    
    <section id="meet-info" className="meet-info-results">
      <div className="feature-image" style={{
        minHeight: `440px`,
        margin: `0`,
        padding: `0`,
        flex: 1,
        flexBasis: `500px`,
        background: `url(${runnerImage})`,
        backgroundSize: `cover`,
        backgroundPosition: `right`
      }}>
      </div>
      <div className="fill">
        <h1 className="header-text">Meet Info & Registration</h1>
        <h2>
          <span className="stay-tuned">Stay tuned for schedule and registration information for the 2020 edition of the Illinois Meet of Champions.</span>
          The meet will field championship competitions for every high school track event including: 
          <span className="events">Long Jump, Pole Vault, High Jump, Shot Put, 3200m, 100m High Hurdles, 100m, 800m, 400m, and 200m.</span>
          Championship invitations will be selected using the MileSplit Illinois Top Times list for each event.
          <br />
          There will be a limited number of small open competitions.
          <br />More details to come!
        </h2>
      </div>
    </section>
    
    <section id="support" style={{
      backgroundImage: `url(${hurdlesImage})`
    }} className="sponsors-info">
      <h1 className="header-text">Sponsors & Support</h1>
      <a href="https://www.underarmour.com/"><img className="under-armour-logo" src={`${underArmourLogoSolo}`}/></a>
      <h2>Under Armour will be supporting the meet with gear for the championship athletes. Details on gear coming soon!</h2>
      <a href="https://www.fleetfeet.com/"><img className="fleet-feet-logo" src={`${fleetFeetLogo}`}/></a>
      <h2>Fleet Feet Sports will also be supporting with hydration at the meet as well as additional items to be announced.</h2>
      <div className="other-sponsors">
        <a href="https://www.athletic.net/TrackAndField/School.aspx?SchoolID=32397"><img className="chicago-speed" src={`${chicagoSpeedLogo}`}/></a>
        <a href="http://www.districttrack.com/"><img className="dtc" src={`${dtcLogo}`}/></a>
      </div>
      <h2>Chicago Speed Track Club and District Track Club will both be supporting the event and will have athletes at the meet.</h2>
    </section>

    <section id="north" style={{
      backgroundImage: `url(${northBack})`
    }}>
      <div className="inner">
        <h1>Our Community</h1>
        <p>
        North Lawndale is one of the most architecturally eccentric and socially complex neighborhoods in Chicago. The area has gone through many cultural shifts, beginning with its origins as a largely Italian and Irish population at its inception in the mid-1800s. In, the early 1900s, Lawndale became the third largest Jewish community in the world. Following World War II, the neighborhood transitioned to become the first African-American community on Chicago’s west side. As a community experiencing frequent waves of migrants and cultures, Lawndale was a testing ground for ideas and activism. Its residents provided important contributions to Zionism, civil rights, housing policies, industrial psychology and scientific management, community organizing and the Black Power movement. In addition to its significant social and historical assets, Lawndale has an incredible “built environment” that has been celebrated by a number of architectural and historical advocacy groups. Several charter schools have opened in an effort to enhance the community’s educational infrastructure. North Lawndale’s proximity to Chicago’s Loop, the University of Illinois at Chicago, the Illinois Medical District, and other important Chicago institutions makes it a highly desirable location for investment, both residentially and commercially. North Lawndale is also the “buckle on the Greystone belt”, containing a high concentration of historic homes with limestone facades. NHS has recently launched the Historic Chicago Greystone Initiative ® in North Lawndale, a project which promotes the documentation, preservation, and repair of these beautiful buildings.
        </p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
