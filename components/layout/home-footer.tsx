import { Icons } from "@/components/shared/icons";
import Image from "next/image";
import Link from "next/link";
import HomeNewsLetterForm from "@/components/form/home-newsLetter-form";

const navigations = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/amine.jguirim10/",
    icon: (
      <Icons.facebook
        className="text-gray-400 hover:text-blue-500  transition-colors size-6"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aminejguirim/",
    icon: (
      <Icons.instagram
        className="text-gray-400 hover:text-pink-600 transition-colors size-6"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/aminejguirim10",
    icon: (
      <Icons.github
        className="text-gray-400 hover:text-gray-600 transition-colors size-6"
        aria-hidden="true"
      />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/amine-jguirim-817a65267/",
    icon: (
      <Icons.linkedin
        className="text-gray-400 hover:text-blue-600 size-6"
        aria-hidden="true"
      />
    ),
  },
];

export default function HomeFooter() {
  return (
    <section className="flex flex-col gap-6 md:pb-2 -mt-4">
      <div className="mb-8 max-md:mb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-4 justify-between ">
          <div className="flex flex-col gap-3  ">
            <div className="h-10">
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  width={40}
                  height={40}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="flex max-md:flex-col gap-3 max-md:gap-2 text-sm font-medium text-gray-600">
              <Link href={"/"}>Book Now</Link>
              <Link href={"/"}>Find a Doctor</Link>
              <Link href={"/"}>Contact Us</Link>
              <Link href={"/"}>FAQs</Link>
              <Link href={"/"}>About Us</Link>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className="text-base max-md:text-sm font-semibold">
              Subscribe
            </h3>
            <HomeNewsLetterForm />
            <p className="text-sm text-gray-600">
              Stay updated with our latest news and promotions
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between lg:px-8 border-t border-t-gray-400">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigations.map((item) => (
              <a key={item.name} href={item.href} className={"text-gray-400"}>
                <span className="sr-only">{item.name}</span>
                {item.icon}
              </a>
            ))}
          </div>
          <div className="mt-6 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Amine Jguirim, Inc. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
