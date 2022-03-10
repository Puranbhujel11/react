import React from 'react'

class person extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className='App'>
            {this.props.data.map((person) =>{
                return(
                    <>
                        <p>{person.name}</p>
                        <p>{person.number}</p>
                        <p>Birthday: {person.dob}</p>
                    </>
            )
            }
        )
    }
        </div>
        )
    }
}

export default person