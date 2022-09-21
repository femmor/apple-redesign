import Image from 'next/image';
import Button from './Button';

const Landing = () => {
  return (
    <section className="heroSection">
      <div className="heroTitleContainer">
        <h1>
          <span className="title heroTitle">Powered</span>
          <span className="title">By Intellect</span>
          <span className="title">Driven By Values</span>
        </h1>
        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>

      <div className="relative hidden h-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <Image src="/iphone.png" layout="fill" objectFit="contain" />
      </div>
    </section>
  );
};
export default Landing;
