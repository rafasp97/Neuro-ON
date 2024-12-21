
// Style
import './Explore.css';

// Components
import ExploreOption from '../../components/ExploreOption/ExploreOption';


const Explore = () => {

  return (
    <div className="explorePage">
        <div className="box-title-explore">
          <h1>SELECIONE UMA ÁREA DE ESTUDO</h1>
          <img src='/images/icon-button.png'  alt="icon" className='icon-explore'/>
        </div>
        <div className="container-grid">
            <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-1' 
            navId='nav-1' 
            links={[
              {to: 'img1', name:'cerebro1'},
              {to: 'img2', name:'cerebro2'},
              {to: 'img3', name:'cerebro3'},
              {to: 'img4', name:'cerebro4'},
            ]}/>
                        <ExploreOption 
            imgSrc='/images/2.jpg' 
            imgId='img-2' 
            navId='nav-2' 
            links={[
              {to: 'img1', name:'cerebro3'},
              {to: 'img2', name:'cerebro4'},
              {to: 'img3', name:'cerebro4'},
            ]}/>
            
          
        </div>
    </div>
  )
}

export default Explore