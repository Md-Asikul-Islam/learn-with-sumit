import React from 'react';

class Clock extends React.Component {
    state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date } = this.state;
        const { locale } = this.props;
        return (
            <h1 className="heading">
                <span className="text">{date.toLocaleTimeString(locale)}</span>
            </h1>
        );
    }
}

export default Clock;

//***/   ১। state হল Component এর নিজস্ব ডাটা  এবং  ডাটা গুলা পরিবর্তন করা যায় ।

// ২। constructor অবজেক্ট এর কোন ডাটা রেনডার ফাংশনে এক্সেস করতে চাইলে (this.state.objectName) দিয়ে  এক্সেস নিতে হবে ।

// ৩। state এর কোন ডাটা পরিবর্তন করতে setState() ফাংশনের মধ্যে করতে হবে ।

// ৪।  class এর ভিতরে কোন মেথড কে এক্সেস করতে অন্য মেথডে এক্সেস করতে চাইলে this.methodName  দিয়ে এক্সেস করতে হবে ।   

// ৫।  // Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// }); এখানে counter: এর পর কখনই this.state ব্যবহার করা যাবে না ।


// তখন এভাবে করতে হবে 
// // Correct
// this.setState(function(state, props) {
//     return {
//       counter: state.counter + props.increment
//     };
//   });

// ৬। setState কোন অবজেক্ট দিলে পূর্বের অবজেক্টএর সাথে তুলনা করে যতটুকই পরিবর্তন হইসে ঠিক ঐ টাই আপডেট করে দিবে বা মারজ করবে


// ******