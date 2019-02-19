import React , { Component } from 'react'

class Logout extends Component{


    componentDidMount(){
        localStorage.removeItem('token');
        this.props.history.push("/")
    }


    render(){
        return(
            <div>
                <h3>ออกจากระบบ</h3>
            </div>
        )
    }


}

export default Logout