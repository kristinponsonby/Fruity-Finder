import React from "react";

class FetchFruit extends React.Component {
    state = {
        loading: true
    };
    
    async componentDidMount() {
        const url = "http://localhost:3000/fruits";
        const response = await fetch(url); 
        const data = await response.json();
       console.log(data);
    }
    
    
    render() {
        return (
            <div> 
           {this.state.loading ? <div>loading...</div> : <div>fruit..</div>}
           </div>
        );
    }
 }

 export default FetchFruit;
