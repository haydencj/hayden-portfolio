import type { MetaFunction } from '@remix-run/node';
import Hero from '../components/Hero';
import About from '~/components/About';
import Experience from '~/components/Experience';
import CmdWrapper from '~/components/CmdWrapper';

export const meta: MetaFunction = () => {
  return [{ title: "hayden's site" }];
};

export default function Portfolio() {
  console.log('Rendering portfolio component');
  return (
    <div>
      <Hero />
      <About />
      <CmdWrapper />
      <Experience />
    </div>
  );
}
