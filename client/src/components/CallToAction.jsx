import { Button } from "flowbite-react";

export default function CallToAction() {
    return (
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-lg text-center bg-gray-100 shadow-lg'>
          <div className="flex-1 justify-center flex flex-col">
              <h2 className='text-3xl font-bold text-teal-700 mb-4'>
                  Want to learn more about JavaScript?
              </h2>
              <p className='text-gray-600 mb-6'>
                  Explore our curated collection of 100 JavaScript projects and tutorials.
              </p>
              <Button gradientDuoTone='purpleToPink' className='rounded-full py-3 px-6 shadow-md hover:shadow-lg'>
                  <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer' className="text-white font-semibold">
                      Discover Now
                  </a>
              </Button>
          </div>
          <div className="p-7 flex-1">
              <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" alt="JavaScript" className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
          </div>
      </div>
    )
  }
