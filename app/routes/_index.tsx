import type { MetaFunction } from '@remix-run/node';
import Hero from '../components/Hero';

export const meta: MetaFunction = () => {
  return [{ title: "hayden's site" }];
};

export default function Portfolio() {
  console.log('Rendering portfolio component');
  return (
    <div>
      <Hero />
      {/* <div className="h-20 bg-gradient-to-b from-cal_poly_green-500 to-transparent"></div> */}
    </div>
  );
}
