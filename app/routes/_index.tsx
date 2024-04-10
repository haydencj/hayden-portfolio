import type { MetaFunction } from '@remix-run/node';
import Hero from '../components/Hero';
import About from '~/components/About';
import Experience from '~/components/Experience';

export const meta: MetaFunction = () => {
  return [{ title: "hayden's site" }];
};

export default function Portfolio() {
  console.log('Rendering portfolio component');
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      {/* <div className="h-20 bg-gradient-to-b from-cal_poly_green-500 to-transparent"></div> */}
    </div>
  );
}
