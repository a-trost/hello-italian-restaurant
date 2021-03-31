import React from "react";

const Icons = { starters: <StartersIcon />, pizzas: <PizzasIcon /> };

const MySlice = ({ slice }) => (
  <section className="flex justify-center px-6 py-8 text-white bg-black">
    <div className="flex flex-col items-center w-full max-w-lg">
      <h3 className="mx-auto mb-10">
        {Icons[slice.primary.category]}
        <span className="sr-only">{slice.primary.category}</span>
      </h3>
      {slice?.items?.map((item, i) => (
        <div key={`item.item-${i}`} className="block w-full mb-8">
          <div className="flex items-center w-full mb-2">
            <h4 className="font-serif text-2xl text-seafoam">{item.item}</h4>
            <div className="flex-auto h-1 mx-2 border-b-2 border-dotted opacity-50 border-gold"></div>
            <p className="font-serif text-3xl text-gold">{item.price}</p>
          </div>
          <div className="max-w-sm font-sans text-sm text-gray">
            {item.ingredients}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default MySlice;

function StartersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="152"
      height="68"
      fill="none"
      alt="Starters"
    >
      <path
        fill="#E4C18B"
        d="M22.8 42.4l-.5 1.3c-.2.6-.4 1.1-.3 1.8 0 .6.4.9 1 .6.7 0 1.2-.5 1.6-1 .9-1 1.6-2 2-3.2.3-.5.5-1.1.6-1.7.2-1.8-1.1-3.1-3-3.2-.8 0-1.6 0-2.4.4-1 .4-2.2.8-3.2 1.4A47 47 0 003 52.4a18 18 0 00-2 3.8c-.4 1-.7 2-.8 3.3-.5 3.7 1.7 6.6 5.6 7.5l1.2.2c2.3.3 4.5 0 6.7-.6a82 82 0 0024-14.1c2.2-2 4-4 5.8-6.4 1-1.6 1.9-3.3 2.3-5.2.8-3.7-.3-6.7-3.6-9a28.6 28.6 0 00-5.7-2.5c-3.3-.9-6.7-1.4-10.1-1.6l-10.7-.6c-1.7 0-3.5-.2-5.2-.5L8 25.8c-1-.4-1.3-1.1-1-2 .1-.8.4-1.6.8-2.4.7-1 1.5-2.2 2.4-3.2A52 52 0 0126 6c1.7-.8 3.5-1.5 5.3-2 1.1-.2 2.2-.4 3.3-.3.6 0 1 .2 1.2.6.4.7 1.1.7 1.7.1.6-.8.6-2 0-2.8-.5-.7-1.2-1-2-1.2-.8-.3-1.8-.4-2.7-.2-1.5 0-2.9.4-4.2 1A55.6 55.6 0 008.8 13 29.3 29.3 0 004 19c-.7 1.3-1.3 2.6-1.5 4-.6 2.8.5 5 3.1 6.6a9 9 0 001.8.7l3.2.8c3.7.7 7.4.8 11 1.2 3.3.3 6.6.5 9.8 1 1.8.2 3.5.6 5.2 1 1.1.4 2.2.8 3.1 1.6 1 .8 1.4 1.8 1.2 3-.1.9-.4 1.7-.9 2.5-.6 1.2-1.4 2.2-2.4 3.2s-2.2 2.2-3.4 3a72.2 72.2 0 01-21.5 12.1c-1.2.5-2.5.8-3.7 1.1-.6.2-1.3.3-2 .3-.9 0-1.1-.3-1-1.1.1-1 .5-1.8 1-2.6.7-1.4 1.6-2.6 2.6-3.8 3.6-4.2 7.9-7.7 12.6-10.9.1 0 .3 0 .6-.3z"
      ></path>
      <path
        fill="#E4C18B"
        d="M52.2 23.8v.8l-.5 7.3c-.2 3.3-.4 6.5-.2 9.8 0 2.2.3 4.4.9 6.6.6 2.4 1.7 4.6 3.2 6.7a9 9 0 002.2 2.1 3 3 0 002.2.5c1.1-.2 2-1.7 1.5-3-.4.1-.6.4-.9.6-.7.7-1 .7-1.7 0l-.2-.3a11 11 0 01-2.3-4.6c-.5-2.4-.7-4.8-.9-7.3a132.6 132.6 0 01.4-19l.8.1 5 .3c1.1 0 2.1 0 3.2-.2.5 0 1-.3 1.5-.6.7-.4 1-1.1.8-2-.2-.7-.8-1.1-1.6-1.3L57.3 19l-.8-.1c0-1 .2-1.7.3-2.6 0-.7.2-1.4.1-2.1 0-.8-.5-1.3-1.2-1.4-.7-.1-1.3 0-1.6.7-.3.4-.5.7-.5 1.2l-.6 3-.2.6h-.4l-7.2-.8c-2.7-.2-5.5-.3-8.3 0-1.5 0-3 .3-4.3 1-.6.3-1.2.6-1.6 1.2-.6 1-.5 2.1.4 2.9a4 4 0 002.7 1l1-.3c.2 0 .4-.3.3-.6v-.4l16.8 1.6z"
      ></path>
      <path
        fill="#E4C18B"
        d="M71.5 47.3A2 2 0 0171 46c-.2-1.1-.1-2.2.2-3.2.5-2 1.2-3.8 1.9-5.7l1.2-3c.3-.5.5-1-.2-1.6V32c-.4-1.7-2.2-2.6-4.6-2.1-.8 0-1.6.3-2.4.7-2 .7-3.4 2-4.6 3.3a16 16 0 00-3 5.5 9 9 0 00-.7 4.3c.1.5.2 1 .6 1.5.6 1.1 2.1 1.4 3.5.7l.8-.5 1.6-1.4 2.8-3 .5-.5v.3l-.5 2.5a6 6 0 00.4 3.6c.2.5.5 1 1.1 1.5 1 .7 2.1.7 3.3.2l1-.6 1.4-1.3a35 35 0 006.3-8.5c1-1.6 1.6-3.2 2.3-4.8l.1-.7c0-.1-.1-.3-.3-.3h-.5c0 .2-.2.3-.3.5l-3.1 4.9a41.7 41.7 0 01-7.4 8.8l-.9.6zM62 44c0-3.3 4.8-9.5 8.3-10.4l.1 1c0 .2 0 .3-.2.5l-5.8 6.6A75 75 0 0162 44z"
      ></path>
      <path
        fill="#E4C18B"
        d="M89.4 40.5l.9 1.4c1.1 1.6 3 1.8 4.5.5.5-.4.9-1 1-1.5.8-1.6 1.4-3.2 2-4.8l.2-.7c0-.2-.2-.5-.4-.6-.1 0-.4 0-.6.2l-.4.4-.8 1.3-2 2.6-.8.6-1-2.8-.4-1.2c-.8-1.9-2.7-2.1-4-.6a8 8 0 00-1 1.8c-.5 1.1-1 2.2-1.3 3.4l-.3.4v-4l-.1-4.5c0-.6-.2-1.2-.4-1.6a2 2 0 00-3.3-.3c-.3.4-.5.9-.6 1.4l-.5 2.9c-.5 5.6-.4 11.3.5 17 .2 1.5.4 3.2 1 4.7.1.5.4 1 .7 1.4 1 1.3 2.8 1.2 3.7-.2l.5-1.3c.2-1.1.5-2.2.6-3.4a89.3 89.3 0 012.4-12.5z"
      ></path>
      <path
        fill="#E4C18B"
        d="M97.7 23.8v.8l-.5 7.3c-.2 3.3-.3 6.5-.2 9.8.1 2.2.4 4.4 1 6.6.5 2.4 1.6 4.6 3.1 6.7a9 9 0 002.2 2.1 3 3 0 002.2.5c1.1-.2 2.1-1.7 1.5-3-.4.1-.6.4-.9.6-.7.7-1 .7-1.6 0l-.3-.3a11 11 0 01-2.3-4.6 132.6 132.6 0 01-.5-26.2h.8l5 .3c1.1 0 2.2 0 3.2-.2.5 0 1-.3 1.5-.6.7-.4 1-1.1.8-2-.2-.7-.8-1.1-1.6-1.3l-8.3-1.4-.8-.1.3-2.6c0-.7.2-1.4.1-2.1 0-.8-.5-1.3-1.1-1.4-.7-.1-1.3 0-1.7.7l-.5 1.2-.6 3-.1.6h-.5l-7.1-.8c-2.8-.2-5.6-.3-8.4 0-1.5 0-3 .3-4.3 1-.6.3-1.2.6-1.5 1.2-.7 1-.6 2.1.3 2.9a4 4 0 002.7 1l1-.3c.2 0 .4-.3.3-.6v-.4l16.8 1.6z"
      ></path>
      <path
        fill="#E4C18B"
        d="M110.5 45.4a3 3 0 01-.2-1.7l.4-2.5c0-.4.3-.6.6-.7 1.2-.3 2.2-.8 3-1.7 1.5-1.5 2.6-3.2 3-5.3l.3-2.5a8 8 0 000-1.7c-.1-.8-.5-1.3-1.2-1.6-.7-.2-1.4 0-1.9.5l-1.1 1.4c-3 3.6-4.8 8-6.1 12.4a8.3 8.3 0 00-.3 3.7c0 .6.3 1.3.6 1.9a3 3 0 004 1.3 16.6 16.6 0 005.2-5c.7-1.5 1.6-3 2.4-4.4l1.6-2.9c.3-.6.2-1-.2-1.4-.4-.3-1-.3-1.4.2l-.9 1-4 5.5a13.8 13.8 0 01-3.8 3.5zm1.2-8c.3-1.9 2-5.4 3.4-6.6.8 2-1.1 5.8-3.4 6.7z"
      ></path>
      <path
        fill="#E4C18B"
        d="M128 40.5l.9 1.4c1.1 1.6 3 1.8 4.5.5.4-.4.9-1 1-1.5a94 94 0 002-4.8l.2-.7c0-.2-.2-.5-.4-.6-.1 0-.4 0-.6.2-.2 0-.3.2-.4.4l-.8 1.3-2 2.6-.8.6-1-2.8-.4-1.2c-.8-1.9-2.7-2.1-4-.6a8 8 0 00-1 1.8c-.5 1.1-1 2.2-1.3 3.4l-.3.4h-.1v-4c0-1.6 0-3-.2-4.5 0-.6 0-1.2-.3-1.6a2 2 0 00-3.3-.3c-.3.4-.5.9-.6 1.4l-.5 2.9c-.5 5.6-.4 11.3.5 17 .2 1.5.4 3.2 1 4.7.1.5.4 1 .7 1.4 1 1.3 2.8 1.2 3.7-.2l.5-1.3c.2-1.1.5-2.2.6-3.4a89.3 89.3 0 012.4-12.5z"
      ></path>
      <path
        fill="#E4C18B"
        d="M145.9 25.4v.4c0 .3 0 .6.3.7.2 0 .5-.1.7-.3.5-.5.6-1.1.7-1.9 0-1-.7-1.8-1.8-1.9l-1.5.1c-1 .2-1.8.8-2.6 1.3-2.4 1.8-4.4 4-5.9 6.6-.7 1.3-1.3 2.7-1.5 4.2-.3 2.6.2 4.7 2.5 6.2l.1.1-.7.5a53 53 0 00-8.8 6.5 20.2 20.2 0 00-3.5 4.3c-.5.7-.9 1.5-1 2.4-.4 1.6.1 2.8 1.4 3.7a6 6 0 002.4 1c2.3.3 4.5 0 6.7-.7 1.8-.7 3.5-1.6 5-2.7a69.4 69.4 0 0010.3-8.8c.6-.8 1-1.7 1.3-2.8.5-2-.3-3.5-2.1-4.4-1-.4-2-.6-3-.7l-.6-.2.3-.2 4.8-2.3c.4-.2.9-.4 1.3 0 .4-.2.6-.5.4-1 0-.4-.4-.5-.8-.5h-1l-1.9.7-6 2.8c-.4.2-.8.3-1.3.1l-.7-.1c-1.5-.5-2-1.4-2-3 .1-1 .4-1.9.9-2.8 1.3-2.5 3.2-4.7 5.6-6.3l1.3-.8c.2 0 .4 0 .7-.2zM126 55c.2-.8.4-1.3.7-1.8.9-1.4 2-2.6 3-3.7a58 58 0 0110-7.6l6.2.6c.3 0 .6 0 .8.2.4 0 .5.3.4.6l-.7 1.2c-.8.8-1.5 1.6-2.4 2.2-1.4 1-2.9 2.1-4.4 3-3 1.9-6.3 3.4-9.6 4.7-1 .4-2 .6-3 .6h-1z"
      ></path>
    </svg>
  );
}

function PizzasIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="66"
      fill="none"
      alt="Pizzas"
    >
      <path
        fill="#E4C18B"
        d="M6.9 57.6c0 1.3 0 2.8.3 4.1.1.8.3 1.4.8 2.1.3.5.8 1 1.4 1.2 1.4.6 3 0 3.5-1.4 0-.3 0-.6.2-.9l.3-2c.7-5.1 1.5-10.2 2.5-15.3.1-.4.4-.7.8-1l4.2-2.8a124.1 124.1 0 0021.8-20.4c1.8-2.3 3.2-4.9 4.2-7.6.6-1.7 1-3.5.9-5.4-.3-3.3-2-5.7-5.4-7.1C41 .4 39.5 0 38 0c-2.8-.2-5.6.1-8.5.7A69.3 69.3 0 005.6 11.1c-1 .8-2 1.6-3 2.6l-.9 1.1c-.2.3-.3.7-.3 1 0 .8.8 1.3 1.7 1l1.4-.7c.4-.1.5-.3.4-.6-.1-.2 0-.3.2-.4.2 0 .3-.2.5-.3 3.9-2.6 8.2-4.7 12.7-6.5h.3v.3l-4.4 12.7A175.1 175.1 0 009 42c0 .1 0 .4-.4.6-1.2.6-2.4 1.1-3.8 1.4-.8.1-1 0-1.3-.6-.4-.9-.5-1.8-.3-2.7.2-1.1.7-2.1 1.4-3L6 35.1l.1-.4c0-.2 0-.4-.3-.4h-.2l-2 1a8.6 8.6 0 00-3 4c-.8 2-.8 4 0 6A4.6 4.6 0 004 48c1 .3 2.2.3 3.3.2.7-.2.7-.2.6.6-.4 2.9-.8 5.8-1 8.8zM36.6 3.7c1.3 0 2.5 0 3.6.4.7.2 1.3.4 2 .9 1 .8 1.6 1.8 1.7 3 .2 1.2 0 2.3-.3 3.4a29.8 29.8 0 01-5.3 8.4 82 82 0 01-9 8.5c-3.5 2.9-7.1 5.6-10.9 8.2l-.4.2v-.5l4.4-19.7 2-8.4.3-1.7c0-.3 0-.4.4-.6a53.8 53.8 0 0111.5-2z"
      ></path>
      <path
        fill="#E4C18B"
        d="M45.8 36c-.6.1-.8.5-1 .9L43.4 40l-3 6.3-.7 1.3h-.2l-.2-1.7.2-5.5.5-4.4c.2-1.2 0-1.7-1-2.2-.5-.2-1-.2-1.3.3-.3.4-.5.9-.6 1.3-.2.6-.2 1.3-.2 1.9l.2 7.2v.9l.6 3c.2.7.6 1.4 1.5 1.5.9 0 1.4-.5 1.8-1.2l1-2.3 3.4-8.6.4-1.2V36zm-7-10.5c.4 0 1-.6.9-1 0-.6-.5-1-1-1s-1 .6-.9 1c0 .6.4 1 1 1z"
      ></path>
      <path
        fill="#E4C18B"
        d="M49.9 46l.4-.7 4.4-6 1.9-3 .6-1.8c.5-1.9-.6-3.5-2.5-3.7h-1.3c-2.6.4-5 1.5-7.2 3-.4.3-.7.8-1 1.2-.4.6-.5 1.3 0 2 .4.6 1 .8 1.8.6.5 0 1-.3 1.3-.5l3.8-1.5h.6l-.9 1.2-3.3 4.2-3.4 4.6c-.6.8-.9 1.7-1.3 2.6-.2.4-.3 1-.3 1.4 0 1.6 1.5 2.4 2.8 1.7.3 0 .5-.2.7-.4l1.5-1 2.7-1.6h.8c.4 0 .7 0 1-.3a1 1 0 00-.1-1.1c-.3-.4-.7-.7-1.1-.7l-2-.3zM63 46l.4-.7 4.4-6 1.8-3c.3-.6.6-1.2.7-1.8.5-1.9-.6-3.5-2.5-3.7h-1.3c-2.7.4-5 1.5-7.2 3-.4.3-.7.8-1 1.2-.5.6-.5 1.3 0 2 .4.6 1 .8 1.8.6.5 0 .9-.3 1.3-.5l3.8-1.5h.6l-.9 1.2-3.3 4.2-3.4 4.6c-.6.8-1 1.7-1.3 2.6-.2.4-.3 1-.3 1.4 0 1.6 1.5 2.4 2.8 1.7l.7-.4 1.5-1 2.7-1.6h.8c.4 0 .7 0 1-.3a1 1 0 00-.2-1.1c-.2-.4-.6-.7-1-.7l-2-.3zm19.6 2.3a2 2 0 01-.5-1.3c-.2-1-.1-2.2.2-3.2.5-2 1.2-3.8 1.9-5.7.3-1 .8-2 1.2-2.9.3-.5.4-1.1-.2-1.7v-.4c-.4-1.6-2.3-2.6-4.6-2.1-.8 0-1.6.4-2.4.7-2 .8-3.4 2-4.6 3.3a16 16 0 00-3 5.5 9 9 0 00-.7 4.3c.1.5.2 1 .6 1.5.6 1.2 2.1 1.4 3.5.7l.8-.5 1.6-1.3 2.8-3c0-.2.3-.3.5-.6v.4l-.5 2.4a6 6 0 00.3 3.6c.3.6.6 1 1.2 1.5 1 .7 2.1.8 3.3.3l1-.7 1.4-1.3a35 35 0 006.3-8.4c1-1.6 1.5-3.3 2.3-4.9l.1-.7c0-.1-.1-.3-.3-.3l-.5.1-.3.4-3.1 4.9a41.7 41.7 0 01-7.4 8.9l-.9.5zM73 45c0-3.3 4.8-9.5 8.3-10.4V36l-6 6.6a75 75 0 01-2.3 2.3z"
      ></path>
      <path
        fill="#E4C18B"
        d="M103.8 26.5l.1.3c0 .3 0 .7.3.7l.6-.3c.6-.5.7-1.1.7-1.8 0-1-.7-2-1.7-2-.5 0-1 0-1.6.2-1 .2-1.8.7-2.6 1.3-2.4 1.7-4.4 4-5.9 6.6-.7 1.3-1.3 2.6-1.4 4.2-.4 2.5.1 4.6 2.4 6.1l.1.2-.7.4a53 53 0 00-8.8 6.6 20.2 20.2 0 00-3.5 4.2c-.5.8-.9 1.6-1 2.5-.3 1.5.2 2.7 1.5 3.6a6 6 0 002.4 1c2.2.3 4.5.1 6.6-.7 1.8-.7 3.5-1.6 5-2.7a69.4 69.4 0 0010.3-8.8c.6-.8 1-1.7 1.3-2.7.5-2-.3-3.6-2.1-4.4-1-.5-1.9-.7-2.9-.8l-.7-.1.3-.3 4.9-2.3c.4-.2.8-.4 1.2 0 .5-.2.6-.5.5-1-.1-.3-.5-.5-1-.5l-.9.1-1.8.6-6 2.8c-.4.2-1 .3-1.4.1l-.6-.1c-1.6-.5-2.1-1.4-2-3 0-1 .4-1.8.8-2.7 1.4-2.6 3.2-4.7 5.7-6.4l1.3-.7.6-.2zM84 56c0-.7.4-1.3.7-1.8.8-1.4 1.9-2.6 3-3.7a58 58 0 0110-7.6l6.1.6.9.2c.3 0 .4.3.3.6-.2.4-.4.9-.7 1.2l-2.3 2.3-4.5 3c-3 1.8-6.3 3.3-9.6 4.6-1 .4-2 .7-3 .7h-1z"
      ></path>
    </svg>
  );
}
