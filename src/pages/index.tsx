import type { NextPage } from 'next'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const sections = {
  morning: {
    title: 'Morning routine',
    description: 'Clear your mind. Breathe and feel the warmth of the sun.',
    routines: [
      {
        emoji: '🌊',
        title: 'Hygiene',
        description: 'Wash your face, brush your teeth. Self-care.',
      },
      {
        emoji: '🧹',
        title: 'Declutter',
        description: 'Remove anything that clutters your desk and clean your space. Throw out the trash.',
      },

      {
        emoji: '💦',
        title: 'Hydrate',
        description: 'Clean your flask and fill it up with water. Keep yourself hydrated through out the day.',
      },
      {
        emoji: '🚶‍♂️',
        title: 'Walk Routine',
        description:
          'Get out of the house and take a morning walk. Get that hard pumping as you hustle through the day.',
      },
      {
        emoji: '🤠',
        title: 'Catch-up',
        description: `Record all your expenses. Check your emails. Catch up to any messages you've likely ignored.`,
      },
      {
        emoji: '☯',
        title: 'Meditate',
        description: 'Zen mode. Take a few minutes of your time to think about what you want to prioritize today.',
      },
    ],
  },

  daily: {
    title: 'Daily activities',
    description: `Pick a few of these healthy choices.`,
    routines: [
      {
        emoji: '🛁',
        title: 'Take a bath',
        description: `Let's take pride in staying clean after getting our hands dirty. Use this to take a mental break.`,
      },
      {
        emoji: '🍜',
        title: 'Lunch out',
        description: 'Touch grass. Ride your Vespa. Go window-shopping. Take a nice lunch, and maybe work at a cafe.',
      },
      {
        emoji: '🏃‍♂️',
        title: 'Exercise',
        description: 'Walk, maybe even go back to the gym.',
      },
      {
        emoji: '👋',
        title: 'Hangout',
        description: 'Visit a friend or the folks at Philam',
      },
      {
        emoji: '🌫',
        title: 'Get shit done',
        description: 'Enjoy the process and get stuff done. Then enjoy the rest of your day.',
      },
    ],
  },

  evening: {
    title: 'Bedtime',
    description: 'Had a long day? Get a cold shower. Wash your face, brush your teeth. End the day clean.',
    routines: [
      {
        emoji: '🛁',
        title: 'Hygiene',
        description:
          'Had a long day? Get a cold shower. Wash your face, brush your teeth. Your bed deserves a clean version of you.',
      },
    ],
  },
}

const Home: NextPage = () => {
  return (
    <>
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="px-6 pt-6 lg:px-8">
          <div>
            <nav className="flex h-9 items-center justify-between" aria-label="Global">
              <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
              </div>
            </nav>
          </div>
        </div>

        <main>
          <div className="relative px-6 lg:px-8">
            <div className="container py-16 sm:pt-64 lg:flex lg:justify-between">
              <div>
                <div className="max-w-xl">
                  <span className="block text-lg font-semibold text-teal-600 mb-6">Building Habits</span>

                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    Anything worth doing is worth doing poorly.
                  </h2>

                  <div className="mb-5" />

                  <p className="text-3xl text-gray-500">
                    Said someone &mdash; maybe. I'm getting back on track, so... let's get this bread.
                  </p>
                </div>

                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="mb-60"></div>

      <div className="container pb-40">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {sections.morning.title}
          </h2>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">{sections.morning.description}</p>
        </div>

        <div className="mb-10"></div>

        <div className="grid grid-cols-2 gap-4">
          {sections.morning.routines.map((routine) => (
            <div className="px-6 py-10 border border-grey-500 rounded">
              <div className="flex">
                <div className="mr-2"></div>

                <h2 className="text-2xl font-bold leading-none text-gray-900">
                  {routine.emoji} {routine.title}
                </h2>
              </div>

              <div className="mb-2" />

              <p className="text-xl text-gray-500">{routine.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-40">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {sections.daily.title}
          </h2>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">{sections.daily.description}</p>
        </div>

        <div className="mb-10"></div>

        <div className="grid grid-cols-2 gap-4">
          {sections.daily.routines.map((routine) => (
            <div className="px-6 py-10 border border-grey-500 rounded">
              <div className="flex">
                <div className="mr-2"></div>

                <h2 className="text-2xl font-bold leading-none text-gray-900">
                  {routine.emoji} {routine.title}
                </h2>
              </div>

              <div className="mb-2" />

              <p className="text-xl text-gray-500">{routine.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container pb-40">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {sections.evening.title}
          </h2>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">{sections.evening.description}</p>
        </div>

        <div className="mb-10"></div>

        <div className="grid grid-cols-2 gap-4">
          {sections.evening.routines.map((routine) => (
            <div className="px-6 py-10 border border-grey-500 rounded">
              <div className="flex">
                <div className="mr-2"></div>

                <h2 className="text-2xl font-bold leading-none text-gray-900">
                  {routine.emoji} {routine.title}
                </h2>
              </div>

              <div className="mb-2" />

              <p className="text-xl text-gray-500">{routine.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container pt-40 pb-60">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Thinking out loud</h2>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">
            Todo lists are nice. But not too much. Making a todo list for being a human doesn't feel good; ticking the
            boxes feel artifical. Instead, let's keep a high-level list, and have specific lists for things we find
            overwhelming.
          </p>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">
            Drink a lot of water and always be in the move. We owe ourselves a healthy mind and body for every good
            thing that comes.
          </p>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">Enjoy the small things in life, and chew your food slowly.</p>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">
            Spend more time with your people. Appreciate the small details. Do more of your hobbies. Take more water
            breaks.
          </p>
        </div>
      </div>

      <div className="container pt-40 pb-60">
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Weekly self-care</h2>

          <div className="mb-5" />

          <p className="text-3xl text-gray-500">Cut your nails every Sunday. Get a foot spa every two weeks.</p>
        </div>
      </div>
    </>
  )
}

export default Home
