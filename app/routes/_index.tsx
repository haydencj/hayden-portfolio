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
    </div>
  );
}
