import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link'; // Assuming you have a custom hook
import useScreenSize from '../hooks/useScreenSize';

interface MenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ setIsOpen }) => {
  const currentYear: number = new Date().getFullYear();
  const isMobile: boolean = useScreenSize(); // Assuming useScreenSize returns a boolean

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-screen w-screen bg-white z-50 p-6 sm:p-24 fixed"
      >
        {isMobile && (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col">
              <button
                className="font-bold flex flex-row items-center justify-end gap-3"
                onClick={() => setIsOpen(false)}
              >
                <img className="w-4 h-4" src="/img/close.png" alt="close" />
                CLOSE
              </button>

              <div className="flex flex-col items-start">
                <h2 className="text-lg font-extrabold font-cantarell text-balance mt-7">Solving Yesterday's and Today's Problem</h2>
                <div className="w-16 border-4 border-black mt-3"></div>
              </div>

              <ul className="flex flex-col gap-6 mt-8 float-left clear-both">
                <li>
                  <Link href="https://www.bostonglobe.com/">NEWSLETTER</Link>
                </li>
                <li>
                  <Link href="mailto:hello@otherwaysfund.com">CONTACT US</Link>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col ">
                <p>625 Massachusetts Ave</p>
                <p>Cambridge, Massachusetts</p>
              </div>

              <p className="text-sm">&copy; {currentYear} Otherways Fund All Right Reserved.</p>
            </div>
          </div>
        )}

        {!isMobile && (
          <div className="w-full h-full flex flex-row justify-between">
            <div className="w-1/2 flex flex-col justify-center">
              <div className="my-auto">
                <h2 className="text-2xl font-extrabold font-cantarell text-balance w-1/2">Solving Yesterday's and Today's Problem</h2>
                <div className="w-16 border-4 border-black mt-3 ml-2"></div>
              </div>
            </div>
            <div className="w-1/2 font-jkt flex flex-col items-end gap-20">
              <button
                className="font-bold flex flex-row items-center justify-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                <img className="w-4 h-4" src="/img/close.png" alt="close" />
                CLOSE
              </button>

              <div className="flex flex-col items-end">
                <p>625 Massachusetts Ave</p>
                <p>Cambridge, Massachusetts</p>
              </div>

              <div className="inline">
                <ul className="flex items-center gap-2">
                  <li className="px-4">
                    <Link href="https://www.bostonglobe.com/">NEWSLETTER</Link>
                  </li>
                  <li className="border-l border-red-400 pl-4">
                    <Link href="mailto:hello@otherwaysfund.com">CONTACT US</Link>
                  </li>
                </ul>
              </div>

              <p className="absolute bottom-32">&copy; {currentYear} Otherways Fund All Right Reserved.</p>
            </div>
          </div>
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default Menu;
