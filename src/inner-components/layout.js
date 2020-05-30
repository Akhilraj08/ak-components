/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Fragment} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

//import Header from "./header"
//import "./layout.css"
import "./layout.scss"

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
        <Fragment>
            <main className={`row`}>
                <aside className={`col l3`}>
                    <ul className={`sidenav sidenav-fixed`}>
                        <li className="bold">
                            <div className="row"></div>
                            <div className={"row"}>
                                <div className="col s1"></div>
                                <div className="col s10">
                                    <a href="/">
                                        <span className={`brand-logo`}>{`<Unit />`}</span>
                                    </a>
                                </div>
                                <div className="col s1"></div>
                            </div>
                            <div className="divider"></div>
                            <div className="row"></div>
                        </li>
                        <li className="search">
                            <div className={"row"}>
                                <div className="col s1"></div>
                                <div className="col s10">
                                    <input placeholder="Search Component" type="text" className="validate" />
                                </div>
                                <div className="col s1"></div>
                            </div>
                            <div className="divider"></div>
                        </li>
                        <li className="bold">
                            <Link to="/react-slider-page" className="waves-effect waves-teal">React Slider</Link>
                        </li>
                        <li className="bold">
                            <Link to="/react-lucky-spinner-page" className="waves-effect waves-teal">React Lucky Spinner</Link>
                        </li>
                        <li className="bold">
                            <Link to="/react-sticky-panel-page" className="waves-effect waves-teal">React Sticky Panel</Link>
                        </li>
                    </ul>
                </aside>

                <section className={`col s12 l8`}>
                    <header className={`row hide-on-med-and-up`}>
                        <nav>
                            <div className="nav-wrapper">
                                <ul className="left">
                                    <li>
                                        <i className="material-icons right">view_module</i>
                                    </li>
                                </ul>

                                <div className="right">
                                    <a href="/"><span className={`brand-logo`}>{`<Unit />`}</span></a>
                                </div>
                            </div>
                        </nav>
                    </header>
                    
                    <div className={`row`}>
                        {children}
                    </div>
                </section>

                <div className={`col l1`}></div>
            </main>

            <footer className={`row`}>
                <div className={`col s12`}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </footer>
        </Fragment>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
