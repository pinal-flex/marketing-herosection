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
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="flex gap-x-8 gap-y-16 sm:gap-y-20 flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 px-6 md:px-0 lg:pt-4 lg:pr-4 text-left">
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
                className="mt-2 text-pretty sm:text-5xl"
                variant="4xl"
                weight="semibold"
              >
                A better workflow
              </Text>
              <Text className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
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

          <div className="w-full lg:w-1/2 sm:px-6 lg:px-0">
            <div className="bg-indigo-500 overflow-hidden isolate lg:max-w-none">
              <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2">
                NotificationSetting.jsx
              </div>
              <div>App.jsx</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
