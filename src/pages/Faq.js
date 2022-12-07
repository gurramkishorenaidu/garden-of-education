import React from "react";
import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div className="max-w-[60%] m-auto pt-12 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-gray-900 pb-8 text-center">
        <span className="text-green-500">F</span>requently{" "}
        <span className="text-green-500">A</span>sked{" "}
        <span className="text-green-500">Q</span>uestions
      </h1>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>What is Accordion?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Accordion is an open-source library of interactive components
              built on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Is there a Accordion file available?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Accordion is first conceptualized and designed using the Accordion
              software so everything you see in the library has a design
              equivalent in our Accordion file.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Is there a Accordion file available?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Accordion is first conceptualized and designed using the Accordion
              software so everything you see in the library has a design
              equivalent in our Accordion file.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        
        <Accordion.Panel>
          <Accordion.Title>
            Is there a Accordion file available?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Accordion is first conceptualized and designed using the Accordion
              software so everything you see in the library has a design
              equivalent in our Accordion file.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Is there a Accordion file available?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Accordion is first conceptualized and designed using the Accordion
              software so everything you see in the library has a design
              equivalent in our Accordion file.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What are the differences between Accordion and Tailwind UI?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Accordion are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Accordion relies on smaller
              and standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Accordion, Accordion
              Pro, and even Tailwind UI as there is no technical reason stopping
              you from using the best of two worlds.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
