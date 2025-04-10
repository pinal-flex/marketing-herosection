import { Text } from "./ui/Text";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="flex gap-x-8 gap-y-16 sm:gap-y-20 flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 md:px-0 lg:pt-4 lg:pr-4 text-left">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <Text
              type="h2"
              variant="base"
              weight="semibold"
              className="text-indigo-600"
            >
              Deploy faster
            </Text>
            <Text
              className="mt-2 text-pretty sm:text-5xl text-gray-900"
              variant="4xl"
              weight="semibold"
            >
              A better workflow
            </Text>
            <Text className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </Text>

            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute top-1 left-1 size-5 text-indigo-600" />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative isolate bg-indigo-500 overflow-hidden px-6 pt-8 sm:pt-16 sm:pr-0 sm:max-w-2xl sm:mx-auto sm:rounded-3xl sm:pl-16 lg:mx-0 lg:max-w-none">
            <div
              className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
              aria-hidden="true"
            />
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <div className="overflow-hidden w-screen rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                  <div className="flex text-gray-400 text-sm/6 font-medium -mb-px">
                    <div className="bg-white/5 px-4 py-2 text-white border-r border-b border-r-white/10 border-b-white/20">
                      NotificationSetting.jsx
                    </div>
                    <div className="px-4 py-2 border-r border-gray-600/10">
                      App.jsx
                    </div>
                  </div>
                </div>

                <div className="px-6 pt-6 pb-14">
                  <img src="https://placehold.co/600x400" alt="code image" />
                </div>
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
