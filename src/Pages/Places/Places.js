import { Container, Row } from 'react-bootstrap';
import usePlaces from '../../hooks/usePlaces';
import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import Place from '../Place/Place';

const Places = () => {
    const [places] = usePlaces();
    if(!places){
      return <Loading></Loading>
    }
    return (
        <div>
            <Header></Header>
            <PageTitle title="Places"></PageTitle>
            <Container>
          <div className='main-container'>
          <h1 className='text-center mt-5 mb-3'>More Destinations for you</h1>
          <div>
              <Row className='gy-5'>
                {
                  places.slice(3,12).map(place => <Place
                  key={place.id}
                  place={place}
                  ></Place>)
                }
              </Row>
          </div>
          </div>
          </Container>
        </div>
    );
};

export default Places;