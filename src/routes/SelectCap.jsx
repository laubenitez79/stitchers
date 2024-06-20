import { Link } from 'react-router-dom';
import Cap from '../components/Cap';

const SelectCap = () => {
  return (
    <div className='flex flex-row items-center justify-around h-screen w-screen'>
      <Link to="/shop/1" className="flex-grow-0">
        <Cap Color="green" StaticImage="/ring-360-0.jpg" GifImage="/ring-360.gif" Svg="/letter-g-svg.svg" />
      </Link>
      <div className="flex-grow-0">
        <img className='h-134 w-134' src="/Stitchers-white-bgblack.jpg" alt="Logo" />
      </div>
      <Link to="/shop/2" className="flex-grow-0">
        <Cap Color="red" StaticImage="/shoe-360.jpg" GifImage="/shoe-360.gif" Svg="/letter-b-svg.svg" />
      </Link>
    </div>
  );
};

export default SelectCap;
