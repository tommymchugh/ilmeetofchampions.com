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
import faq from "../images/faq.jpg"
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
          Monday July 27th through Saturday August 1st <span>Hope Academy Stadium</span>
        </h1>
        <LogoImage />
      </div>
      
      <img alt="Sponsored by Under Armour" src={`${underArmourLogo}`}/>
    
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
      <a className="register-now" href="https://il.milesplit.com/meets/381424/registration">Register Now!</a>
    </section>

    <section className="covid-alert">
      <h1>COVID-19 Update</h1>
      <p>Due to the likely restrictions the state of IL will be under in Late July we are changing the format of the meet from a one day meet to a multiday meet.
          The  meet date is now changed from June 27th to the last week in July and first day of August. <br /> 
          We will host 2 events per day: <br />
          • 1st event at 3:30PM<br />
          • 2nd event at 6:00PM<br />
          • 50 athletes per event<br />
          • 25 athletes per gender<br />
          There will be a time gap between events to allow for one group of 50 to clear the venue before the next group of 50 arrive.</p>
    </section>
    
    <section id="venue" className="venue-info">
      <h1 className="header-text">Venue</h1>
      <a href="https://www.google.com/maps/place/721+S+Washtenaw+Ave,+Chicago,+IL+60612/@41.8720093,-87.6947204,17z">
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
      /></a>
      <h2>
        We are excited to host this championship at the Hope Academy Track Stadium on a PROTRAXX™ Premier IAAF track certified by Connor Sports. 
        This is an unrivaled surface and venue, making it prime conditions for your new PR. The stadium is located at 721 S Washtenaw Ave, Chicago, IL 60612.
      </h2>
      <a className="link" href="https://www.google.com/maps/place/721+S+Washtenaw+Ave,+Chicago,+IL+60612/@41.8720093,-87.6947204,17z">Get Directions</a>
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
        <a className="register-now short" href="https://il.milesplit.com/meets/381424/registration">Register Now!</a>
        <h2>
          <span className="events">Monday July 27th - 3:00PM 100m dash / 6:00PM 800m Run<br />
            Tuesday July 28th - 3:00PM 110m/100m hurdles / 6:00PM 400m Dash<br />
            Wednesday July 29th -  3:00 Pole vault / 6:00PM 3200m<br />
            Thursday July 30th - 3:00 High Jump / 6:00PM Long Jump<br />
            Friday July 31st - 3:00PM Shot put / 6:00PM 2k Steeplechase<br />
            Saturday August 1st - 1:00PM Girls Mile / 3:00PM Boys Mile<br />
            The mile will allow for 50 athletes per gender</span>
        </h2>
      </div>
    </section>
    
    <section id="support" style={{
      backgroundImage: `url(${hurdlesImage})`
    }} className="sponsors-info">
      <h1 className="header-text">Sponsors & Support</h1>
      <a href="https://www.underarmour.com/"><img alt="Under Armour" loading="lazy" className="under-armour-logo" src={`${underArmourLogoSolo}`}/></a>
      <h2>Under Armour will be sponsoring the meet with gear for the championship athletes.</h2>
      <a href="https://www.fleetfeet.com/"><img alt="Fleet Feet Sports" loading="lazy" className="fleet-feet-logo" src={`${fleetFeetLogo}`}/></a>
      <h2>Fleet Feet Sports will also be supporting with hydration at the meet as well as additional items to be announced.</h2>
      <div className="other-sponsors">
        <a href="https://www.athletic.net/TrackAndField/School.aspx?SchoolID=32397"><img loading="lazy" className="chicago-speed" alt="Chicago Speed" src={`${chicagoSpeedLogo}`}/></a>
        <a href="http://www.districttrack.com/"><img className="dtc" loading="lazy" src={`${dtcLogo}`} alt="District Track Club"/></a>
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

    <section id="faq" style={{
      backgroundImage: `url(${faq})`
    }}>
      <h1>Frequently Asked Questions</h1>
      <p>
        <span><span>Timing</span>Fully Automatic Timing (FAT) provided by Illinois Prep Top Timing</span>

        <span><span>Spikes</span>1/4 inch only</span> 
        <span><span>Heatsheets</span>Heatsheets will be posted by 8:00pm the Saturday preceding the race.  They will be posted both on this site and on Milesplit.  We encourage you to print a copy as we will only have a small number available on race day.  
        </span>
        <span><span>Parking</span>There will be limited parking in secure lots for $5.00 on site and immediately to the South of the track. Free Street parking is also available.
        </span>
        <span><span>Age Groups</span>High School only
        </span>
        <span><span>Order of Events</span>Tuesday July 28th - 3:00PM 110m/100m hurdles / 6:00PM 400m Dash<br />
            Wednesday July 29th -  3:00 Pole vault / 6:00PM 3200m<br />
            Thursday July 30th - 3:00 High Jump / 6:00PM Long Jump<br />
            Friday July 31st - 3:00PM Shot put / 6:00PM 2k Steeplechase<br />
            Saturday August 1st - 1:00PM Girls Mile / 3:00PM Boys Mile<br />
            The mile will allow for 50 athletes per gender
        </span>
        <span><span>Packet Pickup</span>Packets will be picked up at meet.  A table will be set up as you enter the track with bibs. Packets must be picked up 30 minutes prior to the start of the event.  A photo ID or current USATF card is required for all individual athletes and / or parents picking up a packet.
        </span>
        <span><span>Waiver and Release</span>Waiver to be completed at time of registration.
        </span>
        <span><span>Timing of Events</span>Stay tuned for a detailed meet schedule!
        </span>
        <span><span>Bathrooms / Locker Rooms</span>There will be bathroom facilities at the track but these will be limited.  There are no locker rooms.
        </span>
        <span><span>Additional Questions</span>Please email Dan Daly (dpjd26@gmail.com) or Michelle Parekh (michelleparekh@mac.com) with queries.
        </span>
      </p>
    </section>
  </Layout>
)

export default IndexPage
