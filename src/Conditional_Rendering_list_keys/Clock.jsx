// import React from 'react';
// import Button from './Button';

// class Clock extends React.Component {
//     state = { date: new Date(), locale: 'bn-BD' };

//     componentDidMount() {
//         this.clockTimer = setInterval(() => this.tick(), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.clockTimer);
//     }

//     handleClick = (locale) => {
//         this.setState({
//             locale,
//         });
//     };

//     tick() {
//         this.setState({
//             date: new Date(),
//         });
//     }

//     render() {

//         const { date, locale } = this.state;

       

       

//         // if(locale === "bn-BD"){
//         //     button = (
//         //         <Button change={this.handleClick} locale = "en-US" >Click Here</Button>
//         //     )
//         // }
//         // else{
//         //     button = (
//         //         <Button change={this.handleClick} locale = "bn-BD" >Click Here</Button>
//         //     )
//         // }

        
   
        
//         return (
//             <div>
//                 <h1 className="heading">
//                     <span className="text">{date.toLocaleTimeString(locale)}</span>
//                 </h1>

//                 { locale === "bn-BD" ?  <Button change={this.handleClick} locale = "en-US" >Click Here</Button> :  <Button change={this.handleClick} locale = "bn-BD" >Click Here</Button>}
               
//             </div>
//         );
//     }
// }

// export default Clock;



// ******
// if and else condition এর মাধ্যমে রেনডারিং করার নিয়ম। 

// আমাদের state = locale : bn-BD আছে , যে কারনে ঘড়িটা বাংলায় আছে । locale and Button একসাথে রেনডারিং
// হচ্ছে । এই জন্য locale : bn-BD আছে , তখন state এ  change ফাংশনের মাধ্যমে  locale : un-US সেট করে দিচ্ছি ।

// এখন আমারা চাচ্ছি Button এ  click করলায় state = locale : un-US হবে ।

// ১। রেনডার ফাংশনের ভিতরের jsx element গুলাকে আমরা জাভাস্ক্রিপ্ট  ভ্যারিএবলের মত চিন্তা করতে 

// পারি , 

// ২। ভ্যারিএবলের  ভ্যালু প্রথম বন্ধনীর মধ্যে রাখতে হবে । if  এবং else  রিটার্নের বাইরে করতে 
// হবে 

// ৩।  রিটার্নের বাইরে jsx Element ভ্যারিএবলের মধ্যে ইস্টর করা যাবে। 




// টারনারি অপারেটর এর মাধ্যমে রেনডারিং করার নিয়ম। 


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

        const { date, locale } = this.state;
        

        
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                
                { locale === "bn-BD" ?  <Button change={this.handleClick} locale = "en-US" >Click Here</Button> :  <Button change={this.handleClick} locale = "bn-BD" >Click Here</Button>}
               
            </div>
        );
    }
}

export default Clock;

