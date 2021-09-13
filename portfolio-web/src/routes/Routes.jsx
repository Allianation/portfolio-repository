import { Switch } from 'react-router';
import Layout from '../components/Layout';
import About from '../pages/About';
import Home from '../pages/Home';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Layout exact path="/portfolio-repository/" component={Home}/>
                <Layout exact path="/portfolio-repository/about" component={About}/>
                <Layout exact path="/portfolio-repository/blog" component={About}/>
                <Layout exact path="/portfolio-repository/services" component={About}/>
                <Layout exact path="/portfolio-repository/contacts" component={About}/>
            </Switch>
        </div>
    );
};

export default Routes;
