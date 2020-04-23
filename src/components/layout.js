/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import MailchimpSubscribe from "react-mailchimp-subscribe"

import Header from "./header"
import "./layout.css"

const subscribeUrl = "https://ilmeetofchampions.us4.list-manage.com/subscribe/post?u=787e94e423b7be0471d047b4b&amp;id=c807e8eb73";

const SimpleForm = () => <MailchimpSubscribe url={subscribeUrl}/>

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          height: `100%`
        }}
      >
        <main>
          {children}
          <footer id="stay-updated">
            <h1 className="header-text">Sign Up For Updates</h1>
            <label>
              <p aria-hidden="false">Your Email</p>
              <SimpleForm />
            </label>
            <p className="copyright">© {new Date().getFullYear()} Illinois Meet of Champions</p>
            <p className="builtby">Site Developed By Tommy McHugh</p>
          </footer>
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
