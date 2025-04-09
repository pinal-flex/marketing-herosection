import { Radio, RadioGroup } from "@headlessui/react";
import { Text } from "./ui/Text";

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
      <div className="bg-gray-900 py-24 sm:py-32 rounded-xl">
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

        <div className="flex flex-row mt-10 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex-1">
              <div className="ring-1 ring-white/10 rounded-3xl p-8 xl:p-10">
                <div className="flex">
                  <Text
                    type="h3"
                    variant="lg"
                    className="leading-8 text-white"
                    weight="semibold"
                  >
                    {tier.name}
                  </Text>
                </div>
                <Text variant="sm" className="mt-4 leading-6 text-gray-300 text-left">{tier.description}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
