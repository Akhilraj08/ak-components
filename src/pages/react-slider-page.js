import React from "react"

import Layout from "../inner-components/layout"
import SEO from "../inner-components/seo"

import ReactSlider from '../components/react-slider'

import '../components/react-slider/style.scss'

const ReactSliderPage = () => (
  	<Layout>
    	<SEO title="React Slider" />
    
	    <div className={`component-section react-slider-page`}>
    		<ReactSlider autoRotate={false}>
    			<div style={{'minHeight': '300px'}}>
                    <img src={"https://marketplace.canva.com/EAD2-sy3snI/2/0/1600w/canva-tropical-happiness-zoom-virtual-background-JtPR2q13C4g.jpg"}
                        alt="Google image" />         
                </div>
    			<div>
                    <img src={"https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixlib=rb-1.2.1&w=1000&q=80"}
                        alt="Google image" />                  
                </div>
                <div>
                    <img src={"https://marketplace.canva.com/EAD2-sy3snI/2/0/1600w/canva-tropical-happiness-zoom-virtual-background-JtPR2q13C4g.jpg"}
                        alt="Google image" />         
                </div>
                <div>
                    <img src={"https://miro.medium.com/max/1200/0*mOLX3rgl9cCdVxdB.jpg"}
                        alt="Google image" />                  
                </div>
    		</ReactSlider>
    	</div>

        <section className={'info-section'}>
            <div>
                <h1>React Slider</h1>
            </div>

            <div className={`info`}>
                <br />
                <span>Install</span>
                <p>yarn add @bit/akhilraj08.ak-components.react-slider</p>
                <br />
                <span>Bit link</span>
                <p>
                    <a target="_blank" href="https://bit.dev/akhilraj08/ak-components/react-slider">
                        https://bit.dev/akhilraj08/ak-components/react-slider
                    </a>
                </p>
                <br />
            </div>
            
            <article>
                <pre>
                    {
                        `import ReactSlider from '@bit/akhilraj08.ak-components.react-slider' \n`+
                        `\n`+
                        `<ReactSlider \n`+
                        `   showChevron = {true} \n`+
                        `   showDisk = {true} \n`+
                        `   autoRotate = {false} \n`+
                        `> \n`+
                        `   <div> \n`+
                        `       <img src="img.jpg" alt="slide image"/> \n`+
                        `   </div> \n`+
                        `   <div> \n`+
                        `       <img src="img.jpg" alt="slide image"/> \n`+
                        `   </div> \n`+
                        `</ReactSlider> \n`
                    }
                </pre>
            </article>
        </section>
  	</Layout>
)

export default ReactSliderPage
