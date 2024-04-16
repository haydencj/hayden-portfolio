import type { MetaFunction } from '@remix-run/node';
import Hero from '../components/Hero';
import About from '~/components/About';
import Experience from '~/components/Experience';
import Cmd from '~/components/Cmd';

export const meta: MetaFunction = () => {
  return [{ title: "hayden's site" }];
};

export default function Portfolio() {
  console.log('Rendering portfolio component');
  return (
    <div>
      <Hero />
      <About />
      <Cmd />
      <Experience />
    </div>
  );
}
