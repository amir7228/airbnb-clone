import {MenuIcon, SearchIcon} from  '@heroicons/react/solid'
import {GlobeAltIcon,UserIcon} from  '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {
   const [searchInput,setSearchInput] = useState("");
   const [startDate,setStartDate] = useState(new Date ());
   const [endDate,setEndDate] = useState (new Date());
   const [noOfGuests,setNoOfGuests] = useState (1);
   const router = useRouter();
   const search = () =>{
      router.push({
         pathname: "/search",
         query: {
             location: searchInput,
             startDate: startDate.toISOString(),
             endDate: endDate.toISOString(),
             noOfGuests,
         },
     });
   };
 

   const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }
    const handleSelect = (ranges) => {
       setStartDate(ranges.selection.startDate);
       setEndDate (ranges.selection.endDate);
    }
    const resetInput = () =>{
       setSearchInput("");
    };
   return (
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
       
       <div onClick={() => router.push("/")} className="flex h-10 cursor-pointer my-auto ">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAhFBMVEX/////XVj/WlX/Tkj/S0X/UEr/WVT/VU//T0n/TEb/Ukz/VE//V1L/cm7/e3f/hYL/srD/3dz/yMf/8PD/19b/rqz/+vr/YFv/vbv/09L/uLb/j4z/zcz/bGj/dXH/7u3/pqT/k5D/4uH/nJn/g3//Z2L/qKb/u7n/Qjv/n5z/fnr/Rj8N8RFmAAAM9UlEQVR4nO1d2YKiOhAVCLKKCrjva1/t//+/K1QFEkgA7Z4WgfPkCLHDmUqlthS9Xv0QHMfjY/DuWXwAdqO7ZekPWPpwPn33bGqN0CNOX0H0HbI6vntGtUVwtxKmAC5ZddIlhE8yVMV0OeG751VH7Emeqgjf83fPrH44mQxBqsr8gyzfPbe6YaIlC8+23MvFsOxkUZL1u2dXLyzoGuyT4TrW6YHvWVS+yO7d86sTpjbSYnsML8eNgavy8r6p1Q8rF1ixJvz3Bx05vL5nXnVEiIvQ+speOaHIkc77obiAcjJu+UtnkDl3+Pezqid8WGzqRnQR90Qy/utZ1RRq0Z63sIDJ7V/Pqp5Ygl5yT+LLd5AtbfG3s6opUIfrEpd5RwoWadswcUC7j2Q3HEDH650d35uiT+hK7whIZ5kiriBYdkFs4Yai5f/drOqJKW52yg/vaQVuRgWpuRql0tcGTFEfzYpvQxex/zeTqitO1dQR7ph2zndsEypvdE7ZltkCoAlllppQS2DLaXGEOahunGMY0Pn3k6orULCquH3oQMrt/KaDen2DKjdjaML+15OqK1CwrEpp1DmIljMpv7WJoIJVMVKlgGzp/3ZSdQVmKayKMdBWixYKVt+rOoCKVhtLRZ4UrF7Pxw2xhaL1tGD1ejMQLfPfTaqueFqwkixQ+0SLCtb9mUFUtNqmtV4QrNaK1gsaK8KslbbWS4KViFa7bK2XNFaENopWoWBNj4v1OhQXdbdQtAo01vo0I6Zu27pJLjeBh42i1aLgw0EiWNOrrbtJ7a3qmmoufEU3xNbEtQKJYC01R8nAMbKpDBSt1oRMxYIVbOwsVRG0Mz+YBh9aEo0PhHGsoy04XxHBnfElkrhMW5LowVyhxqnvI3u+Qu2zpwZUl2MLRasdOcSpKPIe6Ak1hmlt7t6F6G7yFZ+vRglsRXoaqxv4lM6GrkFbGaGFNd4bVN/z5bdfKFotqHygJTFcrnCEur3PMzAhuBotLgsLIteGohqsx+KS0Eig4m4ywZcd6i6eGExPt6BeC8u4ueoGLCnq5zPTU2SLJ8YW/EYTMRJJBebmRamIo2g7oD/S9CpTW7C/hXqBxsYaSf48StEpg+YA1Y3NCdbeKLAF0NJwOCap4mt2bXxftJFtY73k7sVDhvEY98B+N23DsYu50ESCRaVLSh7mRl5p0cX5bKT1o4AhA96vQzGxJKfkxhiU4ce8Gmr9HNBgFB8x2MHxaEsySHwZHUzS3C4ZG2EEfQdnLGSJ5gDIIplvQbTc1T+ZaA2wAFayab+XJIuG8Rt71hx2PcXK2J6BJfya4igWPIzj87tkczAGUtzc4V54bFOifta22Lc59wXWamMgfTrYI22JXzyKTYd+7pA0cm/sf32iNcBRum7Q7NyLx8FVASeSVd0IyDUyyI4siAAqSyB3IVxxGpgVo3u9oOcAOtJi7YMXRSYrWiJG/sqn41ZgRYL2EWe3wPoUip1fFK34ZKBPI64xArUkXodAiFihwc7QvPjyBNMUQm8ZS2tFbjFe0oQeM/rljYsvQwBKFq6zpL4L6CXZ4U2j8Fc/FVQGJIHggygcGiEEX0dWB4LxZbG8fixKtAs17nNNQ9CWIhJbimrCRkVq1mX71kAVilZoyQxZRNEe+6kYlNUJIZtZrYWWlJyLoHnuNHXjCoobsYUW3/kJDan+WTYq1XbN8XloCWnBE63Bd+FtLcwnFi0y9DibUxqPAXNZzycArjibMeNPhtSiSOFBLKMxNTVLeOjioOaY9v0Lst8UR6ww/Ko3JYUIQlOkeSLgWk0dIkwFGSWdJOG2pgTjcccq+7+fYg9cHRciLsJSzw/ltiEH6+ZgZpcWgS6x+g+WK+2JS8qsc9SIejPyrbC750PvOQz66Y5Ie+JWWF4Qrm5IZTyYULLsPANM2CjGw8TcYt1khaJkyO83RGlZlc1GuhAtf0I731ZwkSFX1ozQA6YFK0XoPKxQdmjrmULTjAKV1s+mWQ9Adl6tdAxzyp9HqVgICYNI+Y31B6ySfN5PiDF7dkCxquXmQSk2IiX2FFm9ic5wVTFcDGQ1QrJAZ1Vbhr2kTXe0KVZSWD3qb2uvTrBWwHrjqrfTsxbVtzfyhH6rO8B5qxpxGiU63q7oGx/1Z9Z5zQEecsVHnzMavmIPeKiAbsixabSwK0V+fW43rMbWtqqH8AlAL6aKAua5qsYW/ryscPDTAPGsCtUuyRpUDcpWubygn94M17DX+8KjNmUq/kq5Isd18rHM1sIgvNmMVdijJVZlbzhZUXs0WnzJgiQlgVLM7zfDcIiAVSFm0Yn56cBhuGKWpF7IMcZTy3vofg7QKi94Q9oiOXxPa2n8b/zCnclTYSOIRVdrdfohWFslGuiQqPa0aDnRW6p0KV7p7zYpfd9b4RqzhP6eb1CHsK8ygYaxRhsWGDOhSTtELac3wyBNcOlLH9u/JJEGhz8kvVMoiaq2zW13votXjZIk28dhShvyqObGZxg5Xl09aXhh5ax8L+33YF5GjNQFyxntxuI2IqDMIXCTcIJNtvv5Ilz4o5WrUfMzeg+koCIp6VYQWarW7LD0w3A9v22IozaXq4dsXdKYseo6tq7biaqKFc9AmKY/zlI6H+MMGJd2X7GfbBv4KVhZihSuKe0tcyWudJhK9n/4AH8K3zDEz+ySU4EvFAxldNmzZuShxdhbhpp9YtUhp5KjXccVEYyzm95Ea7qcWUbaKeuhvMjmq0IQNRg9xjHy5Rpk07iTFQIcR2fbMvUHNDI7zCufF9x9rVQSjzOJu/pq6hHWPKbHcBGOn3/e6W68WITHJqQIO3To0KFDhw4dOnTo0KFDhw6/Cd8zNtJiGqI+UFYQIYQVj2xYMH5l9RXVltVwxAno18iKRj77wqOaw8eeM5IawJisl0pDtQaShU0aZBXrHVksaHZZE0dIO7JYYDsC5VscFe7IYoHn4lxJM5SOLA5xAt+VHV/qyOJxIhrxZDmdjqwsdvIsVkfWE+jIegKtJSucrLztcB+XRO52QRDEiiqIkX6MP4X7u3c+BCxZi9vZu68mXGEkjI0+rW9Dz1uNmPqZlKzFPro2+aATBNO9rTtuX+27uur3Vt+apln/RRe2JPl4iT6SSy+cadGd3ztK1rnn9/V4sKE711TDxQP+83tLG69qs6T0mZLlq3DN0e39h2T45xZzLNw63WNTND7mdI/LZ+K3XuJ7K5ZYBalRstThgSl5M7SkUibuV+bu0yJTRTW3yEhMlno/MSMd6yNqbIamwgIrGsVkKZTWhCxF5evWNHqACZq7uVyVlqsAW5popPkBpzXv4uK+mCwvR1ZyOSErCxufeZArZovYgpMVmnCkUfu2iTdacK26juGkVWtystyopPabI6v/GJrIkL6Pf3jADaC1ytDPNSVLZUfa5e1v3gral0E1Z6flfOIRShdDVtzagz67YZ/8MPT3DFku8Sbz5Wlm0ojOkRvg3NbjcHlh+7lSsvrZkfWuOKWNtDc4zd1ZZ8lSs2QR5iAJkqUPsRYw3GDb3AE7YI93n7BPSHQz7bx1Rk9qvPmE1ri0YS1zrPRqF5DFHWwGsmwmRr+CZ47PiQ2yryNQ0l+Av2pfcyNr3RoXjuDytvRGLSCLvRHsLE4r4xZ4Sj4yL9uGQ4xxn1gtL0ae4KVZNQNKAhdX8J4ji9vwj/hOsGQAE5GGF4HE1d0Cd2eHrVF/8+l+FztRJxX4P36NLLwt6jA5SDkHwGux4oZsWl4mcbut2PrnHYBXKGTaUdx/Qha8UzPq55dbhiVkTZycUqwXcGXwjsaPyIIGGlG3kdwyzJHFCzR03bfre3YayMq8yORHy7DBZC3S+af4EVnpYkLtlV4qIQveT1PjxrjYV4w/hfsjsmBwpKafJQsacmo1PmmOjSO54zgsWVl3p4ws2jy3V4Wsu2BknTvU4IusuL4wrJ1VgSxOLIdpn5lSsvgXtEIfqlo31cJu92zrAHyHQFWyuDf4XvHn1r0KCp57mwi2Dqz3S2YwyJA4w70JuseVyUp96wDbNkArahjAtJvOkZUfWaV/7hvhY5jUJcOvRejf3CQUGl2tRJZiuPt1uFie6VlfzU8HMO5LnizFcW+PkV/JKWGz5qFlL+n94di6nQZ6nyArDu/ZSeAQSyNKLfhkZHJQtva1gFMljY6yeIosFn18mVNugJAsbqRS+wzPdMbnDVQmYVGFLJWPtRsXfOLS3TA70p3VnqsHhhYza2e7LTAduNcDQCrMG7BNL0hihZTuhup2y6TgVKvOVgODxcaChIJqkFPvrtkPQJLVjD5+Rx83ZvItxX/RN49nPBBIOaiONUiDBhs9M2Ac3x/vgPEn7f4YaeDftTb19XOyOF49nVhkE+UhAj9G9PUi/bhOP1LANw+bY7e/PAbr2yvrq+QG4O8ecyMtkx/5CZj+SGW8Pvpnf7fDb+F/cHirO93y5dYAAAAASUVORK5CYII=" alt="" />
        </div>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
           <input type=" text" className="flex-grow pl-5 bg-transparent outline-none text-gray-500 placeholder-gray-400 " placeholder={placeholder || "start your serach"}
           value = {searchInput}
           onChange = {(e) =>setSearchInput(e.target.value)} />
           <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
        <div className="flex justify-end space-x-4   items-center text-gray-500">
           <p className="hidden md:inline font-bold cursor-pointer ">Becomae a Host</p>
            <GlobeAltIcon className="h-6  cursor-pointer " />
            <div className="flex space-x-2  border-2 p-2 rounded-full   cursor-pointer items-center">
            <MenuIcon  className="h-6 "/>
            <UserIcon className="h-6 "/>
            
            </div>
        </div>
        {searchInput &&(
        <div className="flex flex-col col-span-3 mx-auto ">
           <DateRangePicker
           ranges={[selectionRange]}
           minDate={new Date()}
           onChange ={handleSelect}
           />
           <div className="flex items-center border-b mb-4">
              <h1 className="text-2xl flex-grow  font-semibold">Numbers of Guests</h1>
          
              <UserIcon className="h-10" />
              <input 
              value = {noOfGuests}
              onChange = {(e)=>setNoOfGuests(e.target.value)}
              min={1}
              type="number" className="w-12 pl-2 text-lg outline-none text-red-400" />
           </div>
           <div className="grid grid-cols-2">
              <button onClick={resetInput} className="text-gray-500">cancel</button>
              <button onClick={search} className="text-red-400" >Search</button>
           </div>
       </div>
        )}
        
     </header>   
    )
}

export default Header
