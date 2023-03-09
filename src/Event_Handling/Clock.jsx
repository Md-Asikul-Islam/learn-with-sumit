import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('clock component rendered');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale="en-US">
                    Click here
                </Button>
            </div>
        );
    }
}

export default Clock;


// ****
// ১। রেনডার ফাংশনের ভিতরে জাভাস্ক্রিপ্ট ভ্যালু ডায়নামিকালি এক্সেস করতে হবে, কারলি ব্রাসেস ভিতরে লিখতে হবে ।

// ২। ফাংশন এক্সেস করার জন্য ফাংশন গুলা কল করা যাবে না , শুধু ফাংশন রেফারেন্স দিলে হবে ।

// ৩। jsx এলিমেনট গুলা হচ্ছে জাভাস্ক্রিপ্ট ভারিআবল মত অর্থাৎ এইগুলা ভারিআবল ইস্টর করা যায়
