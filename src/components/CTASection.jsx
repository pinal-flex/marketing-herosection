import { buttonVariants } from "./ui/Button";
import NavLink from "./ui/NavLink";

export default function CTASection() {
  return (
    <div className="bg-white py-32">
      <div className="text-left">
        <h2>Our people</h2>
        <p>
          Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
          eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
          Excepturi quidem expedita molestias quas.
        </p>
        <p>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi
          aperiam sit non sit neque reprehenderit.
        </p>
        <NavLink href="#" className={buttonVariants({ variant: "primary"})}>
          Join our team &rarr;
        </NavLink>
      </div>
    </div>
  );
}
