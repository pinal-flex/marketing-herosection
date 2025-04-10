import { cn } from "../lib/utils";
import NavLink from "./ui/NavLink";
import { Text } from "./ui/Text";
import { textVariants } from "./ui/Text";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      src: "assets/images/MichaelFoster.jpg",
      alt: "Michael Foster",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    description:
      "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      src: "assets/images/MichaelFoster.jpg",
      alt: "Lindsay Walton",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      src: "assets/images/MichaelFoster.jpg",
      alt: "Tom Cook",
    },
  },
];

export default function BlogSection() {
  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="text-left">
        <Text
          variant="4xl"
          weight="semibold"
          type="h2"
          className="text-pretty text-gray-900 sm:text-5xl"
        >
          From the blog
        </Text>
        <Text variant="lg" className="mt-2 leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </Text>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
        {posts.map((post) => (
          <article key={post.id} className="flex-1 items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <date datetime={post.datetime} className="text-gray-500">
                {post.date}
              </date>
              <NavLink
                href="#"
                className="bg-gray-50 text-gray-600 hover:bg-gray-100 font-medium rounded-full px-3 py-1.5"
              >
                {post.category.title}
              </NavLink>
            </div>
            <div className="text-left">
              <NavLink
                href="#"
                className={cn(
                  textVariants({
                    variant: "lg",
                    type: "h3",
                    weight: "semibold",
                  }),
                  "mt-3 leading-6 text-gray-900 group-hover:text-gray-600 block"
                )}
              >
                {post.title}
              </NavLink>
              <Text
                variant="sm"
                className="mt-5 line-clamp-3 leading-6 text-gray-600"
              >
                {post.description}
              </Text>
            </div>

            <div className="flex items-center mt-8 gap-x-4">
              <img
                alt={post.author.alt}
                src={post.author.src}
                className="size-10 rounded-full bg-gray-50"
              />
              <div className="leading-6 text-left">
                <NavLink
                  href="#"
                  className={textVariants({
                    variant: "sm",
                    weight: "semibold",
                    className: "text-gray-900 block",
                  })}
                >
                  {post.author.name}
                </NavLink>
                <Text variant="sm" className="text-gray-600 mt-1.5">
                  {post.author.role}
                </Text>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
