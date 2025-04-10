import { buttonVariants } from "./ui/Button";
import NavLink from "./ui/NavLink";
import { Text } from "./ui/Text";

export default function CTASection() {
  return (
    <div className="overflow-hidden bg-white lg:flex py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
        <div className="lg:w-full lg:max-w-lg lg:pb-8 text-left">
          <Text
            type="h2"
            variant="4xl"
            weight="semibold"
            className="sm:text-5xl text-gray-900"
          >
            Our people
          </Text>
          <Text variant="xl" className="mt-6 text-gray-600">
            Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati
            eos iste. Soluta rerum quidem minus ut molestiae velit error quod.
            Excepturi quidem expedita molestias quas.
          </Text>
          <Text variant="base" className="mt-6 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat. Quasi aperiam sit non sit neque reprehenderit.
          </Text>
          <div className="mt-10 flex">
            <NavLink
              href="#"
              className={buttonVariants({ variant: "primary", size: "sm" })}
            >
              Join our team &rarr;
            </NavLink>
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
          <div className="flex-auto w-0 lg:self-end lg:ml-auto lg:w-auto lg:flex-none">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
              className="aspect-7/5 w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
          <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>

            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                className="aspect-7/5 w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>

            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
