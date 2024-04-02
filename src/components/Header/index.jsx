import React from "react";
import { Text, Heading, Img } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="mx-auto flex w-full max-w-[1760px] items-center justify-between gap-5 md:flex-col">
        <div className="flex items-center gap-2">
          <Img src="images/img_home.svg" alt="home_one" className="h-[44px] w-[44px]" />
          <div className="flex flex-col items-start self-start">
            <Heading as="h4" className="text-center tracking-[0.05px]">
              REIS
            </Heading>
            <Text size="md" as="p" className="text-center !text-indigo-500">
              Real State
            </Text>
          </div>
        </div>
        <ul className="flex flex-wrap gap-[30px]">
          <li>
            <a href="HOME" target="_blank" rel="noreferrer" className="cursor-pointer hover:font-semibold">
              <Text size="md" as="p" className="text-center !font-normal !text-gray-900_01">
                HOME
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer hover:font-semibold">
              <Text size="md" as="p" className="text-center !font-normal !text-gray-900_01">
                ABOUT US
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer hover:font-semibold">
              <Text size="md" as="p" className="text-center !font-normal !text-gray-900_01">
                OUR AGENTS
              </Text>
            </a>
          </li>
          <li>
            <a href="PROPERTIES" target="_blank" rel="noreferrer">
              <Heading size="s" as="p" className="text-center !text-gray-900_01">
                PROPERTIES
              </Heading>
            </a>
          </li>
          <li>
            <a href="GALLERY" target="_blank" rel="noreferrer" className="cursor-pointer hover:font-semibold">
              <Text size="md" as="p" className="text-center !font-normal !text-gray-900_01">
                GALLERY
              </Text>
            </a>
          </li>
          <li>
            <a href="BLOG" target="_blank" rel="noreferrer" className="cursor-pointer hover:font-semibold">
              <Text size="md" as="p" className="text-center !font-normal !text-gray-900_01">
                BLOG
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer hover:font-semibold">
              <Text size="md" as="p" className="text-center !font-normal !text-gray-900_01">
                CONTACT US
              </Text>
            </a>
          </li>
          <li>
            <a href="SEARCH" target="_blank" rel="noreferrer" className="cursor-pointer hover:font-semibold">
              <Text size="md" as="p" className="text-center !font-normal !text-gray-900_01">
                SEARCH
              </Text>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
