import Button from "./ui/Button";
import { Text } from "./ui/Text";

export default function NewsletterSections() {
    return (
      <div className="flex py-16 sm:py-24 lg:py-32">
        <div className="max-w-xl lg:max-w-lg text-left">
          <Text type="h2" variant="4xl" weight="semibold">Subscribe to our newsletter</Text>
          <Text>
            Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
            velit quis. Duis tempor incididunt dolore.
          </Text>
          <div>
            <input id="email" placeholder="enter your email" type="email" />
            <Button variant="primary" size="sm" type="submit">
              Subscribe
            </Button>
          </div>
        </div>

        <div>
          <div>
            <Text>Weekly articles</Text>
            <Text>
              Non laboris consequat cupidatat laborum magna. Eiusmod non irure
              cupidatat duis commodo amet.
            </Text>
          </div>
          <div>
            <Text>No spam</Text>
            <Text>
              Officia excepteur ullamco ut sint duis proident non adipisicing.
              Voluptate incididunt anim.
            </Text>
          </div>
        </div>
      </div>
    );
}
