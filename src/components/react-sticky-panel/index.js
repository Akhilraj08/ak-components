import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const offset = (el) =>  {
    if(typeof window != "undefined" && el != null)
    {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft,
            viewPortTop: rect.top
        }
    }
    else {
        return false
    }
}

const ReactStickyPanel = (props) => {
    const divEL = useRef(null);
    const spanTop = useRef(null);
    const spanBottom = useRef(null);
    const divBody = useRef(null);

    let { positionTop = '15', positionBottom = '15' } = props;
    
    useEffect(() => {
        divEL.current.parentNode.classList.add("react-sticky-panel-parent");
        
        let previousScrollY = window.scrollY;
        let centerFix = false;

        const onScroll = e => {
            let divBody_viewPortTop = offset(divBody.current).viewPortTop;
            let divBody_top = offset(divBody.current).top;
            let spantop_viewPortTop = offset(spanTop.current).viewPortTop;
            let spantop_top = offset(spanTop.current).top;
            let spanBottom_viewPortTop = offset(spanBottom.current).viewPortTop;

            //when body height is bigger than view port 
            if(divBody.current.offsetHeight > window.innerHeight) {
                //scroll down
                if(window.scrollY > previousScrollY) {
                    //stick to bottom of view port when body bottom is in view port
                    if(Math.abs(divBody_viewPortTop) >= (Number(divBody.current.offsetHeight - window.innerHeight) + Number(positionBottom))) {
                        //stick to bottom of panel when bottom span is in view port
                        if((Number(spanBottom_viewPortTop - window.innerHeight) + Number(positionBottom)) <= 0) {
                            if(!centerFix) {
                                divBody.current.style.position = 'absolute';
                                divBody.current.style.top = `${divBody_top - spantop_top}px`;
                                
                                centerFix = true 
                            }
                        }
                        else {
                            divBody.current.style.position = 'sticky';
                            divBody.current.style.top = `-${Number(divBody.current.offsetHeight - window.innerHeight) + Number(positionBottom)}px`;
                            centerFix = false;
                        }
                    }
                    else {
                        if(!centerFix) {
                            divBody.current.style.position = 'absolute';
                            divBody.current.style.top = `${divBody_top - spantop_top}px`;
                            
                            centerFix = true 
                        }
                    }
                }
                else {
                    //stick to top of view port when body top is in view port
                    if(divBody_viewPortTop >= positionTop) {
                        //stick to top of panel when top span is in view port
                        if(spantop_viewPortTop >= positionTop) {
                            divBody.current.style.position = 'relative';   
                            divBody.current.style.top = null;
                            
                            centerFix = false;
                        }
                        else {
                            divBody.current.style.position = 'sticky';
                            divBody.current.style.top = `${positionTop}px`;
                            
                            centerFix = false;
                        }
                    }
                    else {
                        //stick in between panel as user is scrolling up half way
                        if((divBody.current.offsetHeight) - spanBottom_viewPortTop <= 0) {
                            if(!centerFix) {
                                divBody.current.style.position = 'absolute';
                                divBody.current.style.top = `${divBody_top - spantop_top}px`;
                                
                                centerFix = true
                            }
                        }
                    }
                }
            }
            else {
                //scroll down
                if(window.scrollY > previousScrollY) {
                    if(spanBottom_viewPortTop <= divBody.current.offsetHeight) {
                        if(!centerFix) {
                            divBody.current.style.position = 'absolute';
                            divBody.current.style.top = `${divBody_top - spantop_top}px`;

                            centerFix = true;
                        }
                    }
                    else if(spantop_viewPortTop <= positionTop) {
                        divBody.current.style.position = 'sticky';
                        divBody.current.style.top = `${positionTop}px`;

                        centerFix = false;
                    }
                }
                else {
                    if(spantop_viewPortTop >= positionTop) {
                        divBody.current.style.position = 'relative';
                        divBody.current.style.top = '0';

                        centerFix = false;
                    } 
                    else if(divBody_viewPortTop >= positionTop) {
                        divBody.current.style.position = 'sticky';
                        divBody.current.style.top = `${positionTop}px`;

                        centerFix = false;
                    }
                }
            }

            previousScrollY = window.scrollY;
        };

        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

	return(
        <div className={"ak-react-sticky-panel"} ref={divEL}> 
            <span className={"arsp-top"} ref={spanTop}/>
            <div className={"arsp-body"} ref={divBody} >
                {props.children}
            </div>
            <span className={"arsp-bottom"} ref={spanBottom}/>
        </div>
    )
}

ReactStickyPanel.propTypes = {
    children: PropTypes.object,
    positionTop: PropTypes.number,
    positionBottom: PropTypes.number
}

export default ReactStickyPanel;