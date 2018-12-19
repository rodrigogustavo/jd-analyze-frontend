import React, {Component} from 'react';
import Skill from '../../../components/Skill/Skill';
import SkillDetails from '../SkillDetails/SkillDetails'
import axios from '../../../axios';
import { Route, Link } from 'react-router-dom';
import './Skills.css';

class Skills extends Component{

    state = {
        skills: []
    }

    componentDidMount(){
        axios.get('/skill/').then(response => {
            const skills = response.data.slice(0, 4);
            const updatedSkills = skills.map(skill =>  {
                return {
                    ...skill
                }
            });

            this.setState({skills: updatedSkills})
        }).catch(error => {
            console.log(error);
        });
    }

    skillSelectedHandler = (id) => {
        this.props.history.push('/skills/' + id);
    }

    render(){
        let skills = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

        if(!this.state.error){
            skills = this.state.skills.map( skill => {
                return (
                    <Link to={'/skills/' + skill.id}  key={skill.id}>
                        <Skill name={skill.name}
                                clicked={() => this.skillSelectedHandler( skill.id )}/>
                    </Link>
                );
            });
        }

        return(
            <div>
                <section className="Skills">
                    {skills}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={SkillDetails}/>
            </div>
        )
    }
}

export default Skills;