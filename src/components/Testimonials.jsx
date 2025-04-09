import { Text } from "./ui/Text";
import { StarIcon } from "@heroicons/react/20/solid";

export default function Testimonials() {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon className="size-5" />
          <StarIcon className="size-5" />
          <StarIcon className="size-5" />
          <StarIcon className="size-5" />
          <StarIcon className="size-5" />
        </div>
        <Text
          variant="xl"
          weight="semibold"
          className="mt-10 text-left text-gray-900 sm:text-2xl/9"
        >
          “Qui dolor enim consectetur do et non ex amet culpa sint in ea non
          dolore. Enim minim magna anim id minim eu cillum sunt dolore aliquip.
          Amet elit laborum culpa irure incididunt adipisicing culpa amet
          officia exercitation. Eu non aute velit id velit Lorem elit anim
          pariatur.”
        </Text>
        <div className="mt-10 flex gap-x-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
            alt="Testimonial Image"
            className="size-12 rounded-full"
          />
          <div className="text-left">
            <Text
              variant="sm"
              weight="semibold"
              className="leading-6 text-gray-900"
            >
              Judith Black
            </Text>
            <Text variant="sm" className="leading-6 mt-0.5 text-gray-600">
              CEO of Workcation
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
