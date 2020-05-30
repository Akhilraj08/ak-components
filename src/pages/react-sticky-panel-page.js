import React, {useState, useEffect, useRef} from "react"

import Layout from "../inner-components/layout"
import SEO from "../inner-components/seo"

import ReactStickyPanel from '../components/react-sticky-panel'

import '../components/react-sticky-panel/style.scss'

const ReactStickyPanelPage = () => {
    return (
        <Layout>
            <SEO title="React Slider" />
        
            <div className={`component-section react-sticky-panel-page`}>
                <section className={'info-section'}>
                    <div>
                        <h1>React Slider</h1>
                    </div>

                    <div className={`info`}>
                        <br />
                        <span>Install</span>
                        <p>yarn add @bit/akhilraj08.ak-components.react-sticky-panel</p>
                        <br />
                        <span>Bit link</span>
                        <p>
                            <a target="_blank" href="https://bit.dev/akhilraj08/ak-components/react-sticky-panel">
                                https://bit.dev/akhilraj08/ak-components/react-sticky-panel
                            </a>
                        </p>
                        <br />
                    </div>
                    
                    <article>
                        <pre>
                            {
                                `import ReactStickyPanel from '@bit/akhilraj08.ak-components.react-sticky-panel' \n`+
                                `\n`+
                                `<ReactStickyPanel \n`+
                                `   positionTop = {15} \n`+
                                `   positionBottom = {15} \n`+
                                `> \n`+
                                `   <div> \n`+
                                `       <div style={{height: '300px'}}> \n`+
                                `            Box 1 \n`+
                                `        </div> \n`+
                                ` \n`+
                                `        <div style={{height: '100px'}}> \n`+
                                `            Box 2 \n`+
                                `        </div> \n`+
                                ` \n`+
                                `        <div style={{height: '100px'}}> \n`+
                                `            Box 2 \n`+
                                `        </div> \n`+
                                `   </div> \n`+
                                `</ReactStickyPanel> \n`
                            }
                        </pre>
                    </article>

                    <div style={{'height': `2000px`}}></div>
                </section>
                <aside>
                    <ReactStickyPanel>
                        <div id="child" className={'child-sections'} style={{width: "437px"}}>
                            <div style={{height: '300px'}}>
                                Box 1
                            </div>

                            <div style={{height: '100px'}}>
                                Box 2
                            </div>

                            <div style={{height: '100px'}}>
                                Box 2
                            </div>

                            <div style={{height: '600px'}}>
                                Box 2
                            </div>

                            <div style={{height: '100px'}}>
                                Box 2
                            </div>
                        </div>
                    </ReactStickyPanel>
                </aside>
            </div>

            
        </Layout>
    )
}

export default ReactStickyPanelPage
