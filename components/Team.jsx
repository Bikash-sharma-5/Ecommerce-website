import React from 'react'
import { assets } from '../assets/assets';

function Team() {
  return (
    <div>
        <div className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12 xl:px-32">
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
       Our Partners
      </h2>
      <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
        Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.
      </p>
    </div>
    <div className="grid gap-12 items-center md:grid-cols-3">
      <div className="space-y-4 text-center">
        <img
          className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
          src={assets.seven}
          alt="woman"
          loading="lazy"
          width="640"
          height="805"
        />
        <div>
          <h4 className="text-2xl">Hentoni Doe</h4>
          <span className="block text-sm text-gray-500">CEO-Founder</span>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <img
          className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
          src={assets.five}
          alt="man"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 className="text-2xl">Jonathan Doe</h4>
          <span className="block text-sm text-gray-500">Chief Technical Officer</span>
        </div>
      </div>
      <div className="space-y-4 text-center">
        <img
          className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
          src={assets.six}
          alt="man"
          loading="lazy"
          width="1000"
          height="667"
        />
        <div>
          <h4 className="text-2xl">maller Doe</h4>
          <span className="block text-sm text-gray-500">Chief Operations Officer</span>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Team
