import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Button from "./ui/Button";
import { Text } from "./ui/Text";

export default function NewsletterSections() {
  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="relative isolate overflow-hidden px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-gray-900 rounded-xl">
        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-16 max-w-2xl lg:max-w-none">
          <div className="w-full lg:w-1/2 text-left pr-24">
            <Text
              type="h2"
              variant="4xl"
              weight="semibold"
              className="text-white"
            >
              Subscribe to our newsletter
            </Text>
            <Text variant="lg" className="text-gray-300 mt-4">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis. Duis tempor incididunt dolore.
            </Text>

            <div className="flex mt-6 gap-x-4">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full rounded-md text-white bg-white/5 px-3.5 py-2 text-base outline-1 outline-white/10 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 placeholder:text-gray-500 sm:text-sm/6"
              />
              <Button
                variant="primary"
                size="sm"
                type="submit"
                className="text-white"
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div className="flex md:flex-row lg:pt-2 gap-y-10 gap-x-8 w-full lg:w-1/2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="size-6 text-white" />
              </div>
              <Text
                variant="base"
                weight="semibold"
                className="mt-4 text-white"
              >
                Weekly articles
              </Text>
              <Text variant="base" className="mt-2 text-gray-400 text-left">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </Text>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="size-6 text-white" />
              </div>
              <Text
                variant="base"
                weight="semibold"
                className="mt-4 text-white"
              >
                No spam
              </Text>
              <Text variant="base" className="mt-2 text-gray-400 text-left">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </Text>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
      </div>
    </div>
  );
}
