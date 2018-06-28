import React from 'react';
import './time-clock.css'

/*
* 显示时间的组件
* 可以选择12小时制或24小时制 norm = "12"/norm = "24",默认为24小时制
* 自定义格式化规则，YYYY-年、MM-月、DD-日、hh-时、mm-分、ss-秒，默认为："YYYY/MM/DD hh:mm:ss"
*
**/

class TimeClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            norm: props.norm ? Number(props.norm) : 24,
            format: props.format ? props.format : "YYYY/MM/DD hh:mm:ss",
            dateTxt: ""
        }
        this.timer = "";
    }

    // 获取时间
    getTime() {
        if (this.state.norm !== 12 && this.state.norm !== 24) {
            return <span>传入的时间制不合法</span>;
        }
        return this.formatDate(this.state.format, this.state.norm);
    }

    // 格式化时间
    formatDate(format, norm) {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let data = {
            "Y+": year, // 年
            "M+": this.fillZero(month), // 月
            "D+": this.fillZero(day), // 日
            "h+": this.fillZero(norm === 12 ? (hour > 12 ? hour - 12 : hour) : hour), // 时
            "m+": this.fillZero(minute), // 分
            "s+": this.fillZero(second) // 秒
        }
        let time = format;
        for (let key in data) {
            time = time.replace(new RegExp(key), data[key]);
        }

        if (norm === 12) {
            hour > 11 ? time += " PM" : time += " AM"
        }

        return time;
    }

    // 小于10前面补0
    fillZero(num) {
        return Number(num) > 9 ? String(num) : "0" + num;
    }

    componentDidMount() {
        let _this = this;
        this.timer = setInterval(() => {
            _this.setState({
                dateTxt: _this.getTime()
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="time-clock">
                {this.state.dateTxt ? this.state.dateTxt : this.getTime()}
            </div>
        );
    }
}

export default TimeClock;