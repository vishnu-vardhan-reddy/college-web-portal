/* eslint-disable react/react-in-jsx-scope */
import BounceLoader from 'react-spinners/BounceLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
  color: 'red',
};

// eslint-disable-next-line react/prop-types
function MoonLoader({ loading }) {
  return (
    <div
      className='sweet-loading'
      style={{ height: '100vh', display: 'grid', placeItems: 'center' }}
    >
      <BounceLoader
        color='#ff512f'
        loading={loading}
        css={override}
        size={150}
      />
    </div>
  );
}

export default MoonLoader;
