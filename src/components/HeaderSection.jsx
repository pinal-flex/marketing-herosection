import NavLink from "./ui/NavLink";
import { Text } from "./ui/Text";

const links = [
  { name: "Open roles " },
  { name: "Internship program " },
  { name: "Our values " },
  { name: "Meet our leadership " },
];

const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function HeaderSection() {
  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="relative py-20 sm:py-32">
        <div
          className="
      bg-[url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply)] 
      bg-cover absolute -z-10 size-full object-cover object-right md:object-center inset-0 rounded-xl"
        />
        <div className="px-6 lg:px-8">
          <div className="text-left mx-auto max-w-2xl lg:mx-0">
            <Text
              type="h2"
              variant="5xl"
              weight="semibold"
              className="text-white sm:text-7xl"
            >
              Work with us
            </Text>

            <Text
              variant="lg"
              weight="medium"
              className="mt-8 text-gray-300 sm:text-xl/8"
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat.
            </Text>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex flex-wrap gap-x-8 gap-y-6 lg:gap-x-10">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  href="#"
                  className="text-base/7 text-white"
                >
                  {link.name}
                  <span>&rarr;</span>
                </NavLink>
              ))}
            </div>

            <div className="flex flex-wrap mt-14 sm:mt-20 gap-8 sm:gap-4 sm:flex-row justify-between whitespace-nowrap">
              {stats.map((state) => (
                <div
                  key={state.name}
                  className="flex flex-col gap-1 text-left flex-1"
                >
                  <Text variant="4xl" weight="semibold" className="text-white">
                    {state.value}
                  </Text>
                  <Text variant="base" className="text-gray-300">
                    {state.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
