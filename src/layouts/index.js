import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { css, parent } from 'glamor'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="The Unfound Door"
      meta={[
        { name: 'description', content: 'The Unfound Door is here for all of your creative needs from photography to videography.' },
        { name: 'keywords', content: 'photography, videography, construction, architecture, lifestyle, engineering' },
      ]}
      link={[
        { rel: 'stylesheet', href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" }
      ]}
     />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

