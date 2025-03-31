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
      <div>
        <div>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <div>
              <h2>Deploy faster</h2>
              <p>A better workflow</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl>
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt>
                      <feature.icon className="size-5" />
                      {feature.name}
                    </dt>{" "}
                    <dd>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div>
            <div>
              <div> NotificationSetting.jsx</div>
              <div>App.jsx</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
