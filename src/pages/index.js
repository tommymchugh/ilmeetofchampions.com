import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import LogoImage from "../components/image"
import SEO from "../components/seo"
import backgroundImage from "../images/bg.jpg"
import illinoisFeature from "../images/illinois-feature.svg"
import runnerImage from "../images/runner.jpg"
import underArmourLogo from "../images/under-armour.svg"
import hurdlesImage from "../images/sprinters.jpg"
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
      backgroundPosition: `center top`,
      position: `relative`
    }}>
      <div className="logo">
        <h1>
          June 6, 2020 <span>Hope Academy Stadium</span>
        </h1>
        <LogoImage />
      </div>
      
      <div className="details">
        <p>There will be limited open race spaces.<br />Share the meet to be first to know registration details.</p>
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
    
    <section className="venue-info">
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
    
    <section className="meet-info-results">
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
          <span className="stay-tuned">Stay tuned for the schedule and registration information for the 2020 edition of the Illinois Meet of Champions.</span>
          The meet will field championship competitions for every high school track event including: 
          <span className="events">Long Jump, Pole Vault, High Jump, Shot Put, Triple Jump, Discus, 3200m, 100 High Hurdles, 100m, 800m, 400m, 300 Low Hurdles, 1600m, and 200m.</span>
          Championship entries will be selected using the MileSplit Illinois Top Times list for each event.
          <br />
          There will be a limited number of small open competitions.
          <br />More details to come!
        </h2>
      </div>
    </section>
    
    <section style={{
      backgroundImage: `url(${hurdlesImage})`
    }} className="sponsors-info">
      <h1 className="header-text">Sponsors & Support</h1>
    </section>
  </Layout>
)

export default IndexPage
