import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';
function App(){
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p class="title">
                        Personal Digital Assistants
                    </p>
                </div>
            </section>
            <div className="container">
                <div className="section">
                        <div className="columns">
                            <div className="column is-4">
                                <ProfileCard 
                                title="siri" 
                                handle="siri99" 
                                image={SiriImage}
                                description="siri is made my apple and is phased out!"
                                />
                            </div>
                            <div className="column is-4">
                                <ProfileCard 
                                title="cortana" 
                                handle="cortana11" 
                                image={CortanaImage}
                                description="cortana is made by microsoft and who knows what is does?"
                                />
                            </div>
                            <div className="column is-4">
                                <ProfileCard 
                                title="alexa" 
                                handle="alexa32" 
                                image={AlexaImage}
                                description="alexa is made by amazon and it is pretty good"
                                />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default App;