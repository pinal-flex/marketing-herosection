import NavLink from "./ui/NavLink";
import { Text } from "./ui/Text";

const peoples = [
  {
    id: 1,
    name: "Lindsay Walton",
    role: "Front-end Developer",
    src: "assets/images/LindsayWalton.jpg",
    alt: "Lindsay Walton",
    TwitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 2,
    name: "Courtney Henry",
    role: "Designer",
    src: "assets/images/LindsayWalton.jpg",
    alt: "Courtney Henry",
    TwitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 3,
    name: "Tom Cook",
    role: "Director of Product",
    src: "assets/images/LindsayWalton.jpg",
    alt: "Tom Cook",
    TwitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 4,
    name: "Whitney Francis",
    role: "Copywriter",
    src: "assets/images/LindsayWalton.jpg",
    alt: "Whitney Francis",
    TwitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 5,
    name: "Leonard Krasner",
    role: "Senior Designer",
    src: "assets/images/LindsayWalton.jpg",
    alt: "Leonard Krasner",
    TwitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 6,
    name: "Floyd Miles",
    role: "Principal Designer",
    src: "assets/images/LindsayWalton.jpg",
    alt: "Floyd Miles",
    TwitterUrl: "#",
    linkedinUrl: "#",
  },
];

export default function TeamSection() {
  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="text-left max-w-2xl mx-auto lg:mx-0">
        <Text
          variant="4xl"
          weight="semibold"
          className="text-pretty text-gray-900 sm:text-5xl"
        >
          Our team
        </Text>
        <Text variant="lg" className="mt-6 leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </Text>
      </div>
      <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-none mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {peoples.map((people) => (
          <div key={people.id} className="text-left">
            <img
              src={people.src}
              alt={people.alt}
              height={256}
              width={384}
              className="rounded-2xl"
            />
            <Text
              variant="lg"
              weight="semibold"
              className="mt-6 leading-8 tracking-tight text-gray-900"
            >
              {people.name}
            </Text>
            <Text variant="base" className="text-gray-600">
              {people.role}
            </Text>
            <div className="mt-6 flex gap-x-6">
              <NavLink
                href={people.TwitterUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                </svg>
              </NavLink>
              <NavLink
                href={people.linkedinUrl}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
