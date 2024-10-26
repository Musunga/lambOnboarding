 import picture1 from './assets/images/mog1.jpg';
 import picture2 from './assets/images/mog2.jpg';
 import picture3 from './assets/images/mog3.jpg';
 import picture4 from './assets/images/mog4.jpg';
 import picture5 from './assets/images/mog5.jpg';
//  import picture6 from './assets/images/mog6.jpg';
 import picture7 from './assets/images/mog7.jpg';
 import logo from './assets/images/mog8.jpg';
 import picture9 from './assets/images/mog9.jpg';
 import picture10 from './assets/images/mog10.jpg';

 import RegistrationForm from "./forms/registration";

 import './App.css';


 // List of image URLs for the carousel
const vertical1 = [
  picture1,
  picture2,

];
const vertical2 = [
  picture3,
  picture4,
  picture5,

];
const vertical3 = [
  picture7,
  picture10,
  picture9,

];


function App() {
  return (
    <div className="bg-white">
    <main>
      <div className="relative isolate">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-yellow-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={2}
            />
          </svg>
          <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={2} />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#713f12] to-[#9089fc] opacity-30"
          />
        </div>


        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:pt-30 lg:px-8 lg:pt-12">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <img
                alt=""
                src={logo}
                className="w-64 h-45 rounded-xl bg-yellow-900/5 object-cover shadow-lg"
              />
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                 We’re changing the way people connect.
                </h1>
                <RegistrationForm className="-z-10" />
              </div> 

              <div className="mt-14 flex justify-end -z-20 gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  {vertical1.map((src, index) => (
                   <div className="relative animate-scroll" key={index+2}>
                    <img
                     key={index}
                      alt=""
                      src={src}
                      className="aspect-[2/3] w-full rounded-xl bg-yellow-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-yellow-900/10" />
                  </div>
                ))}
                </div>

                <div className="mr-auto w-44 -z-20 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  {vertical2.map((src, index) => (
                        <div className="relative animate-scroll1" key={index+2}>
                          <img
                          key={index}
                            alt=""
                            src={src}
                            className="aspect-[2/3] w-full rounded-xl bg-yellow-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-yellow-900/10" />
                        </div>
                      ))}
                </div>
                <div className="w-44 flex-none -z-20  space-y-8 pt-32 sm:pt-0">
                {vertical3.map((src, index) => (
                   <div className="relative" key={index+2}>
                    <img
                     key={index}
                      alt=""
                      src={src}
                      className="aspect-[2/3] w-full rounded-xl bg-yellow-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-yellow-900/10" />
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      
    </main>
  </div>
  );
}

export default App;
