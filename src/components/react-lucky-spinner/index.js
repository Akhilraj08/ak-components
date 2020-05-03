import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ReactLuckySpinner extends PureComponent {

    constructor(props) {
        super(props);

        this.begin = undefined;
        this.itemLength = this.props.items.length || 7;
        
        this.state = {
            width: 110 * this.itemLength,
            itemIndex: {},
            reelArray: '',
            speeds: this.props.spinSpeed,
            maxTime: this.props.spinTime,
            isSpinStarted: false
        }

        this.reactLuckySpinnerSlots = React.createRef();
    }

    componentDidMount() {
        //Dynamically set width
        //let width = (this.reactLuckySpinnerSlots.current.getElementsByTagName("li")[0].offsetWidth + 30) * this.itemLength; ////30 is left and right margin
        
        let itemIndex = (() => { 
            let temp = {};
            for(let i in this.props.items) {
                if(Number(i) === 0) {
                    temp[i] = this.state.width - 110;
                }
                else if(Number(i) === 1) {
                    temp[i] = 0;
                }
                else {
                    temp[i] = 110 * (i - 1)
                }
            }
            return (temp) 
        })();
        
        this.setState({
            //width, 
            itemIndex,
            reelArray: this.setReel(itemIndex)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.index !== prevProps.index && (this.props.index || this.props.index === 0)) {
            this.setState({
                reelArray: this.state.itemIndex[this.props.index]
            }) 
        }
    }

    setReel = (itemIndex) => {
        let reelArray = '';
        if(this.props.index || this.props.index === 0) {
            reelArray = itemIndex[this.props.index]
        }
        else if(this.props.isSpinAgain){
            reelArray = itemIndex[this.itemLength - 1]
        }

        return reelArray;
    }

    handleClick = () => {
        if(!this.state.isSpinStarted) {
            if(this.props.onSpinStart) {
                this.props.onSpinStart();
            }
            
            this.setState({
                speeds: this.state.speeds || Math.random() + .5,
                reelArray: this.state.reelArray || (Math.random() * this.itemLength | 0) * this.state.width / this.itemLength,
                isSpinStarted: true
            }, () => {
                if(typeof window !== "undefined") {
                    window.requestAnimationFrame(this.animate)
                }
            })
        }
    }

    animate = (now) => {
        if (!this.begin) {
            this.begin = now;
        }

        let {maxTime, reelArray, speeds, width} = this.state;
        var t = now - this.begin || 0;
        
        let position = (speeds / maxTime / 2 * (maxTime - t) * (maxTime - t) + reelArray) % width | 0;
        this.reactLuckySpinnerSlots.current.scrollLeft = position;

        if (t < maxTime && typeof window !== "undefined") {
            window.requestAnimationFrame(this.animate); // animate callback
        } else {
            this.begin = undefined;
            
            this.setState({
                speeds: this.props.spinSpeed,
                reelArray: this.setReel(this.state.itemIndex),
                isSpinStarted: false
            }, () => {
                if(this.props.onSpinComplete) {
                    let tempIndex = '';
                    for(let i in this.state.itemIndex) {
                        if(this.state.itemIndex[i] === position) {
                            tempIndex = i;
                            break;
                        }
                    }

                    this.props.onSpinComplete(tempIndex);
                }
            })
        }
    }


    render() {
        return (
            <div className="react-lucky-spinner">
                <div className="slots" ref={this.reactLuckySpinnerSlots}>
                    <ul className="items">
                        {
                            this.props.items.map((row, i) => {
                                return <li key={i}>{row}</li>
                            })
                        }
                        {
                            this.props.items.map((row, i) => {
                                return <li key={i}>{row}</li>
                            })
                        }
                    </ul>
                </div>

                <button onClick={this.handleClick}>Spin</button>
            </div>
        );
    }
}

ReactLuckySpinner.defaultProps = {
    spinTime: 5000,
    spinSpeed: 1.3, //null or Speed 0.1 to 2.0
    items: ['Money', 'Gift', 'Points', 'Rewards', 'Jackpot', 'Hattrick'],
    index: null,
    isSpinAgain: false,
    onSpinStart: null,
    onSpinComplete: null
};

ReactLuckySpinner.propTypes = {
    spinTime: PropTypes.number,
    spinSpeed: PropTypes.number,
    items: PropTypes.array,
    index: PropTypes.number,
    isSpinAgain: PropTypes.bool,
    onSpinStart: PropTypes.func,
    onSpinComplete: PropTypes.func
}

export default ReactLuckySpinner;
