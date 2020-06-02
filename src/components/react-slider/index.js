import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class ReactSlider extends PureComponent {
	constructor (props) {
        super(props);

        this.state = {
            activeSlide: 0,
            sliderHeight: 0,
            isResetHeight: false
        }

        this.sliderLoopTimeout = '';
        this.refReactSlider = React.createRef();
    }

    componentDidMount() {
        this.handleSwipe();

        this.handleSlideHeight();

        if(this.props.autoRotate) {
            this.sliderLoopTimeout = setInterval(() => {
                if(this.state.activeSlide < Number(this.props.children.length - 1)) {
                    this.sliderNext();
                }
                else {
                    this.resetSlide();
                }
            }, 3000)
        }
    }

    componentWillUnmount() {
        clearInterval(this.sliderLoopTimeout);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.isResetHeight !== prevState.isResetHeight && this.state.isResetHeight) {
            this.handleSlideHeight();
        }
    }

    handleSlideHeight = () => {
        this.setState({
            sliderHeight: this.refReactSlider.current.getElementsByClassName("show")[0].offsetHeight,
            isResetHeight: false
        })
    }

    handleSwipe = () => {
        if(this.props.children.length > 1) {
            let pageWidthAd = window.innerWidth || document.body.clientWidth;
            let treshold = Math.max(1,Math.floor(0.01 * (pageWidthAd)));
            let touchstartX = 0;
            let touchstartY = 0;
            let touchendX = 0;
            let touchendY = 0;

            const limit = Math.tan(10 * 1.5 / 180 * Math.PI); //angle on swipe
            const gestureZone = this.refReactSlider.current;
            gestureZone.addEventListener("touchstart", (event) => {
                touchstartX = event.changedTouches[0].screenX;
                touchstartY = event.changedTouches[0].screenY;
            }, false);

            gestureZone.addEventListener("touchend", (event) => {
                touchendX = event.changedTouches[0].screenX;
                touchendY = event.changedTouches[0].screenY;
                let x = touchendX - touchstartX;
                let y = touchendY - touchstartY;
                let xy = Math.abs(x / y);
                let yx = Math.abs(y / x);
                if (Math.abs(x) > treshold || Math.abs(y) > treshold) {
                    if (yx <= limit) {
                        if (x < 0) {
                            if(this.state.activeSlide < Number(this.props.children.length - 1)) {
                                this.sliderNext()
                            }
                        } else {
                            if(this.state.activeSlide > 0) {
                                this.sliderPrev()
                            }
                        }
                    }
                }
            }, false);
        }
    }

    sliderPrev = () => {
        this.setState({
            activeSlide: this.state.activeSlide - 1,
            isResetHeight: true
        })
    }

    sliderNext = () => {
        if(this.state.activeSlide < Number(this.props.children.length - 1)) {
            this.setState({
                activeSlide: this.state.activeSlide + 1,
                isResetHeight: true
            })
        }
        else {
            this.resetSlide();
        }
    }

    resetSlide = () => {
        this.setState({
            activeSlide: 0,
            isResetHeight: true
        })
    }

    render() {
        let slideStyle = {}
        if(this.state.sliderHeight) {
            slideStyle.height = this.state.sliderHeight
        }

        return(
    		<div className="ak-react-slider" ref={this.refReactSlider}>
                <div className="slides-warp">
                    <div className="slides" style={slideStyle}>
                        {
                            this.props.children.map((row, i) => {
                                let clName = "slide"
                                if(i === this.state.activeSlide - 1) {
                                    clName = "slide prevSibling"
                                }
                                if(i === this.state.activeSlide) {
                                    clName = "slide show"

                                    if(this.state.sliderHeight) {
                                        clName = "slide show absolute"                                            
                                    }
                                }
                                if(i === this.state.activeSlide + 1) {
                                    clName = "slide nextSibling"
                                }
                                return (
                                    <div key={i} className={clName}>
                                        {row}
                                    </div>
                                );
                            })
                        }
                    </div>
                    {
                        this.props.showChevron && this.props.children.length > 1 && 
                        <div className="chevron-wrap">
                            {
                                this.state.activeSlide > 0 &&
                                <span className="btn-prev" onClick={this.sliderPrev}>
                                    <svg className={`icon chevron-left-bold`} height="17px" width="17px" xmlns="http://www.w3.org/2000/svg" stroke="#fff" strokeWidth="20" viewBox="0 0 300 256" >
                                        <g>
                                            <polygon className={`chevron-left`} fill="white" points="207.093,30.187 176.907,0 48.907,128 176.907,256 207.093,225.813 109.28,128   "/>
                                        </g>
                                    </svg> 
                                </span>
                            }
                            
                            {
                                (this.state.activeSlide < Number(this.props.children.length - 1) || this.props.autoRotate) &&
                                <span className="btn-next" onClick={this.sliderNext}>
                                    <svg className={`icon chevron-right-bold`} height="17px" width="17px" xmlns="http://www.w3.org/2000/svg" stroke="#fff" strokeWidth="20" viewBox="0 0 300 256">
                                        <g>
                                            <polygon className={`chevron-right`} fill="white" points="79.093,0 48.907,30.187 146.72,128 48.907,225.813 79.093,256 207.093,128   "/>
                                        </g>
                                    </svg> 
                                </span>
                            }
                        </div>
                    }
                </div>

                {
                    this.props.showDisk && this.props.children.length > 1 &&
                    <div className="disk-warp">
                        {
                            this.props.children.map((row, i) => {
                                let clName = "disk"
                                if(i === this.state.activeSlide) {
                                    clName = "disk fill"
                                }
                                return (
                                    <div key={i} className={clName}></div>
                                );
                            })
                        }
                    </div>
                }
            </div>
    	)
    }
}

ReactSlider.defaultProps = {
    children: [],
    showChevron: true,
    showDisk: true,
    autoRotate: false,
};

ReactSlider.propTypes = {
    children: PropTypes.array,
    showChevron: PropTypes.bool,
    showDisk: PropTypes.bool,
    autoRotate: PropTypes.bool,
}

export default ReactSlider;