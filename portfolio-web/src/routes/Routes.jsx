import { Switch } from 'react-router';
import Layout from '../components/Layout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Education from '../pages/Education';
import Experience from '../pages/Experience';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Layout exact path="/portfolio-repository/" component={Home}/>
                <Layout exact path="/portfolio-repository/about" component={About}/>
                <Layout exact path="/portfolio-repository/experience" component={Experience}/>
                <Layout exact path="/portfolio-repository/education" component={Education}/>
                <Layout exact path="/portfolio-repository/contact" component={Contact}/>
            </Switch>
        </div>
    );
};

export default Routes;
