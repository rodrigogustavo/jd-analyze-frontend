import React, { Component } from 'react';
import axios from '../../../axios';

import './SkillDetails.css';

class SkillDetails extends Component {

    state = {
        loadedSkill: null
    }

    componentDidMount(){
        this.loadData();
    }

    componentDidUpdate(){
        this.loadData();
    }

    loadData(){
        if (this.props.match.params.id){
            if(!this.state.loadedSkill || (this.state.loadedSkill && this.state.loadedSkill.id !== this.props.match.params.id)){
                axios.get('/skill/' + this.props.match.params.id).then(response => {
                    this.setState({loadedSkill : response.data});
                });
            }
        }
    }

    deleteSkillHandler = () => {
        axios.delete('/skill/' + this.props.match.params.id).then(response => {
        })
    }

    render () {
        let skill = <p style={{textAlign: 'center'}}>Please select a Skill!</p>;
        if(this.props.match.params.id){
            skill = <p style={{textAlign: 'center'}}>Loading!</p>;
        }
        if(this.state.loadedSkill){
            skill = (
                <div className="SkillDetails">
                    <h1>{this.state.loadedSkill.name}</h1>
                    <p>{this.state.loadedSkill.description}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteSkillHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return skill;
    }
}

export default SkillDetails;