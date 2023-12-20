import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "ABOUT", href: "/", current: false },
  { name: "CONTACT", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-green">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 items-center justify-between">
              {/* Move the logo or image to the right */}
              <div className="flex-shrink-0">
                <img
                  src="your-logo-url"
                  alt="Your Logo"
                  className="h-8 w-8"  // Adjust the size if needed
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-sky-100 hover:bg-gray-700 hover:text-white",
                      "rounded-md pl-3 pr-4 py-2 text-xs font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* ... rest of your code ... */}
            </div>
          </div>
          {/* ... rest of your code ... */}
        </>
      )}
    </Disclosure>
  );
}