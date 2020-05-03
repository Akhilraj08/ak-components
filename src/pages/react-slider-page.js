import React from "react"
import { Link } from "gatsby"

import Layout from "../inner-components/layout"
import SEO from "../inner-components/seo"

import ReactSlider from '../components/react-slider'

import '../components/react-slider/style.scss'

const ReactSliderPage = () => (
  	<Layout>
    	<SEO title="React Slider" />
    
	    <div className={`react-slider-page`}>
    		<ReactSlider>
    			<div>asd</div>
    			<div>asd1</div>
    		</ReactSlider>
    	</div>

	    <Link to="/">Go back to the homepage</Link>
  	</Layout>
)

export default ReactSliderPage
