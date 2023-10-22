import './App.css';
import Navigation from './Navigation';
import Banner from './Banner';
import Heading from './Heading';
import Button from './Button';
import ArticleList from './ArticalList';
import TutorialList from './TutorialList';
import Footer from './Footer';
import EmailBanner from './signup'

function App() {
  return (
    <div className="App">       
     
    <Navigation />
    <Banner />
    <div className='heading'>
      <Heading title="Featured Articles"/>
    </div>
    <ArticleList />
    <div className='button'>
      <Button name="See all articles" />
    </div>
    <div className='heading2'>
      <Heading title="Featured Tutorials"/>
    </div>
    <TutorialList />
    <div className='button2'>
      <Button name="See all tutorials" />
    <EmailBanner />
    </div>
    <Footer />
    </div>
  );
}

export default App;
