import { Radio, RadioGroup } from "@headlessui/react";
import { Text } from "./ui/Text";
import { CheckIcon } from "@heroicons/react/20/solid";
import NavLink from "./ui/NavLink";
import { buttonVariants } from "./ui/Button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tiers = [
  {
    name: "Freelancer",
    id: "tier-freelancer",
    href: "#",
    price: { monthly: "$19" },
    description: "The essentials to provide your best work for clients.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    mostPopular: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    price: { monthly: "$29" },
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: { monthly: "$59" },
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    mostPopular: false,
  },
];

export default function PricingSection() {
  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="bg-gray-900 px-6 lg:px-8 py-24 sm:py-32 rounded-xl">
        <div className="text-center">
          <Text
            type="h2"
            variant="base"
            weight="semibold"
            className="text-indigo-400"
          >
            Pricing
          </Text>
          <Text
            variant="5xl"
            weight="semibold"
            className="mt-2 text-balance text-white sm:text-6xl"
          >
            Pricing that grows with you
          </Text>
          <Text
            variant="lg"
            weight="medium"
            className="mx-auto mt-6 text-gray-400 sm:text-xl/8 max-w-2xl"
          >
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </Text>
        </div>

        <div className="mt-16 flex justify-center">
          <RadioGroup className="flex flex-row bg-white/5 text-white text-center p-1 rounded-full gap-x-1 text-xs/5 font-semibold">
            <Radio className="rounded-full px-2.5 py-1 bg-indigo-500">
              Monthly
            </Radio>
            <Radio className="rounded-full px-2.5 py-1">Annually</Radio>
          </RadioGroup>
        </div>

        <div className="flex flex-col mx-auto max-w-md isolate mt-10 gap-8 lg:flex-row lg:max-w-none lg:mx-0">
          {tiers.map((tier) => (
            <div key={tier.id}>
              <div
                className={classNames(
                  tier.mostPopular
                    ? "bg-white/5 ring-2 ring-indigo-500"
                    : "ring-1 ring-white/10",
                  "rounded-3xl p-8 xl:p-10 flex-1 h-full"
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <Text
                    type="h3"
                    variant="lg"
                    className="leading-8 text-white"
                    weight="semibold"
                  >
                    {tier.name}
                  </Text>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs/5 font-semibold text-white">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <Text
                  variant="sm"
                  className="mt-4 leading-6 text-gray-300 text-left"
                >
                  {tier.description}
                </Text>

                <div className="mt-6 flex items-baseline gap-x-1">
                  <Text className="text-4xl font-semibold tracking-tight text-white">
                    {tier.price.monthly}
                  </Text>
                  <Text className="text-sm/6 font-semibold text-gray-300">
                    /month
                  </Text>
                </div>

                <NavLink
                  href={tier.href}
                  className={classNames(
                    tier.mostPopular
                      ? buttonVariants({ variant: "primary" })
                      : "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white",
                    "mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  Buy plan
                </NavLink>

                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
