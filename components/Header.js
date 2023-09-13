import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";
import { BlurImage } from "./BlurImage";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: "1vh" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    // transition: { staggerChildren: 0.5 },
    exit: { opacity: 0, y: "1vh" },
  };

  const itemA = {
    hidden: { opacity: 0, scale: 0.5, y: "1vh" },
    show: { opacity: 1, scale: 1, y: 0 },
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
        <div className="flex md:w-3/4 flex-col mt-6">
          <p className="font-medium text-zinc-600 dark:text-zinc-500">
            🤟{' '}Hi! I'm
          </p>

          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
            Buddhi Vikasitha
          </h1>

          <p className="text-zinc-600 dark:text-zinc-500">
            a <span className="font-bold dark:text-zinc-400 font-inter">cloud solutions enthusiast</span> who loves scalable and robust architecture.
          </p>

          <span className="mt-6 gap-4">
            <a className="text-white dark:bg-teal-600 bg-teal-600 rounded-full text-md bg-gray-50 px-4 py-2 mr-2 cursor-pointer"
              href={'https://buddhiv.medium.com'}
              target="_blank">
              Visit my Blog{' '}✍
            </a>

            <a className="border border-teal-700 text-gray-700 dark:text-teal-300 dark:bg-transparent rounded-full text-md bg-gray-50 px-4 py-2 cursor-pointer"
              href={'/cv/Buddhi_Vikasitha.pdf'}
              target="_blank">
              Download Resume{' '}📃
            </a>
          </span>
        </div>

        <div className=" relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
          <div className="block  z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5  relative bg-white h-40 w-20">
            <BlurImage
              objectFit="cover"
              layout="fill"
              className="bg-gray-100 object-contain"
              src="/buddhi.png"
            />
          </div>
          <div className="z-0">
            <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
              <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 gap-x-2 gap-y-3 flex flex-row flex-wrap">

        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-3 py-1 cursor-pointer"
          href="https://www.linkedin.com/in/buddhiv"
          target="_blank">

          <div className="flex items-center">
            <svg className="mb-1" viewBox="0 0 32 32" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 0.0000020000002365350156, 0)">
                <rect fill="#007BB5" height="23" width="7" y="9" />
                <path d="M24.003,9C20,9,18.89,10.312,18,12V9h-7v23h7V19c0-2,0-4,3.5-4s3.5,2,3.5,4v13h7V19C32,13,31,9,24.003,9z" fill="#007BB5" />
                <circle cx="3.5" cy="3.5" fill="#007BB5" r="3.5" />
              </g>
            </svg>

            <span className="ml-2">
              linkedin.com/in/buddhiv
            </span>
          </div>
        </a>

        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-3 py-1 cursor-pointer">
          <div className="flex items-center">

            <svg viewBox="0 0 32 24.381" width="16" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M 32 6.248 L 28.191 8.343 L 24.381 11.962 L 24.381 24.381 L 29.715 24.381 C 30.977 24.381 32 23.358 32 22.096 L 32 6.248 Z" fill="#4caf50" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path d="M 0 6.248 L 2.754 7.55 L 7.619 11.962 L 7.619 24.381 L 2.286 24.381 C 1.023 24.381 0 23.358 0 22.096 L 0 6.248 Z" fill="#1e88e5" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <polygon fill="#e53935" points="24.381 2.438 16.001 8.724 7.619 2.438 6.858 6.858 7.619 11.962 16.001 18.248 24.381 11.962 25.143 6.858" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path d="M 0 3.275 L 0 6.248 L 7.619 11.962 L 7.619 2.438 L 5.239 0.655 C 4.672 0.229 3.983 0 3.275 0 C 1.466 0 0 1.466 0 3.275 Z" fill="#c62828" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path d="M 32 3.275 L 32 6.248 L 24.381 11.962 L 24.381 2.438 L 26.761 0.655 C 27.328 0.229 28.017 0 28.725 0 C 30.534 0 32 1.466 32 3.275 Z" fill="#fbc02d" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
            </svg>

            <span className="ml-2">
              buddhi.vikasitha@gmail.com
            </span>
          </div>
        </a>

        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-3 py-1 cursor-pointer">
          <div className="flex items-center">
            <svg viewBox="0 0 32 32" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path d="M 6.444 13.857 C 9.004 18.889 13.12 23.004 18.16 25.564 L 22.071 21.644 C 22.56 21.156 23.263 21.013 23.876 21.209 C 25.867 21.867 28.009 22.223 30.223 22.223 C 31.209 22.223 32 23.013 32 24 L 32 30.223 C 32 31.209 31.209 32 30.223 32 C 13.529 32 0 18.471 0 1.777 C 0 0.791 0.8 0 1.777 0 L 8 0 C 8.987 0 9.777 0.791 9.777 1.777 C 9.777 3.991 10.133 6.133 10.791 8.124 C 10.987 8.737 10.844 9.44 10.356 9.929 L 6.444 13.857 Z" />
            </svg>

            <span className="ml-2">
              +94 71 2489 789
            </span>
          </div>
        </a>

        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-3 py-1 cursor-pointer"
          href="https://github.com/buddhiv"
          target="_blank">
          <div className="flex items-center">

            <svg viewBox="0 0 31.992 32.0005" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M 15.995 0 C 7.162 0 0 7.344 0 16.4 C 0 23.648 4.582 29.809 10.94 31.969 C 11.74 32.129 11.992 31.633 11.992 31.201 C 11.992 30.817 12 29.728 11.992 28.352 C 7.543 29.344 6.621 26.192 6.621 26.192 C 5.894 24.304 4.846 23.792 4.846 23.792 C 3.394 22.768 4.955 22.8 4.955 22.8 C 6.56 22.912 7.406 24.48 7.406 24.48 C 8.833 26.992 11.149 26.272 12.06 25.84 C 12.206 24.784 12.62 24.064 13.077 23.648 C 9.525 23.248 5.791 21.84 5.791 15.552 C 5.791 13.76 6.414 12.288 7.437 11.152 C 7.272 10.736 6.722 9.056 7.594 6.8 C 7.594 6.8 8.937 6.368 11.992 8.48 C 13.268 8.128 14.637 7.936 15.997 7.936 C 17.356 7.936 18.724 8.128 20.002 8.48 C 23.057 6.368 24.398 6.8 24.398 6.8 C 25.27 9.056 24.721 10.736 24.557 11.152 C 25.58 12.288 26.201 13.76 26.201 15.552 C 26.201 21.856 22.461 23.232 18.897 23.648 C 19.471 24.144 19.992 25.136 19.992 26.656 C 19.992 28.72 19.992 30.673 19.992 31.201 C 19.992 31.649 20.25 32.129 21.062 31.969 C 27.414 29.793 31.992 23.648 31.992 16.4 C 31.992 7.344 24.83 0 15.995 0 Z" fill="#181616" fill-rule="evenodd" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
            </svg>

            <span className="ml-2">
              github.com/buddhiv
            </span>
          </div>
        </a>
        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-3 py-1 cursor-pointer"
          href="https://gitlab.com/buddhiv"
          target="_blank">
          <div className="flex items-center">

            <svg viewBox="0 0 32 28.952" width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path fill="#e53935" d="M 16 28.952 L 9.905 11.428 L 22.095 11.428 L 16 28.952 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path fill="#ff7043" d="M 16 28.952 L 29.714 11.428 L 22.095 11.428 L 16 28.952 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path fill="#e53935" d="M 25.905 0 L 29.714 11.428 L 22.095 11.428 L 25.905 0 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path fill="#ffa726" d="M 16 28.952 L 29.714 11.428 L 32 17.524 L 16 28.952 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path fill="#ff7043" d="M 16 28.952 L 2.285 11.428 L 9.905 11.428 L 16 28.952 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path fill="#e53935" d="M 6.095 0 L 2.285 11.428 L 9.905 11.428 L 6.095 0 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
              <path fill="#ffa726" d="M 16 28.952 L 2.285 11.428 L 0 17.524 L 16 28.952 Z" transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)" />
            </svg>

            <span className="ml-2">
              gitlab.com/buddhiv
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;

export const Hyperlink = ({ link, text }) => {
  return (
    <a
      href={link}
      className="inline-block font-bold text-zinc-700 dark:text-zinc-200 transform hover:scale-105 transition duration-200"
      target="__blank"
    >
      {text}
    </a>
  );
};
