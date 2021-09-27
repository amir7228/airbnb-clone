
function Banner() {
   return (
        <div className="relative h-[700px] sm:h-[400px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]">
            <img src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" alt="" 
             objectfit="cover"
              layout="fill"
             />
             <div className="absolute top-1/2 w-full text-center">
                <p className="text-xl font-bold ">Not sure where to go? Perfect.</p>
                <button className="py-5 px-14 my-5 bg-white rounded-full text-2xl font-bold shadow-md
                 text-purple-500  hover:shadow-xl active:cale-90 transition duration-1000  ">im flexible</button>
             </div>


        </div>
        
    )
}

export default Banner
