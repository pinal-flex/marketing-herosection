import { buttonVariants } from "./ui/Button";
import NavLink from "./ui/NavLink";
import { Text } from "./ui/Text";

const images = [
  {
    id: 1,
    src: "assets/images/tuple-logo-gray-900.svg",
    alt: "tuple-logo",
    width: "105",
    height: "48",
  },
  {
    id: 2,
    src: "assets/images/tuple-logo-gray-900.svg",
    alt: "reform-logo",
    width: "104",
    height: "48",
  },
  {
    id: 3,
    src: "assets/images/tuple-logo-gray-900.svg",
    alt: "savvycal-logo",
    width: "140",
    height: "48",
  },
  {
    id: 4,
    src: "assets/images/tuple-logo-gray-900.svg",
    alt: "laravel-logo",
    width: "136",
    height: "48",
  },
  {
    id: 5,
    src: "assets/images/tuple-logo-gray-900.svg",
    alt: "transistor-logo",
    width: "158",
    height: "48",
  },
  {
    id: 6,
    src: "assets/images/tuple-logo-gray-900.svg",
    alt: "statamic-logo",
    width: "147",
    height: "48",
  },
];

export default function LogoClouds() {
  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-16 text-left">
        <div className="w-full">
          <Text
            type="h2"
            variant="4xl"
            weight="semibold"
            className="text-pretty text-gray-900 sm:text-5xl"
          >
            Trusted by the most innovative teams
          </Text>

          <Text variant="lg" className="leading-8 mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue.
          </Text>
          <div className="mt-8 flex gap-x-6 items-center">
         
            <NavLink href="#" className={buttonVariants({ variant: "primary", size: "sm" })}>
              Create account
            </NavLink>
            <NavLink href="#" className={buttonVariants({ variant: "ghost" })}>
              Contact us &rarr;
            </NavLink>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full items-center gap-y-12 sm:gap-y-14 lg:pl-8">
          {images.map((image) => (
            <img
            key={image.id}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
          <img />
        </div>
      </div>
    </div>
  );
}
