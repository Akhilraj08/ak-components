import React from "react"

import Layout from "../inner-components/layout"
import SEO from "../inner-components/seo"

import ReactLuckySpinner from '../components/react-lucky-spinner'

import '../components/react-lucky-spinner/style.scss'

const ReactLuckySpinnerPage = () => (
  	<Layout>
    	<SEO title="React Lucky Spinner" />
        
	    <div className={`component-section react-lucky-spinner-page`}>
    		<ReactLuckySpinner />
    	</div>

        <section className={'info-section'}>
            <div>
                <h1>React Lucky Spinner</h1>
            </div>

            <div className={`info`}>
                <br />
                <span>Install</span>
                <p>yarn add @bit/akhilraj08.ak-components.react-lucky-spinner</p>
                <br />
                <span>Bit link</span>
                <p>
                    <a target="_blank" href="https://bit.dev/akhilraj08/ak-components/react-lucky-spinner">
                        https://bit.dev/akhilraj08/ak-components/react-lucky-spinner
                    </a>
                </p>
                <br />
            </div>
            
            <article>
                <pre>
                    {
                        `import ReactLuckySpinner from '@bit/akhilraj08.ak-components.react-lucky-spinner' \n`+
                        `\n`+
                        `<ReactLuckySpinner \n`+
                        `   spinTime = {5000}, \n`+ 
                        `   spinSpeed = {1.3},      //null or Speed 0.1 to 2.0 \n`+
                        `   items = {['Money}', 'Gift', 'Points', 'Rewards', 'Jackpot', 'Hattrick']}, \n`+
                        `   index = {null}, \n`+
                        `   isSpinAgain = {false}, \n`+
                        `   onSpinStart = {null}, \n`+
                        `   onSpinComplete = {null}, \n`+
                        `/>\n`
                    }
                </pre>
            </article>
        </section>
  	</Layout>
)

export default ReactLuckySpinnerPage
