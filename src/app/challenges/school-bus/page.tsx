import Wheel from "./Wheel";



export default function SchoolBus() {
     return (
      // wrapper;
        <div className="w-screen h-full scale-50 sm:scale-75 md:scale-100 flex justify-center ">

            <div className="mt-20 z-10 relative rounded-sm rounded-tr-[5rem] border-4 border-zinc-600  max-w-[28rem] min-w-[28rem] h-[15.6rem] bg-yellow-500">
            {/* windows and door */}
            <div className="flex gap-x-8 min-w-fit h-full pt-20">
               {/* ligth */}
               <div className=" top-20 relative -left-2 w-5 rounded-md h-10 bg-red-700 ">
                     <div className="mt-1 h-2 bg-zinc-200 rounded-md"></div>
                     
                     <div className=" mt-4 h-2 bg-zinc-200 rounded-md"></div>
                     <div className="h-5 w-5 ">
                        <div className="relative top-5 h-1 w-3 bg-zinc-700 mb-2"></div>
                        
                        <div className="relative top-5 h-1 w-3 bg-zinc-700"></div>
                     
                     </div>
                  </div>
               {/* ============= */}

               <div className="w-20 h-20 bg-zinc-200 ml-6 rounded-xl"></div>
                  <div className="w-20 h-20 bg-zinc-200 rounded-xl"></div>
                  <section className="w-20 border-solid flex flex-col gap-2 border-white border-4 rounded-t-lg h-88 bg-white ">
                     <div className="w-14 h-10 flex gap-2 justify-center bg-zinc-400 m-auto  rounded-t-lg">
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     </div>
                     <div className="w-14 h-20 bg-zinc-400 m-auto flex justify-center gap-2 rounded-b-lg">
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     <div className="bg-zinc-100 w-1  h-[5rem]"></div>
                     </div>
                  </section>
                  <div className="w-6 border-2 border-zinc-600 relative z-10 left-3 h-28 bottom-5 bg-zinc-200 rounded-xl mr-6"></div>
                  <div className="w-32 h-36  rounded-tr-3xl   bg-yellow-500 relative right-12 z-0 top-5"></div>

                  
                  
               </div>
            {/* ========================== */}

            <div className="flex gap-x-52">
               <Wheel   />
               <div className="relative w-full left-32">
                  <Wheel />

               </div>
              
            </div>


            </div>
        </div>
     )
}