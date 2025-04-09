import { Text } from "./ui/Text";

const states = [
  { id:1, value: "44 million", name: "Transactions every 24 hours" },
  { id:2, value: "$119 trillion", name: "Assets under holding" },
  { id:3, value: "46,000", name: "New users annually" },
];

export default function States() {
  return (
    <div className="py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="bg-gray-900 py-24 sm:py-32 rounded-xl">
        <div className="mx-auto max-w-7xl text-center gap-x-8 gap-y-16 grid grid-cols-1 lg:grid-cols-3">
          {states.map((state) => (
            <div key={state.id} className="mx-auto flex flex-col gap-y-4 max-w-xs">
              <Text
                variant="3xl"
                weight="semibold"
                className="text-white sm:text-5xl"
              >
                {state.value}
              </Text>
              <Text variant="base" className="text-gray-400">
                {state.name}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3
