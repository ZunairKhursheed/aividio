import Container from 'components/Container';
import Disclaimer from 'components/Disclaimer';

const Success = () => {
  return (
    <Container>
      <div className="bg-black text-gray-600 w-full px-8 pt-8 pb-8 rounded-md relative">
        <h2 className="text-3xl test-white font-md my-2">Payment successful</h2>
        <p>Thank you for your purchase!</p>
        <Disclaimer />
      </div>


    </Container>


  )
}

export default Success
