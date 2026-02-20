import Gallery from '../components/Gallery/Gallery';
import Hero from '../components/Hero/Hero';
import News from '../components/News/News';
import RunInfo from '../components/RunInfo/RunInfo';

const Home = () => {
    return (
        <main>
            <Hero />
            <Gallery />
            <News />
            <RunInfo />
        </main>
    );
};

export default Home;